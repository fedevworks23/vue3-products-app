<template>
  <header
    class="flex justify-center shadow-md m-auto font-medium text-[14px] text-center"
  >
    <div class="px-[10px] py-[24px]">
      <router-link
        v-for="navRoute in navRoutes"
        :key="navRoute.name"
        class="m-2 px-[20px] py-[10px] border-[var(--primary)] hover:border-[var(--primary)] rounded-[10px] text-[16px]/normal text-[var(--text)] hover:text-[var(--accent)] hover:underline underline-offset-8 transition-all hover:transition-all hover:duration-500 hover:ease-in-out"
        :to="navRoute.path"
        ><span>{{ navRoute.name }}</span></router-link
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
  {
    path: '/custom-components',
    name: 'CustomComponents',
  },
]
</script>

<style scoped>
</style>
