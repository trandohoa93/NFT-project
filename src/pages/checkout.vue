<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
import { City, Country, State } from 'country-state-city'

import { toast } from 'vue3-toastify'
import { useCartStore } from '@/stores/cartStore'
import { checkoutSchema } from '@/utils/validator'
import type { CartType, SelectItemProp, checkoutDB, checkoutForm } from '@/types'
import { checkout } from '@/api/cart'

const router = useRouter()
const isLoading = ref(false)

const cartStore = useCartStore()
const { buyingCarts } = storeToRefs(cartStore)

onBeforeMount(() => {
  if (!buyingCarts.value || buyingCarts.value.length === 0)
    router.push('/shopcart')
})

const buyingCartsIds = computed(() => {
  return buyingCarts.value.map(cart => cart.id)
})

const { handleSubmit, values } = useForm<checkoutForm>({
  initialValues: {
    cartIds: buyingCartsIds.value,
    firstName: '',
    lastName: '',
    companyName: '',
    countryRegion: '',
    streetAddress: '',
    townCity: '',
    state: '',
    zipCode: '',
    phone: null,
    emailAddress: '',
    note: '',
  },

  validationSchema: checkoutSchema,
})

const onSubmit = handleSubmit(async (data) => {
  isLoading.value = true

  const field: checkoutDB = {
    cart_ids: data.cartIds,
    firstname: data.firstName,
    lastname: data.lastName,
    company_name: data.companyName,
    country_region: data.countryRegion,
    street_address: data.streetAddress,
    town_city: data.townCity,
    state: data.state,
    zip_code: data.zipCode,
    phone: data.phone,
    email: data.emailAddress,
    note: data.note,
  }

  try {
    const res = await checkout(field)
    if (res.data.success) {
      toast.success('Checkout success! redirecting...')

      setTimeout(() => {
        router.push('/')
      }, 3000)
    }
  }
  catch (error) {
    console.error(error)
    toast.error('Something went wrong! Please try again!')
  }
  finally {
    isLoading.value = false
  }
})

const countries: SelectItemProp[] = Country.getAllCountries().map(country => ({
  name: country.name,
  value: country.isoCode,
}))

const states = ref<SelectItemProp[]>([])
const cities = ref<SelectItemProp[]>([])
const countryCode = ref<string>('')

function handleCountryChange(selectedCode: string) {
  countryCode.value = selectedCode

  states.value = State.getStatesOfCountry(selectedCode).map(state => ({
    name: state.name,
    value: state.isoCode,
  }))
}

function handleStateChange(selectedCode: string) {
  cities.value = City.getCitiesOfState(countryCode.value, selectedCode).map(city => ({
    name: city.name,
    value: city.name,
  }))
}

watch(
  () => values.countryRegion,
  (selectedCode) => {
    handleCountryChange(selectedCode)
  },
)

watch(
  () => values.state,
  (selectedCode) => {
    handleStateChange(selectedCode)
  },
)

const shippingCost = 0.8

const subtotal = computed(() => {
  return buyingCarts.value.reduce((acc, item: CartType) => {
    const price = item.nfts.currentPrice !== null ? item.nfts.currentPrice : 0
    return acc + price * item.quantity
  }, 0)
})

const totalCost = computed(() => {
  return (subtotal.value + shippingCost).toFixed(2)
})
</script>

