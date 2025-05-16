<template>
    <div class="product-card">
      <div
        class="justify-items-center content-center border-[var(--card-background)] border-2 rounded-2xl h-[100%] min-h-[328px] text-center"
        v-cloak>
        <div class="rounded-full w-40 h-auto">
          <img class="rounded-2xl w-[160px] h-[160px]" :src="product.thumbnail" alt="" />
        </div>
        <div class="flex flex-col items-center m-4">
          <div class="flex items-center h-[50px]">{{ product.title }}</div>
          <div>Category: {{ capitalizeFirstLetter(product.category) }}</div>
          <button class="bg-[var(--buttonClick)] hover:bg-[var(--buttonHover)] my-2 p-2 border-[var(--card-background)] border-2 rounded-lg w-[150px] font-bold cursor-pointer" @click="$router.push(`/productDetails/${product.id}`)">
            View Details
          </button>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Product {
    title: string;
    thumbnail: string;
    category: string;
    id: number;
    description: string;
    price: number;
}

defineProps<{
    product: Product;
}>();



const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style scoped>
</style>