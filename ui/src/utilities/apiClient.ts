import axios from 'axios'

import { API_ENDPOINT } from '@/configs/constants'

const apiClient = () => {
  const defaultOptions = {
    baseURL: API_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  const instance = axios.create(defaultOptions)

  return instance
}

export default apiClient()
