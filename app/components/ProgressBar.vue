<script setup lang="ts">
import useHabits from '~/composables/useHabits';

const { Habits, habitsCompleted } = useHabits();



</script>

<template>
  <div class="progress">
    <h3 class="text-xl mb-2">Complete your day!</h3>

    <UProgress
      v-model="habitsCompleted.length"
      :max="Habits.length"
    />
  </div>
</template>
