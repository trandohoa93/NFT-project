<script setup lang="ts">
</script>

<template>
  <div class="form-social-wrapper">
    <form class="form-social">
      <p class="text-h4">
        Your social media
      </p>
      <v-container class="px-0">
        <v-row>
          <v-col cols="12">
            <CommonTextfield
              title="Facebook URL"
              name="urlFacebook"
              type="text"
              label=""
              pre-icon=""
            />
            <v-btn
              variant="outlined"
              class="btn-connect-social"
              rounded
            >
              <template #prepend>
                <v-icon size="36" color="var(--color-facebook)">
                  <i class="fa-brands fa-facebook" />
                </v-icon>
              </template>
              Connect to Facebook
            </v-btn>
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Twitter URL"
              name="urlTwitter"
              type="text"
              label=""
              pre-icon=""
            />
            <v-btn
              variant="outlined"
              class="btn-connect-social"
              rounded
            >
              <template #prepend>
                <v-icon size="36" color="var(--color-twitter)">
                  <i class="fa-brands fa-twitter" />
                </v-icon>
              </template>
              Connect to Twitter
            </v-btn>
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Discord URL"
              name="urlDiscord"
              type="text"
              label=""
              pre-icon=""
            />
            <v-btn
              variant="outlined"
              class="btn-connect-social"
              rounded
            >
              <template #prepend>
                <v-icon size="36" color="var(--color-discord)">
                  <i class="fa-brands fa-discord" />
                </v-icon>
              </template>
              Connect to Discord
            </v-btn>
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Instagram URL"
              name="urlInstagram"
              type="text"
              label=""
              pre-icon=""
            />
            <v-btn
              class="btn-connect-social"
              variant="outlined"
              rounded
            >
              <template #prepend>
                <v-icon size="36">
                  <i class="fa-brands fa-instagram" />
                </v-icon>
              </template>
              Connect to Instagram
            </v-btn>
          </v-col>
          <v-col cols="12">
            <CommonTextfield
              title="Tiktok URL"
              name="urlTiktok"
              type="text"
              label=""
              pre-icon=""
            />
            <v-btn
              class="btn-connect-social"
              variant="outlined"
              rounded
            >
              <template #prepend>
                <v-icon
                  color="var(--color-primary-dark)"
                  size="36"
                >
                  <i class="fa-brands fa-tiktok" />
                </v-icon>
              </template>
              Connect to Tiktok
            </v-btn>
          </v-col>

          <v-col cols="6">
            <div class="d-flex">
              <CommonButtonSubmit label="Save" />
              <!-- <v-btn
                class="text-none"
                color="medium-emphasis"
                min-width="140"
                variant="outlined"
                rounded
              >
                Close
              </v-btn> -->
            </div>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/form/formSocial.scss">
</style>
