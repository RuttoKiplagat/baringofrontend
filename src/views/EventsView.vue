<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useEventsStore } from '@/stores/event.js'
import Loader from '@/components/common/Loader.vue'

const eventsStore = useEventsStore()

onMounted(() => {
  if (!eventsStore.events.length) {
    eventsStore.fetchEvents()
  }
})

// --- FILTERING ---
const searchQuery = ref('')
const activeFilter = ref('All')
const categories = ['All', 'Academic', 'Sports', 'Clubs', 'Leadership', 'Cultural', 'Events'] // "Events" as School Events

const filteredUpcoming = computed(() => {
  let result = eventsStore.upcomingEvents
  if (activeFilter.value !== 'All') {
    result = result.filter(e => e.category === activeFilter.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(e => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
  }
  return result
})

const filteredPast = computed(() => {
  let result = eventsStore.pastEvents
  if (activeFilter.value !== 'All') {
    result = result.filter(e => e.category === activeFilter.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(e => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
  }
  return result
})

const featuredEvent = computed(() => {
  // Just grab the very next upcoming event as featured
  return eventsStore.upcomingEvents[0] || null
})

// --- HELPERS ---
const formatMonth = (dStr) => {
  const d = new Date(dStr)
  return d.toLocaleString('en-US', { month: 'short' })
}
const formatDay = (dStr) => {
  const d = new Date(dStr)
  return d.getDate()
}
const formatTime = (dStr) => {
  const d = new Date(dStr)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen pb-20">
    
    <!-- HERO SECTION -->
    <section class="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 z-0">
        <!-- Abstract gradient texture -->
        <div class="absolute inset-0 bg-hero-pattern opacity-90"></div>
        <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-60"></div>
      </div>
      <div class="container-custom relative z-10 py-24 text-center">
        <div class="max-w-4xl mx-auto" data-aos="fade-up">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="h-px w-10 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-[0.2em] text-xs uppercase">School Life</span>
            <div class="h-px w-10 bg-secondary"></div>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            What's Happening at <br/><span class="text-secondary text-5xl md:text-7xl">Baringo High</span>
          </h1>
          <p class="text-lg text-gray-300 font-body mb-0 max-w-2xl mx-auto leading-relaxed">
            Stay engaged with our vibrant community. Explore academic milestones, athletic championships, cultural festivals, and leadership summits.
          </p>
        </div>
      </div>
    </section>

    <!-- LOADING STATE -->
    <div v-if="eventsStore.loading" class="py-24 flex justify-center">
      <Loader />
    </div>

    <template v-else>
      <!-- FEATURED EVENT -->
      <section v-if="featuredEvent" class="relative -mt-16 z-20 container-custom mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl shadow-elegant-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col lg:flex-row group" data-aos="fade-up" data-aos-delay="100">
          <div class="lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[450px]">
            <!-- Placeholder image based on category -->
            <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&q=80&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Featured Event" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent lg:hidden"></div>
            <div class="absolute top-6 left-6 bg-secondary text-navy font-bold font-sans text-xs uppercase tracking-wider px-4 py-1.5 rounded-full z-10 shadow-lg">Featured</div>
          </div>
          <div class="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-4 text-secondary font-bold font-sans text-sm uppercase tracking-wider">
              <CalendarIcon class="w-5 h-5" /> 
              {{ new Date(featuredEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
            </div>
            <h2 class="text-3xl lg:text-4xl font-heading font-bold text-navy dark:text-white mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
              {{ featuredEvent.title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8 line-clamp-3">
              {{ featuredEvent.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 text-sm text-gray-500 dark:text-gray-400 font-sans">
              <div class="flex items-center gap-2"><ClockIcon class="w-5 h-5 text-secondary" /> {{ formatTime(featuredEvent.date) }}</div>
              <div class="flex items-center gap-2"><MapPinIcon class="w-5 h-5 text-secondary" /> {{ featuredEvent.location }}</div>
            </div>
            <div>
              <RouterLink :to="`/events/${featuredEvent.slug || featuredEvent.id}`" class="inline-flex items-center justify-center px-8 py-3.5 bg-navy dark:bg-white text-white dark:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-navy-light dark:hover:bg-gray-200 transition-colors">
                View Details <ArrowRightIcon class="w-4 h-4 ml-2" />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- FILTERS & SEARCH -->
      <section class="container-custom mb-12 relative z-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700" data-aos="fade-up">
          <div class="flex flex-wrap gap-2 lg:gap-3">
            <button 
              v-for="cat in categories" :key="cat"
              @click="activeFilter = cat"
              class="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
              :class="activeFilter === cat ? 'bg-navy dark:bg-secondary text-white dark:text-navy border-navy dark:border-secondary' : 'bg-transparent text-gray-600 dark:text-gray-400 border-transparent hover:border-gray-200 dark:hover:border-gray-600'"
            >
              {{ cat }}
            </button>
          </div>
          <div class="relative w-full md:w-64 shrink-0">
            <MagnifyingGlassIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search events..." 
              class="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-sans focus:outline-none focus:border-secondary dark:text-white transition-colors"
            />
          </div>
        </div>
      </section>

      <!-- UPCOMING EVENTS TIMELINE -->
      <section class="container-custom mb-24">
        <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
          <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Upcoming Events</h2>
          <div class="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
        </div>

        <div v-if="filteredUpcoming.length === 0" class="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
          <CalendarIcon class="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p class="text-gray-500 font-body text-lg">No upcoming events match your criteria.</p>
        </div>

        <div v-else class="space-y-6">
          <RouterLink
            v-for="(event, idx) in filteredUpcoming" :key="event.id"
            :to="`/events/${event.slug || event.id}`"
            class="group flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up" :data-aos-delay="idx * 50"
          >
            <!-- Date Block -->
            <div class="bg-navy dark:bg-gray-900 md:w-48 shrink-0 flex flex-col items-center justify-center p-6 md:p-8 text-center border-l-4 border-secondary">
              <span class="text-secondary font-sans font-bold text-sm uppercase tracking-widest mb-1">{{ formatMonth(event.date) }}</span>
              <span class="text-4xl md:text-5xl font-heading font-bold text-white">{{ formatDay(event.date) }}</span>
            </div>
            
            <!-- Content -->
            <div class="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <div class="flex items-center justify-between mb-3">
                <span class="text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">{{ event.category }}</span>
              </div>
              <h3 class="text-xl md:text-2xl font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors duration-300">{{ event.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-body text-sm line-clamp-2 mb-4">{{ event.description }}</p>
              
              <div class="flex flex-wrap gap-4 text-xs font-sans text-gray-500 dark:text-gray-400 mt-auto">
                <div class="flex items-center gap-1.5"><ClockIcon class="w-4 h-4 text-secondary" /> {{ formatTime(event.date) }}</div>
                <div class="flex items-center gap-1.5"><MapPinIcon class="w-4 h-4 text-secondary" /> {{ event.location }}</div>
              </div>
            </div>
            
            <!-- Action -->
            <div class="hidden lg:flex items-center justify-center pr-8">
              <div class="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-white text-gray-400 transition-all duration-300">
                <ArrowRightIcon class="w-5 h-5" />
              </div>
            </div>
          </RouterLink>
        </div>
      </section>

      <!-- PAST EVENTS GRID -->
      <section v-if="filteredPast.length > 0" class="container-custom">
        <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-navy dark:text-white text-opacity-80">Previous Events</h2>
          <div class="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="(event, idx) in filteredPast.slice(0, 6)" :key="event.id"
            :to="`/events/${event.slug || event.id}`"
            class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            data-aos="fade-up" :data-aos-delay="idx * 50"
          >
            <div class="p-6 flex-1">
              <div class="text-xs font-sans font-bold text-secondary uppercase tracking-wider mb-2">
                {{ formatMonth(event.date) }} {{ formatDay(event.date) }}, {{ new Date(event.date).getFullYear() }}
              </div>
              <h3 class="text-lg font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors">{{ event.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 font-body text-sm line-clamp-2">{{ event.description }}</p>
            </div>
            <div class="px-6 py-4 border-t border-gray-50 dark:border-gray-700/50 flex items-center justify-between">
              <span class="text-xs font-sans font-medium text-gray-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded">{{ event.category }}</span>
              <span class="text-xs font-sans font-bold text-navy dark:text-white group-hover:text-secondary transition-colors inline-flex items-center">
                View Recap <ArrowRightIcon class="w-3 h-3 ml-1" />
              </span>
            </div>
          </RouterLink>
        </div>
      </section>
    </template>

  </div>
</template>