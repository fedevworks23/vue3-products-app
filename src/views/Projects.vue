<template>
  <TopicTitle>
    <template #title> Projects </template>

    <template #default>
      <div class="mt-5">
        <router-link to="/all-products">Products Api</router-link>
        <br />
        <router-link to="/javascript">Javascript Coding</router-link>
      </div>
    </template>
  </TopicTitle>
</template>

<script setup lang="ts">
import TopicTitle from '../components/Custom/TopicTitle.vue'
</script>

<style scoped></style>
