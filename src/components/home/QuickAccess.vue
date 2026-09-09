<script setup>
import { RouterLink } from 'vue-router'
import { 
  AcademicCapIcon, 
  DocumentCheckIcon, 
  UserGroupIcon, 
  EnvelopeIcon 
} from '@heroicons/vue/24/outline'

const accessLinks = [
  {
    title: 'ACADEMICS',
    description: 'Discover our academic programmes.',
    icon: AcademicCapIcon,
    path: '/academics'
  },
  {
    title: 'ADMISSIONS',
    description: 'Begin your journey with us.',
    icon: DocumentCheckIcon,
    path: '/admissions'
  },
  {
    title: 'STUDENT LIFE',
    description: 'Experience life beyond the classroom.',
    icon: UserGroupIcon,
    path: '/student-life'
  },
  {
    title: 'CONTACT US',
    description: 'Get in touch with our school.',
    icon: EnvelopeIcon,
    path: '/contact'
  }
]
</script>

<template>
  <section class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
      <RouterLink
        v-for="link in accessLinks"
        :key="link.title"
        :to="link.path"
        class="group flex flex-col items-center text-center bg-white dark:bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl p-8 border-t-4 border-secondary transition-all duration-300 hover:-translate-y-2 hover:bg-primary dark:hover:bg-gray-800"
      >
        <div class="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
          <component :is="link.icon" class="w-8 h-8 text-primary dark:text-gray-300 group-hover:text-secondary transition-colors duration-300" />
        </div>
        <h3 class="text-lg font-heading font-bold text-primary dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
          {{ link.title }}
        </h3>
        <p class="text-sm font-body text-gray-600 dark:text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
          {{ link.description }}
        </p>
      </RouterLink>
    </div>
  </section>
</template>
