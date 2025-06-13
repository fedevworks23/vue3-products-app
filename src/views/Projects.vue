<template>
  <TopicTitle>
    <template #title> Projects </template>

    <template #default>
      <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 text-center">
        <template v-for="project in projectsLinks" :key="project.id">
          <router-link :to="project.link"
            class="justify-center bg-[var(--background)] hover:bg-[var(--primary)] shadow-lg dark:shadow-none p-6 rounded-xl outline outline-[var(--primary)] w-[100%] text-[var(--primary)] hover:text-[var(--background)] transition-all duration-500 ease-in-out"
            v-cloak
        >
          <div>
            <div class="font-medium text-xl">
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
    link: '/products',
  },
  {
    name: 'Javascript Coding',
    link: '/javascript',
  },
  {
    name: 'Movies Api',
    link: '/movies',
  },
]);
</script>

<style scoped></style>
