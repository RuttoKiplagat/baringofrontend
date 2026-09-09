<script setup>
import { useCounter } from '@/composables/useCounter.js'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
import { ref, onMounted, watch } from 'vue'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  TrophyIcon 
} from '@heroicons/vue/24/outline'

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

const stats = [
  { value: 50, suffix: '+', label: 'Years of Excellence', icon: AcademicCapIcon },
  { value: 1200, suffix: '+', label: 'Students', icon: UserGroupIcon },
  { value: 50, suffix: '+', label: 'Teachers', icon: BookOpenIcon },
  { value: 20, suffix: '+', label: 'Clubs & Activities', icon: TrophyIcon },
]

// Create counters for each stat
const counters = stats.map(stat => {
  const { count, startCounting } = useCounter(stat.value, 2500)
  return { ...stat, count, startCounting }
})

watch(isVisible, (visible) => {
  if (visible) {
    counters.forEach(c => c.startCounting())
  }
})
</script>

<template>
  <section ref="elementRef" class="py-24 bg-primary dark:bg-gray-950 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center divide-x-0 lg:divide-x lg:divide-white/20">
        <div 
          v-for="(stat, index) in counters" 
          :key="stat.label" 
          class="px-4"
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <component :is="stat.icon" class="w-8 h-8 text-secondary" />
            </div>
          </div>
          <div class="text-5xl md:text-6xl font-bold text-white font-heading mb-3 flex items-center justify-center">
            <span>{{ stat.count }}</span>
            <span class="text-secondary">{{ stat.suffix }}</span>
          </div>
          <div class="text-gray-300 font-sans tracking-wide uppercase text-sm font-semibold">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
