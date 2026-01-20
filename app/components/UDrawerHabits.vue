<script setup lang="ts">

  const habitText = ref<string>('');
 
const open = ref(false)

const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()

const onSubmit = () => {
  emit('submit', habitText.value)
  habitText.value = '' 
}
</script>

<template>
  <UDrawer v-model:open="open">
    <UButton label="+ Add an habit" color="neutral" trailing-icon="i-lucide-chevron-up" />
    <template #content>
    <UForm class="space-y-4 mx-auto py-4" @submit.prevent="onSubmit"> 
      <UFormField label="Habit Name" name="Hab">
      <UInput v-model="habitText" />
    </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
    </template>
  </UDrawer>
</template>