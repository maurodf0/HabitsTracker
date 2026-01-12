<script setup lang="ts">

const props = defineProps<{
  title: string
}>()

</script>

<template>
  <li class ="list-none bg-black/80 rounded-lg max-w-fit px-8">{{ title }}</li>
</template>