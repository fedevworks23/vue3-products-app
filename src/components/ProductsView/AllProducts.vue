<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { get_all_products } from '../../services/httpClientApi.ts'
import type { Product } from '../Types/AllProducts.interface.ts'

const allProductsList = ref<Product[]>([])

const getAllProducts = async () => {
  try {
    const response = await get_all_products()
    // console.log(response)
    allProductsList.value = response
  } catch (error) { }
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

onMounted(() => {
  getAllProducts()
})
</script>

<template>
  <div class=" text-2xl m-auto w-[90%] p-10 text-amber-300">
    <p class="pb-3">Products List</p>
    <hr>
  </div>
  <!-- <span v-pre>{{ <div>sadasd</div> this will not be compiled }}</span> -->
  <div class="flex flex-wrap justify-center">
    <div class="p-1 m-1" v-for="productList in allProductsList" :key="productList.id" v-memo="[productList.thumbnail]">
      <div
        class="justify-items-center content-center text-center w-[300px] h-[100%] rounded-2xl border-2 border-amber-400"
        v-cloak>
        <div class="h-auto w-40 rounded-full">
          <img class="rounded-2xl" :src="productList.thumbnail" alt="" />
        </div>
        <div class="m-4 flex flex-col items-center">
          <div>{{ productList.title }}</div>
          <div>Category: {{ capitalizeFirstLetter(productList.category) }}</div>
          <button class="my-2 cursor-pointer rounded-2xl font-bold p-2 border-2 w-[150px]
            text-black
            hover:text-amber-300
            bg-amber-300
            hover:bg-black" @click="$router.push(`/productDetails/${productList.id}`)">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
[v-cloak] {
  display: block;
}

.item1 {
  background-color: yellow;
}

.item2 {
  background-color: green;
}

.item3 {
  background-color: blue;
}

.item4 {
  background-color: purple;
}

.item5 {
  background-color: red;
}

.item6 {
  background-color: orange;
}
</style>
