<template>

    <div class=" flex flex-wrap">
        <JavascriptTitle></JavascriptTitle>
        <div class="w-[70%] bg-amber-300 text-black">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import JavascriptTitle from './JavasciptTitle.vue'

</script>

<style scoped></style>