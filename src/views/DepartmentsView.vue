<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
import { useCounter } from '@/composables/useCounter.js'
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  BeakerIcon,
  LanguageIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  CpuChipIcon,
  BookOpenIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

// ---------------------------------------------------------------------------
// ICON MAP — resolves the string icon names from the data layer
// ---------------------------------------------------------------------------
const iconMap = {
  CalculatorIcon: AcademicCapIcon,
  BeakerIcon,
  LanguageIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon
}

// ---------------------------------------------------------------------------
// DEPARTMENT DATA — sourced from the project data layer
// ---------------------------------------------------------------------------
import departmentsData from '@/data/departments.js'

const departments = departmentsData.map((dept, idx) => ({
  ...dept,
  number: String(idx + 1).padStart(2, '0'),
  category: getCategoryFromName(dept.name),
  resolvedIcon: iconMap[dept.icon] || AcademicCapIcon
}))

function getCategoryFromName(name) {
  const n = name.toLowerCase()
  if (n.includes('math')) return 'Mathematics'
  if (n.includes('science') && !n.includes('social') && !n.includes('applied')) return 'Sciences'
  if (n.includes('language')) return 'Languages'
  if (n.includes('human') || n.includes('social')) return 'Humanities'
  if (n.includes('technical') || n.includes('applied')) return 'Technical'
  if (n.includes('business')) return 'Business'
  if (n.includes('computer') || n.includes('ict')) return 'Technical'
  if (n.includes('art') || n.includes('music') || n.includes('creative')) return 'Creative Arts'
  return 'General'
}

// ---------------------------------------------------------------------------
// SEARCH & FILTER
// ---------------------------------------------------------------------------
const searchQuery = ref('')
const activeFilter = ref('All')

const categories = computed(() => {
  const cats = new Set(departments.map(d => d.category))
  return ['All', ...Array.from(cats)]
})

const filteredDepartments = computed(() => {
  let result = departments
  if (activeFilter.value !== 'All') {
    result = result.filter(d => d.category === activeFilter.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.subjects.some(s => s.toLowerCase().includes(q))
    )
  }
  return result
})

function clearSearch() {
  searchQuery.value = ''
  activeFilter.value = 'All'
}

// ---------------------------------------------------------------------------
// FEATURED DEPARTMENT — always Sciences
// ---------------------------------------------------------------------------
const featured = departments.find(d => d.name.includes('Sciences') && !d.name.includes('Social') && !d.name.includes('Applied')) || departments[1]

// ---------------------------------------------------------------------------
// LEARNING EXPERIENCE
// ---------------------------------------------------------------------------
const learningBlocks = [
  { title: 'Critical Thinking', desc: 'Students learn to question, analyse and solve problems across every discipline.', icon: LightBulbIcon },
  { title: 'Creativity', desc: 'Students are encouraged to explore ideas and create meaningful, original solutions.', icon: SparklesIcon },
  { title: 'Collaboration', desc: 'Students learn through teamwork, discussion and shared experiences that mirror the real world.', icon: UserGroupIcon },
  { title: 'Real-World Skills', desc: 'Students connect classroom learning with practical applications and emerging technologies.', icon: CpuChipIcon }
]

// ---------------------------------------------------------------------------
// STATISTICS — animated counters
// ---------------------------------------------------------------------------
const rawStats = [
  { value: 8, suffix: '+', label: 'Departments' },
  { value: 20, suffix: '+', label: 'Academic Areas' },
  { value: 100, suffix: '%', label: 'Commitment to Excellence' },
  { value: 1, suffix: '', label: 'Shared Vision' }
]

const statsCounters = rawStats.map(stat => {
  const { count, startCounting } = useCounter(stat.value, 2000)
  return { ...stat, count, startCounting }
})

const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.25 })
watch(statsVisible, (visible) => {
  if (visible) statsCounters.forEach(s => s.startCounting())
})

