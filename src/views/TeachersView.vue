<script setup>
import { ref, computed } from 'vue'
import { MagnifyingGlassIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const staffMembers = [
  { id: 1, name: 'Mr. Kibet Kimosop', role: 'Senior Principal', department: 'Administration', specialty: 'Educational Leadership', bio: 'With over 20 years of experience, Dr. Kiplagat leads with a vision of holistic student development.', image: '/images/staff/principal.jpg', isLeadership: true },
  { id: 2, name: 'Mr. Tanui', role: 'Deputy Principal', department: 'Administration', specialty: 'Curriculum Implementation', bio: 'Ensuring academic excellence and rigorous standard maintenance across all departments.', image: '/images/staff/depa.jpg', isLeadership: true },
  { id: 3, name: 'Mr. Kimutai', role: 'Deputy Principal', department: 'Boarding', specialty: 'Curriculum Implementation', bio: 'Ensuring academic excellence and rigorous standard maintenance across all departments.', image: '/images/staff/depa1.jpg', isLeadership: true },
  { id: 4, name: 'Mr. Kurui', role: 'Director of Studies', department: 'Administration', specialty: 'Curriculum Implementation', bio: 'Ensuring academic excellence and rigorous standard maintenance across all departments.', image: '/images/staff/dos.jpg', isLeadership: true },
   
]

const searchQuery = ref('')
const activeFilter = ref('All')
const categories = ['All', 'Administration', 'Mathematics', 'Sciences', 'Languages', 'Humanities', 'Business', 'Technical', 'Creative Arts']

const leadershipTeam = computed(() => staffMembers.filter(s => s.isLeadership))
const directoryTeam = computed(() => {
  let filtered = staffMembers
  if (activeFilter.value !== 'All') {
    filtered = filtered.filter(s => s.department === activeFilter.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    filtered = filtered.filter(s => s.name.toLowerCase().includes(q) || s.department.toLowerCase().includes(q))
  }
  return filtered
})
</script>

<template>
  <div class="bg-background dark:bg-darkbg min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative min-h-[60vh] flex items-center bg-navy dark:bg-gray-950 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-hero-pattern opacity-90"></div>
        <div class="absolute -right-32 -top-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>
      <div class="container-custom relative z-10 py-24 text-center md:text-left">
        <div class="max-w-3xl" data-aos="fade-right">
          <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
            <div class="h-px w-8 bg-secondary"></div>
            <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Our People</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Meet the People Behind <span class="text-secondary">Excellence</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300 font-body mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Baringo High School is supported by dedicated teachers, administrators, and staff committed to developing our students academically, morally, and personally.
          </p>
          <a href="#leadership" class="inline-flex items-center px-8 py-4 bg-secondary text-navy font-bold font-sans uppercase tracking-wide text-sm rounded hover:bg-secondary-light transition-colors shadow-lg">
            Meet Our Staff
          </a>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP SECTION -->
    <section id="leadership" class="section-padding bg-white dark:bg-darkbg">
      <div class="container-custom">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-4">School Leadership</h2>
          <p class="text-gray-600 dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Our visionary leaders guiding the institution towards unparalleled academic and holistic success.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          <div 
            v-for="(leader, idx) in leadershipTeam" 
            :key="leader.id"
            class="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-elegant-lg transition-all duration-400"
            data-aos="fade-up" :data-aos-delay="idx * 100"
          >
            <div class="aspect-[4/5] overflow-hidden relative">
              <div class="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-400 z-10"></div>
              <img :src="leader.image" :alt="leader.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" onerror="this.src='/madam.jpg'" />
              <!-- Gold accent bar -->
              <div class="absolute bottom-0 left-0 w-full h-1.5 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20"></div>
            </div>
            <div class="p-8">
              <p class="text-secondary font-sans font-bold text-xs uppercase tracking-widest mb-2">{{ leader.role }}</p>
              <h3 class="text-2xl font-heading font-bold text-navy dark:text-white mb-3">{{ leader.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-body text-sm leading-relaxed mb-6">{{ leader.bio }}</p>
              <div class="flex items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <a href="#" class="text-gray-400 hover:text-navy dark:hover:text-white transition-colors">
                  <EnvelopeIcon class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED EDUCATOR -->
    <section class="section-padding bg-navy dark:bg-gray-950 overflow-hidden relative">
      <div class="absolute left-0 top-0 w-1/3 h-full bg-secondary/5 blur-3xl rounded-full"></div>
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div class="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
            <img src="/madam.jpg" alt="Featured Educator" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
          </div>
          <div data-aos="fade-left">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-8 bg-secondary"></div>
              <span class="text-secondary font-sans font-bold tracking-widest text-xs uppercase">Educator Spotlight</span>
              <div class="h-px w-8 bg-secondary"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-2">Madam Kemboi</h2>
            <p class="text-xl text-gray-400 font-heading italic mb-8">Biology Teacher</p>
            <div class="prose prose-lg prose-invert font-body text-gray-300 mb-8 relative">
              <span class="absolute -top-6 -left-6 text-6xl text-white/10 font-heading">"</span>
              <p>Education is not just about memorizing facts; it's about igniting a lifelong curiosity. In our science labs, we don't just run experiments—we train the next generation of critical thinkers who will solve the problems of tomorrow.</p>
            </div>
            <button class="px-8 py-3.5 border-2 border-secondary text-secondary font-bold font-sans uppercase tracking-wider text-sm rounded hover:bg-secondary hover:text-navy transition-all duration-300">
              Read Profile
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- STAFF DIRECTORY -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8" data-aos="fade-up">
          <div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Meet Our Teaching Team</h2>
            <p class="text-gray-600 dark:text-gray-400 font-body">Browse our directory of dedicated educators.</p>
          </div>
          <div class="relative w-full md:w-72">
            <MagnifyingGlassIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search staff..." 
              class="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/50 dark:text-white transition-shadow"
            />
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
          <button 
            v-for="cat in categories" :key="cat"
            @click="activeFilter = cat"
            class="px-5 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
            :class="activeFilter === cat ? 'bg-navy dark:bg-secondary text-white dark:text-navy border-navy dark:border-secondary' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-navy'"
          >
            {{ cat }}
          </button>
        </div>

        <div v-if="directoryTeam.length === 0" class="text-center py-20">
          <p class="text-gray-500 font-body text-lg">No staff members found matching your criteria.</p>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(staff, idx) in directoryTeam" :key="staff.id"
            class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up" :data-aos-delay="(idx % 4) * 100"
          >
            <div class="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img :src="staff.image" :alt="staff.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&h=500&fit=crop'" />
            </div>
            <div class="p-6">
              <span class="inline-block px-2 py-1 bg-secondary/10 text-secondary font-sans font-bold text-[10px] uppercase tracking-wider rounded mb-3">{{ staff.department }}</span>
              <h4 class="text-lg font-heading font-bold text-navy dark:text-white mb-1">{{ staff.name }}</h4>
              <p class="text-gray-500 dark:text-gray-400 font-sans text-sm mb-4">{{ staff.role }}</p>
              <button class="text-navy dark:text-white font-sans font-bold text-sm hover:text-secondary dark:hover:text-secondary transition-colors inline-flex items-center">
                View Profile <span class="ml-1 text-secondary">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STAFF STATISTICS -->
    <section class="py-20 bg-primary dark:bg-gray-950 border-t border-white/10">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          <div data-aos="fade-up">
            <div class="text-4xl md:text-5xl font-heading font-bold text-white mb-2">60<span class="text-secondary">+</span></div>
            <div class="text-gray-400 font-sans text-xs uppercase tracking-widest">Dedicated Educators</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div class="text-4xl md:text-5xl font-heading font-bold text-white mb-2">8</div>
            <div class="text-gray-400 font-sans text-xs uppercase tracking-widest">Academic Departments</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div class="text-4xl md:text-5xl font-heading font-bold text-white mb-2">15<span class="text-secondary">+</span></div>
            <div class="text-gray-400 font-sans text-xs uppercase tracking-widest">Avg. Years Experience</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div class="text-4xl md:text-5xl font-heading font-bold text-white mb-2">24/7</div>
            <div class="text-gray-400 font-sans text-xs uppercase tracking-widest">Student Support</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>