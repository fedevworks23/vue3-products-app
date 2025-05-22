<template>
  <header
    class="flex justify-center shadow-md m-auto font-medium text-[14px] text-center"
  >
    <div class="px-[10px] py-[24px]">
      <router-link
        v-for="navRoute in navRoutes"
        :key="navRoute.name"
        class="m-2 px-[20px] py-[10px] border-2 border-amber-50 hover:border-[var(--primary)] font-bold text-[16px]/normal text-[var(--text)] transition-all hover:transition-all hover:duration-500 hover:ease-in-out"
        :to="navRoute.path"
        >{{ navRoute.name }}</router-link
      >
    </div>
  </header>
</template>

<script setup lang="ts">
const navRoutes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/all-categories',
    name: 'Categories',
  },
]
</script>

<style scoped></style>
