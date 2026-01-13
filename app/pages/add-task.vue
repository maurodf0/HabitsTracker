<script setup lang="ts">
import type Habit from '~/shared/Habit';
  const habit: Habit = {

  }

</script>

<template>
    <UForm class="space-y-4" @submit="onSubmit">
    <UFormField label="Habit Name" name="Task name">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>