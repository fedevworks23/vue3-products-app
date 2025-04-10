import axios from 'axios'

let baseURL = 'https://dummyjson.com'

const httpClient = axios.create({ baseURL })

// Add a request interceptor
httpClient.interceptors.request.use(
  function (successReq) {
    //   console.log('Inside request interceptor..', successReq)
    return successReq
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default httpClient
