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
        <div
          class="after:bottom-0 after:left-0 after:absolute relative after:bg-[#12263a] m-4 mx-[1rem] my-[16px] after:w-[80px] after:h-[4px] font-bold text-[#12263a] text-[2rem] after:content-['']"
        >
          {{ productDetail?.title }}
        </div>

        <span
          class="inline-block mx-4 px-0 py-[0.3rem] font-medium text-[#12263a] text-[0.9rem]"
        >
          <!-- {{ productDetail?.category }} -->
          {{ productDetail.brand }}
        </span>

        <span class="inline-block mx-4 px-0 py-[0.3rem] font-medium text-[#12263a] text-[0.9rem]">
          Rating {{ productDetail.rating }}
        </span>


        <div class="m-4 text-[20px]">
          Dimensions
          <span class="font-medium"
            >{{ productDetail?.dimensions.width }} x
            {{ productDetail?.dimensions.height }} x
            {{ productDetail?.dimensions.depth }}</span
          >
        </div>

        <div class="m-4 font-bold text-[1rem]">
          <p class="last-price">
            Old Price:
            <span class="text-[#f64749] line-through"
              >$
              {{
                originalPrice(
                  productDetail.price,
                  productDetail?.discountPercentage
                )
              }}</span
            >
          </p>
          <p class="new-price">
            New Price:
            <span
              >$ {{ productDetail?.price }} ( -
              {{ productDetail?.discountPercentage }} %)</span
            >
          </p>
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

        <div class="mx-4 font-bold text-[#12263a] text-[1.5em] capitalize">
          about this item:
        </div>
        <div class="m-4 font-light text-[#12263a]">
          {{ productDetail?.description }}
        </div>

        <ul>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Warranty:
            <span class="font-normal">{{
              productDetail?.warrantyInformation
            }}</span>
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Available:
            <span class="font-normal">in stock {{ productDetail?.stock }}</span>
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            ReturnPolicy:
            <span class="font-normal">{{ productDetail?.returnPolicy }}</span>
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Delivery:
            <span class="font-normal">{{
              productDetail?.shippingInformation
            }}</span>
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Availability:
            <span class="font-normal">{{
              productDetail?.availabilityStatus
            }}</span>
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Tags:
            <span class="font-normal">
              <span v-for="tag in productDetail?.tags" :key="tag"
                >| {{ captalise(tag) }} |
              </span></span
            >
          </li>
          <li
            class="bg-[url(/src/assets/checked.png)] bg-no-repeat pl-7 bg-size-[20px] font-semibold"
          >
            Scan QR Code:
            <span class="font-normal"
              ><img class="w-[50px]" :src="productDetail?.meta?.qrCode" alt=""
            /></span>
          </li>
        </ul>
        
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
