<script setup lang="ts">

const props = defineProps<{
  title: string,
  date: number,
  todayCompleted: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

</script>

<template>
<div class="my-4 p-4 rounded-2xl flex items-center gap-4 bg-black/20">
  <div class="input-wrapper flex items-center gap-4">
  <input 
    type="checkbox" 
    :checked="todayCompleted" 
    @change="emit('toggle')"
    class="w-5 h-5 cursor-pointer">
  <div class="flex flex-col">
 <h4 class="font-medium" :class="{ 'line-through opacity-55': todayCompleted }">{{ title }}</h4>
  <div class="flex gap-1">
    <span 
      v-if="date >= 5" class="text-xs">🔥</span> 
      <small class="text-gray-500">{{ date }} days Streak</small>
    </div>
  </div>
  </div>
</div>
</template>

<style scoped>
  li {
    padding:8px 12px;
    margin:10px 0;
  }
</style>