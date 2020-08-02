import axios from 'axios'

const fetcher = axios.create({
  baseURL: process.env.API_URL,
})

export default fetcher
