<template>
  <div v-if="article" class="min-h-screen bg-white dark:bg-darkbg">
    <div v-if="article.featured_image" class="h-80 md:h-96 w-full">
      <img :src="article.featured_image" :alt="article.title" class="w-full h-full object-cover" />
    </div>

    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <CalendarIcon class="w-4 h-4 mr-1" />
        {{ formatDate(article.published_at) }}
        <span v-if="article.author" class="mx-2">•</span>
        <span v-if="article.author">By {{ article.author }}</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-bold text-primary dark:text-white font-heading mb-8">
        {{ article.title }}
      </h1>

      <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
        {{ article.content }}
      </div>

      <div class="mt-12 pt-8 border-t dark:border-gray-700">
        <RouterLink to="/news" class="inline-flex items-center text-secondary font-semibold hover:underline">
          <ArrowLeftIcon class="w-4 h-4 mr-1" />
          Back to News
        </RouterLink>
      </div>
    </article>
  </div>

  <div v-else class="flex justify-center py-20">
    <Loader />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { CalendarIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { useNewsStore } from '@/stores/news.js'
import Loader from '@/components/common/Loader.vue'
import { formatDate } from '@/utils/formatDate.js'

const route = useRoute()
const newsStore = useNewsStore()

const article = computed(() => newsStore.getArticleBySlug(route.params.slug))

onMounted(() => {
  if (!newsStore.articles.length) newsStore.fetchNews()
})
</script>