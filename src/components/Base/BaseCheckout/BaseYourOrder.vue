<script lang="ts" setup>
const items = [{
  id: 102,
  name: 'Bored Hey Monkey Club',
  quantity: 1,
  price: 0.78,
}, {
  id: 122,
  name: 'Bored Hey Monkey Club',
  quantity: 7,
  price: 0.78,
}]
</script>

<template>
  <div class="base-your-order">
    <v-card
      class="cart-total-card" rounded="0"
    >
      <div class="item-info">
        <v-card-text v-for="item in items" :key="item.id" class="item-info-card">
          <div class="item-left">
            <span class="name">
              {{ item.name }}
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
              {{ item.price }} ETH
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
              0.78 ETH
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
                    Flat rate <span class="radio-text-price">0.128 ETH</span>
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
      <div class="item-total">
        <v-card-text class="item-total-card">
          <div class="item-left">
            <p>
              Total
            </p>
          </div>
          <div class="item-right">
            <p>
              0.88 ETH
            </p>
          </div>
        </v-card-text>
      </div>
      <div class="item-button">
        <v-card-actions class="card-checkout">
          <v-btn class="btn-checkout rounded-pill" rounded="0">
            Proceed to checkout
          </v-btn>
        </v-card-actions>
        <v-card-actions class="card-continue">
          <v-btn class="btn-continue rounded-pill">
            Continue shopping
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<style scoped src="@/assets/scss/components/base/baseCheckout/baseYourOrder.scss"></style>
