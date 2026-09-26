<template>
  <div>
    <div class="bg-primary py-20 text-white text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4">Sports & Games</h1>
      <p class="text-gray-300 max-w-2xl mx-auto px-4">Developing talent through athletics</p>
    </div>

    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="sportsStore.loading" class="flex justify-center">
        <Loader />
      </div>

      <div v-else class="grid md:grid-cols-2 gap-8">
        <div v-for="sport in sportsStore.sports" :key="sport.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row">
          <div class="md:w-2/5 h-48 md:h-auto bg-gray-200 dark:bg-gray-700">
            <img v-if="sport.image" :src="sport.image" :alt="sport.name" class="w-full h-full object-cover" />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
              <TrophyIcon class="w-16 h-16" />
            </div>
          </div>
          <div class="p-6 md:w-3/5">
            <h3 class="text-xl font-bold text-primary dark:text-white font-heading mb-2">{{ sport.name }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ sport.description }}</p>
            <div class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <p v-if="sport.season"><span class="font-medium">Season:</span> {{ sport.season }}</p>
              <p v-if="sport.practice_time"><span class="font-medium">Practice:</span> {{ sport.practice_time }}</p>
              <p v-if="sport.venue"><span class="font-medium">Venue:</span> {{ sport.venue }}</p>
              <p v-if="sport.coach"><span class="font-medium">Coach:</span> {{ sport.coach.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { TrophyIcon } from '@heroicons/vue/24/outline'
import { useSportsStore } from '@/stores/sports.js'
import Loader from '@/components/common/Loader.vue'

const sportsStore = useSportsStore()                                                                                  

onMounted(() => {
  if (!sportsStore.sports.length) sportsStore.fetchSports()
})
</script>