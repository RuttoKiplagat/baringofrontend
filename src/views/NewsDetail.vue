<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import newsData from '@/data/news.js'
import { 
  CalendarIcon, 
  ArrowLeftIcon, 
  UserIcon, 
  TagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  NewspaperIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const slug = computed(() => route.params.slug)

const article = computed(() => {
  return newsData.find(a => a.slug === slug.value) || newsData.find(a => String(a.id) === String(slug.value))
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return newsData.filter(a => a.id !== article.value.id).slice(0, 3)
})

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

// Split content by newlines to render proper paragraphs
const formattedContent = computed(() => {
  if (!article.value || !article.value.content) return []
  return article.value.content.split('\n\n')
})

// Lightbox for gallery if exists (we don't have gallery in news right now, but added support)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const currentLightboxImage = computed(() => article.value?.gallery?.[lightboxIndex.value])

function openLightbox(idx) {
  lightboxIndex.value = idx
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
function nextLightbox() {
  if(!article.value?.gallery) return
  lightboxIndex.value = (lightboxIndex.value + 1) % article.value.gallery.length
}
function prevLightbox() {
  if(!article.value?.gallery) return
  lightboxIndex.value = (lightboxIndex.value - 1 + article.value.gallery.length) % article.value.gallery.length
}
function handleLightboxKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextLightbox()
  if (e.key === 'ArrowLeft') prevLightbox()
}
onMounted(() => window.addEventListener('keydown', handleLightboxKey))
onUnmounted(() => { window.removeEventListener('keydown', handleLightboxKey); document.body.style.overflow = '' })
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen pb-20">
    
    <!-- NOT FOUND STATE -->
    <div v-if="!article" class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <NewspaperIcon class="w-20 h-20 text-gray-300 dark:text-gray-700 mb-6" />
      <h1 class="text-3xl font-heading font-bold text-navy dark:text-white mb-4">News Article Not Found</h1>
      <p class="text-gray-500 font-body mb-8">The story you are looking for does not exist or has been removed.</p>
      <RouterLink to="/news" class="inline-flex items-center px-6 py-3 bg-navy text-white font-sans font-bold text-sm uppercase rounded shadow-lg hover:bg-secondary transition-colors">
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back to News
      </RouterLink>
    </div>

    <!-- MAIN CONTENT -->
    <template v-else>
      
      <!-- 1. HERO -->
      <section class="relative min-h-[50vh] flex items-end pb-16 pt-32 bg-navy dark:bg-gray-950 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="article.image" class="w-full h-full object-cover opacity-50 mix-blend-overlay" :alt="article.title" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>
        </div>
        <div class="container-custom relative z-10">
          <RouterLink to="/news" class="inline-flex items-center text-secondary/80 hover:text-secondary font-sans font-bold text-xs uppercase tracking-wider mb-8 transition-colors group">
            <ArrowLeftIcon class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to News
          </RouterLink>
          
          <div class="max-w-4xl" data-aos="fade-up">
            <div class="flex flex-wrap items-center gap-4 text-xs font-sans font-bold text-gray-300 uppercase tracking-wider mb-6">
              <span class="px-3 py-1 bg-secondary text-navy rounded">{{ article.category }}</span>
              <span class="flex items-center gap-1.5"><CalendarIcon class="w-4 h-4" /> {{ formatDate(article.date) }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {{ article.title }}
            </h1>
          </div>
        </div>
      </section>

      <!-- 2. ARTICLE LAYOUT -->
      <section class="container-custom relative z-20 -mt-8">
        <div class="flex flex-col lg:flex-row gap-12">
          
          <!-- Article Content -->
          <article class="lg:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-elegant-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <!-- Author / Meta Info -->
            <div class="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <UserIcon class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 dark:text-gray-500 font-sans uppercase tracking-wider">Written By</p>
                  <p class="text-sm font-sans font-semibold text-navy dark:text-white">{{ article.author || 'Editorial Team' }}</p>
                </div>
              </div>
              <div class="h-10 w-px bg-gray-100 dark:bg-gray-700"></div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <TagIcon class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 dark:text-gray-500 font-sans uppercase tracking-wider">Category</p>
                  <p class="text-sm font-sans font-semibold text-navy dark:text-white">{{ article.category }}</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="prose prose-lg dark:prose-invert font-body text-gray-700 dark:text-gray-300 leading-relaxed max-w-none">
              <p class="text-xl font-heading text-navy dark:text-white leading-relaxed mb-8">{{ article.excerpt }}</p>
              
              <p v-for="(para, idx) in formattedContent" :key="idx" class="mb-6">
                {{ para }}
              </p>
            </div>
            
            <!-- Gallery if exists -->
            <div v-if="article.gallery && article.gallery.length > 0" class="mt-12">
              <h3 class="text-2xl font-heading font-bold text-navy dark:text-white mb-6">Gallery</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div 
                  v-for="(img, idx) in article.gallery" :key="idx"
                  @click="openLightbox(idx)"
                  class="aspect-video rounded-xl overflow-hidden cursor-pointer group relative"
                >
                  <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="lg:w-1/3 space-y-8">
            <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-6">More From BHS</h3>
              <div class="space-y-6">
                <RouterLink 
                  v-for="rel in relatedArticles" :key="rel.id"
                  :to="`/news/${rel.slug}`"
                  class="group flex flex-col gap-3"
                >
                  <div class="aspect-video rounded-lg overflow-hidden">
                    <img :src="rel.image" :alt="rel.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">{{ rel.category }}</span>
                    <h4 class="text-sm font-heading font-bold text-navy dark:text-white group-hover:text-secondary transition-colors line-clamp-2 mt-1">{{ rel.title }}</h4>
                    <span class="text-secondary font-bold font-sans text-xs uppercase tracking-wider flex items-center group-hover:text-navy dark:group-hover:text-white transition-colors mt-2">
                      Read More <ArrowRightIcon class="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </aside>
          
        </div>
      </section>
      
    </template>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="lightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm" @click.self="closeLightbox">
          <button @click="closeLightbox" class="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 bg-black/30 rounded-full transition-colors z-20">
            <XMarkIcon class="w-7 h-7" />
          </button>
          
          <img v-if="currentLightboxImage" :src="currentLightboxImage.src" :alt="currentLightboxImage.alt" class="max-w-[90vw] max-h-[80vh] object-contain rounded shadow-2xl" />
          <p v-if="currentLightboxImage" class="absolute bottom-6 left-0 right-0 text-center text-white font-heading text-lg px-4">{{ currentLightboxImage.alt }}</p>

          <button @click.stop="prevLightbox" class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-20">
            <ChevronLeftIcon class="w-7 h-7" />
          </button>
          <button @click.stop="nextLightbox" class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-20">
            <ChevronRightIcon class="w-7 h-7" />
          </button>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>