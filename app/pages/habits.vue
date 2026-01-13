<script setup lang="ts">
import type Habit from '~/shared/Habit';
import SingleHabit from '~/components/Habits/SingleHabit.vue'

const Habits = ref<Habit[]>([
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
    if(Habits.value[index].todayCompleted == true){
      console.log('date');
      Habits.value[index].date++
    } else {
      Habits.value[index].date--
    }

  }

}

const habitText = ref<string>('');

const onSubmit = () => {
  const newHabit = {
    title: habitText.value,
    date: 0,
    todayCompleted: false
  }

  Habits.value.push(newHabit);
}
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <h1 class="text-2xl font-medium">Good Morning, User</h1>
    <div class="text-sm total"> {{ habitsCompleted.length }} / {{ Habits.length }} Completed</div>
  </div>
  
  <div class="flex justify-between mt-4 items-center">

    <h3 class="textx-xl">Today's Habit</h3>

    <UDrawer>
    <UButton label="+ Add an habit" color="neutral" trailing-icon="i-lucide-chevron-up" />
    <template #content>
    <UForm class="space-y-4" @submit="onSubmit">
      <UFormField label="Habit Name" name="Hab">
        <UInput v-model="habitText" />
      </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
    </UForm>
    </template>
  </UDrawer>
   
  </div>
  <template v-for="(Habit, index) in Habits" :key="Habit.title">
    <SingleHabit @toggle="handleClick(index)" :title="Habit.title" :date="Habit.date" :today-completed="Habit.todayCompleted"/>
  </template>

  <h3 class="text-xl mb-2">Complete you day!</h3>
    <UProgress v-model="habitsCompleted.length" :max="Habits.length"/>

</template>