<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { get_all_products } from '../services/httpClientApi.ts'
import type { Product } from '../Types/AllProducts.interface.ts'

const allProductsList = ref<Product[]>([])

const getAllProducts = async () => {
  try {
    const response = await get_all_products()
    console.log(response)
    allProductsList.value = response
  } catch (error) { }
}

onMounted(() => {
  getAllProducts()
})
</script>

<template>
  <span v-pre>{{ <div>sadasd</div> this will not be compiled }}</span>
  <div class="m-auto flex max-w-[80%] flex-col">
    <ul v-for="productList in allProductsList" :key="productList.id" v-memo="[productList.thumbnail]">
      <div class="m-2 flex flex-row rounded-2xl border-2 border-amber-400 px-4 py-2" v-cloak>
        <div class="h-auto w-40 rounded-full">
          <img class="rounded-2xl" :src="productList.thumbnail" alt="" />
        </div>
        <div class="m-4 flex flex-col justify-center align-middle">
          <div>Title: {{ productList.title }}</div>
          <div>Category: {{ productList.category }}</div>
          <router-link to="/productDetails">View Details</router-link>
          <button class="my-2 cursor-pointer rounded-2xl bg-amber-300 p-2 hover:border-0 hover:bg-amber-200"
            @click="$router.push(`/productDetails/${productList.id}`)">
            View Details
          </button>
        </div>
      </div>
    </ul>
  </div>
</template>

<style lang="css" scoped>
[v-cloak] {
  display: block;
}
</style>
