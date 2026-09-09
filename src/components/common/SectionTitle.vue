<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-white font-heading">
      {{ title }}
    </h2>
    <div v-if="subtitle" class="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      {{ subtitle }}
    </div>
    <div class="mt-4 w-20 h-1 bg-secondary mx-auto rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>