<script setup lang="ts">
import SingleHabit from '~/components/Habits/SingleHabit.vue';

const Habits = ref([
  {
  title: 'Learn Vue',
  date: 2,
  todayCompleted: false
},
  {
  title: 'Go to Gym everyday',
  date: 11,
  todayCompleted: false
},
  {
  title: 'Learn Nuxt',
  date: 9,
  todayCompleted: false
},
  {
  title: 'Eat Healty',
  date: 4,
  todayCompleted: false
},
]);

const habitsCompleted = computed(() => {
  return Habits.value.filter(h => h.todayCompleted === true);
})

const handleClick = (index: number) => {
  if (Habits.value[index]) {
    Habits.value[index].todayCompleted = !Habits.value[index].todayCompleted
  }
}
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <h1 class="text-2xl font-medium">Good Morning, User</h1>
    <div class="text-sm total"> {{ habitsCompleted.length }} / {{ Habits.length }}</div>
  </div>
  
  <h3 class="textx-xl mt-4">Today's Habit</h3>
  <template v-for="(Habit, index) in Habits" :key="Habit.title">
  <SingleHabit @toggle="handleClick(index)" :title="Habit.title" :date="Habit.date" :today-completed="Habit.todayCompleted"/>
  </template>
</template>