<template>
    <div class="m-auto my-5 w-[90%] text-amber-300">
      <p class="pb-3 mb-2 text-2xl text-amber-300">
        <slot name="title"></slot>
      </p>
      <hr />
    </div>

    <div class="m-auto mt-1 w-[90%] text-amber-300">
      <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>
