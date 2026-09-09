<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const departments = [
  { name: 'Sciences', desc: 'Fostering analytical thinking and innovation through Biology, Chemistry, and Physics.', link: '/departments' },
  { name: 'Mathematics', desc: 'Developing logical reasoning and problem-solving skills for real-world applications.', link: '/departments' },
  { name: 'Humanities', desc: 'Understanding society, history, and geography to build well-rounded global citizens.', link: '/departments' },
  { name: 'Languages', desc: 'Enhancing communication in English, Kiswahili, and foreign languages.', link: '/departments' },
  { name: 'Technical & Applied', desc: 'Practical skills in Agriculture, Business Studies, and Home Science.', link: '/departments' },
  { name: 'ICT', desc: 'Preparing students for the digital future with modern computer studies.', link: '/departments' }
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Section: Title & Intro -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div data-aos="fade-right" class="max-w-2xl">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
              ACADEMIC EXCELLENCE
            </span>
            <div class="h-px w-12 bg-secondary"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
            Our Departments
          </h2>
          <p class="text-gray-600 dark:text-gray-300 font-body text-lg">
            We offer a comprehensive curriculum designed to challenge and inspire. Our diverse departments work collaboratively to provide an education that prepares students for higher learning and beyond.
          </p>
        </div>
        <RouterLink
          to="/departments"
          class="inline-flex items-center text-primary dark:text-white font-bold hover:text-secondary dark:hover:text-secondary transition-colors duration-300 group whitespace-nowrap"
          data-aos="fade-left"
        >
          View Departments 
          <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </RouterLink>
      </div>

      <!-- Department List -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        <div 
          v-for="(dept, index) in departments" 
          :key="dept.name"
          class="group border-t border-gray-200 dark:border-gray-800 pt-6"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl font-heading font-bold text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">
              {{ dept.name }}
            </h3>
            <RouterLink :to="dept.link" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300 shrink-0">
              <ArrowRightIcon class="w-4 h-4 text-primary group-hover:text-white" />
            </RouterLink>
          </div>
          <p class="text-gray-600 dark:text-gray-400 font-body">
            {{ dept.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
