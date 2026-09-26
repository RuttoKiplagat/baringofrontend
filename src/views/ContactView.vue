<script setup>
import { ref } from 'vue'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'
import api from '@/services/api'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await api.submitContactForm(form.value)
    
    successMessage.value = 'Your message has been sent successfully. We will get back to you soon.'
    
    // Clear form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    
    // Auto-clear success message after 5 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
    
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Sorry, there was an error sending your message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">

    <!-- hero contact -->

    <section class="relative overflow-hidden">

      <div class="grid min-h-[650px] lg:grid-cols-2">

        <!-- LEFT CONTENT -->
        <div
          class="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24
                 bg-gray-50 dark:bg-gray-900"
        >

          <div class="max-w-xl">

            <!-- Small heading -->
            <div class="flex items-center gap-3 mb-6">
              <span class="h-[3px] w-12 bg-secondary"></span>

              <span
                class="text-sm font-semibold uppercase tracking-[0.2em]
                       text-primary dark:text-secondary"
              >
                Get In Touch
              </span>
              <span class="h-[3px] w-12 bg-secondary"></span>
            </div>


            <!-- Main heading -->
            <h1
              class="font-heading text-5xl sm:text-6xl lg:text-6xl font-bold uppercase leading-[0.95]
                     text-primary dark:text-white"
            >Contact Us!</h1>


            <!-- Description -->
            <p
              class="mt-7 max-w-lg text-lg leading-8
                     text-gray-600 dark:text-gray-300"
            >
              We're here to help. Whether you're a prospective student,
              parent, guardian, alumnus, or member of the public, reach
              out to Baringo High School and we'll direct your enquiry
              to the right office.
            </p>


            <!-- CONTACT INFORMATION -->
            <div class="mt-10 space-y-6">

              <!-- Address -->
              <div class="flex items-start gap-4">

                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center
                         rounded-full bg-primary/10 dark:bg-white/10"
                >
                  <MapPinIcon
                    class="h-5 w-5 text-secondary"
                  />
                </div>

                <div>
                  <h3
                    class="font-heading text-lg font-bold
                           text-primary dark:text-white"
                  >
                    Address
                  </h3>

                  <p
                    class="mt-1 leading-6
                           text-gray-600 dark:text-gray-300"
                  >
                    P.O. Box 45, Eldama Ravine<br />
                    Baringo County, Kenya
                  </p>
                </div>

              </div>


              <!-- Phone -->
              <div class="flex items-start gap-4">

                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center
                         rounded-full bg-primary/10 dark:bg-white/10"
                >
                  <PhoneIcon
                    class="h-5 w-5 text-secondary"
                  />
                </div>

                <div>
                  <h3
                    class="font-heading text-lg font-bold
                           text-primary dark:text-white"
                  >
                    Phone
                  </h3>

                  <p
                    class="mt-1 leading-6
                           text-gray-600 dark:text-gray-300"
                  >
                    +254 53 42100<br />
                    +254 712 345 678
                  </p>
                </div>

              </div>


              <!-- Email -->
              <div class="flex items-start gap-4">

                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center
                         rounded-full bg-primary/10 dark:bg-white/10"
                >
                  <EnvelopeIcon
                    class="h-5 w-5 text-secondary"
                  />
                </div>

                <div>
                  <h3
                    class="font-heading text-lg font-bold
                           text-primary dark:text-white"
                  >
                    Email
                  </h3>

                  <p
                    class="mt-1 leading-6
                           text-gray-600 dark:text-gray-300"
                  >
                    info@baringohigh.ac.ke<br />
                    principal@baringohigh.ac.ke
                  </p>
                </div>

              </div>

            </div>


            <!-- CTA -->
            <a
              href="#message-form"
              class="mt-10 inline-flex items-center gap-3
                     rounded-md bg-primary px-7 py-4
                     font-semibold text-white
                     transition-all duration-300
                     hover:-translate-y-1 hover:bg-primary/90
                     hover:shadow-xl"
            >
              Send Us A Message

              <ArrowRightIcon class="h-5 w-5" />
            </a>

          </div>
        </div>


       <!-- RIGHT IMAGE -->

        <div class="relative min-h-[500px] lg:min-h-full">

          <img
            src="/images/about/baringo.jpg"
            alt="Baringo High School campus"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <!-- Image overlay -->
          <div
            class="absolute inset-0
                   bg-gradient-to-r from-primary/30
                   via-transparent to-black/20"
          ></div>


          <!-- Image information card -->
          <div
            class="absolute bottom-8 left-6 right-6
                   sm:left-10 sm:right-10
                   rounded-xl bg-white/95 p-6
                   shadow-2xl backdrop-blur-sm
                   dark:bg-gray-900/95"
          >

            <p
              class="text-sm font-semibold uppercase
                     tracking-[0.2em] text-secondary"
            >
              Baringo High School
            </p>

            <h2
              class="mt-2 font-heading text-2xl
                     font-bold text-primary dark:text-white"
            >
              We're Here To Help
            </h2>

            <p
              class="mt-2 text-sm leading-6
                     text-gray-600 dark:text-gray-300"
            >
              Have a question? Our school offices are ready
              to assist you.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- ===================================================== -->
    <!-- CONTACT FORM SECTION -->
    <!-- ===================================================== -->

    <section
      id="message-form"
      class="bg-white px-6 py-20
             dark:bg-gray-950
             sm:px-10 lg:px-16 xl:px-24"
    >

      <div class="mx-auto max-w-7xl">

        <!-- Section heading -->
        <div class="mb-12 max-w-2xl">

          <div class="flex items-center gap-3 mb-4">

            <span class="h-[3px] w-10 bg-secondary"></span>

            <span
              class="text-sm font-semibold uppercase
                     tracking-[0.2em]
                     text-primary dark:text-secondary"
            >
              Send An Enquiry
            </span>

          </div>

          <h2
            class="font-heading text-3xl sm:text-4xl
                   font-bold text-primary dark:text-white"
          >
            How Can We Help You?
          </h2>

          <p
            class="mt-4 text-gray-600
                   dark:text-gray-300"
          >
            Fill in the form below and send us your enquiry.
            Our team will get back to you as soon as possible.
          </p>

        </div>


        <!-- FORM + INFORMATION -->
        <div class="grid gap-10 lg:grid-cols-5">

          <!-- =============================================== -->
          <!-- FORM -->
          <!-- =============================================== -->

          <div
            class="lg:col-span-3 rounded-2xl
                   border border-gray-100
                   bg-gray-50 p-6 shadow-sm
                   dark:border-gray-800
                   dark:bg-gray-900
                   sm:p-8"
          >
            <!-- Status Messages -->
            <div v-if="successMessage" class="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-sm font-medium">
              {{ successMessage }}
            </div>
            
            <div v-if="errorMessage" class="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 text-sm font-medium">
              {{ errorMessage }}
            </div>

            <form
              @submit.prevent="submitForm"
              class="space-y-6"
            >

              <!-- Name  -->
              

                <div>
                  <label
                    class="mb-2 block text-sm font-medium
                           text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Your name"
                    required
                    class="w-full rounded-lg border
                           border-gray-200 bg-white
                           px-4 py-3 outline-none
                           transition
                           placeholder:text-gray-400
                           focus:border-primary
                           focus:ring-2 focus:ring-primary/20
                           dark:border-gray-700
                           dark:bg-gray-800
                           dark:text-white"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label
                    class="mb-2 block text-sm font-medium
                           text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    class="w-full rounded-lg border
                           border-gray-200 bg-white
                           px-4 py-3 outline-none
                           transition
                           placeholder:text-gray-400
                           focus:border-primary
                           focus:ring-2 focus:ring-primary/20
                           dark:border-gray-700
                           dark:bg-gray-800
                           dark:text-white"
                  />
                </div>

              


              <!-- Subject -->
              <div>

                <label
                  class="mb-2 block text-sm font-medium
                         text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>

                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="What is your enquiry about?"
                  required
                  class="w-full rounded-lg border
                         border-gray-200 bg-white
                         px-4 py-3 outline-none
                         transition
                         placeholder:text-gray-400
                         focus:border-primary
                         focus:ring-2 focus:ring-primary/20
                         dark:border-gray-700
                         dark:bg-gray-800
                         dark:text-white"
                />

              </div>


              <!-- Message -->
              <div>

                <label
                  class="mb-2 block text-sm font-medium
                         text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  class="w-full resize-none rounded-lg
                         border border-gray-200
                         bg-white px-4 py-3
                         outline-none transition
                         placeholder:text-gray-400
                         focus:border-primary
                         focus:ring-2 focus:ring-primary/20
                         dark:border-gray-700
                         dark:bg-gray-800
                         dark:text-white"
                ></textarea>

              </div>


              <!-- Submit -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex w-full items-center
                       justify-center gap-3
                       rounded-lg bg-primary
                       px-6 py-4 font-semibold
                       text-white transition-all
                       duration-300
                       hover:-translate-y-0.5
                       hover:bg-primary/90
                       hover:shadow-lg
                       disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>

                <ArrowRightIcon v-if="!isSubmitting" class="h-5 w-5" />
                <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>

            </form>

          </div>


          <!-- =============================================== -->
          <!-- RIGHT INFO CARD -->
          <!-- =============================================== -->

          <div class="lg:col-span-2">

            <div
              class="h-full rounded-2xl
                     bg-primary p-8 text-white
                     shadow-xl sm:p-10"
            >

              <span
                class="text-sm font-semibold uppercase
                       tracking-[0.2em] text-secondary"
              >
                Visit Us
              </span>


              <h3
                class="mt-3 font-heading text-3xl
                       font-bold"
              >
                Baringo High School
              </h3>


              <p
                class="mt-5 leading-7 text-blue-100"
              >
                We welcome students, parents, guardians,
                alumni and members of the public.
              </p>


              <div class="mt-8 space-y-7">

                <!-- Address -->
                <div class="flex gap-4">

                  <MapPinIcon
                    class="h-6 w-6 shrink-0 text-secondary"
                  />

                  <div>
                    <h4 class="font-bold">
                      Our Address
                    </h4>

                    <p
                      class="mt-1 text-sm leading-6
                             text-blue-100"
                    >
                      P.O. Box 45, Kabarnet<br />
                      Baringo County, Kenya
                    </p>
                  </div>

                </div>


                <!-- Phone -->
                <div class="flex gap-4">

                  <PhoneIcon
                    class="h-6 w-6 shrink-0 text-secondary"
                  />

                  <div>
                    <h4 class="font-bold">
                      Phone
                    </h4>

                    <p
                      class="mt-1 text-sm leading-6
                             text-blue-100"
                    >
                      +254 53 42100<br />
                      +254 712 345 678
                    </p>
                  </div>

                </div>


                <!-- Email -->
                <div class="flex gap-4">

                  <EnvelopeIcon
                    class="h-6 w-6 shrink-0 text-secondary"
                  />

                  <div>
                    <h4 class="font-bold">
                      Email
                    </h4>

                    <p
                      class="mt-1 text-sm leading-6
                             text-blue-100"
                    >
                      info@baringohigh.ac.ke<br />
                      principal@baringohigh.ac.ke
                    </p>
                  </div>

                </div>

              </div>


              <!-- Office hours -->
              <div
                class="mt-10 border-t
                       border-white/20 pt-7"
              >

                <h4 class="font-bold">
                  Office Hours
                </h4>

                <p
                  class="mt-2 text-sm
                         leading-6 text-blue-100"
                >
                  Monday – Friday<br />
                  8:00 AM – 5:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ===================================================== -->
    <!-- MAP -->
    <!-- ===================================================== -->

    <section class="relative h-[400px]">

      <iframe
        title="Baringo High School Location"
        src="https://www.google.com/maps?q=Baringo%20High%20School%20Kenya&output=embed"
        class="h-full w-full border-0"
        loading="lazy"
      ></iframe>

    </section>

  </div>
</template>