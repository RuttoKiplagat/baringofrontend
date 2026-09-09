import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { teacherService } from '@/services/teacherService.js'

export const useTeachersStore = defineStore('teachers', () => {
  const teachers = ref([])
  const loading = ref(false)
  const error = ref(null)

  const activeTeachers = computed(() =>
    teachers.value.filter((t) => t.is_active)
  )

  const leadership = computed(() =>
    activeTeachers.value.filter((t) =>
      ['Principal', 'Deputy Principal', 'Head'].some((role) =>
        t.position.includes(role)
      )
    )
  )

  const fetchTeachers = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await teacherService.getAll()
      teachers.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const getTeacherById = (id) => teachers.value.find((t) => t.id === id)

  return {
    teachers,
    loading,
    error,
    activeTeachers,
    leadership,
    fetchTeachers,
    getTeacherById,
  }
})