<template>
  <div class="flex justify-evenly">
    <div
      v-for="color in colors"
      :class="`bg-[var(${color.value})] inset-shadow-indigo-300`"
      class="inset-shadow-sm flex justify-center items-center w-30 h-30 font-bold text-black cursor-pointer"
      :data="`var(${color.value})`"
      @click="colorPick"
    >
      {{ color.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = [
  { name: 'Primary', value: '--primary' },
  { name: 'Secondary', value: '--secondary' },
  { name: 'Background', value: '--background' },
  { name: 'Text', value: '--text' },
  { name: 'Accent', value: '--accent' },
]

const colorPick = (e: any) => {
  const color = e.srcElement.attributes.data.value
  navigator.clipboard.writeText(color)
  console.log(color)
  alert(`Copied ${color} to clipboard!`)
}
</script>

<style scoped></style>
