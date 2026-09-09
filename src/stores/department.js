import { defineStore } from 'pinia'
import { ref } from 'vue'
import { departmentService } from '@/services/departmentService.js'

export const useDepartmentsStore = defineStore('departments', () => {
  const departments = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchDepartments = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await departmentService.getAll()
      departments.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const getDepartmentById = (id) => departments.value.find((d) => d.id === id)

  return {
    departments,
    loading,
    error,
    fetchDepartments,
    getDepartmentById,
  }
})