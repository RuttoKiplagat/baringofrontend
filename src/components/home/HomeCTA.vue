<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative py-24 bg-primary dark:bg-gray-950 overflow-hidden border-t-4 border-secondary">
    <!-- Decorative Pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0l30 30-30 30L0 30z" fill="none" stroke="currentColor" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-pattern)" class="text-white"/>
      </svg>
    </div>
    
    <div class="absolute right-0 bottom-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20"></div>
    <div class="absolute left-0 top-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-wide">
        READY TO BEGIN YOUR JOURNEY?
      </h2>
      <p class="text-xl text-gray-300 font-body mb-10 max-w-2xl mx-auto">
        Discover opportunities at Baringo High School. Join a community dedicated to excellence, leadership, and lifelong learning.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <RouterLink 
          to="/admissions" 
          class="w-full sm:w-auto px-10 py-4 bg-secondary text-primary-dark font-bold font-sans uppercase tracking-wider rounded shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Apply Now
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold font-sans uppercase tracking-wider rounded hover:bg-white hover:text-primary transition-all duration-300"
        >
          Contact Us
        </RouterLink>
      </div>
    </div>
  </section>
</template>
