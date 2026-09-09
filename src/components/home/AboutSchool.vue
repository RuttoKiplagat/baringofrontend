<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Image Column -->
        <div class="relative" data-aos="fade-right">
          <div class="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/images/home/student.jpg" 
              alt="Students walking on campus" 
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative elements -->
          <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 dark:bg-secondary/5 rounded-full z-0 blur-3xl"></div>
          <div class="absolute -top-8 -right-8 w-full h-full border-2 border-secondary/30 rounded-lg z-0 translate-x-4 translate-y-4"></div>
        </div>

        <!-- Content Column -->
        <div data-aos="fade-left">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
              ABOUT BARINGO HIGH SCHOOL
            </span>
            <div class="h-px w-12 bg-secondary"></div>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white leading-tight mb-8">
            Building Character.<br />
            Inspiring Excellence.
          </h2>
          
          <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300 font-body mb-10 leading-relaxed">
            <p>
              Founded on the principles of academic rigor and moral integrity, Baringo High School stands as a premier educational institution in the Rift Valley region. We believe that true education extends beyond the classroom, nurturing the whole student—mind, body, and character.
            </p>
            <p>
              Our holistic approach combines an innovative curriculum with robust co-curricular activities, ensuring our students develop the leadership skills, discipline, and ethical grounding needed to excel in a rapidly changing world.
            </p>
          </div>

          <RouterLink
            to="/about"
            class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white dark:bg-white dark:text-primary font-bold font-sans rounded hover:bg-primary-dark dark:hover:bg-gray-200 transition-colors duration-300 shadow-lg"
          >
            Learn More
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
