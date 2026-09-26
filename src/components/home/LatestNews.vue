<script setup>
import { onMounted } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import Loader from '@/components/common/Loader.vue'
import NewsCard from '@/components/news/NewsCard.vue'
import { useNewsStore } from '@/stores/new.js'

const newsStore = useNewsStore()

onMounted(() => {
  if (newsStore && !newsStore.articles?.length) {
    if(typeof newsStore.fetchNews === 'function') {
      newsStore.fetchNews()
    }
  }
})
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="flex items-center justify-center gap-4 mb-4">
          <div class="h-px w-12 bg-secondary"></div>
          <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
            STAY INFORMED
          </span>
          <div class="h-px w-12 bg-secondary"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">
          Latest News
        </h2>
      </div>

      <!-- Loading State -->
      <div v-if="newsStore?.loading" class="flex justify-center py-12">
        <Loader />
      </div>

      <!-- Content -->
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- We can use the existing NewsCard if it's there, but let's wrap it nicely to ensure it looks premium, or we can just rely on NewsCard doing the right thing -->
          <NewsCard 
            v-for="(article, index) in newsStore?.latestArticles?.slice(0, 3)" 
            :key="article.id" 
            :article="article" 
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          />
        </div>

        <!-- Call to Action -->
        <div class="text-center" data-aos="fade-up" data-aos-delay="300">
          <RouterLink 
            to="/news"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-primary dark:border-white text-primary dark:text-white font-bold font-sans rounded hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all duration-300"
          >
            Read All News
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>
