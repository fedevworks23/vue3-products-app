<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useProductStore } from '../../stores/productStore.ts'
import TopicTitle from '../Custom/TopicTitle.vue'
import ProductCard from './ProductCard.vue'

//Store
const productStore = useProductStore()
const productsList = computed(() => productStore.productsList)

const prevList = () => {
  if (productStore.pSkip !== 0) productStore.pSkip -= 10
  productStore.getProductsByLimit()
}

const nextList = () => {
  if (productStore.pSkip >= 0) productStore.pSkip += 10
  productStore.getProductsByLimit()
}

onMounted(() => {
  productStore.getProductsByLimit()
})
</script>

<template>
  <TopicTitle>
    <template #title> Products List </template>

    <template #default>
      <!-- Paginations -->
      <div class="flex flex-row-reverse">
        <button
          @click="nextList()"
          class="my-3 cursor-pointer rounded-2xl border-2 border-amber-300 px-5 py-1 hover:bg-amber-300 hover:text-black"
        >
          Next
        </button>
        <button
          @click="prevList()"
          class="my-3 mr-2 cursor-pointer rounded-2xl border-2 border-amber-300 px-5 py-1 hover:bg-amber-300 hover:text-black"
        >
          Prev
        </button>
      </div>
      <!-- Paginations End -->
    </template>
  </TopicTitle>

  <!-- <span v-pre>{{ <div>sadasd</div> this will not be compiled }}</span> -->
  <div
    class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <div
      class="m-1 p-1"
      v-for="product in productsList"
      :key="product.id"
      v-memo="[product.thumbnail]"
      v-cloak
    >
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<style lang="css" scoped>
[v-cloak] {
  display: block;
}
</style>
