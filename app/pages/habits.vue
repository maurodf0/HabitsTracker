<script setup lang="ts">
import SingleHabit from '~/components/Habits/SingleHabit.vue';

const Habits = [
  'Learn Vue',
  'Learn Nuxt',
  'Go to Gym',
  'Pet Kira'
]

</script>

<template>
  <h1 class="text-4xl mt-4">Habits</h1>

  <SingleHabit v-for="(Habit, index) in Habits" :title="Habit" />
</template>