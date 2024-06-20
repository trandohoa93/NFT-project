import axios from 'axios'

export const axiosClient = axios.create({
  baseURL:  'http://192.168.1.25:8101',
  headers: { 'Content-Type': 'application/json' }
})
