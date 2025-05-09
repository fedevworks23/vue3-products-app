<template>
    <div v-for="ans in filterAnswerByID" :key="ans.id">
        {{ ans.answer }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useJSQA } from '../../stores/index.ts'
import { useRoute } from 'vue-router'

const route = useRoute()

const counter = useJSQA()

const filterAnswerByID = computed(() => {
    return counter.qa.filter(a => a.id === Number(route.params.id))
})

</script>

<style scoped></style>