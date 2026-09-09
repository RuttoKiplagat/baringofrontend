import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEventsStore = defineStore('events-store', () => {
  const events = ref([])
  const loading = ref(false)
  const error = ref(null)

  const upcomingEvents = computed(() => {
    const now = new Date()
    return events.value
      .filter((e) => new Date(e.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  })

  const pastEvents = computed(() => {
    const now = new Date()
    return events.value
      .filter((e) => new Date(e.date) < now)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const fetchEvents = async () => {
    loading.value = true
    error.value = null
    try {
      const { default: data } = await import('@/data/events.js')
      events.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const getEventById = (id) => events.value.find(e => String(e.id) === String(id))

  return {
    events,
    loading,
    error,
    upcomingEvents,
    pastEvents,
    fetchEvents,
    getEventById
  }
})