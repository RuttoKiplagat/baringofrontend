import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sportService } from '@/services/sportService.js'

export const useSportsStore = defineStore('sports', () => {
  const sports = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchSports = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await sportService.getAll()
      sports.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { sports, loading, error, fetchSports }
})