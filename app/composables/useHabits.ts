import type Habit from '../models/Habit';

export default function useHabits() {
  const Habits = ref<Habit[]>([]);

  onMounted( () => {
    console.log('useHabits mounted');
    Habits.value = JSON.parse(localStorage.getItem('Habits') || '[]');
  })


  watch(Habits, () => {
    console.log('useHabits watch');
    localStorage.setItem('Habits', JSON.stringify(Habits.value));
  }, { deep: true });


  return {
    Habits,
  };
};