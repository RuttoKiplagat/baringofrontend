<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { MagnifyingGlassIcon, CalendarIcon, ArrowRightIcon, TrophyIcon, UserIcon } from '@heroicons/vue/24/outline'
import { useNewsStore } from '@/stores/new.js' 

import newsData from '@/data/news.js'

const articles = ref(newsData)

// FILTERS & SEARCH
const searchQuery = ref('')
const activeFilter = ref('All')
const categories = ['All', 'Academic', 'Sports', 'Events', 'Community', 'Achievement', 'Announcements']

const filteredArticles = computed(() => {
  let result = articles.value
  if (activeFilter.value !== 'All') {
    result = result.filter(a => a.category === activeFilter.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
  }
  return result.sort((a, b) => new Date(b.date) - new Date(a.date))
})

const featuredStory = computed(() => {
  return articles.value.find(a => a.featured) || articles.value[0]
})

const gridArticles = computed(() => {
  return filteredArticles.value.filter(a => a.id !== featuredStory.value?.id)
})

const achievements = [
  { title: 'Best Performing School in County', year: '2025', desc: 'Ranked 1st overall in KCSE examinations in Baringo County.' },
  { title: 'National Science Fair Champions', year: '2025', desc: 'Gold medalists in the Robotics and Innovation category.' },
  { title: 'Regional Athletics Winners', year: '2026', desc: 'Overall champions in the Rift Valley secondary schools athletics meet.' }
]

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen pb-24">
    
    <!-- HERO SECTION -->
    <section class="relative min-h-[40vh] lg:min-h-[50vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-hero-pattern opacity-95"></div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-secondary/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div class="container-custom relative z-10 py-20 text-center">
        <div class="max-w-3xl mx-auto" data-aos="fade-up">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-8 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Editorial</span>
            <div class="h-px w-8 bg-secondary"></div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
            News & <span class="text-secondary">Stories</span>
          </h1>
          <p class="text-lg text-gray-300 font-body mb-0 leading-relaxed max-w-2xl mx-auto">
            Discover the latest stories, achievements and happenings from our vibrant school community.
          </p>
        </div>
      </div>
    </section>

    <!-- FEATURED STORY -->
    <section v-if="featuredStory" class="container-custom relative z-20 -mt-10 mb-20">
      <div class="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl shadow-elegant-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
        <RouterLink :to="`/news/${featuredStory.slug || featuredStory.id}`" class="block w-full">
          <div class="relative w-full h-[300px] lg:h-[450px] overflow-hidden">
            <img :src="featuredStory.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" :alt="featuredStory.title" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
            <div class="absolute top-6 left-6 bg-secondary text-navy font-bold font-sans text-xs uppercase tracking-wider px-4 py-1.5 rounded-full z-10 shadow-lg">Featured</div>
            
            <div class="absolute bottom-0 left-0 w-full p-8 lg:p-12">
              <div class="flex flex-wrap items-center gap-4 text-xs font-sans font-bold text-gray-300 uppercase tracking-wider mb-4">
                <span class="text-secondary">{{ featuredStory.category }}</span>
                <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span class="flex items-center gap-1.5"><CalendarIcon class="w-4 h-4" /> {{ formatDate(featuredStory.date) }}</span>
              </div>
              <h2 class="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4 group-hover:text-secondary transition-colors duration-300 max-w-4xl">
                {{ featuredStory.title }}
              </h2>
              <p class="text-gray-300 font-body text-lg max-w-3xl line-clamp-2 lg:line-clamp-3 mb-6">
                {{ featuredStory.excerpt }}
              </p>
              <div class="inline-flex items-center text-white font-sans font-bold text-sm uppercase tracking-wider group-hover:text-secondary transition-colors">
                Read Story <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- MAIN CONTENT AREA -->
    <section class="container-custom">
      <div class="flex flex-col lg:flex-row gap-12">
        
        <!-- LEFT COLUMN: FILTERS & GRID -->
        <div class="lg:w-2/3">
          <!-- Filters & Search -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10" data-aos="fade-up">
            <div class="flex items-center gap-4">
              <h2 class="text-2xl font-heading font-bold text-navy dark:text-white">Latest Articles</h2>
              <div class="h-px w-12 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            </div>
            
            <div class="relative w-full sm:w-64">
              <MagnifyingGlassIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search stories..." 
                class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-sans focus:outline-none focus:border-secondary dark:text-white transition-shadow shadow-sm"
              />
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-10" data-aos="fade-up">
            <button 
              v-for="cat in categories" :key="cat"
              @click="activeFilter = cat"
              class="px-4 py-2 text-[10px] md:text-xs font-sans font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
              :class="activeFilter === cat ? 'bg-navy dark:bg-secondary text-white dark:text-navy border-navy dark:border-secondary shadow-md' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'"
            >
              {{ cat }}
            </button>
          </div>

          <div v-if="gridArticles.length === 0" class="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
            <p class="text-gray-500 font-body text-lg">No stories match your search criteria.</p>
          </div>

          <!-- News Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RouterLink 
              v-for="(article, idx) in gridArticles" :key="article.id"
              :to="`/news/${article.slug || article.id}`"
              class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
              data-aos="fade-up" :data-aos-delay="(idx % 2) * 100"
            >
              <div class="relative h-56 overflow-hidden">
                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute top-4 left-4 bg-white/90 dark:bg-navy/90 backdrop-blur text-navy dark:text-white font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded shadow-sm">
                  {{ article.category }}
                </div>
              </div>
              <div class="p-6 md:p-8 flex-1 flex flex-col">
                <div class="flex items-center gap-2 text-xs font-sans text-gray-400 uppercase tracking-wider mb-3">
                  <CalendarIcon class="w-4 h-4" /> {{ formatDate(article.date) }}
                </div>
                <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {{ article.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 font-body text-sm line-clamp-3 mb-6 flex-1">
                  {{ article.excerpt }}
                </p>
                <div class="flex justify-between items-center mt-auto border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div class="flex items-center gap-2 text-xs font-sans text-gray-500 dark:text-gray-400">
                    <UserIcon class="w-4 h-4" />
                    {{ article.author || 'Editorial Team' }}
                  </div>
                  <span class="text-secondary font-bold font-sans text-xs uppercase tracking-wider flex items-center group-hover:text-navy dark:group-hover:text-white transition-colors">
                    Read <ArrowRightIcon class="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- RIGHT COLUMN: SIDEBAR -->
        <div class="lg:w-1/3 space-y-10">
          
          <!-- Achievements Widget -->
          <div class="bg-navy rounded-2xl p-8 relative overflow-hidden shadow-elegant-lg" data-aos="fade-left">
            <div class="absolute -right-12 -top-12 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
            <div class="flex items-center gap-3 mb-6 relative z-10">
              <TrophyIcon class="w-8 h-8 text-secondary" />
              <h3 class="text-xl font-heading font-bold text-white">Celebrating Excellence</h3>
            </div>
            
            <div class="space-y-6 relative z-10">
              <div v-for="achieve in achievements" :key="achieve.title" class="border-l-2 border-secondary/30 pl-4">
                <span class="text-secondary font-sans font-bold text-xs uppercase">{{ achieve.year }}</span>
                <h4 class="text-white font-heading font-bold text-lg leading-tight mt-1 mb-2">{{ achieve.title }}</h4>
                <p class="text-gray-400 font-body text-sm leading-relaxed">{{ achieve.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Quick Links / Popular Categories -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm" data-aos="fade-left" data-aos-delay="100">
            <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-6">Popular Categories</h3>
            <ul class="space-y-3">
              <li v-for="cat in categories.filter(c => c !== 'All')" :key="cat">
                <button 
                  @click="activeFilter = cat; window.scrollTo({ top: 300, behavior: 'smooth' })" 
                  class="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group text-left"
                >
                  <span class="font-sans text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-secondary transition-colors">{{ cat }}</span>
                  <span class="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-500 group-hover:bg-secondary group-hover:text-white transition-colors">
                    {{ articles.filter(a => a.category === cat).length }}
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>