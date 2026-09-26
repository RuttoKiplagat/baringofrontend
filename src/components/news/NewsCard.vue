<template>
  <article class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group flex flex-col h-full">
    <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
      <img v-if="article.image" :src="article.image" :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
        <NewspaperIcon class="w-12 h-12" />
      </div>
      <div v-if="article.category" class="absolute top-4 left-4 bg-white/90 dark:bg-navy/90 backdrop-blur text-navy dark:text-white font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded shadow-sm">
        {{ article.category }}
      </div>
    </div>
    <div class="p-6 flex-1 flex flex-col">
      <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-sans font-bold">
        <CalendarIcon class="w-4 h-4 mr-1" />
        {{ formatDate(article.date) }}
      </div>
      <h3 class="font-heading font-bold text-xl text-primary dark:text-white mb-3 line-clamp-2">
        {{ article.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-1 font-body">
        {{ article.excerpt || truncateText(article.content, 120) }}
      </p>
      <RouterLink :to="`/news/${article.slug || article.id}`"
        class="inline-flex items-center text-secondary font-bold font-sans text-xs uppercase tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors mt-auto">
        Read More
        <ArrowRightIcon class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
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