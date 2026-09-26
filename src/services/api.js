import axios from 'axios'

// Axios instance configured for future Laravel backend
const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || ''}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message || error.message
    console.error('API Error:', message)
    return Promise.reject(error)
  }
)

// Mock data imports — replace with API calls when backend is ready
import newsData from '@/data/news.js'
import eventsData from '@/data/events.js'
import departmentsData from '@/data/departments.js'
import teachersData from '@/data/teachers.js'
import sportsData from '@/data/sports.js'
import clubsData from '@/data/clubs.js'
import galleryData from '@/data/gallery.js'
import downloadsData from '@/data/downloads.js'
import testimonialsData from '@/data/testimonials.js'

// Simulate API delay for realistic UX
const mockDelay = (data, ms = 300) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms))

export const api = {
  // News
  getNews: () => mockDelay(newsData),
  getNewsById: (id) => mockDelay(newsData.find(n => n.id === id)),

  // Events
  getEvents: () => mockDelay(eventsData),

  // Departments
  getDepartments: () => mockDelay(departmentsData),

  // Teachers
  getTeachers: () => mockDelay(teachersData),

  // Sports
  getSports: () => mockDelay(sportsData),

  // Clubs
  getClubs: () => mockDelay(clubsData),

  // Gallery
  getGallery: () => mockDelay(galleryData),

  // Downloads
  getDownloads: () => mockDelay(downloadsData),

  // Testimonials
  getTestimonials: () => mockDelay(testimonialsData),

  // Contact form
  submitContactForm: async (formData) => {
    const response = await apiClient.post('/contact', formData)
    return response.data
  },

  // Newsletter
  subscribeNewsletter: (email) => mockDelay({ success: true, message: 'Subscribed successfully!' }),
}

export { apiClient }
export default api