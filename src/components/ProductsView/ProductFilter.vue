<template>
  <div>
    {{ selectCategory }}
    <select
      v-model="selectCategory"
      @change="selectCategoryHandler"
      class="mb-4 p-2 border rounded w-full"
    >
    <option value="" selected>All Categories</option>
      <option v-for="list in categoryList" :key="list.id" :value="list.name">
        {{ list.name }}
      </option>
    </select>
  </div>
  <div>
    <input
      type="text"
      placeholder="Search products..."
      class="mb-4 p-2 border rounded w-full"
    />
    <div class="flex flex-col space-y-2">
      <label>
        <input type="checkbox" v-model="filterOptions.inStock" />
        In Stock
      </label>
      <label>
        <input type="checkbox" v-model="filterOptions.onSale" />
        On Sale
      </label>
      <label>
        <input type="checkbox" v-model="filterOptions.freeShipping" />
        Free Shipping
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useProductStore } from '../../stores/productStore.ts'
const productStore = useProductStore()

const filterOptions = reactive({
  inStock: false,
  onSale: false,
  freeShipping: false,
  sortBy: 'default', // default, priceLowToHigh, priceHighToLow
})

interface CategoryList {
  slug?: string
  name?: string
  url?: string
  id?: number
}

const categoryList = ref<CategoryList[]>([])
const selectCategory = ref<string>('')
const selectCategoryHandler = () => {
  productStore.updateState(selectCategory.value)
  console.log('Selected category:', selectCategory.value)
  productStore.getProductsByCategory(selectCategory.value)
}

onMounted(async () => {
  await productStore.getProductCategoryList()
  // Ensure categoryList is always an array and only contains category info
  categoryList.value = (productStore.categoryList ?? []).map((cat: any) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    url: cat.url,
  }))
})
</script>

<style scoped></style>
