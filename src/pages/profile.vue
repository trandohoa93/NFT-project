<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useFileUpdate } from '@/utils/useFileUpload'
import { useUserStore } from '@/stores'
import CommonCircleBackground from '@/components/Common/CommonCircleBackground.vue';

const tab = ref<number | null>(1)
const inputDOM = ref<HTMLInputElement | null>(null)

const { setFile, previewMap } = useFileUpdate()

const userStore = useUserStore()
const { editAvatarAction, fetchUserAction } = userStore
const { userDetail } = storeToRefs(userStore)

const isUpdateAvatar = ref(false)

async function fileChange(e: Event) {
  const target = e.target as HTMLInputElement
  
  if (target && target.files) {
    const files = target.files

    setFile(Array.from(files))

    if (files && files.length > 0) {
      const file = files[0]

      const reader = new FileReader()
      reader.onload = () => {
        if (typeof file === 'undefined')
          return
        const newFormData = new FormData()

        newFormData.append('upload_files', file)

        editAvatarAction(newFormData)
      }
      reader.readAsDataURL(file)
    }
  }
  isUpdateAvatar.value = true
}

function uploadImages() {
  if (inputDOM.value)
    inputDOM.value.click()
}

onMounted(async () => {
  await fetchUserAction()
})
</script>

<template>
  <div class="profile global-container">
    <div class="profile-edit-image">
      <div>
        <div class="edit-avatar">
          <img v-show="!isUpdateAvatar" :src="userDetail?.avatar" alt="">

          <div
            v-for="item in previewMap"
            v-show="Object.values(previewMap).length !== 0"
            :key="item"
            class="img-box"
          >
            <img :src="item" alt="">
          </div>

          <div class="intersect">
            <font-awesome-icon :icon="['fas', 'pen-to-square']" class="text-white" />

            <span>Edit</span>
          </div>
        </div>
      </div>

      <div class="upload-image">
        <v-btn icon="mdi:mdi-plus" size="large" class="btn-upload" color="black">
          <label htmlFor="upload-image">
            <button @click="uploadImages">
              <font-awesome-icon :icon="['fas', 'plus']" class="text-black" />
            </button>

            <input
              id="upload-image"
              ref="inputDOM"
              hidden
              accept="image/*"
              type="file"
              @change="fileChange"
            >
          </label>
        </v-btn>
      </div>
    </div>

    <div class="tabs-wrapper">
      <v-card class="tabs mt-13 elevation-0">
        <v-tabs
          v-model="tab"
          :hide-slider="true"
          color="var(--color-text)"
          class="tab-list"
          slider-color="white"
          center-active
          show-arrows
        >
          <v-tab :value="1" class="tab-item">
            <span class="tab-item-text">Edit profile</span>
          </v-tab>
          <v-tab :value="2" class="tab-item">
            <span class="tab-item-text">Reset password</span>
          </v-tab>
          <v-tab :value="3" class="tab-item">
            <span class="tab-item-text">Notify setting</span>
          </v-tab>
        </v-tabs>

        <v-card-text class="px-0 ">
          <v-window v-model="tab">
            <v-window-item :value="1">
              <v-container :fluid="true" class="tab-content">
                <CommonCircleBackground position="br" />

                <v-row>
                  <v-col cols="12" lg="6" md="6">
                    <FormProfile :user="userDetail" />
                  </v-col>
                  <v-col cols="12" lg="6" md="6">
                    <FormSocial />
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>

            <v-window-item :value="2">
              <v-container :fluid="true" class="tab-content">
                <FormChangePassword />
              </v-container>
            </v-window-item>

            <v-window-item :value="3">
              <v-container :fluid="true" class="tab-content">
                <NotifySetting />
              </v-container>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/profile.scss">
</style>
