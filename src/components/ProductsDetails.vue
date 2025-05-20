<template>
  <TopicTitle>
    <template #title> Product Details </template>

    <template #buttons>
      <div class="flex flex-row-reverse">
        <button
          class="bg-[var(--background)] hover:bg-[var(--secondary)] my-3 mr-2 px-5 py-2 border-[var(--card-subtext)] border-2 rounded-[8px] font-bold text-[var(--primary)] hover:text-[var(--background)] cursor-pointer"
          @click="goBack"
        >
          Back
        </button>
      </div>
    </template>
  </TopicTitle>

  <template v-if="!productDetail">Loading</template>

  <div class="bg-[var(--background)] m-auto mt-4 w-[80%]" v-else>
    <div
      class="flex xl:flex-row flex-col items-center shadow-[#ffffff] mx-auto my-10 p-3 border-[var(--primary)] border-2 rounded-2xl text-[var(--text-color)]"
    >
      <div
        class="top-[-70px] xl:top-0 xl:left-[-5%] relative flex xl:flex-initial justify-center bg-[var(--primary)] mb-3 border-[var(--primary)] border-2 rounded-full lg:rounded-2xl transition-all duration-900 ease-in-out"
      >
        <img
          class="w-[300px]"
          :src="productDetail?.thumbnail"
          :alt="productDetail?.title"
        />
      </div>
      <div
        class="flex flex-col flex-none xl:flex-1 justify-center ml-2 text-[var(--card-subtext)]"
      >
        <p class="font-medium text-[var(--white)] text-2xl">
          {{ productDetail?.title }}
        </p>
        <p class="font-normal text-lg">
          {{ productDetail?.description }}
        </p>
        <p class="">
          <span class="font-medium text-red-700 text-xl"
            >-{{ productDetail?.discountPercentage }}%</span
          >
          &nbsp;
          <span class="font-semibold text-[14px]"
            >$ {{ productDetail?.price }}</span
          >
        </p>

        <hr class="my-3" />

        <p>Brand: {{ productDetail?.brand }}</p>

        <p @click="router.push(`/category/${productDetail?.category}`)">
          Category: {{ captalise(productDetail?.category) }}
        </p>

        <p>Rating: {{ productDetail?.rating }}</p>
        <p>Stock: {{ productDetail?.stock }}</p>
        <p>
          Tags:
          <span
            class="mr-1 font-semibold"
            v-for="tag in productDetail?.tags"
            :key="tag"
          >
            {{ captalise(tag) }}
          </span>
        </p>

        <p>
          Delivery:
          <span class="font-semibold">
            {{ productDetail?.shippingInformation }}
          </span>
        </p>
        <p>
          Availability:
          <span class="font-semibold">
            {{ productDetail?.availabilityStatus }}
          </span>
        </p>
        <p>
          Return Type:
          <span class="font-semibold"> {{ productDetail?.returnPolicy }} </span>
        </p>
        <p>
          Minimum Quantity to place:
          <span class="font-semibold">
            {{ productDetail?.minimumOrderQuantity }}
          </span>
        </p>
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
import TopicTitle from '../components/Custom/TopicTitle.vue'

const route = useRoute()
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
  id.value = route.params.id
  console.log()
})
</script>

<style scoped></style>
