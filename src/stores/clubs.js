import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClubsStore = defineStore('clubs', () => {
  const clubs = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchClubs = async () => {
    loading.value = true
    error.value = null
    try {
      const { default: data } = await import('@/data/clubs.js')
      clubs.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { clubs, loading, error, fetchClubs }
})
