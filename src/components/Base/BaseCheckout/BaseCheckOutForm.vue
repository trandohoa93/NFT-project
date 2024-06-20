<script setup lang='ts'>
import { useForm } from 'vee-validate'
import { City, Country, State } from 'country-state-city'

import { checkoutSchema } from '@/utils/validator'
import type { SelectItemProp, checkoutForm } from '@/types'

const emit = defineEmits(['inFocus', 'submit'])

const { handleSubmit, values } = useForm<checkoutForm>({
  initialValues: {
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

const onSubmit = handleSubmit((data) => {
  emit('submit', data)
})
</script>

<template>
  <form class="base-checkout-form" @submit="onSubmit">
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
      @change="handleCountryChange"
    />

    <div class="form-group">
      <CommonSelect
        v-model="values.townCity"
        title="Town / City"
        name="townCity"
        :items="cities"
        class="text-field"
        required
      />

      <CommonSelect
        v-model="values.state"
        name="state"
        title="State"
        :items="states"
        class="text-field"
        required
        @change="handleStateChange"
      />
    </div>

    <div class="form-group">
      <CommonTextfield
        name="zipCode"
        title="Zip Code"
        required
      />

      <CommonTextfield
        name="phoneNumber"
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
        height="6"
      />
    </div>
  </form>
</template>

<style scope src="@/assets/scss/components/base/baseCheckout/baseCheckoutForm.scss">
</style>
