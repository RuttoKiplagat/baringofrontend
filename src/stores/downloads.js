import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDownloadsStore = defineStore('downloads-store', () => {
  const downloads = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchDownloads = async () => {
    loading.value = true
    error.value = null
    try {
      const { default: data } = await import('@/data/downloads.js')
      downloads.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { downloads, loading, error, fetchDownloads }
})
