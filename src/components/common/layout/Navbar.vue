<template>
  <nav class="bg-primary text-white sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <RouterLink to="/" class="flex items-center space-x-3">
          <div 
          >
        <img src="/bhs.png" alt="Baringo High School" class="w-10 h-10" /></div>
          <span class="font-heading font-bold text-xl">Baringo High</span>
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="hover:text-secondary transition-colors font-medium"
            active-class="text-secondary">
            {{ link.label }}
          </RouterLink>
          <button @click="themeStore.toggleDark()" class="p-2 rounded-lg hover:bg-white/10 transition">
            <SunIcon v-if="themeStore.isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
        </div>

        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2">
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="md:hidden bg-primary border-t border-white/10">
      <div class="px-4 py-3 space-y-2">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
          @click="mobileOpen = false"
          class="block py-2 hover:text-secondary transition-colors">
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/teachers', label: 'Staff' },
  { to: '/news', label: 'News' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]
</script>