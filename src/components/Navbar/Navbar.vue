<template>
  <div class="py-3 text-[14px] font-medium">
    <router-link
    v-for="navRoute in navRoutes" :key="navRoute.name"
      class="outline-offset-4 outline-[var(--golden-amber)] outline-1 border-2 border-[var(--golden-amber)] rounded-full bg-[var(--golden-amber)] text-[16px]/normal px-5 py-2 mx-3 transition-all hover:rounded-full hover:bg-[var(--pColor6)] hover:text-[var(--pColor5)]"
      :to="navRoute.path"
      >{{navRoute.name}}</router-link
    >
  </div>
</template>

<script setup lang="ts">

const navRoutes = [{
  path: '/',
  name: 'Home',
}, {
  path: '/projects',
  name: 'Projects', 
}, {
  path: '/all-categories',
  name: 'Categories',
}]
</script>



<style scoped></style>
