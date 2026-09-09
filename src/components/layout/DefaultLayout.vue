<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-darkbg transition-colors duration-300">
    <!-- Loading Screen -->
    <LoadingScreen v-if="uiStore.isLoading" />

    <template v-else>
      <TheHeader />

      <main class="flex-1">
        <router-view v-slot="{ Component }">
          <transition
            name="page"
            mode="out-in"
            @before-enter="onBeforeEnter"
          >
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </main>

      <TheFooter />

      <!-- Floating Elements -->
      <ScrollToTop />
      <WhatsAppButton />

      <!-- Global Overlays -->
      <SearchModal />
      <ToastContainer />
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUiStore } from '@/stores/ui'
import { useThemeStore } from '@/stores/theme'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
import ScrollToTop from '@/components/common/ScrollToTop.vue'
import WhatsAppButton from '@/components/common/WhatsAppButton.vue'
import SearchModal from '@/components/common/SearchModal.vue'
import ToastContainer from '@/components/common/ToastContainer.vue'

const uiStore = useUiStore()
const themeStore = useThemeStore()

function onBeforeEnter() {
  window.scrollTo({ top: 0 })
}

onMounted(() => {
  themeStore.initTheme()
  // Simulate loading screen
  setTimeout(() => {
    uiStore.setLoading(false)
  }, 1200)
})
</script>

<style>
.page-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-leave-active {
  transition: opacity 0.2s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
}
</style>