<template>
  <div class="theme-switch-wrapper">
    <div class="checkout global-container">
      <p class="checkout-title">
        checkout
      </p>

      <div class="item-title">
        <v-card class="card-return" rounded="0">
          <v-card-text class="card-return-text">
            <div>
              <span class="text-left">
                Returning customer?
              </span>
              <span class="text-right">
                Click here to login
              </span>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="card-coupon" rounded="0">
          <v-card-text class="card-coupon-text">
            <div class="text">
              <span class="text-left">
                Have a coupon?
              </span>
              <span class="text-right">
                Please apply it below
              </span>
            </div>
            <div class="input-coupon">
              <CommonTextfieldButton label="Apply coupon" bg-textfield="color-bg-apply-coupon-checkout" bg-button="color-bg-btn-coupon-checkout" />
            </div>
          </v-card-text>
        </v-card>
      </div>

      <form class="item-body" @submit.prevent="onSubmit">
        <div class="billing-details">
          <p class="title">
            billing details
          </p>

          <div class="base-checkout-form">
            <div class="form-group">
              <CommonTextfield
                name="firstName"
                title="First Name"
                required
              />

              <CommonTextfield
                name="lastName"
                title="Last Name"
                type="text"
                required
              />
            </div>

            <CommonTextfield
              name="companyName"
              title="Company name (optional)"
            />

            <CommonSelect
              v-model="values.countryRegion"
              name="countryRegion"
              title="Country / Region"
              :items="countries"
              class="text-field"
              placeholder="Select your country"
              required
              @change="handleCountryChange(values.countryRegion)"
            />

            <CommonTextfield
              name="streetAddress"
              title="Street address"
              required
            />

            <div class="form-group">
              <CommonSelect
                v-model="values.state"
                name="state"
                title="State"
                :items="states"
                class="text-field"
                required
                @change="handleStateChange"
              />

              <CommonSelect
                v-model="values.townCity"
                title="Town / City"
                name="townCity"
                :items="cities"
                class="text-field"
                required
              />
            </div>

            <div class="form-group">
              <CommonTextfield
                name="zipCode"
                title="Zip Code"
                required
              />

              <CommonTextfield
                name="phone"
                title="Phone"
                required
              />
            </div>

            <CommonTextfield
              name="emailAddress"
              title="Email address"
              type="email"
              required
            />

            <div class="checkbox">
              <v-checkbox
                class="checkbox-label"
                false-icon="mdi:mdi-checkbox-blank-outline"
                true-icon="mdi:mdi-checkbox-intermediate"
                base-color="var(--color-icon-checkbox)"
                color="var(--color-icon-checkbox)"
              >
                <template #label>
                  <p>
                    Create an account?
                  </p>
                </template>
              </v-checkbox>

              <v-checkbox
                class="checkbox-label"
                false-icon="mdi:mdi-checkbox-blank-outline"
                true-icon="mdi:mdi-checkbox-intermediate"
                base-color="var(--color-icon-checkbox)"
                color="var(--color-icon-checkbox)"
              >
                <template #label>
                  <p>
                    Ship to a different address?
                  </p>
                </template>
              </v-checkbox>
            </div>

            <div class="order-notes">
              <CommonTextArea
                name="note"
                title=" Order notes (Optional)"
                placeholder="message..."
                :height="6"
              />
            </div>
          </div>
        </div>

        <!--------------------------- ORDERS ------------------->
        <div class="your-order">
          <p class="title">
            Your Order
          </p>
          <div class="base-your-order">
            <v-card
              class="cart-total-card" rounded="0"
            >
              <div class="item-info">
                <v-card-text v-for="item in buyingCarts" :key="item.id" class="item-info-card">
                  <div class="item-left">
                    <span class="name">
                      {{ item.nfts.title }}
                    </span>
                    <span class="id">
                      # {{ item.id }}
                    </span>
                    <span class="value">
                      x {{ item.quantity }}
                    </span>
                  </div>
                  <div class="item-right">
                    <IconEth />
                    <p class="price">
                      {{ item.nfts.currentPrice }} ETH
                    </p>
                  </div>
                </v-card-text>
              </div>
              <div class="item-sub">
                <v-card-text class="item-sub-card">
                  <div class="item-left">
                    <p>
                      Sub Total
                    </p>
                  </div>
                  <div class="item-right">
                    <p class="price">
                      {{ subtotal }} ETH
                    </p>
                  </div>
                </v-card-text>
                <v-card-text class="item-sub-card">
                  <div class="item-left">
                    <p>
                      Service Fee
                    </p>
                  </div>
                  <div class="item-right">
                    <p class="price">
                      0.8 ETH
                    </p>
                  </div>
                </v-card-text>
                <v-card-text class="item-sub-card">
                  <div class="item-left">
                    <p>
                      Tax
                    </p>
                  </div>
                  <div class="item-right">
                    <p class="price">
                      Free
                    </p>
                  </div>
                </v-card-text>
                <v-card-text class="item-sub-card">
                  <div class="item-left">
                    <p>
                      Shipping
                    </p>
                  </div>
                  <div class="radio-button">
                    <v-radio-group>
                      <v-radio class="radio" value="one" color="var(--color-orange-1)">
                        <template #label>
                          <p class="radio-text">
                            Flat rate <span class="radio-text-price">{{ shippingCost }} ETH</span>
                          </p>
                        </template>
                      </v-radio>
                      <v-radio class="radio" value="two" color="var(--color-orange-1)">
                        <template #label>
                          <p class="radio-text">
                            Free shipping
                          </p>
                        </template>
                      </v-radio>
                      <v-radio class="radio" value="three" color="var(--color-orange-1)">
                        <template #label>
                          <p class="radio-text">
                            Local Delivery
                          </p>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </div>
                </v-card-text>
              </div>
              ]
              <div class="item-total">
                <v-card-text class="item-total-card">
                  <div class="item-left">
                    <p>
                      Total
                    </p>
                  </div>
                  <div class="item-right">
                    <p>
                      {{ totalCost }} ETH
                    </p>
                  </div>
                </v-card-text>
              </div>

              <div class="item-button">
                <CommonButtonLoading v-if="isLoading" full-width @click="onSubmit" />

                <CommonButtonSubmit v-else label="Checkout" color="secondary" full-width @click="onSubmit" />

                <CommonButton label="Continue Shopping" button-style="outline" full-width />
              </div>
            </v-card>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style src="@/assets/scss/pages/checkout.scss">
</style>
