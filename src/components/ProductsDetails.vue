<template>
  <template v-if="!productDetail">Loading</template>

  <div class="m-auto w-[80%] mt-4" v-else>

    <button class="cursor-pointer py-2 px-4 rounded-2xl bg-amber-300 text-black font-bold" @click="goBack">Back</button>


    <div>
      <p class=" text-2xl mt-2 py-2">Details</p>

      <hr>
    </div>

    <div class="mx-auto my-10 flex flex-wrap justify-center  text-amber-50 border-2 p-3 rounded-2xl border-[#383838]">
      <div class="mb-3 w-[30%]">
        <img class="w-[1000px]" :src="productDetail?.thumbnail" :alt="productDetail?.title" />
      </div>
      <div class=" flex flex-col ml-2 justify-center">
        <p class="text-3xl font-medium">{{ productDetail?.title }}</p>
        <p class="text-2xl font-normal">
          {{ productDetail?.description }}
        </p>
        <p class="">
          <span class="text-1xl font-medium text-red-700">-{{ productDetail?.discountPercentage }}%</span>
          &nbsp;
          <span class="text-2xl font-semibold">$ {{ productDetail?.price }}</span>
        </p>

        <hr class="my-3">

        <p>Brand: {{ productDetail?.brand }}</p>

        <p @click="router.push(`/category/${productDetail?.category}`)">Category: {{ captalise(productDetail?.category)
        }}
        </p>

        <p>Rating: {{ productDetail?.rating }}</p>
        <p>Stock: {{ productDetail?.stock }}</p>
        <p>
          Tags:
          <span class="mr-1 font-semibold" v-for="tag in productDetail?.tags" :key="tag">
            {{ captalise(tag) }}
          </span>
        </p>

        <p>Delivery: <span class="font-semibold"> {{ productDetail?.shippingInformation }} </span></p>
        <p>Availability: <span class="font-semibold"> {{ productDetail?.availabilityStatus }} </span></p>
        <p>Return Type: <span class="font-semibold"> {{ productDetail?.returnPolicy }} </span></p>
        <p>Minimum Quantity to place: <span class="font-semibold"> {{ productDetail?.minimumOrderQuantity }} </span></p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { get_single_product } from '../services/httpClientApi'
import type { Product } from '../Types/AllProducts.interface'
import router from '../router'

const route = useRoute();
// const router = useRouter();



const id = ref({})
const productDetail = ref<Product>()

const captalise = (str: string) => {
  return str !== undefined ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}

const goBack = () => {
  router.back()
}

watch(
  () => id.value,
  async function (newId: any) {
    productDetail.value = await get_single_product(newId)
  }
)

onMounted(() => {
  id.value = route.params.id;
  console.log();

})
</script>

<style scoped></style>
