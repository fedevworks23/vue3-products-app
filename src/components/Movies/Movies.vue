<template>
  <div>{{ response }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const response = ref(null)

const options = {
  method: 'GET',
  url: 'https://imdb236.p.rapidapi.com/imdb/india/top-rated-indian-movies',
  headers: {
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
  },
}

try {
  const response = await axios.request(options)
  console.log(response.data)
} catch (error) {
  console.error(error)
}
</script>

<style scoped></style>
