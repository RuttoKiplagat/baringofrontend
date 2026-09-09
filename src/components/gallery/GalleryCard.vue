<template>
  <div class="relative group overflow-hidden rounded-xl cursor-pointer" @click="$emit('click', image)">
    <img :src="image.image_path" :alt="image.title || 'Gallery image'"
      class="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <h3 v-if="image.title" class="text-white font-semibold">{{ image.title }}</h3>
        <p v-if="image.category" class="text-gray-300 text-sm">{{ image.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: Object, required: true },
})
defineEmits(['click'])
</script>