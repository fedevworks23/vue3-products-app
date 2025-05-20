<template>
  <div class="w-auto min-w-[210px] product-card">
    <div
      class="flex flex-col justify-items-center content-center bg-[var(--background)] shadow-md hover:shadow-3xl m-1 p-1 border-[var(--primary)] border-1 hover:border-0 rounded-[24px] h-[100%] min-h-[300px] text-[var(--text)] text-center transition-all duration-100 ease-in-out cursor-pointer"
      v-cloak
    >
      <div class="flex justify-center items-center mb-2">
        <img class="drop-shadow-lg w-[160px] h-[160px]" :src="product.thumbnail" alt="" />
      </div>
      <div
        class="flex flex-col bg-[var(--primary)] p-2 px-3 rounded-[20px] w-[100%] text-[var(--background)] text-left"
      >
        <div class="flex items-center h-[50px] font-bold">
          {{ product.title }}
        </div>
        <!-- <div>Category: {{ capitalizeFirstLetter(product.category) }}</div> -->
        <div class="flex flex-row justify-between items-center w-[100%]">
          <div class="font-bold"> $ {{product.price}}</div>
          <div>
            <button
              class="bg-[var(--background)] hover:bg-[var(--accent)] my-2 p-2 border-[var(--primary)] border-2 rounded-2xl w-auto h-auto font-bold text-[var(--primary)] hover:text-[var(--background)] transition-all duration-500 ease-in-out cursor-pointer"
              @click="$router.push(`/productDetails/${product.id}`)"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Product {
  title: string
  thumbnail: string
  category: string
  id: number,
  price: number
}

defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
