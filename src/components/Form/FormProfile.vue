<script setup lang="ts">
import { useForm } from 'vee-validate'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
import { City, Country, State } from 'country-state-city'
import type { SelectItemProp, User } from '@/types'

import { profileSchema } from '@/utils/validator'
import { useUserStore } from '@/stores'

const props = defineProps({
  user: {
    type: Object as () => User,
    default: () => {},
  },
})

const userStore = useUserStore()
const { isSuccess, isLoading } = storeToRefs(userStore)
const { editUserAction } = userStore

const formInput = reactive(props.user)

const genders: SelectItemProp[] = [
  {
    name: 'female',
    value: 'female',
  },
  {
    name: 'male',
    value: 'male',
  },
]

const countries: SelectItemProp[] = Country.getAllCountries().map(country => ({
  name: country.name,
  value: country.isoCode,
}))

const states = ref<SelectItemProp[]>([])
const cities = ref<SelectItemProp[]>([])
const countryCode = ref<string>('')

const { handleSubmit, setValues, values } = useForm<User>({
  initialValues: formInput,
  validationSchema: profileSchema,
})

watch(() => props.user, (newValue) => {
  setValues(newValue)
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await editUserAction(values)
    if (isSuccess)
      toast.success('Edit success!')
  }
  catch (error) {
    console.error(error)
  }
})

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
  () => values.country,
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

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault()
    onSubmit()
  }
}
</script>

<template>
  <div class="form-profile-wrapper">
    <form class="form-profile" @submit="onSubmit" @keydown="handleKeyDown">
      <p class="text-h4">
        Account info
      </p>

      <v-container class="px-0">
        <v-row>
          <v-col cols="12" lg="6" md="6">
            <CommonTextfield
              title="Display name"
              name="name"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonSelect
              name="gender"
              title="Gender"
              :items="genders"
              placeholder="Select your gender"
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonTextfield
              title="Edit your email"
              name="email"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonTextfield
              title="Phone number"
              name="phoneNumber"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Custom url"
              name="url"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Street address"
              name="address"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonSelect
              name="country"
              title="Country / Region"
              :items="countries"
              class="text-field"
              placeholder="Select your country"
              @change="handleCountryChange"
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonSelect
              name="state"
              title="State"
              :items="states"
              class="text-field"
              @change="handleStateChange"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6">
            <CommonSelect
              title="Town / City"
              name="city"
              :items="cities"
              class="text-field"
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <CommonTextfield
              title="Zip Code"
              name="zipCode"
              type="text"
              pre-icon=""
            />
          </v-col>
          <v-col cols="12">
            <p class="text-subtitle-2 mb-2 font-weight-bold">
              Introduce yourself
            </p>
            <CommonTextArea
              name="introduceYourself"
              variant="outlined"
              bg-color="var(--color-background-input)"
            />
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <div class="d-flex">
              <CommonButtonSubmit label="Save"  @click="onSubmit"/>

              <CommonButton label="Close" button-style="outline" class="ml-4" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </form>

    <teleport to='body' v-if="isLoading">
      <CommonPageLoading />
    </teleport>
  </div>
</template>
