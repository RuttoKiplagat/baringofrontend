<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ArrowRightIcon,
  TrophyIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  MusicalNoteIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

import sportsData from '@/data/sports.js'
import clubsData from '@/data/clubs.js'
import testimonialsData from '@/data/testimonials.js'
import galleryData from '@/data/gallery.js'

// ───────────────────────────────────────────────────
// ACTIVITIES
// ───────────────────────────────────────────────────
const activities = [
  { title: 'Sports', desc: 'Football, athletics, basketball, volleyball and more — building teamwork and discipline.', icon: TrophyIcon, image: '/images/studentlife/sports.jpg', link: '/sports' },
  { title: 'Performing Arts', desc: 'Drama, music, dance and spoken word — expressing creativity on every stage.', icon: MusicalNoteIcon, image: '/images/studentlife/perfomingarts.jpg', link: '/clubs' },
  { title: 'Technology', desc: 'Coding, robotics and digital skills — preparing for a connected future.', icon: ComputerDesktopIcon, image: '/images/studentlife/technology.jpg', link: '/clubs' },
  { title: 'Academic Clubs', desc: 'Science fairs, debate tournaments and maths olympiads — sharpening young minds.', icon: AcademicCapIcon, image: '/images/studentlife/academicclubs.jpg', link: '/clubs' },
  { title: 'Creative Arts', desc: 'Fine art, craft and design — turning imagination into visible reality.', icon: SparklesIcon, image: '/images/studentlife/creative.jpg', link: '/clubs' },
  { title: 'Environmental', desc: 'Tree planting, conservation and sustainability — caring for our planet.', icon: GlobeAltIcon, image: '/images/studentlife/environmental.jpg', link: '/clubs' },
  { title: 'Debate & Speaking', desc: 'Public speaking, mooting and essay competitions — finding and using your voice.', icon: ChatBubbleLeftRightIcon, image: '/images/studentlife/debate.jpg', link: '/clubs' },
  { title: 'Leadership', desc: 'Student council, prefects and mentorship — learning to lead with integrity.', icon: ShieldCheckIcon, image: '/images/home/leadership.jpg', link: '#leadership' }
]

// ───────────────────────────────────────────────────
// SPORTS — take first 6
// ───────────────────────────────────────────────────
const sports = sportsData.slice(0, 6)

// ───────────────────────────────────────────────────
// CLUBS — all
// ───────────────────────────────────────────────────
const clubs = clubsData

// ───────────────────────────────────────────────────
// GALLERY — student life + events images
// ───────────────────────────────────────────────────
const galleryImages = galleryData.filter(img => ['Student Life', 'Sports', 'Events', 'Campus'].includes(img.category))

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const currentLightboxImage = computed(() => galleryImages[lightboxIndex.value])

function openLightbox(idx) {
  lightboxIndex.value = idx
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
function nextLightbox() {
  lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.length
}
function prevLightbox() {
  lightboxIndex.value = (lightboxIndex.value - 1 + galleryImages.length) % galleryImages.length
}
function handleLightboxKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextLightbox()
  if (e.key === 'ArrowLeft') prevLightbox()
}
onMounted(() => window.addEventListener('keydown', handleLightboxKey))
onUnmounted(() => { window.removeEventListener('keydown', handleLightboxKey); document.body.style.overflow = '' })

// ───────────────────────────────────────────────────
// TESTIMONIALS — pick student-relevant ones
// ───────────────────────────────────────────────────
const testimonials = testimonialsData.filter(t => t.role.includes('Student') || t.role.includes('Alumni')).slice(0, 4)
// If fewer than 3, just use the first few
const displayTestimonials = testimonials.length >= 3 ? testimonials : testimonialsData.slice(0, 4)
const activeTestimonial = ref(0)

