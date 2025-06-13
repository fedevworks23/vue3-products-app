<template>
  <div class="w-[234px] product-card">
    <div
      class="flex flex-col justify-items-center items-center content-center bg-[#fdfdfde0] shadow-(--card-shadow) hover:shadow-xl/30 m-1 p-3 rounded-[24px] h-[100%] min-h-[300px] text-[var(--text)] text-center transition-all duration-100 ease-in-out cursor-pointer"
      v-cloak
    >
      <div class="flex justify-center items-center bg-[#EFEAE6] mb-2 rounded-[20px] w-[200px] h-[200px]">
        <img class="drop-shadow-lg" :src="product.thumbnail" alt="" />
      </div>

      <!-- Title -->
      <div
        class="flex flex-col bg-[#fdfdfde0] p-2 px-3 rounded-[20px] w-[100%] text-[#141414] text-left"
      >
        <div class="flex items-center h-[50px] font-bold">
          {{ product.title }}
        </div>
        <!-- <div>Category: {{ capitalizeFirstLetter(product.category) }}</div> -->
        <div class="flex flex-row justify-between items-center w-[100%] text-[#727171]">
          <div class="font-bold"> $ {{product.price}}</div>
          <div>
            <button
              class="bg-[#EFEAE6] hover:bg-[#fdfdfde0] my-2 px-[20px] py-[10px] border-1 hover:border-[#EFEAE6] rounded-2xl w-auto h-auto font-bold text-[var(--primary)] hover:text-[#141414] transition-all duration-500 ease-in-out cursor-pointer"
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
