<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import schoolInfo from '@/data/schoolInfo.js'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
import { useCounter } from '@/composables/useCounter.js'
import {
  ArrowRightIcon,
  EyeIcon,
  FlagIcon,
  AcademicCapIcon,
  LightBulbIcon,
  UsersIcon,
  SparklesIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// Using schoolInfo.values from our data layer, but mapping icons to them
const valueIcons = [SparklesIcon, ShieldCheckIcon, AcademicCapIcon, FlagIcon, UsersIcon, LightBulbIcon]
const coreValues = (schoolInfo.values || []).map((val, idx) => ({
  ...val,
  icon: valueIcons[idx % valueIcons.length]
}))

// --- TIMELINE DATA ---
const milestones = [
  { year: '1964', title: 'Our Beginning', description: 'Baringo High School was established with a cohort of 40 students, laying the foundation for academic excellence in the Rift Valley region.' },
  { year: '1982', title: 'Growth & Development', description: 'Expansion of the campus including the construction of the first modern science laboratories and library.' },
  { year: '2005', title: 'Academic Prominence', description: 'Recognized nationally as a top-performing institution, consistently ranking among the best in national examinations.' },
  { year: '2015', title: 'The Modern Era', description: 'Integration of ICT into the curriculum and the launch of our comprehensive leadership and talent development programs.' },
  { year: 'Present', title: 'Looking to the Future', description: 'Continuing to innovate our educational approach, preparing globally competitive leaders for the 21st century.' }
]

// --- ACADEMIC FEATURES ---
const academicFeatures = [
  { title: 'Academic Excellence', desc: 'A rigorous curriculum designed to challenge students and foster a lifelong love for learning.', icon: AcademicCapIcon },
  { title: 'STEM & Innovation', desc: 'State-of-the-art laboratories and tech hubs to inspire the next generation of innovators.', icon: LightBulbIcon },
  { title: 'Talent Development', desc: 'Robust programs in sports, arts, and music to nurture individual gifts and passions.', icon: SparklesIcon },
  { title: 'Leadership & Character', desc: 'Dedicated mentorship and prefect systems to mold ethical and visionary leaders.', icon: ShieldCheckIcon }
]

// --- STUDENT EXPERIENCE ---
const studentExperiences = [
  { title: 'Championship Sports', desc: 'Building resilience and teamwork on the field.', img: '/images/about/experience-1.jpg' },
  { title: 'Vibrant Clubs', desc: 'Over 20 active societies ranging from debate to robotics.', img: '/images/about/club.jpg' },
  { title: 'Community Service', desc: 'Instilling a culture of giving back to society.', img: '/images/about/experience-3.jpg' }
]

// --- STATISTICS SECTION ---
const rawStats = [
  { value: 60, suffix: '+', label: 'Years of Excellence' },
  { value: 1200, suffix: '+', label: 'Students' },
  { value: 65, suffix: '+', label: 'Teachers' },
  { value: 98, suffix: '%', label: 'Academic Achievement' }
]
const statsConfig = rawStats.map(stat => {
  const { count, startCounting } = useCounter(stat.value, 2000)
  return { ...stat, count, startCounting }
})
const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 })
watch(statsVisible, (visible) => {
  if (visible) {
    statsConfig.forEach(s => s.startCounting())
  }
})

// --- WHY BARINGO ---
const reasons = [
  { title: 'Strong Academic Foundation', desc: 'Consistently top-tier performance in national exams.', icon: BookOpenIcon },
  { title: 'Character & Discipline', desc: 'A nurturing environment that demands and rewards ethical behavior.', icon: ShieldCheckIcon },
  { title: 'Leadership Development', desc: 'Opportunities to lead, serve, and inspire peers.', icon: FlagIcon },
  { title: 'Holistic Student Growth', desc: 'Balancing academics with sports, arts, and emotional well-being.', icon: UsersIcon }
]

