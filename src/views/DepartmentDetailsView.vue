<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import departmentsData from '@/data/departments.js'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  EnvelopeIcon, 
  BeakerIcon, 
  GlobeAltIcon, 
  LanguageIcon, 
  ComputerDesktopIcon, 
  WrenchScrewdriverIcon, 
  BriefcaseIcon, 
  MusicalNoteIcon,
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  MapIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const iconMap = {
  CalculatorIcon: AcademicCapIcon,
  BeakerIcon,
  LanguageIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  TrophyIcon,
  SparklesIcon,
  MapIcon
}

const route = useRoute()
const slug = computed(() => route.params.slug)

const department = computed(() => {
  return departmentsData.find(d => d.slug === slug.value)
})

const resolvedIcon = computed(() => {
  if (!department.value) return AcademicCapIcon
  return iconMap[department.value.icon] || AcademicCapIcon
})

const relatedDepartments = computed(() => {
  if (!department.value) return []
  return departmentsData.filter(d => d.slug !== slug.value).slice(0, 3)
})

const getIcon = (iconName) => iconMap[iconName] || AcademicCapIcon

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const currentLightboxImage = computed(() => department.value?.gallery[lightboxIndex.value])

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
  if(!department.value) return
  lightboxIndex.value = (lightboxIndex.value + 1) % department.value.gallery.length
}
function prevLightbox() {
  if(!department.value) return
  lightboxIndex.value = (lightboxIndex.value - 1 + department.value.gallery.length) % department.value.gallery.length
}
function handleLightboxKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextLightbox()
  if (e.key === 'ArrowLeft') prevLightbox()
}
onMounted(() => window.addEventListener('keydown', handleLightboxKey))
onUnmounted(() => { window.removeEventListener('keydown', handleLightboxKey); document.body.style.overflow = '' })
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">
    
    <!-- NOT FOUND STATE -->
    <div v-if="!department" class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AcademicCapIcon class="w-20 h-20 text-gray-300 dark:text-gray-700 mb-6" />
      <h1 class="text-3xl font-heading font-bold text-navy dark:text-white mb-4">Department Not Found</h1>
      <p class="text-gray-500 font-body mb-8">The department you are looking for does not exist or has been moved.</p>
      <RouterLink to="/departments" class="inline-flex items-center px-6 py-3 bg-navy text-white font-sans font-bold text-sm uppercase rounded shadow-lg hover:bg-secondary transition-colors">
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back to Departments
      </RouterLink>
    </div>

    <!-- MAIN CONTENT -->
    <template v-else>
      
      <!-- 1. DEPARTMENT HERO -->
      <section class="relative min-h-[50vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="department.image" class="w-full h-full object-cover opacity-40 mix-blend-overlay" :alt="department.name" />
          <div class="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>
        </div>
        <div class="container-custom relative z-10 py-24">
          
          <RouterLink to="/departments" class="inline-flex items-center text-secondary/80 hover:text-secondary font-sans font-bold text-xs uppercase tracking-wider mb-6 transition-colors group">
            <ArrowLeftIcon class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Departments
          </RouterLink>
          
          <div class="max-w-3xl" data-aos="fade-up">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Department</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {{ department.name }} <span class="text-secondary">Department</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-300 font-body mb-0 leading-relaxed max-w-2xl">
              {{ department.description.split('.')[0] }}.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. ABOUT THE DEPARTMENT -->
      <section class="section-padding bg-white dark:bg-darkbg">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div class="flex items-center gap-4 mb-4">
                <div class="h-px w-8 bg-secondary"></div>
                <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">About</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-6">Discovering Knowledge. Inspiring Innovation.</h2>
              <div class="prose prose-lg dark:prose-invert font-body text-gray-600 dark:text-gray-300">
                <p>{{ department.description }}</p>
              </div>
            </div>
            <div class="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-left">
              <div class="absolute inset-0 border-4 border-secondary/20 rounded-2xl z-10 m-4 pointer-events-none"></div>
              <img :src="department.image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" :alt="department.name" />
              <div class="absolute bottom-6 right-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg flex items-center justify-center">
                <component :is="resolvedIcon" class="w-10 h-10 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. HEAD OF DEPARTMENT -->
      <section v-if="department.head" class="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div class="container-custom">
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-elegant-lg border border-gray-100 dark:border-gray-700 overflow-hidden relative" data-aos="fade-up">
            <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-bl-full pointer-events-none"></div>
            
            <div class="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start relative z-10">
              <img :src="department.head.image" :alt="department.head.name" class="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-lg border-4 border-white dark:border-gray-700 flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'"/>
              
              <div class="flex-1 text-center md:text-left">
                <div class="text-secondary font-sans font-bold text-xs uppercase tracking-widest mb-2">{{ department.head.position }}</div>
                <h3 class="text-3xl lg:text-4xl font-heading font-bold text-navy dark:text-white mb-2">{{ department.head.name }}</h3>
                <p class="text-gray-500 dark:text-gray-400 font-sans text-sm mb-6">{{ department.head.qualifications }}</p>
                
                <blockquote class="text-xl text-gray-700 dark:text-gray-300 font-heading italic leading-relaxed mb-8 border-l-4 border-secondary pl-6 text-left">
                  "{{ department.head.message }}"
                </blockquote>
                
                <div v-if="department.head.email" class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-sans text-gray-600 dark:text-gray-300">
                  <EnvelopeIcon class="w-4 h-4 mr-2 text-secondary" /> {{ department.head.email }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SUBJECTS OFFERED -->
      <section v-if="department.subjects && department.subjects.length > 0" class="section-padding bg-white dark:bg-darkbg">
        <div class="container-custom">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Subjects Offered</h2>
            <div class="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(sub, idx) in department.subjects" :key="sub.name"
              class="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-elegant transition-all duration-300 group"
              data-aos="fade-up" :data-aos-delay="idx * 100"
            >
              <div class="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 shadow-sm">
                <AcademicCapIcon class="w-6 h-6 text-navy dark:text-white group-hover:text-white transition-colors" />
              </div>
              <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-3 group-hover:text-secondary transition-colors">{{ sub.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-body text-sm leading-relaxed">{{ sub.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. TEACHERS -->
      <section v-if="department.teachers && department.teachers.length > 0" class="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div class="container-custom">
          <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Our Faculty</h2>
            <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(teacher, idx) in department.teachers" :key="teacher.name"
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:-translate-y-1 transition-transform duration-300 group"
              data-aos="fade-up" :data-aos-delay="idx * 100"
            >
              <div class="h-48 overflow-hidden">
                <img :src="teacher.image" :alt="teacher.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" onerror="this.src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'"/>
              </div>
              <div class="p-6 text-center">
                <h4 class="text-lg font-heading font-bold text-navy dark:text-white group-hover:text-secondary transition-colors">{{ teacher.name }}</h4>
                <p class="text-secondary font-sans text-xs font-bold uppercase tracking-wider mb-1 mt-2">{{ teacher.position }}</p>
                <p class="text-gray-500 dark:text-gray-400 font-body text-sm">{{ teacher.subject }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6 & 7. FACILITIES AND ACTIVITIES -->
      <section v-if="(department.facilities && department.facilities.length > 0) || (department.activities && department.activities.length > 0)" class="section-padding bg-white dark:bg-darkbg">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <!-- Facilities -->
            <div v-if="department.facilities && department.facilities.length > 0" data-aos="fade-right">
              <h3 class="text-2xl font-heading font-bold text-navy dark:text-white mb-8 border-b-2 border-secondary inline-block pb-2">Facilities & Resources</h3>
              <div class="space-y-6">
                <div v-for="facility in department.facilities" :key="facility.name" class="flex gap-4 group">
                  <div class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img :src="facility.image" :alt="facility.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <h4 class="text-lg font-heading font-bold text-navy dark:text-white mb-1 group-hover:text-secondary transition-colors">{{ facility.name }}</h4>
                    <p class="text-gray-600 dark:text-gray-400 font-body text-sm line-clamp-2">{{ facility.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Activities -->
            <div v-if="department.activities && department.activities.length > 0" data-aos="fade-left">
              <h3 class="text-2xl font-heading font-bold text-navy dark:text-white mb-8 border-b-2 border-secondary inline-block pb-2">Department Activities</h3>
              <div class="space-y-6">
                <div v-for="activity in department.activities" :key="activity.name" class="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm text-secondary">
                    <component :is="getIcon(activity.icon)" class="w-6 h-6" />
                  </div>
                  <div>
                    <h4 class="text-lg font-heading font-bold text-navy dark:text-white mb-1">{{ activity.name }}</h4>
                    <p class="text-gray-600 dark:text-gray-400 font-body text-sm">{{ activity.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <!-- 8. ACHIEVEMENTS -->
      <section v-if="department.achievements && department.achievements.length > 0" class="py-16 bg-navy dark:bg-gray-950 relative overflow-hidden">
        <div class="absolute right-0 top-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div class="container-custom relative z-10">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="text-3xl font-heading font-bold text-white mb-2">Excellence & Achievements</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(ach, idx) in department.achievements" :key="ach.title" class="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors" data-aos="zoom-in" :data-aos-delay="idx * 100">
              <div class="inline-block p-3 bg-secondary/20 rounded-full mb-4">
                <TrophyIcon class="w-8 h-8 text-secondary" />
              </div>
              <div class="text-secondary font-sans font-bold text-sm mb-2">{{ ach.year }}</div>
              <h4 class="text-lg font-heading font-bold text-white mb-2">{{ ach.title }}</h4>
              <p class="text-gray-400 font-body text-sm">{{ ach.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. GALLERY -->
      <section v-if="department.gallery && department.gallery.length > 0" class="section-padding bg-gray-50 dark:bg-gray-900/30">
        <div class="container-custom">
          <div class="flex items-center gap-4 mb-10" data-aos="fade-right">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Department Gallery</h2>
            <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="(img, idx) in department.gallery" :key="idx"
              @click="openLightbox(idx)"
              class="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              data-aos="fade-up" :data-aos-delay="idx * 50"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. RELATED DEPARTMENTS -->
      <section class="section-padding bg-white dark:bg-darkbg border-t border-gray-100 dark:border-gray-800">
        <div class="container-custom">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="text-3xl font-heading font-bold text-navy dark:text-white">Explore Other Departments</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RouterLink 
              v-for="(related, idx) in relatedDepartments" :key="related.slug"
              :to="`/departments/${related.slug}`"
              class="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block"
              data-aos="fade-up" :data-aos-delay="idx * 100"
            >
              <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-2 group-hover:text-secondary transition-colors">{{ related.name }}</h3>
              <p class="text-gray-500 dark:text-gray-400 font-body text-sm line-clamp-2 mb-4">{{ related.description }}</p>
              <span class="inline-flex items-center text-secondary font-sans font-bold text-xs uppercase tracking-wider">
                Explore <ArrowRightIcon class="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </RouterLink>
          </div>
        </div>
      </section>
      
    </template>

    <!-- LIGHTBOX -->
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
          <button @click="closeLightbox" class="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 bg-black/30 rounded-full transition-colors z-20">
            <XMarkIcon class="w-7 h-7" />
          </button>
          
          <img v-if="currentLightboxImage" :src="currentLightboxImage.src" :alt="currentLightboxImage.alt" class="max-w-[90vw] max-h-[80vh] object-contain rounded shadow-2xl" />
          <p v-if="currentLightboxImage" class="absolute bottom-6 left-0 right-0 text-center text-white font-heading text-lg px-4">{{ currentLightboxImage.alt }}</p>

          <button @click.stop="prevLightbox" class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-20">
            <ChevronLeftIcon class="w-7 h-7" />
          </button>
          <button @click.stop="nextLightbox" class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-20">
            <ChevronRightIcon class="w-7 h-7" />
          </button>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
