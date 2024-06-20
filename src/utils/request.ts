import axios from 'axios'

const request = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 403)
      return Promise.reject(error)

    if (error?.response?.status === 401)
      return Promise.reject(error)

    throw error
  },
)

export default request
