<template>
  <footer class="bg-navy dark:bg-darkbg border-t border-navy-light dark:border-dark-border">
    <!-- Main Footer Content -->
    <div class="container-custom section-padding pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- School Info -->
        <div class="lg:col-span-1">
          <router-link to="/" class="flex items-center gap-3 mb-6 group">
            <div class="w-11 h-11 bg-secondary rounded-full flex items-center justify-center font-heading font-bold text-lg text-primary-dark transition-transform group-hover:scale-105">
              <img src="/bhs.png" alt="Baringo High Logo" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="font-heading font-bold text-lg text-white leading-tight">Baringo High</span>
              <span class="text-[10px] tracking-widest uppercase font-sans text-secondary-light">School</span>
            </div>
          </router-link>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            A premier institution of academic excellence in Baringo County, Kenya.
            Nurturing leaders with integrity, discipline, and innovation since 1960.
          </p>
          <!-- Social Media -->
          <div class="flex items-center gap-3">
            <a
              v-for="(url, platform) in schoolInfo.socialMedia"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary/20 flex items-center justify-center text-gray-400 hover:text-secondary transition-all duration-200"
              :aria-label="platform"
            >
              <component :is="socialIcons[platform]" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-heading font-semibold text-white text-lg mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-secondary text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Departments -->
        <div>
          <h4 class="font-heading font-semibold text-white text-lg mb-6">Departments</h4>
          <ul class="space-y-3">
            <li v-for="link in departmentLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-secondary text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact & Newsletter -->
        <div>
          <h4 class="font-heading font-semibold text-white text-lg mb-6">Contact Us</h4>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3">
              <MapPinIcon class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span class="text-gray-400 text-sm">{{ schoolInfo.address }}</span>
            </li>
            <li class="flex items-start gap-3">
              <PhoneIcon class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <span class="text-gray-400 text-sm block">{{ schoolInfo.phone }}</span>
                <span class="text-gray-400 text-sm block">{{ schoolInfo.altPhone }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <EnvelopeIcon class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span class="text-gray-400 text-sm">{{ schoolInfo.email }}</span>
            </li>
          </ul>

          <!-- Newsletter -->
          <div>
            <h5 class="font-sans font-semibold text-white text-sm mb-3">Newsletter</h5>
            <form @submit.prevent="subscribeNewsletter" class="flex gap-2">
              <input
                v-model="email"
                type="email"
                placeholder="Your email"
                required
                class="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-secondary hover:bg-secondary-light text-primary-dark rounded-lg text-sm font-semibold transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/5">
      <div class="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-xs font-sans">
          &copy; {{ currentYear }} Baringo High School. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <router-link to="/about" class="text-gray-500 hover:text-gray-300 text-xs font-sans transition-colors">
            Privacy Policy
          </router-link>
          <router-link to="/about" class="text-gray-500 hover:text-gray-300 text-xs font-sans transition-colors">
            Terms of Service
          </router-link>
          <router-link to="/downloads" class="text-gray-500 hover:text-gray-300 text-xs font-sans transition-colors">
            Downloads
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, h } from 'vue'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import schoolInfo from '@/data/schoolInfo'
import api from '@/services/api'

const currentYear = new Date().getFullYear()
const email = ref('')

import departmentsData from '@/data/departments.js'

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'News & Events', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Downloads', path: '/downloads' }
]

const departmentLinks = departmentsData.slice(0, 6).map(dept => ({
  label: dept.name,
  path: `/departments/${dept.slug}`
}))

// Simple SVG icons for social media as render functions
const socialIcons = {
  facebook: { render: () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })]) },
  twitter: { render: () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' })]) },
  instagram: { render: () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' })]) },
  youtube: { render: () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z' }), h('path', { d: 'M9.545 15.568V8.432L15.818 12l-6.273 3.568z', fill: '#0c1e36' })]) }
}

async function subscribeNewsletter() {
  if (!email.value) return
  await api.subscribeNewsletter(email.value)
  email.value = ''
}
</script>
