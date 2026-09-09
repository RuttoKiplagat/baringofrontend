import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSportsStore = defineStore('sports-store', () => {
  const sports = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchSports = async () => {
    loading.value = true
    error.value = null
    try {
      const { default: data } = await import('@/data/sports.js')
      sports.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { sports, loading, error, fetchSports }
})
