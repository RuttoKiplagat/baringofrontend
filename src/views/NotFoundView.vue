<template>
  <div class="min-h-screen flex items-center justify-center bg-background dark:bg-darkbg px-4">
    <div class="text-center max-w-lg">
      <div class="text-9xl font-bold text-primary/20 dark:text-white/10 font-heading mb-4">404</div>
      <h1 class="text-3xl font-bold text-primary dark:text-white font-heading mb-4">Page Not Found</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <RouterLink to="/"
        class="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2">
        <HomeIcon class="w-5 h-5" />
        Back to Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>