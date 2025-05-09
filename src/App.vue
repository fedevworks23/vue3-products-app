<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
</script>

<template>
  <header class="sticky top-0 m-auto max-w-[100%] bg-[#1D1D1D] p-2 text-center text-3xl font-bold text-white shadow-md">
    <Navbar />
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
