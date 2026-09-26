<template>
  <section class="min-h-screen bg-gray-50 dark:bg-darkbg py-12">
    <div class="max-w-5xl mx-auto px-4">

      <!-- HEADER -->
      <div class="text-center mb-10">
        <span
          class="inline-block px-4 py-2 mb-4 rounded-full
                 bg-primary/10 text-primary text-sm font-semibold"
        >
          BHS ADMISSIONS
        </span>

        <h1
          class="text-4xl md:text-5xl font-bold
                 text-gray-900 dark:text-white font-heading"
        >
          Student Application Form
        </h1>

        <p class="mt-3 text-gray-600 dark:text-gray-400">
          Apply to join Baringo High School by completing the form below.
        </p>
      </div>

      <!-- PROGRESS -->
      <div class="mb-10">
        <div class="relative flex justify-between">

          <!-- Progress line -->
          <div
            class="absolute top-5 left-0 right-0 h-1
                   bg-gray-200 dark:bg-gray-700"
          ></div>

          <!-- Steps -->
          <div
            v-for="(step, index) in steps"
            :key="step"
            class="relative z-10 flex flex-col items-center"
          >
            <div
              class="w-10 h-10 rounded-full flex items-center
                     justify-center font-semibold border-4
                     border-gray-50 dark:border-darkbg transition-all"
              :class="
                currentStep >= index
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-500'
              "
            >
              {{ index + 1 }}
            </div>

            <span
              class="mt-2 text-sm text-gray-600
                     dark:text-gray-400"
            >
              {{ step }}
            </span>
          </div>

        </div>
      </div>

      <!-- FORM CARD -->
      <div
        class="bg-white dark:bg-gray-900 rounded-2xl
               shadow-xl border border-gray-100
               dark:border-gray-800 p-6 md:p-10"
      >

        <!-- ================= STEP 1 ================= -->
        <div v-if="currentStep === 0">

          <div class="mb-8">
            <h2
              class="text-2xl font-bold text-gray-900
                     dark:text-white"
            >
              Student Information
            </h2>

            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Tell us about the student applying to Baringo High School.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- FIRST NAME -->
            <div>
              <label class="form-label">
                First Name <span>*</span>
              </label>

              <input
                v-model="form.first_name"
                type="text"
                placeholder="Enter first name"
                class="form-input"
              />

              <p v-if="errors.first_name" class="error">
                {{ errors.first_name }}
              </p>
            </div>

            <!-- MIDDLE NAME -->
            <div>
              <label class="form-label">
                Middle Name
              </label>

              <input
                v-model="form.middle_name"
                type="text"
                placeholder="Enter middle name"
                class="form-input"
              />
            </div>

            <!-- LAST NAME -->
            <div>
              <label class="form-label">
                Last Name <span>*</span>
              </label>

              <input
                v-model="form.last_name"
                type="text"
                placeholder="Enter last name"
                class="form-input"
              />

              <p v-if="errors.last_name" class="error">
                {{ errors.last_name }}
              </p>
            </div>

            <!-- DATE OF BIRTH -->
            <div>
              <label class="form-label">
                Date of Birth <span>*</span>
              </label>

              <input
                v-model="form.date_of_birth"
                type="date"
                class="form-input"
              />

              <p v-if="errors.date_of_birth" class="error">
                {{ errors.date_of_birth }}
              </p>
            </div>

            <!-- GENDER -->
            <div>
              <label class="form-label">
                Gender <span>*</span>
              </label>

              <select
                v-model="form.gender"
                class="form-input"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                
              </select>

              <p v-if="errors.gender" class="error">
                {{ errors.gender }}
              </p>
            </div>

            <!-- NATIONALITY -->
            <div>
              <label class="form-label">
                Nationality
              </label>

              <input
                v-model="form.nationality"
                type="text"
                placeholder="e.g. Kenyan"
                class="form-input"
              />
            </div>

            <!-- BIRTH CERTIFICATE -->
            <div>
              <label class="form-label">
                Birth Certificate Number
              </label>

              <input
                v-model="form.birth_certificate_number"
                type="text"
                placeholder="Enter certificate number"
                class="form-input"
              />
            </div>

            <!-- CLASS -->
            <div>
              <label class="form-label">
                Class/Form Applying For <span>*</span>
              </label>

              <select
                v-model="form.class_applied"
                class="form-input"
              >
                <option value="">Select class</option>
                <option value="form_1">Form 1</option>
                <option value="form_2">Form 2</option>
                <option value="form_3">Form 3</option>
                <option value="form_4">Form 4</option>
              </select>

              <p v-if="errors.class_applied" class="error">
                {{ errors.class_applied }}
              </p>
            </div>

            <!-- CURRENT SCHOOL -->
            <div>
              <label class="form-label">
                Current/Previous School <span>*</span>
              </label>

              <input
                v-model="form.current_school"
                type="text"
                placeholder="Enter school name"
                class="form-input"
              />

              <p v-if="errors.current_school" class="error">
                {{ errors.current_school }}
              </p>
            </div>

            <!-- COUNTY -->
            <div>
              <label class="form-label">
                County
              </label>

              <input
                v-model="form.county"
                type="text"
                placeholder="e.g. Baringo"
                class="form-input"
              />
            </div>

            <!-- SUB COUNTY -->
            <div>
              <label class="form-label">
                Sub-County
              </label>

              <input
                v-model="form.sub_county"
                type="text"
                placeholder="Enter sub-county"
                class="form-input"
              />
            </div>

            <!-- LOCATION -->
            <div>
              <label class="form-label">
                Residential Location
              </label>

              <input
                v-model="form.residential_location"
                type="text"
                placeholder="Enter residential location"
                class="form-input"
              />
            </div>

          </div>

        </div>


        <!-- ================= STEP 2 ================= -->
        <div v-if="currentStep === 1">

          <div class="mb-8">
            <h2 class="section-title">
              Parent / Guardian Information
            </h2>

            <p class="section-description">
              Provide the details of the student's parent or guardian.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="form-label">
                Parent / Guardian Full Name *
              </label>

              <input
                v-model="form.parent_name"
                type="text"
                placeholder="Full name"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Relationship *
              </label>

              <select
                v-model="form.parent_relationship"
                class="form-input"
              >
                <option value="">Select relationship</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label class="form-label">
                Phone Number *
              </label>

              <input
                v-model="form.parent_phone"
                type="tel"
                placeholder="07XXXXXXXX"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Alternative Phone
              </label>

              <input
                v-model="form.alternative_phone"
                type="tel"
                placeholder="07XXXXXXXX"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Email Address
              </label>

              <input
                v-model="form.parent_email"
                type="email"
                placeholder="example@email.com"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Occupation
              </label>

              <input
                v-model="form.parent_occupation"
                type="text"
                placeholder="Occupation"
                class="form-input"
              />
            </div>

            <div class="md:col-span-2">
              <label class="form-label">
                Residential Address
              </label>

              <textarea
                v-model="form.parent_address"
                rows="4"
                placeholder="Enter residential address"
                class="form-input"
              ></textarea>
            </div>

          </div>

        </div>


        <!-- ================= STEP 3 ================= -->
        <div v-if="currentStep === 2">

          <div class="mb-8">
            <h2 class="section-title">
              Academic Information
            </h2>

            <p class="section-description">
              Provide information about the student's academic background.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="form-label">
                Previous School
              </label>

              <input
                v-model="form.previous_school"
                type="text"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Last Class Completed
              </label>

              <select
                v-model="form.last_class_completed"
                class="form-input"
              >
                <option value="">Select class</option>
                <option value="grade_6">Grade 6</option>
                <option value="grade_7">Grade 7</option>
                <option value="grade_8">Grade 8</option>
                <option value="form_1">Form 1</option>
                <option value="form_2">Form 2</option>
                <option value="form_3">Form 3</option>
              </select>
            </div>

            <div>
              <label class="form-label">
                Year Completed
              </label>

              <input
                v-model="form.year_completed"
                type="number"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label">
                Academic Performance
              </label>

              <input
                v-model="form.academic_information"
                type="text"
                placeholder="KCPE / assessment results"
                class="form-input"
              />
            </div>

            <div class="md:col-span-2">
              <label class="form-label">
                Why do you want to join Baringo High School?
              </label>

              <textarea
                v-model="form.reason_for_applying"
                rows="5"
                class="form-input"
                placeholder="Tell us why you want to join BHS..."
              ></textarea>
            </div>

          </div>

        </div>


        <!-- ================= STEP 4 ================= -->
        <div v-if="currentStep === 3">

          <div class="mb-8">
            <h2 class="section-title">
              Additional Information
            </h2>

            <p class="section-description">
              Tell us more about the student's interests.
            </p>
          </div>

          <div class="space-y-6">

            <div>
              <label class="form-label">
                Special Educational Needs
              </label>

              <textarea
                v-model="form.special_needs"
                rows="4"
                class="form-input"
                placeholder="Optional"
              ></textarea>
            </div>

            <div>
              <label class="form-label">
                Sports Interests
              </label>

              <textarea
                v-model="form.sports_interests"
                rows="3"
                class="form-input"
                placeholder="Football, athletics, basketball..."
              ></textarea>
            </div>

            <div>
              <label class="form-label">
                Clubs / Co-curricular Interests
              </label>

              <textarea
                v-model="form.clubs_interests"
                rows="3"
                class="form-input"
                placeholder="Debate, science club, music..."
              ></textarea>
            </div>

            <div>
              <label class="form-label">
                Additional Information
              </label>

              <textarea
                v-model="form.additional_information"
                rows="4"
                class="form-input"
                placeholder="Anything else?"
              ></textarea>
            </div>

          </div>

        </div>


        <!-- ================= STEP 5 ================= -->
        <div v-if="currentStep === 4">

          <div class="mb-8">
            <h2 class="section-title">
              Review Application
            </h2>

            <p class="section-description">
              Check your information carefully before submitting.
            </p>
          </div>

          <div class="space-y-6">

            <div class="review-card">
              <div class="review-header">
                <h3>Student Information</h3>

                <button
                  @click="currentStep = 0"
                  type="button"
                  class="edit-button"
                >
                  Edit
                </button>
              </div>

              <div class="grid md:grid-cols-2 gap-4">

                <p>
                  <strong>Name:</strong>
                  {{ fullName }}
                </p>

                <p>
                  <strong>Date of Birth:</strong>
                  {{ form.date_of_birth }}
                </p>

                <p>
                  <strong>Gender:</strong>
                  {{ form.gender }}
                </p>

                <p>
                  <strong>Class:</strong>
                  {{ form.class_applied }}
                </p>

                <p>
                  <strong>School:</strong>
                  {{ form.current_school }}
                </p>

              </div>
            </div>


            <div class="review-card">

              <div class="review-header">

                <h3>Parent / Guardian</h3>

                <button
                  @click="currentStep = 1"
                  type="button"
                  class="edit-button"
                >
                  Edit
                </button>

              </div>

              <p>
                <strong>Name:</strong>
                {{ form.parent_name }}
              </p>

              <p>
                <strong>Phone:</strong>
                {{ form.parent_phone }}
              </p>

              <p>
                <strong>Email:</strong>
                {{ form.parent_email || 'Not provided' }}
              </p>

            </div>


            <div class="review-card">

              <div class="review-header">

                <h3>Academic Information</h3>

                <button
                  @click="currentStep = 2"
                  type="button"
                  class="edit-button"
                >
                  Edit
                </button>

              </div>

              <p>
                <strong>Previous School:</strong>
                {{ form.previous_school || 'Not provided' }}
              </p>

              <p>
                <strong>Reason:</strong>
                {{ form.reason_for_applying || 'Not provided' }}
              </p>

            </div>


            <div class="review-card">

              <div class="review-header">

                <h3>Additional Information</h3>

                <button
                  @click="currentStep = 3"
                  type="button"
                  class="edit-button"
                >
                  Edit
                </button>

              </div>

              <p>
                <strong>Sports:</strong>
                {{ form.sports_interests || 'Not provided' }}
              </p>

              <p>
                <strong>Clubs:</strong>
                {{ form.clubs_interests || 'Not provided' }}
              </p>

            </div>


            <!-- CONFIRM -->
            <label
              class="flex items-start gap-3 p-5 rounded-xl
                     bg-gray-50 dark:bg-gray-800 cursor-pointer"
            >

              <input
                v-model="confirmed"
                type="checkbox"
                class="w-5 h-5 mt-1"
              />

              <span class="text-sm text-gray-700 dark:text-gray-300">
                I confirm that the information provided is accurate
                and complete.
              </span>

            </label>

          </div>

        </div>


        <!-- NAVIGATION -->
        <div
          class="mt-10 pt-6 border-t border-gray-200
                 dark:border-gray-700 flex justify-between"
        >

          <!-- BACK -->
          <button
            v-if="currentStep > 0"
            type="button"
            @click="previousStep"
            class="px-6 py-3 rounded-xl border
                   border-gray-300 dark:border-gray-600
                   text-gray-700 dark:text-gray-300
                   hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ← Back
          </button>

          <div v-else></div>


          <!-- NEXT -->
          <button
            v-if="currentStep < 4"
            type="button"
            @click="nextStep"
            class="px-7 py-3 rounded-xl bg-primary
                   text-white font-semibold hover:opacity-90"
          >
            Continue →
          </button>


          <!-- SUBMIT -->
          <button
            v-else
            type="button"
            @click="submitApplication"
            :disabled="!confirmed || submitting"
            class="px-7 py-3 rounded-xl bg-primary
                   text-white font-semibold
                   disabled:opacity-50
                   disabled:cursor-not-allowed"
          >
            {{ submitting ? 'Submitting...' : 'Submit Application' }}
          </button>

        </div>

        <!-- ERROR -->
        <div
          v-if="submitError"
          class="mt-5 p-4 rounded-xl bg-red-50
                 text-red-700 border border-red-200"
        >
          {{ submitError }}
        </div>

      </div>

    </div>
  </section>
