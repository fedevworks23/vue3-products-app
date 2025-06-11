<template>
  <div
    class="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 text-center"
  >
    <router-link
      to="/custom-components/color-codes"
      class="justify-center bg-[var(--background)] hover:bg-[var(--primary)] shadow-lg dark:shadow-none p-6 rounded-xl outline outline-[var(--primary)] w-[100%] text-[var(--primary)] hover:text-[var(--background)] transition-all duration-500 ease-in-out"
      v-cloak
    >
      <div>
        <div class="font-medium text-xl">Color Codes</div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
