<template>
  <TopicTitle>
    <template #title> Products View </template>
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
      <div class="flex md:flex-row flex-col w-full">
        <div class="p-4 md:w-1/4">
          <ProductFilter />
        </div>
        <div class="p-4 md:w-3/4">
          <ProductLists />
        </div>
      </div>
    </template>
  </TopicTitle>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { useProductStore } from '../../stores/productStore.ts'
import TopicTitle from '../Custom/TopicTitle.vue'
import ProductLists from './ProductLists.vue'
import ProductFilter from './ProductFilter.vue'

//Store
const productStore = useProductStore()
// const productsList = computed(() => productStore.productsList)

const prevList = () => {
  if (productStore.pSkip !== 0) productStore.pSkip -= 10
  productStore.getProductsByLimit()
}

const nextList = () => {
  if (productStore.pSkip >= 0) productStore.pSkip += 10
  productStore.getProductsByLimit()
}
</script>

<style scoped></style>
