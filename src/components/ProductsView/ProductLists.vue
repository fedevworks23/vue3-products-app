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

    <template #buttons>
      <!-- Paginations -->
      <div class="flex flex-row-reverse">
        <button
          @click="nextList()"
          class="bg-[var(--background)] hover:bg-[var(--accent)] my-3 mr-2 px-5 py-2 border-[var(--primary)] border-2 rounded-[8px] font-bold text-[var(--primary)] hover:text-[var(--background)] transition duration-500 ease-in-out cursor-pointer"
        >
          Next
        </button>
        <button
          @click="prevList()"
          class="bg-[var(--background)] hover:bg-[var(--accent)] my-3 mr-2 px-5 py-2 border-[var(--primary)] border-2 rounded-[8px] font-bold text-[var(--primary)] hover:text-[var(--background)] transition duration-500 ease-in-out cursor-pointer"
        >
          Prev
        </button>
      </div>
      <!-- Paginations End -->
    </template>

    <template #default>
      <!-- <span v-pre>{{ <div>sadasd</div> this will not be compiled }}</span> -->
      <div class="m-auto mt-1">
        <div
          class="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
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
      </div>
    </template>
  </TopicTitle>
</template>

<style lang="css" scoped>
[v-cloak] {
  display: block;
}
</style>
