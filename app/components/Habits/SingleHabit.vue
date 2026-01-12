<script setup lang="ts">

const props = defineProps<{
  title: string
}>()

</script>

<template>
<UCard class="my-4" variant="subtle">
    <template #header>
          {{ title }}
    </template>

    <template #footer>
     <small> 8 days Streak </small>
    </template>
  </UCard>
</template>

<style scoped>
  li {
    padding:8px 12px;
    margin:10px 0;
  }
</style>