// --- GALLERY ---
const galleryImages = [
  { src: '/images/about/gallery-1.jpg', alt: 'Main Administration Block', caption: 'Administration Block' },
  { src: '/images/about/gallery-2.jpg', alt: 'Students in Science Lab', caption: 'Modern Science Labs' },
  { src: '/images/about/gallery-3.jpg', alt: 'School Library', caption: 'The School Library' },
  { src: '/images/about/gallery-4.jpg', alt: 'Sports Field', caption: 'Athletics & Sports' },
  { src: '/images/about/pricegiving.jpg', alt: 'Graduation Ceremony', caption: 'Prize Giving Day' },
  { src: '/images/about/students.jpg', alt: 'Students interacting', caption: 'Vibrant High School Life' }
]
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">
    
    <!-- 1. PREMIUM HERO SECTION -->
    <section class="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <!-- Background Image with Ken Burns effect -->
      <div class="absolute inset-0 z-0">
        <img
          src="/images/about/graduation.jpg"
          alt="Baringo High School Campus"
          class="w-full h-full object-cover animate-[scale-in_20s_ease-out_forwards]"
          loading="eager"
        />
        <!-- Dark gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40 dark:from-gray-950/95 dark:via-gray-950/80"></div>
      </div>

      <div class="relative z-10 container-custom">
        <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px w-12 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
              ABOUT BARINGO HIGH SCHOOL
            </span>
            <div class="h-px w-12 bg-secondary"></div>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8">
            Shaping Leaders.<br />
            Inspiring Excellence.
          </h1>
          
          <p class="text-lg md:text-xl text-gray-200 font-body mb-10 leading-relaxed max-w-2xl">
            Committed to holistic development, we foster an environment where academic rigor meets character formation, discipline, and visionary leadership.
          </p>

          <div class="flex flex-col sm:flex-row gap-5">
            <a
              href="#our-story"
              class="inline-flex items-center justify-center px-8 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wide rounded shadow-lg hover:bg-secondary-light hover:shadow-xl transition-all duration-300"
            >
              Discover Our Story
            </a>
            <a
              href="#leadership"
              class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold font-sans uppercase tracking-wide rounded hover:bg-white hover:text-navy transition-all duration-300"
            >
              Meet Our Principal
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a href="#intro" aria-label="Scroll down" class="w-[30px] h-[50px] border-2 border-white/50 rounded-full flex justify-center p-2 hover:border-secondary transition-colors">
          <div class="w-1.5 h-3 bg-secondary rounded-full"></div>
        </a>
      </div>
    </section>

    <!-- 2. INTRODUCTION / WHO WE ARE -->
    <section id="intro" class="section-padding bg-white dark:bg-darkbg overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <!-- Image Left -->
          <div class="relative" data-aos="fade-right">
            <div class="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-gray-100 dark:border-gray-800">
              <img 
                src="/images/about/baringo.jpg" 
                alt="Baringo High Campus" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 lg:-right-10 z-20 bg-navy dark:bg-gray-900 text-white p-6 md:p-8 rounded-xl shadow-xl max-w-[250px] border-l-4 border-secondary hidden sm:block">
              <p class="font-heading font-bold text-xl mb-2 text-secondary">ESTABLISHED</p>
              <p class="text-xs font-sans tracking-widest text-gray-300 leading-relaxed uppercase">Excellence &bull; Leadership &bull; Discipline</p>
            </div>
            <!-- Decorative Box -->
            <div class="absolute -top-6 -left-6 w-full h-full border-2 border-secondary/20 rounded-2xl z-0"></div>
          </div>

          <!-- Content Right -->
          <div data-aos="fade-left">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-10 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">WHO WE ARE</span>
            </div>
          
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-8">
              A Tradition of Excellence
            </h2>
            <div class="prose prose-lg dark:prose-invert font-body text-gray-600 dark:text-gray-300">
              <p class="mb-6">
                Baringo High School is more than an educational institution; it is a community dedicated to the pursuit of knowledge, the development of character, and the cultivation of tomorrow's leaders.
              </p>
              <p class="mb-6">
                Rooted in a rich history, our school combines rigorous academic standards with a vibrant co-curricular life. We believe in holistic education—where discipline, innovation, and community service are just as important as classroom achievements.
              </p>
              <p class="mb-8">
                Our faculty and staff work tirelessly to create a nurturing yet challenging environment, empowering every student to discover their potential and make a meaningful impact on society.
              </p>
            </div>
            <RouterLink
              to="/academics"
              class="inline-flex items-center text-navy dark:text-white font-bold font-sans tracking-wide uppercase hover:text-secondary dark:hover:text-secondary transition-colors duration-300 group"
            >
              Explore Academics
              <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. OUR VISION & MISSION -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Vision Card -->
          <div class="group bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <EyeIcon class="w-32 h-32 text-navy dark:text-white" />
            </div>
            <div class="w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-xl flex items-center justify-center mb-8">
              <EyeIcon class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="text-3xl font-heading font-bold text-navy dark:text-white mb-6">Our Vision</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 font-body leading-relaxed relative z-10">
              {{ schoolInfo.vision }}
            </p>
          </div>

          <!-- Mission Card -->
          <div class="group bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <FlagIcon class="w-32 h-32 text-navy dark:text-white" />
            </div>
            <div class="w-16 h-16 bg-primary/10 dark:bg-primary/30 rounded-xl flex items-center justify-center mb-8">
              <FlagIcon class="w-8 h-8 text-primary dark:text-white" />
            </div>
            <h3 class="text-3xl font-heading font-bold text-navy dark:text-white mb-6">Our Mission</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 font-body leading-relaxed relative z-10">
              {{ schoolInfo.mission }}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. OUR CORE VALUES -->
    <section class="section-padding bg-navy dark:bg-gray-950 relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="h-px w-10 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">GUIDING PRINCIPLES</span>
            <div class="h-px w-10 bg-secondary"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">Our Core Values</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(val, index) in coreValues" 
            :key="val.name"
            class="bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl p-8 transition-colors duration-300 group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
              <component :is="val.icon" class="w-6 h-6 text-secondary group-hover:text-navy transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ val.name }}</h3>
            <p class="text-gray-400 font-body text-sm leading-relaxed">{{ val.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR STORY-->
   <section
  id="our-story"
  class="section-padding bg-white dark:bg-darkbg overflow-hidden"
>
  <div class="container-custom max-w-6xl">

    <!-- Section Header -->
    <div class="text-center mb-20" data-aos="fade-up">
      <span
        class="inline-block text-secondary font-semibold tracking-[0.25em] uppercase text-sm mb-4"
      >
        Our History
      </span>

      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy dark:text-white mb-6"
      >
        Our Journey
      </h2>

      <div class="w-16 h-[2px] bg-secondary mx-auto mb-6"></div>

      <p
        class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-body text-lg leading-relaxed"
      >
        A rich history of shaping minds, nurturing talent, and building the
        future of education in the Rift Valley.
      </p>
    </div>


    <!-- Timeline -->
    <div class="relative">

      <!-- Center Line -->
      <div
        class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px
               bg-gray-200 dark:bg-gray-700
               md:-translate-x-1/2"
      ></div>


      <!-- Milestones -->
      <div
        v-for="(item, index) in milestones"
        :key="item.year"
        class="relative mb-20 last:mb-0"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >

        <!-- Timeline Dot -->
        <div
          class="absolute left-4 md:left-1/2 top-2
                 w-4 h-4
                 bg-secondary
                 rounded-full
                 border-4 border-white dark:border-darkbg
                 shadow-md
                 -translate-x-1/2
                 z-10"
        ></div>


        <!-- LEFT ITEM -->
        <div
          v-if="index % 2 === 0"
          class="grid md:grid-cols-2"
        >

          <div class="pr-8 md:pr-16 pl-12 md:pl-0 text-left md:text-right">

            <!-- Year -->
            <span
              class="inline-block
                     px-4 py-2
                     bg-navy/5 dark:bg-white/5
                     text-secondary
                     font-bold
                     text-sm
                     tracking-widest
                     rounded-sm
                     mb-4"
            >
              {{ item.year }}
            </span>

            <h3
              class="text-2xl md:text-3xl
                     font-heading font-bold
                     text-navy dark:text-white
                     mb-4"
            >
              {{ item.title }}
            </h3>

            <p
              class="text-gray-600 dark:text-gray-400
                     font-body
                     leading-relaxed
                     max-w-md
                     md:ml-auto"
            >
              {{ item.description }}
            </p>

          </div>

          <!-- Empty opposite side -->
          <div></div>

        </div>


        <!-- RIGHT ITEM -->
        <div
          v-else
          class="grid md:grid-cols-2"
        >

          <!-- Empty opposite side -->
          <div></div>

          <div class="pl-12 md:pl-16 pr-8 md:pr-0 text-left">

            <!-- Year -->
            <span
              class="inline-block
                     px-4 py-2
                     bg-navy/5 dark:bg-white/5
                     text-secondary
                     font-bold
                     text-sm
                     tracking-widest
                     rounded-sm
                     mb-4"
            >
              {{ item.year }}
            </span>

            <h3
              class="text-2xl md:text-3xl
                     font-heading font-bold
                     text-navy dark:text-white
                     mb-4"
            >
              {{ item.title }}
            </h3>

            <p
              class="text-gray-600 dark:text-gray-400
                     font-body
                     leading-relaxed
                     max-w-md"
            >
              {{ item.description }}
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

    <!-- 6. LEADERSHIP -->
    <section id="leadership" class="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div class="container-custom">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Image -->
            <div class="relative aspect-square lg:aspect-auto" data-aos="fade-right">
              <img 
                src="/images/about/principal.jpg" 
                :alt="schoolInfo.principal.name" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent lg:hidden"></div>
              <div class="absolute bottom-6 left-6 lg:hidden text-white">
                <h3 class="text-2xl font-heading font-bold">{{ schoolInfo.principal.name }}</h3>
                <p class="text-secondary font-sans tracking-wide text-sm">{{ schoolInfo.principal.title }}</p>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="p-10 lg:p-16 flex flex-col justify-center" data-aos="fade-left">
              <div class="flex items-center gap-4 mb-4">
                <div class="h-px w-10 bg-secondary"></div>
                <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">MESSAGE FROM THE PRINCIPAL</span>
              </div>
              <h2 class="text-4xl font-heading font-bold text-navy dark:text-white mb-8">
                Leading With Purpose
              </h2>
              <div class="prose prose-lg dark:prose-invert font-body text-gray-600 dark:text-gray-300 mb-8 italic relative">
                <span class="absolute -top-6 -left-4 text-6xl text-gray-200 dark:text-gray-700 font-heading leading-none z-0">"</span>
                <p class="relative z-10">
                  Welcome to Baringo High School. We are profoundly dedicated to cultivating an environment where academic distinction meets ethical development. Our goal is to inspire every student to realize their full potential, equipping them with the knowledge and character to lead and serve in our dynamic world. 
                </p>
              </div>
              <div class="hidden lg:block mb-10">
                <h3 class="text-xl font-heading font-bold text-navy dark:text-white">{{ schoolInfo.principal.name }}</h3>
                <p class="text-gray-500 dark:text-gray-400 font-sans text-sm uppercase tracking-wider">{{ schoolInfo.principal.title }}</p>
              </div>
              <div>
                <RouterLink
                  to="/principal"
                  class="inline-flex items-center px-8 py-3.5 bg-navy dark:bg-white text-white dark:text-navy font-bold font-sans rounded hover:bg-navy-light dark:hover:bg-gray-200 transition-colors shadow-lg"
                >
                  Read Full Message
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ACADEMIC EXCELLENCE -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">Our Educational Approach</h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">Providing a dynamic and comprehensive learning experience.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feature, index) in academicFeatures" 
            :key="feature.title"
            class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 dark:border-gray-800"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-secondary">
              <component :is="feature.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 font-body text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. STUDENT EXPERIENCE -->
    <section class="py-10 bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
          <!-- Left Large Image -->
          <div class="lg:w-1/2 relative rounded-2xl overflow-hidden group h-[400px] lg:h-full" data-aos="fade-right">
            <img :src="studentExperiences[0].img" :alt="studentExperiences[0].title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-8 lg:p-12">
              <h3 class="text-3xl font-heading font-bold text-white mb-2">{{ studentExperiences[0].title }}</h3>
              <p class="text-gray-200 font-body">{{ studentExperiences[0].desc }}</p>
            </div>
          </div>
          
          <!-- Right Stacked Images -->
          <div class="lg:w-1/2 flex flex-col gap-6 h-[600px] lg:h-full">
            <div class="relative flex-1 rounded-2xl overflow-hidden group" data-aos="fade-left" data-aos-delay="100">
              <img :src="studentExperiences[1].img" :alt="studentExperiences[1].title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8">
                <h3 class="text-2xl font-heading font-bold text-white mb-2">{{ studentExperiences[1].title }}</h3>
                <p class="text-gray-200 font-body text-sm">{{ studentExperiences[1].desc }}</p>
              </div>
            </div>
            <div class="relative flex-1 rounded-2xl overflow-hidden group" data-aos="fade-left" data-aos-delay="200">
              <img :src="studentExperiences[2].img" :alt="studentExperiences[2].title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8">
                <h3 class="text-2xl font-heading font-bold text-white mb-2">{{ studentExperiences[2].title }}</h3>
                <p class="text-gray-200 font-body text-sm">{{ studentExperiences[2].desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. STATISTICS SECTION -->
    <section ref="statsRef" class="section-padding bg-navy dark:bg-gray-950">
      <div class="container-custom">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 lg:divide-x lg:divide-white/20">
          <div 
            v-for="(stat, index) in statsConfig" 
            :key="stat.label" 
            class="px-4"
            data-aos="fade-up" 
            :data-aos-delay="index * 100"
          >
            <div class="text-5xl md:text-6xl font-bold text-white font-heading mb-3 flex items-center justify-center">
              <span>{{ stat.count }}</span>
              <span class="text-secondary ml-1">{{ stat.suffix }}</span>
            </div>
            <div class="text-gray-300 font-sans tracking-wide uppercase text-sm font-semibold">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. WHY BARINGO HIGH SCHOOL -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">Why Baringo High School?</h2>
          <p class="text-xl text-secondary font-heading font-semibold max-w-3xl mx-auto italic">
            "Education is more than what happens inside the classroom."
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          <div 
            v-for="(reason, index) in reasons" 
            :key="reason.title"
            class="flex gap-6"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="shrink-0">
              <div class="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-secondary">
                <CheckCircleIcon class="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-2">{{ reason.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-body">{{ reason.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION (GALLERY) -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white">High School Experience</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span class="text-white font-sans font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {{ image.caption }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12. CALL TO ACTION -->
    <section class="relative py-24 lg:py-32 overflow-hidden bg-navy dark:bg-gray-950">
      <div class="absolute inset-0 z-0">
        <img src="/images/about/cta-bg.jpg" alt="Campus aerial view" class="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div class="absolute inset-0 bg-gradient-to-t from-navy to-navy/80 dark:from-gray-950 dark:to-gray-950/80"></div>
      </div>

      <div class="relative z-10 container-custom text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
          Be Part of the Baringo High School Story
        </h2>
        <p class="text-xl text-gray-300 font-body max-w-3xl mx-auto mb-10 leading-relaxed">
          Discover a learning environment where excellence, character, and leadership come together to shape the future.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <RouterLink
            to="/admissions"
            class="inline-flex items-center justify-center px-10 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wider rounded shadow-lg hover:bg-yellow-400 transition-all duration-300"
          >
            Explore Admissions
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold font-sans uppercase tracking-wider rounded hover:bg-white hover:text-navy transition-all duration-300"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Keyframes for the Ken Burns effect */
@keyframes scale-in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
.animate-\\[scale-in_20s_ease-out_forwards\\] {
  animation: scale-in 20s ease-out forwards;
}
</style>