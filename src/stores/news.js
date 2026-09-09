import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNewsStore = defineStore('news-store', () => {
  const articles = ref([])
  const loading = ref(false)
  const error = ref(null)

  const publishedArticles = computed(() =>
    articles.value.filter(a => a.is_published !== false)
  )

  const latestArticles = computed(() =>
    [...publishedArticles.value].sort(
      (a, b) => new Date(b.published_at || b.date) - new Date(a.published_at || a.date)
    )
  )

  const fetchNews = async () => {
    loading.value = true
    error.value = null
    try {
      const { default: data } = await import('@/data/news.js')
      articles.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const getArticleBySlug = (slug) =>
    articles.value.find(a => a.slug === slug)

  return { articles, loading, error, publishedArticles, latestArticles, fetchNews, getArticleBySlug }
})
