import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { galleryService } from '@/services/galleryService.js'

export const useGalleryStore = defineStore('gallery', () => {
  const images = ref([])
  const loading = ref(false)
  const error = ref(null)

  const categories = computed(() => [
    ...new Set(images.value.map((img) => img.category)),
  ])

  const fetchGallery = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await galleryService.getAll()
      images.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    images,
    loading,
    error,
    categories,
    fetchGallery,
  }
})