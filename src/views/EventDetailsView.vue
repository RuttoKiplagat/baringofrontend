<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import eventsData from '@/data/events.js'
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon,
  TagIcon,
  ArrowLeftIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const slug = computed(() => route.params.slug)

const event = computed(() => {
  return eventsData.find(e => e.slug === slug.value) || eventsData.find(e => String(e.id) === String(slug.value))
})

const relatedEvents = computed(() => {
  if (!event.value) return []
  return eventsData.filter(e => e.id !== event.value.id && e.status === 'upcoming').slice(0, 3)
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

const formatTime = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const currentLightboxImage = computed(() => event.value?.gallery?.[lightboxIndex.value])

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
  if(!event.value?.gallery) return
  lightboxIndex.value = (lightboxIndex.value + 1) % event.value.gallery.length
}
function prevLightbox() {
  if(!event.value?.gallery) return
  lightboxIndex.value = (lightboxIndex.value - 1 + event.value.gallery.length) % event.value.gallery.length
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
    <div v-if="!event" class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <CalendarIcon class="w-20 h-20 text-gray-300 dark:text-gray-700 mb-6" />
      <h1 class="text-3xl font-heading font-bold text-navy dark:text-white mb-4">Event Not Found</h1>
      <p class="text-gray-500 font-body mb-8">The event you are looking for does not exist or has passed.</p>
      <RouterLink to="/events" class="inline-flex items-center px-6 py-3 bg-navy text-white font-sans font-bold text-sm uppercase rounded shadow-lg hover:bg-secondary transition-colors">
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back to Events
      </RouterLink>
    </div>

    <!-- MAIN CONTENT -->
    <template v-else>
      
      <!-- 1. HERO -->
      <section class="relative min-h-[50vh] flex items-end pb-16 pt-32 bg-navy dark:bg-gray-950 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80'" class="w-full h-full object-cover opacity-50 mix-blend-overlay" :alt="event.title" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>
        </div>
        <div class="container-custom relative z-10">
          <RouterLink to="/events" class="inline-flex items-center text-secondary/80 hover:text-secondary font-sans font-bold text-xs uppercase tracking-wider mb-8 transition-colors group">
            <ArrowLeftIcon class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Events
          </RouterLink>
          
          <div class="max-w-4xl" data-aos="fade-up">
            <div class="flex flex-wrap items-center gap-4 text-xs font-sans font-bold text-gray-300 uppercase tracking-wider mb-6">
              <span :class="event.status === 'upcoming' ? 'bg-secondary text-navy' : 'bg-gray-500 text-white'" class="px-3 py-1 rounded">
                {{ event.status }}
              </span>
              <span class="flex items-center gap-1.5"><CalendarIcon class="w-4 h-4" /> {{ formatDate(event.date) }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {{ event.title }}
            </h1>
          </div>
        </div>
      </section>

      <!-- 2. INFORMATION CARDS -->
      <section class="container-custom relative z-20 -mt-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <CalendarIcon class="w-5 h-5 text-secondary" />
            </div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Date</span>
            <span class="text-sm font-sans font-semibold text-navy dark:text-white">{{ formatDate(event.date) }}</span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <ClockIcon class="w-5 h-5 text-secondary" />
            </div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Time</span>
            <span class="text-sm font-sans font-semibold text-navy dark:text-white">{{ formatTime(event.date) }}</span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <MapPinIcon class="w-5 h-5 text-secondary" />
            </div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Location</span>
            <span class="text-sm font-sans font-semibold text-navy dark:text-white">{{ event.location }}</span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <UserGroupIcon class="w-5 h-5 text-secondary" />
            </div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Participants</span>
            <span class="text-sm font-sans font-semibold text-navy dark:text-white">{{ event.participants || 'Open to all' }}</span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hidden lg:flex">
            <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <TagIcon class="w-5 h-5 text-secondary" />
            </div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Category</span>
            <span class="text-sm font-sans font-semibold text-navy dark:text-white">{{ event.category }}</span>
          </div>

        </div>
      </section>

      <!-- 3. ABOUT & SCHEDULE -->
      <section class="section-padding container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- About -->
          <div data-aos="fade-right">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">About The Event</h2>
            <div class="prose prose-lg dark:prose-invert font-body text-gray-700 dark:text-gray-300">
              <p>{{ event.description }}</p>
            </div>
          </div>

          <!-- Schedule Timeline -->
          <div v-if="event.schedule && event.schedule.length > 0" data-aos="fade-left">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">Event Schedule</h2>
            <div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
              
              <div v-for="(item, idx) in event.schedule" :key="idx" class="relative pl-8 group">
                <!-- Dot -->
                <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-secondary group-hover:bg-secondary transition-colors"></div>
                <!-- Content -->
                <div class="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700 group-hover:shadow-md transition-shadow">
                  <span class="text-secondary font-sans font-bold text-sm tracking-wider uppercase block mb-1">{{ item.time }}</span>
                  <h4 class="text-lg font-heading font-bold text-navy dark:text-white">{{ item.activity }}</h4>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- 4. GALLERY -->
      <section v-if="event.gallery && event.gallery.length > 0" class="section-padding bg-gray-50 dark:bg-gray-900/30">
        <div class="container-custom">
          <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Event Highlights</h2>
            <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="(img, idx) in event.gallery" :key="idx"
              @click="openLightbox(idx)"
              class="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              data-aos="fade-up" :data-aos-delay="idx * 50"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. RELATED EVENTS -->
      <section class="section-padding bg-white dark:bg-darkbg border-t border-gray-100 dark:border-gray-800">
        <div class="container-custom">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">More Upcoming Events</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RouterLink 
              v-for="(rel, idx) in relatedEvents" :key="rel.id"
              :to="`/events/${rel.slug}`"
              class="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block"
              data-aos="fade-up" :data-aos-delay="idx * 100"
            >
              <div class="text-secondary font-sans font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <CalendarIcon class="w-4 h-4" /> {{ formatDate(rel.date) }}
              </div>
              <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors line-clamp-1">{{ rel.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 font-body text-sm line-clamp-2 mb-4">{{ rel.description }}</p>
              <span class="inline-flex items-center text-navy dark:text-white font-sans font-bold text-xs uppercase tracking-wider group-hover:text-secondary transition-colors">
                View Event <ArrowRightIcon class="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </RouterLink>
          </div>
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
