<template>
  <div class="min-h-screen flex flex-col bg-background dark:bg-darkbg transition-colors">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/common/layout/Navbar.vue'
import Footer from '@/components/common/layout/Footer.vue'
</script>