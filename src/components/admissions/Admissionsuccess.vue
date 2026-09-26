<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { 
  CheckCircleIcon, 
  PrinterIcon, 
  HomeIcon, 
  DocumentTextIcon,
  ExclamationCircleIcon
} from '@heroicons/vue/24/outline'

// Strictly following requirement: Get application number directly from URL Search Params
const applicationNumber = new URLSearchParams(window.location.search).get('application')

const handlePrint = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 lg:py-20 flex items-center justify-center font-sans">
    <div class="container-custom max-w-4xl mx-auto px-4">
      
      <!-- SUCCESS STATE -->
      <div v-if="applicationNumber" class="bg-white dark:bg-gray-900 rounded-3xl shadow-elegant-lg p-8 md:p-14 border border-gray-100 dark:border-gray-800" data-aos="fade-up">
        
        <!-- Header -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 dark:text-green-400 mb-6 mx-auto">
            <CheckCircleIcon class="w-14 h-14" />
          </div>
          <h1 class="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
            Application Submitted Successfully!
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body">
            Thank you for applying to Baringo High School. Your application has been received successfully.
          </p>
        </div>

        <!-- Application Number Card -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center max-w-xl mx-auto mb-10 border border-gray-100 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
            Application Number
          </p>
          <div class="text-3xl md:text-4xl font-mono font-bold text-navy dark:text-white tracking-wide">
            {{ applicationNumber }}
          </div>
        </div>

        <!-- Important Message -->
        <div class="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-10 text-left">
          <ExclamationCircleIcon class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 class="font-bold text-blue-900 dark:text-blue-300 text-lg mb-1">Important</h3>
            <p class="text-blue-800 dark:text-blue-200/80 font-body">
              Please keep your application number safe. You may need it when making future enquiries about your application.
            </p>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="mb-12 text-left max-w-2xl mx-auto">
          <h3 class="text-2xl font-heading font-bold text-navy dark:text-white mb-6 text-center">
            What's Next?
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <span class="text-gray-700 dark:text-gray-300 font-body">The school will review your application.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <span class="text-gray-700 dark:text-gray-300 font-body">Keep your application number for reference.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <span class="text-gray-700 dark:text-gray-300 font-body">The school may contact the parent/guardian using the information provided in the application.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <span class="text-gray-700 dark:text-gray-300 font-body">Check your email or phone for further communication.</span>
            </li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
    
        
          
          <RouterLink 
            to="/admissions" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-navy dark:border-white text-navy dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded transition-colors"
          >
            <DocumentTextIcon class="w-5 h-5" />
            Admissions
          </RouterLink>

          <RouterLink 
            to="/" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy hover:bg-navy-light dark:bg-white dark:hover:bg-gray-200 text-white dark:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg transition-colors"
          >
            <HomeIcon class="w-5 h-5" />
            Back to Home
          </RouterLink>
        </div>
      </div>

      <!-- ERROR / MISSING STATE -->
      <div v-else class="bg-white dark:bg-gray-900 rounded-3xl shadow-elegant-lg p-10 md:p-16 text-center border border-gray-100 dark:border-gray-800 max-w-2xl mx-auto" data-aos="fade-up">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 mb-6 mx-auto">
          <ExclamationCircleIcon class="w-10 h-10" />
        </div>
        <h1 class="text-3xl font-heading font-bold text-navy dark:text-white mb-4">
          Application Confirmation
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 font-body">
          We couldn't find an application number for this confirmation. Please make sure you submitted the form correctly.
        </p>
        <div class="flex justify-center print:hidden">
          <RouterLink 
            to="/admissions" 
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-navy-light dark:bg-white dark:hover:bg-gray-200 text-white dark:text-navy font-bold font-sans uppercase tracking-wide text-sm rounded shadow-lg transition-colors"
          >
            <DocumentTextIcon class="w-5 h-5" />
            Back to Admissions
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@media print {
  body {
    background-color: white !important;
  }
  .shadow-elegant-lg {
    box-shadow: none !important;
  }
  .border {
    border-color: #e5e7eb !important;
  }
  .bg-white {
    background-color: white !important;
  }
  /* Ensure background colors for the cards show in print */
  .bg-gray-50 {
    background-color: #f9fafb !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .bg-blue-50 {
    background-color: #eff6ff !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .bg-green-50 {
    background-color: #f0fdf4 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .text-navy {
    color: #0c1e36 !important;
  }
}
</style>
