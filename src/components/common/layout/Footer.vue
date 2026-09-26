<template>
  <footer class="bg-primary text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center font-bold text-primary text-lg">

              <img
                src="/bhs.png"
                alt="Baringo High Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="font-heading font-bold text-xl">Baringo High</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            Empowering students with knowledge, discipline, and integrity since 1964.
          </p>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li><RouterLink to="/about" class="hover:text-white transition">About Us</RouterLink></li>
            <li><RouterLink to="/admissions" class="hover:text-white transition">Admissions</RouterLink></li>
            <li><RouterLink to="/gallery" class="hover:text-white transition">Gallery</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white transition">Contact</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-lg mb-4 text-secondary">Departments</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li><RouterLink to="/departments" class="hover:text-white transition">Mathematics</RouterLink></li>
            <li><RouterLink to="/departments" class="hover:text-white transition">Sciences</RouterLink></li>
            <li><RouterLink to="/departments" class="hover:text-white transition">Languages</RouterLink></li>
            <li><RouterLink to="/departments" class="hover:text-white transition">Humanities</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-semibold text-lg mb-4 text-secondary">Contact</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>P.O. Box 45, Eldama Ravine</li>
            <li>Baringo County, Kenya</li>
            <li>Tel: +254 53 42100</li>
            <li>info@baringohigh.ac.ke</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p> Baringo High School. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>