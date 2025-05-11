<template>
    <div class="product-card">
      <div
        class="justify-items-center content-center text-center min-w-[250px] min-h-[328px] h-[100%] rounded-2xl border-2 border-amber-400"
        v-cloak>
        <div class="h-auto w-40 rounded-full">
          <img class="rounded-2xl" :src="product.thumbnail" alt="" />
        </div>
        <div class="m-4 flex flex-col items-center">
          <div>{{ product.title }}</div>
          <div>Category: {{ capitalizeFirstLetter(product.category) }}</div>
          <button class="my-2 cursor-pointer rounded-2xl font-bold p-2 border-2 w-[150px]
            text-black
            hover:text-amber-300
            bg-amber-300
            hover:bg-black" @click="$router.push(`/productDetails/${product.id}`)">
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