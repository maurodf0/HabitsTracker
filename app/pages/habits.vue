<script setup lang="ts">
import type Habit from '~/shared/Habit';
import SingleHabit from '~/components/Habits/SingleHabit.vue'
import UDrawerHabits from '~/components/UDrawerHabits.vue';

const {Habits, habitsCompleted} = useHabits();



const handleClick = (index: number) => {
  if (Habits.value[index]) {
    Habits.value[index].todayCompleted = !Habits.value[index].todayCompleted
    if(Habits.value[index].todayCompleted == true){
      console.log('date');
      Habits.value[index].date++
    } else {
      Habits.value[index].date--
    }

  }

}

console.log(Habits);

const open = ref(false)

const onSubmit = (habitText: string) => {

  const newHabit = {
    title: habitText,
    date: 0,
    todayCompleted: false
  }

  Habits.value.push(newHabit);
  open.value = false;
}
</script>

<template>
  <div class="wrapper flex flex-col justify-between h-[100vh]">
    <div class="welcome">
    <div class="flex justify-between items-center mt-4">
      <h1 class="text-2xl font-medium">Good Morning, User</h1>
      <div class="text-sm total"> {{ habitsCompleted.length }} / {{ Habits.length }} Completed</div>
    </div>

    <div 
    class="mt-4 h-100 text-center mx-auto flex justify-center text-gray-700 items-center" 
    v-if="Habits.length == 0">
      <div class="flex flex-col gap-2 justify-center items-center">
        <p class="mb-2 text-center">There's no Habit here, add more</p>
      <UDrawerHabits @submit="onSubmit($event)" />
      </div>
    </div>
    
    <div v-else class="habits">
    <div class="flex justify-between mt-4 items-center">

      <h3 class="textx-xl">Today's Habit</h3>
        <UDrawerHabits @submit="onSubmit($event)"/> 
    </div>
    <template v-for="(Habit, index) in Habits" :key="Habit.title">
      <SingleHabit @toggle="handleClick(index)" :title="Habit.title" :date="Habit.date" :today-completed="Habit.todayCompleted"/>
    </template>
    </div>


<ProgressBar :habits="Habits" />



</div>
</div>
</template>