// ---------------------------------------------------------------------------
// INTRO METRICS
// ---------------------------------------------------------------------------
const introMetrics = [
  { value: '8+', label: 'Academic Departments' },
  { value: '100%', label: 'Commitment to Excellence' },
  { value: '360°', label: 'Holistic Learning' }
]
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">

    <!-- ================================================================== -->
    <!-- 1. PREMIUM HERO SECTION                                            -->
    <!-- ================================================================== -->
    <section class="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden bg-navy dark:bg-gray-950">
      <!-- Decorative background -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <!-- Subtle grid pattern -->
        <svg class="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dept-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0v40" fill="none" stroke="white" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dept-grid)" />
        </svg>
        <!-- Floating gradient blobs -->
        <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-[100px]"></div>
        <!-- Floating academic icons — very subtle -->
        <AcademicCapIcon class="absolute top-[15%] right-[8%] w-24 h-24 text-white/[0.03] rotate-12" />
        <BookOpenIcon class="absolute bottom-[20%] left-[5%] w-20 h-20 text-white/[0.03] -rotate-6" />
        <BeakerIcon class="absolute top-[40%] right-[20%] w-16 h-16 text-white/[0.03] rotate-6" />
      </div>

      <div class="container-custom relative z-10 py-24 lg:py-32">
        <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="800">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-[0.2em] text-xs uppercase">
              Academic Departments
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
            Discover Our Academic <span class="text-secondary">Departments</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 font-body leading-relaxed mb-10 max-w-2xl">
            Our departments cultivate knowledge, creativity, critical thinking and practical skills — preparing students to excel in every facet of life.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#explore"
              class="inline-flex items-center justify-center px-8 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-secondary-light hover:shadow-xl transition-all duration-300"
            >
              Explore Departments
            </a>
            <RouterLink
              to="/academics"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-white hover:text-navy transition-all duration-300"
            >
              View Academics
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 2. DEPARTMENT INTRODUCTION                                         -->
    <!-- ================================================================== -->
    <section class="section-padding bg-white dark:bg-darkbg overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Text -->
          <div data-aos="fade-right">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-10 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Our Academic Framework</span>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-8">
              Excellence Through Every Discipline
            </h2>
            <div class="space-y-5 text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed">
              <p>
                At Baringo High School, students are exposed to diverse academic disciplines that develop knowledge, critical thinking, creativity, and practical skills essential for success in higher education and beyond.
              </p>
              <p>
                Each department is led by dedicated professionals who are passionate about their subjects and committed to helping every student reach their full potential.
              </p>
            </div>
          </div>

          <!-- Metrics -->
          <div class="grid grid-cols-3 gap-6" data-aos="fade-left">
            <div
              v-for="(metric, index) in introMetrics"
              :key="metric.label"
              class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-secondary mb-2">
                {{ metric.value }}
              </div>
              <div class="text-xs md:text-sm font-sans text-gray-500 dark:text-gray-400 uppercase tracking-wider leading-tight">
                {{ metric.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 3. DEPARTMENT EXPLORER — Main Feature                              -->
    <!-- ================================================================== -->
    <section id="explore" class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
            Explore Our Departments
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Discover the subjects, people and learning experiences that shape our students.
          </p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <!-- Search Input -->
          <div class="relative flex-1">
            <MagnifyingGlassIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search departments or subjects..."
              class="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-sans text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors"
              aria-label="Search departments"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Clear search"
            >
              <XMarkIcon class="w-4 h-4" />
            </button>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeFilter = cat"
              class="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
              :class="[
                activeFilter === cat
                  ? 'bg-navy dark:bg-secondary text-white dark:text-navy border-navy dark:border-secondary'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-navy dark:hover:border-gray-500'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- No Results -->
        <div
          v-if="filteredDepartments.length === 0"
          class="text-center py-16"
        >
          <AcademicCapIcon class="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p class="text-gray-500 dark:text-gray-400 font-body text-lg mb-2">No departments match your search.</p>
          <button @click="clearSearch" class="text-secondary font-sans font-bold text-sm hover:underline">
            Clear filters
          </button>
        </div>

        <!-- Department Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div
            v-for="(dept, index) in filteredDepartments"
            :key="dept.id"
            class="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 100"
          >
            <!-- Top accent bar -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="p-8 lg:p-10">
              <!-- Number + Icon Row -->
              <div class="flex items-center justify-between mb-8">
                <span class="text-5xl font-heading font-bold text-gray-100 dark:text-gray-800 group-hover:text-secondary/20 dark:group-hover:text-secondary/20 transition-colors duration-300 select-none">
                  {{ dept.number }}
                </span>
                <div class="w-14 h-14 rounded-xl bg-navy/5 dark:bg-white/5 group-hover:bg-secondary/10 dark:group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300">
                  <component :is="dept.resolvedIcon" class="w-7 h-7 text-navy dark:text-gray-300 group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl lg:text-2xl font-heading font-bold text-navy dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                {{ dept.name }}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 dark:text-gray-400 font-body text-sm leading-relaxed mb-6 line-clamp-3">
                {{ dept.description }}
              </p>

              <!-- Subject Tags -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span
                  v-for="subject in dept.subjects"
                  :key="subject.name"
                  class="px-3 py-1 text-xs font-sans font-medium text-navy dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {{ subject.name }}
                </span>
              </div>

              <!-- HOD -->
              <div v-if="dept.head" class="flex items-center gap-3 mb-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                <div class="w-8 h-8 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center">
                  <UserGroupIcon class="w-4 h-4 text-navy dark:text-gray-300" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 dark:text-gray-500 font-sans uppercase tracking-wider">Head of Department</p>
                  <p class="text-sm font-sans font-semibold text-navy dark:text-white">{{ dept.head.name }}</p>
                </div>
              </div>

              <!-- CTA -->
              <RouterLink
                :to="{ name: 'department-details', params: { slug: dept.slug } }"
                class="inline-flex items-center text-sm font-sans font-bold text-navy dark:text-white group-hover:text-secondary transition-colors duration-300"
              >
                Explore Department
                <ArrowRightIcon class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 5. FEATURED DEPARTMENT                                             -->
    <!-- ================================================================== -->
    <section class="section-padding bg-white dark:bg-darkbg overflow-hidden">
      <div class="container-custom">
        <div class="bg-navy dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-navy-light dark:border-gray-700">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Visual Panel -->
            <div class="relative min-h-[350px] lg:min-h-0" data-aos="fade-right">
              <img
                :src="featured.image"
                :alt="featured.name + ' department'"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/20"></div>
              <!-- Gold accent strip -->
              <div class="absolute bottom-0 left-0 w-full h-1 bg-secondary lg:hidden"></div>
              <div class="hidden lg:block absolute top-0 right-0 w-1 h-full bg-secondary"></div>
            </div>

            <!-- Content Panel -->
            <div class="p-10 lg:p-16 flex flex-col justify-center" data-aos="fade-left">
              <div class="flex items-center gap-4 mb-4">
                <div class="h-px w-10 bg-secondary"></div>
                <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Featured Department</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                {{ featured.name }}
              </h2>
              <p class="text-gray-300 font-body text-lg leading-relaxed mb-8">
                {{ featured.description }}
              </p>

              <!-- Subjects list -->
              <div class="mb-10">
                <h4 class="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider mb-4">Key Learning Areas</h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="subject in featured.subjects"
                    :key="subject"
                    class="px-4 py-2 bg-white/10 border border-white/10 text-white text-sm font-sans rounded-lg"
                  >
                    {{ subject }}
                  </span>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 6. LEARNING EXPERIENCE                                             -->
    <!-- ================================================================== -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
            More Than Just Subjects
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Each department contributes to the development of the whole student — building skills that last a lifetime.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(block, index) in learningBlocks"
            :key="block.title"
            class="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-14 h-14 mx-auto mb-6 rounded-xl bg-navy/5 dark:bg-white/5 flex items-center justify-center">
              <component :is="block.icon" class="w-7 h-7 text-secondary" />
            </div>
            <h3 class="text-lg font-heading font-bold text-navy dark:text-white mb-3">
              {{ block.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body text-sm leading-relaxed">
              {{ block.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 7. DEPARTMENT STATISTICS                                           -->
    <!-- ================================================================== -->
    <section ref="statsRef" class="section-padding bg-navy dark:bg-gray-950">
      <div class="container-custom">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <div
            v-for="(stat, index) in statsCounters"
            :key="stat.label"
            class="px-4"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="text-5xl md:text-6xl font-heading font-bold text-white mb-3 flex items-center justify-center">
              <span>{{ stat.count }}</span>
              <span v-if="stat.suffix" class="text-secondary ml-1">{{ stat.suffix }}</span>
            </div>
            <div class="text-gray-300 font-sans uppercase tracking-wider text-sm font-semibold">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 8. CALL TO ACTION                                                  -->
    <!-- ================================================================== -->
    <section class="relative section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <!-- Decorative -->
      <div class="absolute -top-16 -right-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-navy/5 dark:bg-secondary/5 rounded-full blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
            Preparing Students for a Changing World
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 font-body leading-relaxed max-w-3xl mx-auto mb-10">
            Through strong academic foundations, dedicated teachers and diverse learning experiences, Baringo High School prepares students to think boldly, lead responsibly and make a difference.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
            <RouterLink
              to="/academics"
              class="inline-flex items-center justify-center px-10 py-4 bg-navy dark:bg-secondary text-white dark:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-navy-light dark:hover:bg-secondary-light transition-colors"
            >
              Explore Academics
            </RouterLink>
            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center px-10 py-4 border-2 border-navy dark:border-white text-navy dark:text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-all duration-300"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>