<template>
  <div>
    <div class="bg-primary py-20 text-white text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4">Downloads</h1>
      <p class="text-gray-300 max-w-2xl mx-auto px-4">Forms, prospectus, and documents</p>
    </div>

    <section class="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="downloadsStore.loading" class="flex justify-center">
        <Loader />
      </div>

      <div v-else class="space-y-4">
        <div v-for="download in downloadsStore.downloads" :key="download.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <DocumentArrowDownIcon class="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 class="font-semibold text-primary dark:text-white">{{ download.title }}</h3>
              <p v-if="download.description" class="text-sm text-gray-500 dark:text-gray-400">{{ download.description }}</p>
              <div class="flex gap-3 mt-1 text-xs text-gray-400">
                <span v-if="download.file_type">{{ download.file_type }}</span>
                <span v-if="download.file_size">{{ download.file_size }}</span>
                <span>{{ download.download_count }} downloads</span>
              </div>
            </div>
          </div>
          <a
            :href="download.file_path"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition text-sm font-medium flex items-center gap-2"
          >
            <ArrowDownTrayIcon class="w-4 h-4" />
            View pdf
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { DocumentArrowDownIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import { useDownloadsStore } from '@/stores/downloads.js'
import Loader from '@/components/common/Loader.vue'

const downloadsStore = useDownloadsStore()

onMounted(() => {
  if (!downloadsStore.downloads.length) downloadsStore.fetchDownloads()
})
</script>