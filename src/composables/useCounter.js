import { ref } from 'vue'

export function useCounter(endValue, duration = 2000) {
  const count = ref(0)
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3)
  }

  function startCounting() {
    if (prefersReducedMotion) {
      count.value = endValue
      return
    }

    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      count.value = Math.round(easeOutCubic(progress) * endValue)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return { count, startCounting }
}
