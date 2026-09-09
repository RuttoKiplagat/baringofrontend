<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/home/school.jpg"
        alt="Baringo High School"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Premium Overlay: Navy to transparent gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent dark:from-gray-950/95 dark:via-gray-900/80"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex items-center gap-4 mb-6">
          <div class="h-px w-12 bg-secondary"></div>
          <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
            Baringo High School
          </span>
          <div class="h-px w-12 bg-secondary"></div>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8 drop-shadow-lg">
          INSPIRING EXCELLENCE.<br />
          <span class="text-gray-100">SHAPING LEADERS.</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-200 font-body mb-10 max-w-2xl leading-relaxed">
          Committed to academic excellence, discipline, character development, and leadership since 1964. Join us in shaping the future of Kenya.
        </p>

        <div class="flex flex-col sm:flex-row gap-5">
          <RouterLink
            to="/about"
            class="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold font-sans rounded shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover Baringo High
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
          <RouterLink
            to="/admissions"
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold font-sans rounded hover:bg-white hover:text-primary transition-all duration-300"
          >
            Admissions
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div class="w-[30px] h-[50px] border-2 border-white/50 rounded-full flex justify-center p-2">
        <div class="w-1.5 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  </section>
</template>
