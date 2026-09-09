import api from './api.js'

export const sportService = {
  getAll: () => api.get('/sports'),
  getById: (id) => api.get(`/sports/${id}`),
  create: (data) => api.post('/sports', data),
  update: (id, data) => api.put(`/sports/${id}`, data),
  delete: (id) => api.delete(`/sports/${id}`),
}