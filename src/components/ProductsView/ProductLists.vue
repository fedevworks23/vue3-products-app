<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useProductStore } from '../../stores/productStore.ts'
import ProductCard from './ProductCard.vue'

//Store
const productStore = useProductStore()
const productsList = computed(() => {
  console.log('Products List:', productStore.selectedCategory);
  
  console.log(productStore.productsList);
  
  return productStore.productsList
})


onMounted(() => {
  productStore.getProductsByLimit()
})
</script>

<template>
  
  <!-- <span v-pre>{{ <div>sadasd</div> this will not be compiled }}</span> -->
  <!-- class="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" -->
  <div class="m-auto mt-1">
    <div
      class="flex flex-wrap gap-2"
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

<style lang="css" scoped>
[v-cloak] {
  display: block;
}
</style>