// ───────────────────────────────────────────────────
// INTRO STATS
// ───────────────────────────────────────────────────
const introStats = [
  { value: '20+', label: 'Clubs & Societies' },
  { value: '10+', label: 'Sports Activities' },
  { value: '1000+', label: 'Students' },
  { value: '50+', label: 'Annual Events' }
]

// Bento sizing helper for gallery
const getBentoClass = (idx) => {
  const patterns = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
  ]
  return patterns[idx % patterns.length]
}

// Fallback image helper
function getFallbackSrc(img) {
  if (img.src && img.src.length > 1) return img.src
  // Map categories to Unsplash fallbacks
  const fallbacks = {
    'Student Life': 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop',
    'Sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    'Events': 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&h=600&fit=crop',
    'Campus': 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop',
    'Academics': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  }
  return fallbacks[img.category] || 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop'
}
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 1. HERO                                                 -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="relative min-h-[65vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-navy dark:bg-gray-950">
      <!-- Background image -->
      <img
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80&fit=crop"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy dark:from-gray-950/70 dark:via-gray-950/80 dark:to-gray-950"></div>

      <!-- Subtle grid -->
      <svg class="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="sl-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0v48" fill="none" stroke="white" stroke-width=".5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#sl-grid)"/>
      </svg>

      <div class="container-custom relative z-10 py-20 lg:py-28">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-sans text-gray-400 mb-8" data-aos="fade-down" data-aos-delay="100">
          <RouterLink to="/" class="hover:text-white transition-colors">Home</RouterLink>
          <span>/</span>
          <span class="text-secondary font-semibold">Student Life</span>
        </nav>

        <div class="max-w-3xl" data-aos="fade-up">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.08] mb-6">
            Life Beyond the <span class="text-secondary">Classroom</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 font-body leading-relaxed mb-10 max-w-2xl">
            Discover the experiences, friendships, talents and opportunities that make life at Baringo High School truly memorable.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#activities" class="inline-flex items-center justify-center px-8 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-secondary-light hover:shadow-xl transition-all duration-300">
              Explore Student Life
            </a>
            <RouterLink to="/gallery" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-white hover:text-navy transition-all duration-300">
              View Gallery
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 2. INTRODUCTION                                         -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Text -->
          <div data-aos="fade-right">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-10 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Our Community</span>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
              More Than Just a Classroom
            </h2>
            <p class="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
              Student life at Baringo High School is about learning, friendship, leadership, talent, discipline, teamwork and personal growth. Every student is encouraged to explore, compete and discover who they are beyond examinations.
            </p>
            <p class="text-gray-500 dark:text-gray-400 font-body leading-relaxed">
              From the sports field to the science lab, from the debate podium to the music stage — our students build memories, skills and friendships that last a lifetime.
            </p>
          </div>

          <!-- Image + floating stats card -->
          <div class="relative" data-aos="fade-left">
            <div class="rounded-2xl overflow-hidden shadow-elegant-lg aspect-[4/3]">
              <img src="/images/about/students.jpg" alt="Baringo High School students" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop'" />
            </div>
            <!-- Floating stats card -->
            <div class="absolute -bottom-8 -left-4 lg:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-elegant-lg border border-gray-100 dark:border-gray-700 p-6 grid grid-cols-2 gap-4 w-[260px]">
              <div v-for="stat in introStats" :key="stat.label" class="text-center">
                <div class="text-xl font-heading font-bold text-navy dark:text-secondary">{{ stat.value }}</div>
                <div class="text-[10px] font-sans text-gray-500 dark:text-gray-400 uppercase tracking-wider leading-tight mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 3. STUDENT ACTIVITIES                                   -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section id="activities" class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="text-center mb-14" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
            Discover Your Passion
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            From competitive sports to creative expression — there's a place for everyone at BHS.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <component
            v-for="(activity, idx) in activities"
            :key="activity.title"
            :is="activity.link.startsWith('/') ? 'RouterLink' : 'a'"
            :to="activity.link.startsWith('/') ? activity.link : undefined"
            :href="!activity.link.startsWith('/') ? activity.link : undefined"
            class="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-elegant transition-all duration-400 hover:-translate-y-1.5"
            data-aos="fade-up"
            :data-aos-delay="(idx % 4) * 80"
          >
            <!-- Image -->
            <div class="h-44 overflow-hidden">
              <img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <!-- Content -->
            <div class="p-6">
              <div class="w-10 h-10 rounded-lg bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <component :is="activity.icon" class="w-5 h-5 text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 class="text-lg font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors duration-300">{{ activity.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 font-body text-sm leading-relaxed line-clamp-2">{{ activity.desc }}</p>
            </div>
            <!-- Bottom accent -->
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </component>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 4. SPORTS                                               -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="section-padding bg-navy dark:bg-gray-950 relative overflow-hidden">
      <div class="absolute -right-32 -top-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
      <div class="container-custom relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Athletics & Sport</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white">
              Teamwork. Discipline. Excellence.
            </h2>
          </div>
          <RouterLink to="/sports" class="inline-flex items-center font-sans font-bold text-white hover:text-secondary transition-colors group text-sm uppercase tracking-wider">
            Explore Sports <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(sport, idx) in sports"
            :key="sport.id"
            class="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <img :src="sport.image" :alt="sport.name" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent group-hover:from-navy/95 transition-colors duration-400"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 transform group-hover:-translate-y-1 transition-transform duration-300">
              <h3 class="text-xl font-heading font-bold text-white mb-1">{{ sport.name }}</h3>
              <p class="text-gray-300 font-body text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">{{ sport.description.split('.')[0] }}.</p>
            </div>
            <!-- Gold accent on hover -->
            <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/0 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
              <TrophyIcon class="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 5. CLUBS & SOCIETIES                                    -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Clubs & Societies</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white">Find Your Community</h2>
          </div>
          <RouterLink to="/clubs" class="inline-flex items-center font-sans font-bold text-navy dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors group text-sm uppercase tracking-wider">
            View All Clubs <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        <!-- Horizontal scroll on mobile, grid on desktop -->
        <div class="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x hide-scrollbar">
          <div
            v-for="(club, idx) in clubs.slice(0, 8)"
            :key="club.id"
            class="group flex-shrink-0 w-[280px] lg:w-auto snap-start bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            :data-aos-delay="(idx % 4) * 80"
          >
            <div class="h-40 overflow-hidden">
              <img :src="club.image" :alt="club.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 bg-secondary/10 text-secondary font-sans font-bold text-[10px] uppercase tracking-wider rounded">{{ club.category }}</span>
                <span class="text-gray-400 dark:text-gray-500 font-sans text-[10px]">{{ club.meetingDay }}</span>
              </div>
              <h3 class="text-lg font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors">{{ club.name }}</h3>
              <p class="text-gray-500 dark:text-gray-400 font-body text-sm leading-relaxed line-clamp-2 mb-4">{{ club.description }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 6. LEADERSHIP & STUDENT VOICE                           -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section id="leadership" class="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="relative" data-aos="fade-right">
            <div class="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/images/home/leadership.jpg" alt="Student leaders at Baringo High School" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop'" />
            </div>
            <!-- Decorative gold frame -->
            <div class="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary rounded-tl-2xl pointer-events-none hidden lg:block"></div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary rounded-br-2xl pointer-events-none hidden lg:block"></div>
          </div>

          <!-- Content -->
          <div data-aos="fade-left">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Student Voice</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-6">
              Developing Future Leaders
            </h2>
            <p class="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8">
              At Baringo High School, leadership is nurtured at every level. Through the Student Council, prefect system, peer mentorship and house responsibilities, students learn to serve, inspire and take ownership of their community.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-10">
              <div class="flex items-start gap-3" v-for="item in ['Student Council', 'Prefect System', 'Peer Mentorship', 'House Captains']" :key="item">
                <ShieldCheckIcon class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span class="font-sans text-sm font-medium text-navy dark:text-gray-200">{{ item }}</span>
              </div>
            </div>

            <!-- Quote -->
            <blockquote class="relative bg-navy/5 dark:bg-white/5 rounded-xl p-6 border-l-4 border-secondary">
              <span class="absolute -top-3 left-4 text-4xl text-secondary/30 font-heading leading-none">"</span>
              <p class="text-navy dark:text-gray-200 font-heading italic text-lg leading-relaxed">
                Leadership is not about a title. It is about responsibility, service and making a difference.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 7. GALLERY                                              -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Life at BHS</h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            A snapshot of the moments that make our school community special.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          <div
            v-for="(img, idx) in galleryImages.slice(0, 8)"
            :key="img.id"
            @click="openLightbox(idx)"
            class="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-200 dark:bg-gray-800"
            :class="idx === 0 ? 'col-span-2 row-span-2' : idx === 3 ? 'row-span-2' : ''"
            data-aos="fade-up"
          >
            <img :src="getFallbackSrc(img)" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div class="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-end p-4">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span class="inline-block px-2 py-1 bg-secondary text-navy font-sans font-bold text-[9px] uppercase tracking-wider rounded mb-1">{{ img.category }}</span>
                <p class="text-white font-sans text-xs leading-tight">{{ img.alt }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10" data-aos="fade-up">
          <RouterLink to="/gallery" class="inline-flex items-center px-8 py-3.5 border-2 border-navy dark:border-white text-navy dark:text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-all duration-300">
            View Full Gallery <ArrowRightIcon class="w-4 h-4 ml-2" />
          </RouterLink>
        </div>
      </div>
    </section>

    

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- 9. CTA                                                  -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <section class="relative py-24 bg-navy dark:bg-gray-950 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-navy to-primary dark:from-gray-950 dark:to-gray-900 opacity-90"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div class="container-custom relative z-10 text-center" data-aos="zoom-in">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Be Part of the <span class="text-secondary">BHS Experience</span>
        </h2>
        <p class="text-lg text-gray-300 font-body leading-relaxed max-w-2xl mx-auto mb-10">
          Explore the opportunities, friendships and experiences that make Baringo High School special.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink to="/clubs" class="inline-flex items-center justify-center px-10 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-secondary-light transition-colors">
            Explore Activities
          </RouterLink>
          <RouterLink to="/contact" class="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-white hover:text-navy transition-all duration-300">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- LIGHTBOX                                                -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="lightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm" @click.self="closeLightbox">
          <div class="absolute top-4 right-4 md:top-6 md:right-6 z-20">
            <button @click="closeLightbox" class="text-white/70 hover:text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Close lightbox">
              <XMarkIcon class="w-7 h-7" />
            </button>
          </div>

          <div class="absolute top-5 left-5 md:top-6 md:left-6 z-20">
            <span class="text-secondary font-sans font-bold text-xs uppercase tracking-widest">{{ currentLightboxImage?.category }}</span>
            <span class="text-white/50 font-sans text-xs ml-3">{{ lightboxIndex + 1 }} / {{ galleryImages.length }}</span>
          </div>

          <img :src="getFallbackSrc(currentLightboxImage)" :alt="currentLightboxImage?.alt" class="max-w-[90vw] max-h-[80vh] object-contain rounded shadow-2xl" />

          <p class="absolute bottom-6 left-0 right-0 text-center text-white font-heading text-lg px-4">{{ currentLightboxImage?.alt }}</p>

          <button @click.stop="prevLightbox" class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors" aria-label="Previous image">
            <ChevronLeftIcon class="w-7 h-7" />
          </button>
          <button @click.stop="nextLightbox" class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors" aria-label="Next image">
            <ChevronRightIcon class="w-7 h-7" />
          </button>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
