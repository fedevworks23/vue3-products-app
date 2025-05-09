<template>

    <div class=" flex flex-wrap jsqa">
        <JavascriptTitle></JavascriptTitle>
        <div class="w-[80%] bg-amber-300 text-black">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import JavascriptTitle from './JavasciptTitle.vue'

</script>

<style scoped>
.jsqa {
    height: 100vh;
}
</style>