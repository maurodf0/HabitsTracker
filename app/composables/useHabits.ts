import type Habit from '../shared/Habit';

export default function useHabits() {
  const Habits = useState<Habit[]>('habits', () => []);
  const initialized = useState('habits-initialized', () => false);

  onMounted(() => {
    if (!initialized.value) {
      const stored = localStorage.getItem('Habits');
      if (stored) {
        Habits.value = JSON.parse(stored);
      }
      initialized.value = true;
    }
  });

  watch(Habits, () => {
    if (initialized.value) {
      localStorage.setItem('Habits', JSON.stringify(Habits.value));
    }
  }, { deep: true });

  const habitsCompleted = computed(() => {
    return Habits.value.filter((habit: Habit) => habit.todayCompleted === true);
  });

  return {
    Habits,
    habitsCompleted
  };
};