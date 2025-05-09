<template>
    <div class=" flex flex-col w-[20%] bg-gray-300 text-black border-r-4 border-[#1d1d1d]">
        <router-link v-for="rList in routesList" :key="rList.id" :to='`/javascript-coding/${rList.id}`'
            class=" p-4 hover:bg-amber-300">{{
                rList.question
            }}</router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const routesList = ref([
    { id: 1, question: 'Palindrome', answer: 'A' },
    { id: 2, question: 'Anagram', answer: 'B' },
])
</script>

<style scoped></style>