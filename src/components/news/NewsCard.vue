<template>
  <article class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
    <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <img v-if="article.featured_image" :src="article.featured_image" :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
        <NewspaperIcon class="w-12 h-12" />
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        <CalendarIcon class="w-4 h-4 mr-1" />
        {{ formatDate(article.published_at) }}
        <span v-if="article.author" class="mx-2">•</span>
        <span v-if="article.author">{{ article.author }}</span>
      </div>
      <h3 class="font-heading font-bold text-xl text-primary dark:text-white mb-3 line-clamp-2">
        {{ article.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {{ article.excerpt || truncateText(article.content, 120) }}
      </p>
      <RouterLink :to="`/news/${article.slug}`"
        class="inline-flex items-center text-secondary font-semibold hover:underline">
        Read More
        <ArrowRightIcon class="w-4 h-4 ml-1" />
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { CalendarIcon, NewspaperIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { formatDate } from '@/utils/formatDate.js'
import { truncateText } from '@/utils/truncateText.js'

defineProps({
  article: { type: Object, required: true },
})
</script>