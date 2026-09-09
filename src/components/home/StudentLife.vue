<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div data-aos="fade-right">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
              BEYOND THE CLASSROOM
            </span>
            <div class="h-px w-12 bg-secondary"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">
            Vibrant Student Life
          </h2>
        </div>
        <RouterLink
          to="/student-life"
          class="inline-flex items-center text-primary dark:text-white font-bold hover:text-secondary dark:hover:text-secondary transition-colors duration-300 group"
          data-aos="fade-left"
        >
          Explore Student Life 
          <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </RouterLink>
      </div>

      <!-- Editorial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        
        <!-- Large Block: Sports -->
        <RouterLink 
          to="/sports" 
          class="md:col-span-8 relative rounded-xl overflow-hidden group h-64 md:h-auto"
          data-aos="fade-up" data-aos-delay="100"
        >
          <img src="/images/home/sports.jpg" alt="Sports and Athletics" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8">
            <span class="inline-block px-3 py-1 bg-secondary text-primary-dark font-bold text-xs uppercase tracking-wider rounded mb-3">Athletics</span>
            <h3 class="text-3xl font-heading font-bold text-white mb-2">Championship Sports</h3>
            <p class="text-gray-200 hidden md:block max-w-lg">Developing teamwork, resilience, and physical excellence through competitive and recreational sports programs.</p>
          </div>
        </RouterLink>

        <!-- Right Column (Stacked Small Blocks) -->
        <div class="md:col-span-4 grid grid-cols-1 gap-6 h-full">
          
          <!-- Small Block 1: Clubs -->
          <RouterLink 
            to="/clubs" 
            class="relative rounded-xl overflow-hidden group h-64 md:h-[calc(50%-0.75rem)]"
            data-aos="fade-up" data-aos-delay="200"
          >
            <img src="/images/home/clubs.jpg" alt="Clubs and Societies" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-xl font-heading font-bold text-white mb-1">Clubs & Societies</h3>
              <p class="text-gray-300 text-sm">Discover your passion among our 20+ active student organizations.</p>
            </div>
          </RouterLink>

          <!-- Small Block 2: Leadership -->
          <RouterLink 
            to="/student-life" 
            class="relative rounded-xl overflow-hidden group h-64 md:h-[calc(50%-0.75rem)]"
            data-aos="fade-up" data-aos-delay="300"
          >
            <img src="/images/home/leadership.jpg" alt="Student Leadership" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-xl font-heading font-bold text-white mb-1">Student Leadership</h3>
              <p class="text-gray-300 text-sm">Empowering the next generation of ethical and visionary leaders.</p>
            </div>
          </RouterLink>

        </div>
      </div>

    </div>
  </section>
</template>
