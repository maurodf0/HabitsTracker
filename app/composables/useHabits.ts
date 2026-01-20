import type Habit from '../models/Habit';

export default function useHabits() {
  const Habits = ref<Habit[]>([]);

  onMounted( () => {

    Habits.value = JSON.parse(localStorage.getItem('Habits') || '[]');
  })


  watch(Habits, () => {

    localStorage.setItem('Habits', JSON.stringify(Habits.value));
  }, { deep: true });

  const habitsCompleted = computed( () => {
    return Habits.value.filter( (habit: Habit) => habit.todayCompleted === true );
  })


  return {
    Habits,
    habitsCompleted
  };
};