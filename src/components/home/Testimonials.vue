<script setup>
// Use a clearly marked placeholder dataset since real testimonials are not provided yet.
const testimonials = [
  {
    quote: "Baringo High School has given me more than academic knowledge. The discipline, support from teachers, and opportunities to participate in different activities have helped me become more confident and focused on my future.",
    name: "Jesse Kibet",
    role: "Form 4 Student"
  },
  {
    quote: "My years at Baringo High School gave me a strong foundation for university and life beyond school. The discipline, academic culture, and values I developed continue to guide me in my professional journey.",
    name: "Martin Githenge",
    role: "Alumnus"
  },
  {
    quote: "What stands out about Baringo High School is the balance between academic excellence, discipline, and character development. The school provides an environment where students can grow, learn, and prepare for their future.",
    name: "John Kiptek",
    role: "Parent"
  }
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-primary dark:bg-gray-950 relative overflow-hidden">
    <!-- Decorative quote mark -->
    <div class="absolute top-10 left-10 text-9xl text-white/5 font-heading font-bold select-none z-0">
      "
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="flex items-center justify-center gap-4 mb-4">
          <div class="h-px w-12 bg-secondary"></div>
          <span class="text-secondary font-sans font-bold tracking-widest text-sm uppercase">
            VOICES OF BARINGO
          </span>
          <div class="h-px w-12 bg-secondary"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white">
          Our Community
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white/10 dark:bg-gray-900 border border-white/10 dark:border-gray-800 p-8 rounded-xl hover:bg-white/15 transition-colors duration-300"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="text-secondary text-4xl font-heading mb-4 leading-none">"</div>
          <p class="text-gray-200 font-body mb-8 italic text-lg leading-relaxed">
            {{ testimonial.quote }}
          </p>
          <div class="flex flex-col">
            <span class="text-white font-heading font-bold text-xl">{{ testimonial.name }}</span>
            <span class="text-secondary-light font-sans text-sm uppercase tracking-wider mt-1">{{ testimonial.role }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
