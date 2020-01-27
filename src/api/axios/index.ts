import axios, { AxiosInstance } from 'axios'
import Config from 'react-native-config'

// Create default config
const ax: AxiosInstance = axios.create({
  baseURL: Config.API_BASE_URL || '',
  timeout: 30000, // 30 seconds
  headers: { 'Content-Type': 'application/json' },
})

export default ax
