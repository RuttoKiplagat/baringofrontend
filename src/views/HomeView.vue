<template>
  <div class="bg-background dark:bg-darkbg">
    <Hero />
    <QuickAccess />
    <AboutSchool />
    <Stats />
    <StudentLife />
    <LatestNews />
    <UpcomingEvents />
    <Academics />
    <Testimonials />
    <HomeCTA />
  </div>
</template>

<script setup>
import Hero from '@/components/common/home/Hero.vue'
import QuickAccess from '@/components/home/QuickAccess.vue'
import AboutSchool from '@/components/home/AboutSchool.vue'
import Stats from '@/components/home/Stats.vue'
import StudentLife from '@/components/home/StudentLife.vue'
import LatestNews from '@/components/home/LatestNews.vue'
import UpcomingEvents from '@/components/home/UpcomingEvents.vue'
import Academics from '@/components/home/Academics.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import HomeCTA from '@/components/home/HomeCTA.vue'
</script>