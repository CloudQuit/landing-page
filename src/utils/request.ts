import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import { useToast } from 'vue-toastification'

interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

const toast = useToast()

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    if (authStore.token) {
      config.headers.Authorization = `${authStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const res = response.data as ApiResponse<any>
    if (res.code !== 0) {
      toast.error(res.message)
      return Promise.reject(new Error(res.message))
    }
    return res
  },
  (error) => {
    toast.error(error.message)
    return Promise.reject(error)
  }
)

export default request
