<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
    :class="[
      isScrolled || !isHeroPage
        ? 'bg-white dark:bg-darkbg shadow-elegant'
        : 'bg-transparent'
    ]"
  >
    <!-- Scroll Progress Bar -->
    <div
      class="absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-150"
      :style="{ width: scrollProgress + '%' }"
    />

    <nav class="container-custom">
      <div class="flex items-center justify-between h-18 lg:h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center gap-3 group"
          @click="closeMobileMenu"
        >
          <div
            class="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 group-hover:scale-105"
            :class="[
              isScrolled || !isHeroPage
                ? 'bg-primary text-white'
                : 'bg-secondary text-primary-dark'
            ]"
          >
            B
          </div>
          <div class="flex flex-col">
            <span
              class="font-heading font-bold text-lg leading-tight transition-colors duration-300"
              :class="[
                isScrolled || !isHeroPage
                  ? 'text-primary dark:text-white'
                  : 'text-white'
              ]"
            >
              Baringo High
            </span>
            <span
              class="text-[10px] tracking-widest uppercase font-sans font-medium leading-tight transition-colors duration-300"
              :class="[
                isScrolled || !isHeroPage
                  ? 'text-secondary'
                  : 'text-secondary-light'
              ]"
            >
              School
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <template v-for="item in navigation" :key="item.path">
            <!-- Item with dropdown -->
            <div
              v-if="item.children"
              class="relative group"
              @mouseenter="openDropdown = item.label"
              @mouseleave="openDropdown = null"
            >
              <router-link
                :to="item.path"
                class="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200"
                :class="navLinkClass(item)"
              >
                {{ item.label }}
                <ChevronDownIcon
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="{ 'rotate-180': openDropdown === item.label }"
                />
              </router-link>

              <!-- Dropdown Menu -->
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-2 scale-95"
              >
                <div
                  v-show="openDropdown === item.label"
                  class="absolute top-full left-0 pt-2 w-56"
                >
                  <div class="bg-white dark:bg-dark-surface rounded-xl shadow-elegant-lg border border-gray-100 dark:border-dark-border overflow-hidden py-2">
                    <router-link
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path"
                      class="block px-5 py-2.5 text-sm font-sans text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-colors"
                      active-class="text-primary dark:text-secondary bg-primary/5 dark:bg-white/5"
                    >
                      {{ child.label }}
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Simple nav item -->
            <router-link
              v-else
              :to="item.path"
              class="px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200"
              :class="navLinkClass(item)"
              active-class="!text-secondary"
            >
              {{ item.label }}
            </router-link>
          </template>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <!-- Search Button -->
          <button
            @click="searchStore.openSearch()"
            class="p-2.5 rounded-lg transition-all duration-200"
            :class="actionBtnClass"
            aria-label="Search"
          >
            <MagnifyingGlassIcon class="w-5 h-5" />
          </button>

          <!-- Dark Mode Toggle -->
          <button
            @click="themeStore.toggleTheme()"
            class="p-2.5 rounded-lg transition-all duration-200"
            :class="actionBtnClass"
            :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <SunIcon v-if="themeStore.isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="uiStore.toggleMobileMenu()"
            class="lg:hidden p-2.5 rounded-lg transition-all duration-200"
            :class="actionBtnClass"
            :aria-label="uiStore.isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            aria-expanded="false"
          >
            <XMarkIcon v-if="uiStore.isMobileMenuOpen" class="w-5 h-5" />
            <Bars3Icon v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-screen"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-screen"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-show="uiStore.isMobileMenuOpen"
        class="lg:hidden overflow-hidden bg-white dark:bg-darkbg border-t border-gray-100 dark:border-dark-border"
      >
        <div class="container-custom py-4 space-y-1">
          <template v-for="item in navigation" :key="item.path">
            <!-- Mobile item with children -->
            <div v-if="item.children">
              <button
                @click="toggleMobileDropdown(item.label)"
                class="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-sans font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
              >
                {{ item.label }}
                <ChevronDownIcon
                  class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': mobileDropdown === item.label }"
                />
              </button>
              <transition
                enter-active-class="transition-all duration-200"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-150"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-show="mobileDropdown === item.label" class="overflow-hidden pl-4">
                  <router-link
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white rounded-lg transition-colors"
                    @click="closeMobileMenu"
                  >
                    {{ child.label }}
                  </router-link>
                </div>
              </transition>
            </div>

            <!-- Simple mobile item -->
            <router-link
              v-else
              :to="item.path"
              class="block px-4 py-3 rounded-lg text-sm font-sans font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
              active-class="text-primary dark:text-secondary bg-primary/5"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </router-link>
          </template>

          <!-- Mobile CTA -->
          <div class="pt-4 border-t border-gray-100 dark:border-dark-border">
            <router-link
              to="/admissions"
              class="block w-full text-center btn-primary"
              @click="closeMobileMenu"
            >
              Apply Now
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'
import { useThemeStore } from '@/stores/theme'
import { useSearchStore } from '@/stores/search'
import { useUiStore } from '@/stores/ui'
import navigation from '@/data/navigation'

const route = useRoute()
const themeStore = useThemeStore()
const searchStore = useSearchStore()
const uiStore = useUiStore()

const isScrolled = ref(false)
const scrollProgress = ref(0)
const openDropdown = ref(null)
const mobileDropdown = ref(null)

// Hero pages where navbar starts transparent
const heroPages = ['/', '/about', '/academics', '/student-life', '/admissions']
const isHeroPage = computed(() => heroPages.includes(route.path))

const navLinkClass = computed(() => (item) => {
  if (isScrolled.value || !isHeroPage.value) {
    return 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-surface'
  }
  return 'text-white/90 hover:text-white hover:bg-white/10'
})

const actionBtnClass = computed(() => {
  if (isScrolled.value || !isHeroPage.value) {
    return 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface'
  }
  return 'text-white/90 hover:text-white hover:bg-white/10'
})

function toggleMobileDropdown(label) {
  mobileDropdown.value = mobileDropdown.value === label ? null : label
}

function closeMobileMenu() {
  uiStore.closeMobileMenu()
  mobileDropdown.value = null
}

function handleScroll() {
  const scrollTop = window.scrollY
  isScrolled.value = scrollTop > 50

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

  uiStore.setScrollY(scrollTop)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
