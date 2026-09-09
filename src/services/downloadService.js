import api from './api.js'

export const downloadService = {
  getAll: () => api.get('/downloads'),
  getById: (id) => api.get(`/downloads/${id}`),
  create: (data) => api.post('/downloads', data),
  update: (id, data) => api.put(`/downloads/${id}`, data),
  delete: (id) => api.delete(`/downloads/${id}`),
}