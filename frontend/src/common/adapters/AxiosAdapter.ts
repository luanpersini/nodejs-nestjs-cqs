import Axios, { AxiosRequestConfig } from 'axios'

export type ErrorResponse = {
  status: number
  message: string
}

function requestInterceptor(config: AxiosRequestConfig) {
  config.headers = { Accept: 'application/json' }
  return config
}

export const axiosClient = Axios.create()
axiosClient.interceptors.request.use(requestInterceptor)
axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (e) => {
    let error: ErrorResponse

    if (e?.response?.data) {
      error = {
        status: e.response.data.statusCode,
        message: e.response.data.message
      }
    } else {
      error = {
        status: e.status || 500,
        message: e.message
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }

    return Promise.reject(error)
  }
)
