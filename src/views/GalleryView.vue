<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { MagnifyingGlassIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon, PhotoIcon } from '@heroicons/vue/24/outline'

// Data
import galleryData from '@/data/gallery.js'
const images = ref(galleryData)

const albums = [
  { title: 'Academic Life', cover: images.value.find(i => i.category === 'Academics')?.src || '', count: images.value.filter(i => i.category === 'Academics').length },
  { title: 'Sports & Activities', cover: images.value.find(i => i.category === 'Sports')?.src || '', count: images.value.filter(i => i.category === 'Sports').length },
  { title: 'School Events', cover: images.value.find(i => i.category === 'Events')?.src || '', count: images.value.filter(i => i.category === 'Events').length },
  { title: 'Student Life', cover: images.value.find(i => i.category === 'Student Life')?.src || '', count: images.value.filter(i => i.category === 'Student Life').length },
  { title: 'Campus', cover: images.value.find(i => i.category === 'Campus')?.src || '', count: images.value.filter(i => i.category === 'Campus').length },
]

// Filters
const activeFilter = ref('All')
const categories = ['All', 'Academics', 'Sports', 'Events', 'Student Life', 'Campus']

const filteredImages = computed(() => {
  if (activeFilter.value === 'All') return images.value
  return images.value.filter(img => img.category === activeFilter.value)
})

// Lightbox
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const currentImage = computed(() => filteredImages.value[currentImageIndex.value])

const openLightbox = (index) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0 // loop
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = filteredImages.value.length - 1 // loop
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Helper for bento sizing
const getBentoClass = (index) => {
  // Create a repeating pattern of sizes for visual interest
  const pattern = [
    'col-span-1 md:col-span-2 row-span-2', // Large landscape
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2 md:col-span-1', // Tall portrait
    'col-span-1 md:col-span-2 row-span-1', // Wide
    'col-span-1 row-span-1',
    'col-span-1 md:col-span-3 row-span-2', // Extra large
  ]
  return pattern[index % pattern.length]
}
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">
    
    <!-- HERO SECTION -->
    <section class="relative min-h-[50vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
      <!-- Image grid background -->
      <div class="absolute inset-0 z-0 grid grid-cols-4 grid-rows-2 gap-1 opacity-20 mix-blend-luminosity">
        <div v-for="img in images.slice(0,8)" :key="img.id" class="w-full h-full overflow-hidden">
          <img :src="img.src" class="w-full h-full object-cover grayscale" alt="" />
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/80 dark:from-gray-950 dark:via-gray-950/90 dark:to-gray-950/80 z-0"></div>
      
      <div class="container-custom relative z-10 py-24 text-center">
        <div class="max-w-3xl mx-auto" data-aos="zoom-in">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-8 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Visual Journey</span>
            <div class="h-px w-8 bg-secondary"></div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Life at <span class="text-secondary">Baringo</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300 font-body mb-0 leading-relaxed max-w-2xl mx-auto">
            Explore the moments, achievements and experiences that define our vibrant school community.
          </p>
        </div>
      </div>
    </section>

    <!-- GALLERY FILTERS -->
    <section class="sticky top-[72px] lg:top-[88px] z-30 bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm py-4">
      <div class="container-custom">
        <div class="flex flex-nowrap overflow-x-auto gap-2 pb-2 hide-scrollbar">
          <button 
            v-for="cat in categories" :key="cat"
            @click="activeFilter = cat"
            class="whitespace-nowrap px-5 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full border transition-all duration-300"
            :class="activeFilter === cat ? 'bg-navy dark:bg-secondary text-white dark:text-navy border-navy dark:border-secondary shadow-md' : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- MASONRY / BENTO GALLERY -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/30">
      <div class="container-custom">
        <div v-if="filteredImages.length === 0" class="text-center py-20">
          <PhotoIcon class="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <p class="text-gray-500 font-body text-lg">No images found in this category.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 lg:gap-6">
          <div 
            v-for="(img, idx) in filteredImages" :key="img.id"
            @click="openLightbox(idx)"
            class="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-200 dark:bg-gray-800"
            :class="getBentoClass(idx)"
            data-aos="fade-up"
          >
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
              <span class="inline-block px-3 py-1 bg-secondary/90 text-navy font-sans font-bold text-[10px] uppercase tracking-wider rounded mb-2 w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                {{ img.category }}
              </span>
              <p class="text-white font-heading font-medium text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-2">
                {{ img.alt }}
              </p>
            </div>
            <!-- Enlarge Icon -->
            <div class="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <ArrowsPointingOutIcon class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALBUMS PREVIEW -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
          <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Featured Albums</h2>
          <div class="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
        </div>

        <div class="flex flex-nowrap overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
          <div 
            v-for="(album, idx) in albums" :key="album.title"
            class="snap-start shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
            data-aos="fade-left" :data-aos-delay="idx * 100"
            @click="activeFilter = album.title.includes('Academic') ? 'Academics' : album.title.includes('Sport') ? 'Sports' : album.title.includes('Event') ? 'Events' : album.title.includes('Campus') ? 'Campus' : 'Student Life'"
          >
            <div class="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 shadow-md group-hover:shadow-elegant-lg transition-shadow duration-300">
              <img :src="album.cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Album Cover" onerror="this.src='./images/baringo.jpg'" />
              <div class="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-400"></div>
              <div class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-navy dark:text-white font-sans font-bold text-xs px-3 py-1.5 rounded-lg">
                {{ album.count }} Photos
              </div>
            </div>
            <h3 class="text-xl font-heading font-bold text-navy dark:text-white group-hover:text-secondary transition-colors">{{ album.title }}</h3>
          </div>
        </div>
      </div>
    </section>

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
        <div v-if="isLightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          
          <!-- Top Bar -->
          <div class="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/50 to-transparent">
            <div class="flex flex-col">
              <span class="text-secondary font-sans font-bold text-xs uppercase tracking-widest mb-1">{{ currentImage.category }}</span>
              <span class="text-white/60 font-sans text-xs">{{ currentImageIndex + 1 }} / {{ filteredImages.length }}</span>
            </div>
            <button @click="closeLightbox" class="text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40">
              <XMarkIcon class="w-7 h-7" />
            </button>
          </div>

          <!-- Main Image -->
          <div class="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center p-4">
            <img :src="currentImage.src" :alt="currentImage.alt" class="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm" />
            
            <!-- Caption -->
            <div class="absolute bottom-[-3rem] left-0 right-0 text-center px-4">
              <p class="text-white text-lg font-heading tracking-wide">{{ currentImage.alt }}</p>
            </div>
          </div>

          <!-- Controls -->
          <button @click.stop="prevImage" class="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full">
            <ChevronLeftIcon class="w-8 h-8" />
          </button>
          <button @click.stop="nextImage" class="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full">
            <ChevronRightIcon class="w-8 h-8" />
          </button>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>