</template>


<script setup>
import { computed, reactive, ref } from 'vue'
import api from '@/services/api'

const currentStep = ref(0)
const confirmed = ref(false)
const submitting = ref(false)
const submitError = ref('')

const errors = reactive({})

const steps = [
  'Personal',
  'Guardian',
  'Academic',
  'Additional',
  'Review'
]

const form = reactive({

  first_name: '',
  middle_name: '',
  last_name: '',
  date_of_birth: '',
  gender: '',
  nationality: 'Kenyan',
  birth_certificate_number: '',
  current_school: '',
  class_applied: '',
  county: '',
  sub_county: '',
  residential_location: '',

  parent_name: '',
  parent_relationship: '',
  parent_phone: '',
  alternative_phone: '',
  parent_email: '',
  parent_occupation: '',
  parent_address: '',

  previous_school: '',
  last_class_completed: '',
  academic_information: '',
  year_completed: 'null',
  reason_for_applying: '',

  special_needs: '',
  sports_interests: '',
  clubs_interests: '',
  additional_information: ''

})

const fullName = computed(() => {

  return [
    form.first_name,
    form.middle_name,
    form.last_name
  ]
    .filter(Boolean)
    .join(' ')

})


function validateStep() {

  Object.keys(errors).forEach(
    key => delete errors[key]
  )

  if (currentStep.value === 0) {

    if (!form.first_name.trim()) {
      errors.first_name = 'First name is required.'
    }

    if (!form.last_name.trim()) {
      errors.last_name = 'Last name is required.'
    }

    if (!form.date_of_birth) {
      errors.date_of_birth = 'Date of birth is required.'
    }

    if (!form.gender) {
      errors.gender = 'Please select gender.'
    }

    if (!form.class_applied) {
      errors.class_applied = 'Please select a class.'
    }

    if (!form.current_school.trim()) {
      errors.current_school =
        'Current school is required.'
    }

  }

  if (currentStep.value === 1) {

    if (!form.parent_name.trim()) {
      errors.parent_name =
        'Parent/guardian name is required.'
    }

    if (!form.parent_relationship) {
      errors.parent_relationship =
        'Please select relationship.'
    }

    if (!form.parent_phone.trim()) {
      errors.parent_phone =
        'Phone number is required.'
    }

  }

  return Object.keys(errors).length === 0
}


