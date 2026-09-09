import { defineStore } from 'pinia'
import { ref } from 'vue'

import newsData from '@/data/news.js'
import departmentsData from '@/data/departments.js'
import downloadsData from '@/data/downloads.js'
import clubsData from '@/data/clubs.js'

const STATIC_PAGES = [
  { title: 'Home', path: '/', type: 'page' },
  { title: 'About Us', path: '/about', type: 'page' },
  { title: 'Academics', path: '/academics', type: 'page' },
  { title: 'Admissions', path: '/admissions', type: 'page' },
  { title: 'Departments', path: '/departments', type: 'page' },
  { title: 'Student Life', path: '/student-life', type: 'page' },
  { title: 'Sports', path: '/sports', type: 'page' },
  { title: 'Clubs & Societies', path: '/clubs', type: 'page' },
  { title: 'News & Events', path: '/news', type: 'page' },
  { title: 'Gallery', path: '/gallery', type: 'page' },
  { title: 'Alumni', path: '/alumni', type: 'page' },
  { title: 'Contact Us', path: '/contact', type: 'page' },
  { title: 'Downloads', path: '/downloads', type: 'page' },
  { title: 'Boarding', path: '/boarding', type: 'page' },
  { title: 'Library', path: '/library', type: 'page' },
  { title: 'Leadership', path: '/leadership', type: 'page' }
]

export const useSearchStore = defineStore('search', () => {
  const isOpen = ref(false)
  const query = ref('')
  const results = ref([])

  function openSearch() { 
    isOpen.value = true 
  }
  
  function closeSearch() {
    isOpen.value = false
    clearSearch()
  }
  
  function clearSearch() {
    query.value = ''
    results.value = []
  }

  function performSearch(q) {
    query.value = q
    if (!q.trim()) {
      results.value = []
      return
    }

    const lowerQ = q.toLowerCase()
    const found = []

    // Search pages
    STATIC_PAGES.forEach(page => {
      if (page.title.toLowerCase().includes(lowerQ)) {
        found.push(page)
      }
    })

    // Search news
    newsData?.forEach(item => {
      if ((item.title && item.title.toLowerCase().includes(lowerQ)) || 
          (item.excerpt && item.excerpt.toLowerCase().includes(lowerQ))) {
        found.push({ type: 'news', title: item.title, path: `/news/${item.id}`, description: item.excerpt })
      }
    })

    // Search departments
    departmentsData?.forEach(item => {
      if ((item.name && item.name.toLowerCase().includes(lowerQ)) || 
          (item.description && item.description.toLowerCase().includes(lowerQ))) {
        found.push({ type: 'department', title: item.name, path: `/departments/${item.id}`, description: item.description })
      }
    })

    // Search downloads
    downloadsData?.forEach(item => {
      if ((item.title && item.title.toLowerCase().includes(lowerQ)) || 
          (item.description && item.description.toLowerCase().includes(lowerQ))) {
        found.push({ type: 'download', title: item.title, path: '/downloads', description: item.description })
      }
    })

    // Search clubs
    clubsData?.forEach(item => {
      if ((item.name && item.name.toLowerCase().includes(lowerQ)) || 
          (item.description && item.description.toLowerCase().includes(lowerQ))) {
        found.push({ type: 'club', title: item.name, path: '/clubs', description: item.description })
      }
    })

    results.value = found
  }

  return { isOpen, query, results, openSearch, closeSearch, clearSearch, performSearch }
})
