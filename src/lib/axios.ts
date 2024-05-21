import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

// Estou com erro no zod pois o zod nao está convertendo o VITE_ENABLE_API_DELAY para string
// if (env.VITE_ENABLE_API_DELAY) {
//   api.interceptors.request.use(async (config) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     return config
//   })
// }

// Fiz sem validação
api.interceptors.request.use(async (config) => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.round(Math.random() * 3000)),
  )

  return config
})
