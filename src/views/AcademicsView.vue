<script setup>
import { RouterLink } from 'vue-router'
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  CpuChipIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  LanguageIcon,
  CalculatorIcon
} from '@heroicons/vue/24/outline'

const departments = [
  { name: 'Sciences', icon: LightBulbIcon, desc: 'Fostering analytical thinking and discovery through practical experimentation.', subjects: ['Biology', 'Chemistry', 'Physics'] },
  { name: 'Mathematics', icon: CalculatorIcon, desc: 'Building strong logical reasoning and problem-solving capabilities.', subjects: ['Mathematics', 'Further Math'] },
  { name: 'Languages', icon: LanguageIcon, desc: 'Developing exceptional communication skills and cultural appreciation.', subjects: ['English', 'Kiswahili', 'French'] },
  { name: 'Humanities', icon: GlobeAltIcon, desc: 'Understanding our society, history, and the broader global environment.', subjects: ['History', 'Geography', 'CRE'] },
  { name: 'Technical & Applied', icon: WrenchScrewdriverIcon, desc: 'Practical skills preparing students for modern industry and entrepreneurship.', subjects: ['Agriculture', 'Business', 'Computer Studies'] }
]

const features = [
  { title: 'Critical Thinking', desc: 'We train students to analyze information objectively and make reasoned judgments.', icon: LightBulbIcon },
  { title: 'Practical Learning', desc: 'Moving beyond theory with hands-on laboratory work, projects, and real-world applications.', icon: WrenchScrewdriverIcon },
  { title: 'Collaboration', desc: 'Fostering teamwork through group projects, debates, and peer-to-peer learning.', icon: UserGroupIcon },
  { title: 'Innovation', desc: 'Encouraging creative problem solving and the use of modern technology.', icon: CpuChipIcon }
]

const journey = [
  { phase: 'Form 1', title: 'Foundation', desc: 'Transitioning to high school with a focus on core subject mastery, discipline, and discovering new interests.' },
  { phase: 'Form 2', title: 'Exploration', desc: 'Deepening knowledge across all subjects while identifying academic strengths and participating actively in co-curriculars.' },
  { phase: 'Form 3', title: 'Specialization', desc: 'Focusing on chosen subject pathways, taking on leadership roles, and engaging in advanced practical work.' },
  { phase: 'Form 4', title: 'Excellence', desc: 'Intensive preparation for national examinations, career guidance, and transition to higher education.' }
]
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">
    
    <!-- HERO -->
    <section class="relative min-h-[60vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80&fit=crop" class="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Academic Excellence" />
        <div class="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>
      </div>
      <div class="container-custom relative z-10 py-24">
        <div class="max-w-3xl" data-aos="fade-up">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px w-8 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Learning & Discovery</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Academic <span class="text-secondary">Excellence</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300 font-body mb-10 leading-relaxed max-w-2xl">
            Empowering students with knowledge, curiosity, and the confidence to shape their future in a rapidly evolving world.
          </p>
        </div>
      </div>
    </section>

    <!-- ACADEMIC PHILOSOPHY -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Our Philosophy</span>
            </div>
            <h2 class="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">Learning Beyond the Classroom</h2>
            <div class="prose prose-lg dark:prose-invert font-body text-gray-600 dark:text-gray-300">
              <p class="mb-4">At Baringo High School, we believe that education is not merely the transmission of facts, but the ignition of curiosity. Our academic framework is designed to develop well-rounded individuals who are intellectually competent, morally sound, and socially responsible.</p>
              <p>We blend rigorous traditional academics with modern, innovative teaching methodologies. By fostering critical thinking, discipline, and collaboration, we ensure our students don't just pass examinations—they emerge as visionary leaders ready to tackle real-world challenges.</p>
            </div>
          </div>
          <div class="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-left">
            <div class="absolute inset-0 border-4 border-secondary/20 rounded-2xl z-10 m-4 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&fit=crop" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Students learning" />
          </div>
        </div>
      </div>
    </section>

    <!-- ACADEMIC DEPARTMENTS PREVIEW -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Disciplines</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white">Our Academic Departments</h2>
          </div>
          <RouterLink to="/departments" class="inline-flex items-center font-sans font-bold text-navy dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors group">
            View All Departments <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <RouterLink 
            v-for="(dept, idx) in departments" :key="dept.name"
            to="/departments"
            class="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            data-aos="fade-up" :data-aos-delay="idx * 100"
          >
            <div class="w-12 h-12 bg-navy/5 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
              <component :is="dept.icon" class="w-6 h-6 text-navy dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-heading font-bold text-navy dark:text-white mb-3 group-hover:text-secondary transition-colors">{{ dept.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 font-body mb-6 flex-grow">{{ dept.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="sub in dept.subjects" :key="sub" class="text-[10px] font-sans font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">{{ sub }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- LEARNING EXPERIENCE -->
    <section class="section-padding bg-navy dark:bg-gray-950 relative overflow-hidden">
      <div class="absolute -right-32 top-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div class="container-custom relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-4">The Learning Experience</h2>
          <p class="text-gray-400 font-body text-lg max-w-2xl mx-auto">Equipping students with the core competencies required for 21st-century success.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feat, idx) in features" :key="feat.title"
            class="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 text-center group"
            data-aos="fade-up" :data-aos-delay="idx * 100"
          >
            <div class="w-16 h-16 mx-auto bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="feat.icon" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="text-xl font-heading font-bold text-white mb-3">{{ feat.title }}</h3>
            <p class="text-gray-400 font-body text-sm leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ACADEMIC JOURNEY TIMELINE -->
    <section class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom max-w-5xl">
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="h-px w-8 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Student Progression</span>
            <div class="h-px w-8 bg-secondary"></div>
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white">The Academic Journey</h2>
        </div>

        <div class="relative border-l border-gray-200 dark:border-gray-800 md:border-none">
          <!-- Desktop Center Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>
          
          <div 
            v-for="(stage, idx) in journey" :key="stage.phase"
            class="relative pl-8 md:pl-0 mb-12 md:mb-24 last:mb-0"
            data-aos="fade-up"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-[-5px] md:left-1/2 top-2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-3 h-3 bg-secondary rounded-full ring-4 ring-white dark:ring-darkbg z-10"></div>
            
            <div class="md:w-1/2" :class="idx % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'">
              <span class="inline-block text-secondary font-sans font-bold text-xs uppercase tracking-widest mb-2">{{ stage.phase }}</span>
              <h3 class="text-2xl md:text-3xl font-heading font-bold text-navy dark:text-white mb-4">{{ stage.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-body leading-relaxed">{{ stage.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900/50 text-center border-t border-gray-100 dark:border-gray-800">
      <div class="container-custom max-w-3xl" data-aos="zoom-in">
        <h2 class="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">Building Foundations for a Lifetime</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 font-body mb-10">
          Discover how our curriculum shapes the innovators and leaders of tomorrow.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink to="/departments" class="px-8 py-4 bg-navy dark:bg-secondary text-white dark:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg hover:bg-navy-light dark:hover:bg-secondary-light transition-colors">
            Explore Departments
          </RouterLink>
          <RouterLink to="/contact" class="px-8 py-4 border-2 border-navy dark:border-white text-navy dark:text-white font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-colors">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>
