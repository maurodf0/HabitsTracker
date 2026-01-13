import { ref, watch, onMounted } from 'vue'
import type Habit from "~/shared/Habit"

const STORAGE_KEY = "habits"

export const useHabits = () => {
  const habits = ref<Habit[]>([])

  // Carica le abitudini dal localStorage (solo lato client)
  const initHabits = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    habits.value = stored ? JSON.parse(stored) : []
  }

  // Sincronizza con localStorage quando cambia
  watch(habits, (newHabits) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHabits))
  }, { deep: true })

  const addHabit = (habit: Habit): void => {
    habits.value.push(habit)
  }

  const removeHabit = (index: number): void => {
    habits.value.splice(index, 1)
  }

  const updateHabit = (index: number, habit: Habit): void => {
    habits.value[index] = habit
  }

  const toggleHabitCompletion = (index: number): void => {
    if (habits.value[index]) {
      habits.value[index].todayCompleted = !habits.value[index].todayCompleted
    }
  }

  // Carica i dati al mount (solo lato client)
  onMounted(() => {
    initHabits()
  })

  return {
    habits,
    addHabit,
    removeHabit,
    updateHabit,
    toggleHabitCompletion
  }
}

