<template>
    <div class="text-3xl font-semibold">
        Category: {{ categoryName }}
    </div>

    <div class="flex flex-row flex-wrap">
        <!-- <div class=" border-2 p-0.5 m-1" v-for="list in categoryList" :key="list">
            <div>{{ list }}</div>
        </div> -->
        <!-- {{ categoryList }} -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from '../Types/Category.interface';
import { get_product_by_category } from '../services/httpClientApi'


const route = useRoute()
const categoryName = ref();
const categoryList = ref<Product>()

watch(
    () => categoryName.value,
    async function (newId: any) {
        const { products } = await get_product_by_category(newId)
        categoryList.value = products
    }
)


onMounted(() => {
    categoryName.value = route.params.category;
})
</script>

<style scoped></style>