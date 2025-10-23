import axios from 'axios'

import { name } from '../../../../package.json'

export type Response<T> = { data: T }
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 10_000,
  headers: { 'X-App-Name': name },
})
