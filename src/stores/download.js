import { defineStore } from 'pinia'
import { ref } from 'vue'
import { downloadService } from '@/services/downloadService.js'

export const useDownloadsStore = defineStore('downloads', () => {
  const downloads = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchDownloads = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await downloadService.getAll()
      downloads.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { downloads, loading, error, fetchDownloads }
})