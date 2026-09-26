import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: () => import('@/views/HomeView.vue') },
      { path: 'about', name: 'about', component: () => import('@/views/AboutView.vue') },
      { path: 'academics', name: 'academics', component: () => import('@/views/AcademicsView.vue') },
      { path: 'admissions', name: 'admissions', component: () => import('@/views/AdmissionsView.vue') },
      { path: 'admissions/success', name: 'AdmissionsSuccess', component: () => import('@/views/admis/AdmissionSucces.vue') },
      { path: 'departments', name: 'departments', component: () => import('@/views/DepartmentsView.vue') },
      { path: 'departments/:slug', name: 'department-details', component: () => import('@/views/DepartmentDetailsView.vue') },
      { path: 'teachers', name: 'teachers', component: () => import('@/views/TeachersView.vue') },
      { path: 'news', name: 'news', component: () => import('@/views/NewsView.vue') },
      { path: 'news/:slug', name: 'news-detail', component: () => import('@/views/NewsDetail.vue') },
      { path: 'events', name: 'events', component: () => import('@/views/EventsView.vue') },
      { path: 'events/:slug', name: 'event-details', component: () => import('@/views/EventDetailsView.vue') },
      { path: 'gallery', name: 'gallery', component: () => import('@/views/GalleryView.vue') },
      { path: 'clubs', name: 'clubs', component: () => import('@/views/ClubsView.vue') },
      { path: 'student-life', name: 'student-life', component: () => import('@/views/StudentLifeView.vue') },
      { path: 'sports', name: 'sports', component: () => import('@/views/SportsView.vue') },
      { path: 'downloads', name: 'downloads', component: () => import('@/views/DownloadsView.vue') },
      { path: 'contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
      { path: ':pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router