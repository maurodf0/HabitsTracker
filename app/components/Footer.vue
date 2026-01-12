<script setup lang="ts">

</script>

<template>
  <UFooter>
    <template #left>
      <ClientOnly>
        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </ClientOnly>
    </template>

   
  </UFooter>
</template>
