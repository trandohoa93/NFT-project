<script setup lang="ts">
const props = defineProps({
  items: {
    required: true,
    type: Array as PropType<any[]>,
  },
})

const times = ['7d', '3d', '1d']
</script>

<template>
  <div class="top-collection">
    <div class="top-collection-header">
      <div class="header-left">
        <span class="title">Top Collection</span>

        <select id="times" name="times" class="top-collection-time">
          <option v-for="(time, index) in times" :key="index" :value="time">
            {{ time }}
          </option>
        </select>
      </div>

      <div class="header-right d-flex">
        <CommonAllChains />

        <v-btn rounded="0" :flat="true" variant="outlined" class="btn-view-all">
          View All
        </v-btn>
      </div>
    </div>

    <div class="top-collection-body">
      <v-table
        fixed-header
        class="top-collection-table"
      >
        <thead>
          <tr>
            <th class="collection-title text-left pl-16">
              COLLECTION
            </th>

            <th class="collection-title">
              VOLUME
            </th>

            <th class="collection-title">
              % CHANGE
            </th>

            <th class="collection-title">
              FLOOR PRICE
            </th>

            <th class="collection-title">
              SALES
            </th>

            <th class="collection-title">
              % UNIQUE OWNERS
            </th>

            <th class="collection-title">
              % ITEMS LISTED
            </th>

            <th class="collection-title" />
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in props.items"
            :key="item.id"
          >
            <td class="collection-cell">
              <div class="d-flex justify-space-between align-center">
                <span class="collection-order">{{ index + 1 }}</span>

                <span class="collection-name">{{ item.name }}</span>
              </div>
            </td>

            <td class="collection-cell">
              {{ item.volume }} ETH
            </td>

            <td class="collection-cell" :class="item.change < 0 ? 'decrease' : 'increase'">
              {{ item.change }}%
            </td>

            <td class="collection-cell">
              {{ item.price }} ETH
            </td>

            <td class="collection-cell">
              {{ item.sale }}
            </td>

            <td class="collection-cell">
              <p>{{ item.percentOwner }}%</p>

              <p class="collection-subtext">
                {{ item.totalOwner }} owners
              </p>
            </td>

            <td class="collection-cell">
              <p>{{ Math.round((item.items / item.totalItems) * 100) }}%</p>

              <p class="collection-subtext">
                {{ item.items }} of {{ item.totalItems }}
              </p>
            </td>
            
            <td class="collection-cell">
              <div class="icon-heart">
                <i :class="[item.isFavourite ? 'fa-solid fa-heart text-red' : 'fa-regular fa-heart']" />
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/components/base/baseHome/baseHomeTopCollection.scss">

</style>
