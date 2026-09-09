import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { newsService } from '@/services/newsService.js'

export const useNewsStore = defineStore('news', () => {
  const articles = ref([])
  const loading = ref(false)
  const error = ref(null)

  const publishedArticles = computed(() =>
    articles.value.filter((a) => a.is_published)
  )

  const latestArticles = computed(() =>
    [...publishedArticles.value].sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    )
  )

  const fetchNews = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await newsService.getAll()
      articles.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const getArticleBySlug = (slug) =>
    articles.value.find((a) => a.slug === slug)

  return {
    articles,
    loading,
    error,
    publishedArticles,
    latestArticles,
    fetchNews,
    getArticleBySlug,
  }
})