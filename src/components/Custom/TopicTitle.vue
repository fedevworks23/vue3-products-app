<template>
  <div class="m-auto my-5 w-[90%] text-[var(--white)]">
    <p class="mb-2 pb-3 text-2xl">
      <slot name="title"></slot>
    </p>
    <hr />

    <div class="flex flex-row-reverse">
      <slot name="buttons"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
