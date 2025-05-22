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

  <div class="m-auto mt-4 w-[90%]" v-else>
    <div
      class="flex lg:flex-row flex-col justify-center sm:items-center lg:items-start"
    >
      <div class="flex flex-col w-[50%]">
        <div>
          <img
            :src="productDetail?.images[imageIdx]"
            :alt="productDetail?.title"
            class="m-4 w-[80%] h-auto"
          />
        </div>
      </div>

      <div class="flex flex-col bg-[var(--background)] lg:w-[50%]">
        <div class="m-4 font-bold text-[20px]">
          {{ productDetail?.title }}
        </div>

        <div class="mx-4 font-light text-[#00000077] text-[20px]">
          {{ productDetail.brand }}
        </div>

        <div class="m-4 text-[20px]">
          Dimensions
          <span class="font-medium"
            >{{ productDetail?.dimensions.width }} x
            {{ productDetail?.dimensions.height }} x
            {{ productDetail?.dimensions.depth }}</span
          >
        </div>

        <div class="m-4">
          <span
            class="bg-amber-400 shadow-[var(--price-shadow)] p-3 font-bold text-[28px]"
            ><span class="text-[14px]">$ &nbsp;</span
            >{{ productDetail?.price }}</span
          >
          &nbsp;
          <span class="bg-red-700 p-2 rounded-full text-amber-50"
            >- {{ productDetail?.discountPercentage }} %</span
          >
          <span
            class="ml-1 p-4 font-bold text-[#00000077] text-[18px] line-through"
            >$
            {{
              originalPrice(
                productDetail.price,
                productDetail?.discountPercentage
              )
            }}</span
          >
        </div>

        <div class="flex flex-row">
          <span v-for="(image, index) in productDetail?.images" :key="index">
            <img
              :src="image"
              :alt="productDetail?.title"
              class="m-4 border-[var(--card-subtext)] border-2 rounded-[8px] w-[100px] h-[100px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              @click="imageIdx = index"
            />
          </span>
        </div>

        <hr class="border-[var(--accent)] border-b-1" />

        <div>
          <table class="m-4 w-[100%] lg:w-[75%] xl:w-[90%]">
            <tr>
              <td class="font-bold">Warranty</td>
              <td>{{ productDetail?.warrantyInformation }}</td>
            </tr>
            <tr>
              <td class="font-bold">In Stock</td>
              <td>{{ productDetail?.stock }}</td>
            </tr>
            <tr>
              <td class="font-bold">ReturnPolicy</td>
              <td>{{ productDetail?.returnPolicy }}</td>
            </tr>
            <tr>
              <td class="font-bold">Delivery</td>
              <td>{{ productDetail?.shippingInformation }}</td>
            </tr>
            <tr>
              <td class="font-bold">Availability</td>
              <td>{{ productDetail?.availabilityStatus }}</td>
            </tr>
            <tr>
              <td class="font-bold">Tags</td>
              <td><span v-for="tag in productDetail?.tags" :key="tag">| {{ captalise(tag) }} | </span></td>
            </tr>
            <tr>
              <td class="font-bold">Scan QR Code</td>
              <td>
                <img
                  class="w-[50px]"
                  :src="productDetail?.meta?.qrCode"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div>

        <div>
          <div class="m-4 font-bold text-[20px]">Description</div>
          <div class="m-4 font-light text-[#00000077]">
            {{ productDetail?.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { get_single_product } from '../../services/httpClientApi'
import type { Product } from '../../Types/AllProducts.interface'
import router from '../../router'
import TopicTitle from '../../components/Custom/TopicTitle.vue'

const route = useRoute()
// const router = useRouter();

const id = ref({})
const imageIdx = ref(0)
const productDetail = ref<Product>()

const captalise = (str: string) => {
  return str !== undefined ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}

const originalPrice = (price: number, discountPercentage: number) => {
  return (price + (price * discountPercentage) / 100).toFixed(2)
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

<style scoped>
table > tr {
  line-height: 2;
}
</style>
