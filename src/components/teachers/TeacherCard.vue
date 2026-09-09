<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group text-center p-6">
    <div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-secondary/30">
      <img v-if="teacher.photo" :src="teacher.photo" :alt="teacher.name"
        class="w-full h-full object-cover" />
      <UserIcon v-else class="w-full h-full p-6 text-gray-400" />
    </div>
    <h3 class="font-heading font-bold text-lg text-primary dark:text-white mb-1">{{ teacher.name }}</h3>
    <p class="text-secondary font-medium text-sm mb-2">{{ teacher.position }}</p>
    <p v-if="teacher.department" class="text-gray-500 dark:text-gray-400 text-sm mb-3">
      {{ teacher.department.name }}
    </p>
    <p v-if="teacher.bio" class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
      {{ teacher.bio }}
    </p>
    <div v-if="teacher.email" class="text-xs text-gray-400">
      {{ teacher.email }}
    </div>
  </div>
</template>

<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'

defineProps({
  teacher: { type: Object, required: true },
})
</script>