function nextStep() {

  if (!validateStep()) {
    return
  }

  if (currentStep.value < 4) {
    currentStep.value++
  }

}


function previousStep() {

  if (currentStep.value > 0) {
    currentStep.value--
  }

}


async function submitApplication() {

  if (!confirmed.value || submitting.value) {
    return
  }

  submitting.value = true
  submitError.value = ''

  try {
  const response = await api.submitApplication(form)

  const applicationNumber =
    response.application_number

  localStorage.setItem(
    'bhs_application_number',
    applicationNumber
  )

  window.location.href =
    `/admissions/success?application=${applicationNumber}`

  } catch (error) {

    console.error(error)

    submitError.value =
      'We could not submit your application right now. Please try again.'

  } finally {

    submitting.value = false

  }

}
</script>


<style scoped>

.form-label {
  @apply block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300;
}

.form-label span {
  @apply text-red-500;
}

.form-input {
  @apply w-full px-4 py-3 rounded-xl
         border border-gray-300 dark:border-gray-600
         bg-white dark:bg-gray-800
         text-gray-900 dark:text-white
         placeholder-gray-400
         focus:outline-none focus:ring-2
         focus:ring-primary focus:border-primary
         transition;
}

.error {
  @apply mt-1 text-sm text-red-500;
}

.section-title {
  @apply text-2xl font-bold
         text-gray-900 dark:text-white;
}

.section-description {
  @apply mt-2 text-gray-600 dark:text-gray-400;
}

.review-card {
  @apply p-6 rounded-xl
         bg-gray-50 dark:bg-gray-800
         border border-gray-200 dark:border-gray-700
         space-y-3;
}

.review-card h3 {
  @apply text-lg font-bold
         text-gray-900 dark:text-white;
}

.review-header {
  @apply flex items-center justify-between mb-4;
}

.edit-button {
  @apply text-primary font-semibold
         hover:underline;
}

</style>