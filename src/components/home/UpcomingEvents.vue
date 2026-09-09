<script setup>
import { onMounted } from 'vue'
import { MapPinIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useEventsStore } from '@/stores/event.js'
import Loader from '@/components/common/Loader.vue'
import { formatDate } from '@/utils/formatDate.js'
import { RouterLink } from 'vue-router'

const eventsStore = useEventsStore()

const formatMonth = (date) => formatDate(date, { month: 'short' })
const formatDay = (date) => new Date(date).getDate()

onMounted(() => {
  if (eventsStore && !eventsStore.events?.length) {
    if(typeof eventsStore.fetchEvents === 'function') {
      eventsStore.fetchEvents()
    }
  }
})
</script>

<template>
  <section class="py-20 lg:py-28 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        <!-- Left Text/Heading Column -->
        <div class="lg:w-1/3" data-aos="fade-right">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
              CALENDAR
            </span>
            <div class="h-px w-12 bg-secondary"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
            Upcoming Events
          </h2>
          <p class="text-gray-600 dark:text-gray-300 font-body mb-8 text-lg">
            Stay engaged with our vibrant school community. Mark your calendar for these important dates, academic milestones, and cultural activities.
          </p>
          <RouterLink 
            to="/events"
            class="inline-flex items-center text-primary dark:text-white font-bold hover:text-secondary dark:hover:text-secondary transition-colors duration-300 group"
          >
            View Full Calendar
            <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        <!-- Right Events List -->
        <div class="lg:w-2/3">
          <div v-if="eventsStore?.loading" class="flex justify-center py-12">
            <Loader />
          </div>

          <div v-else-if="!eventsStore?.upcomingEvents || eventsStore.upcomingEvents.length === 0" class="text-center text-gray-500 py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
            No upcoming events at this time.
          </div>

          <div v-else class="space-y-6">
            <div 
              v-for="(event, index) in eventsStore.upcomingEvents.slice(0, 3)" 
              :key="event.id"
              class="group flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-primary dark:hover:bg-primary-dark transition-colors duration-300 shadow-sm hover:shadow-xl"
              data-aos="fade-up"
              :data-aos-delay="index * 150"
            >
              <!-- Date Box -->
              <div class="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-lg p-4 text-center min-w-[80px] sm:mr-6 mb-4 sm:mb-0 group-hover:border-secondary transition-colors duration-300">
                <div class="text-xs uppercase font-bold text-primary dark:text-gray-400 group-hover:text-primary dark:group-hover:text-gray-300">{{ formatMonth(event.start_date) }}</div>
                <div class="text-3xl font-heading font-bold text-primary dark:text-white">{{ formatDay(event.start_date) }}</div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span class="text-xs font-bold px-2 py-1 bg-secondary/20 text-secondary rounded uppercase tracking-wider">
                    {{ event.status }}
                  </span>
                </div>
                <h3 class="font-heading font-bold text-xl text-primary dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {{ event.title }}
                </h3>
                <div class="flex items-center text-gray-500 dark:text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  <MapPinIcon class="w-4 h-4 mr-1" />
                  {{ event.location || 'School Grounds' }}
                </div>
              </div>

              <!-- Arrow -->
              <div class="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 group-hover:bg-secondary transition-colors duration-300 ml-4">
                <ArrowRightIcon class="w-5 h-5 text-primary group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
