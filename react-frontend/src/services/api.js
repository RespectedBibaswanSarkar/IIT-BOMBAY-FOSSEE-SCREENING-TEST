import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
        config.headers.Authorization = `Token ${token}`
    }
    return config
})

// Workshop endpoints
export const workshopAPI = {
    getAll: () => api.get('/workshops/'),
    getOne: (id) => api.get(`/workshops/${id}/`),
    register: (id, data) => api.post(`/workshops/${id}/register/`, data),
    unregister: (id) => api.post(`/workshops/${id}/unregister/`),
    getStats: () => api.get('/workshops/stats/'),
}

// Auth endpoints
export const authAPI = {
    login: (username, password) => api.post('/auth/login/', { username, password }),
    logout: () => api.post('/auth/logout/'),
    getProfile: () => api.get('/auth/profile/'),
}

// Admin endpoints
export const adminAPI = {
    getWorkshops: () => api.get('/admin/workshops/'),
    createWorkshop: (data) => api.post('/admin/workshops/', data),
    updateWorkshop: (id, data) => api.put(`/admin/workshops/${id}/`, data),
    deleteWorkshop: (id) => api.delete(`/admin/workshops/${id}/`),
    getRegistrations: () => api.get('/admin/registrations/'),
    getStats: () => api.get('/admin/stats/'),
}

export default api
