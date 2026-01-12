<script setup lang="ts">

const props = defineProps<{
  title: string,
  date: number,
}>()

</script>

<template>
<UCard  
  variant="subtle" 
  class="my-4 flex">
<input type="checkbox" v-model="props.todayCompleted">
<div class="flex flex-col">
<h4 class="font-medium">{{ title }}</h4>
<div class="flex"><small v-if="date > 5" class="text-[10px]">🔥</small> <small>  {{ date }} days Streak </small></div>
</div>
  </UCard>
</template>

<style scoped>
  li {
    padding:8px 12px;
    margin:10px 0;
  }
</style>