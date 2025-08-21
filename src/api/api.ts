import axios from 'axios'

//export const API_URL = `http://localhost:8080/api`
export const API_URL = `https://${window.location.hostname}/api`

const instance = axios.create({
  baseURL: API_URL
})

export default instance
