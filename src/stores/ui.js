import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isLoading = ref(true)
  const scrollY = ref(0)
  const toasts = ref([])
  let toastId = 0

  function toggleMobileMenu() { isMobileMenuOpen.value = !isMobileMenuOpen.value }
  function closeMobileMenu() { isMobileMenuOpen.value = false }
  function setLoading(val) { isLoading.value = val }
  function setScrollY(val) { scrollY.value = val }

  function addToast({ message, type = 'info', duration = 4000 }) {
    const id = ++toastId
    toasts.value.push({ id, message, type })
    setTimeout(() => removeToast(id), duration)
    return id
  }

  function removeToast(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { isMobileMenuOpen, isLoading, scrollY, toasts, toggleMobileMenu, closeMobileMenu, setLoading, setScrollY, addToast, removeToast }
})
