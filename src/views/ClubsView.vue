<template>
  <div>
    <div class="bg-primary py-20 text-white text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4">Student Clubs</h1>
      <p class="text-gray-300 max-w-2xl mx-auto px-4">Discover co-curricular activities</p>
    </div>

    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="clubsStore.loading" class="flex justify-center">
        <Loader />
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="club in clubsStore.clubs" :key="club.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-xl transition">
          <div class="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
            <UserGroupIcon class="w-7 h-7 text-secondary" />
          </div>
          <h3 class="text-xl font-bold text-primary dark:text-white font-heading mb-2">{{ club.name }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ club.description }}</p>
          <div class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <p v-if="club.meeting_day"><span class="font-medium">Day:</span> {{ club.meeting_day }}</p>
            <p v-if="club.meeting_time"><span class="font-medium">Time:</span> {{ club.meeting_time }}</p>
            <p v-if="club.venue"><span class="font-medium">Venue:</span> {{ club.venue }}</p>
            <p v-if="club.patron"><span class="font-medium">Patron:</span> {{ club.patron.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { UserGroupIcon } from '@heroicons/vue/24/outline'
import { useClubsStore } from '@/stores/clubs.js'
import Loader from '@/components/common/Loader'

const clubsStore = useClubsStore()

onMounted(() => {
  if (!clubsStore.clubs.length) clubsStore.fetchClubs()
})
</script>