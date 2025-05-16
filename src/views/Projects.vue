<template>
  <TopicTitle>
    <template #title> Projects </template>

    <template #default>
      <div class="flex flex-wrap mt-5">
        <template v-for="project in projectsLinks" :key="project.id">
          <router-link :to="project.link"
            class="flex justify-center bg-[var(--card-background)] hover:bg-[var(--backgroundColor)] shadow-lg dark:shadow-none mx-2 p-6 rounded-xl outline outline-[var(--card-subtext)] w-[30%] max-w-sm"
        >
          <div>
            <div class="font-medium text-black dark:text-white text-xl">
              {{project.name}}
            </div>
          </div>
        </router-link>
        </template>
      </div>
    </template>
  </TopicTitle>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TopicTitle from '../components/Custom/TopicTitle.vue'

interface ProjectLink {
  name: string;
  link: string;
}

const projectsLinks = ref<ProjectLink[]>([
  {
    name: 'Products Api',
    link: '/product-lists',
  },
  {
    name: 'Javascript Coding',
    link: '/javascript',
  },
]);
</script>

<style scoped></style>
