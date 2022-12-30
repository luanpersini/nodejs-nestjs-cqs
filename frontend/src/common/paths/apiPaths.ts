import envConfig from '../../config/envConfig'

const { apiUrl } = envConfig

const apiPaths = { 
  accountOperations: {
    baseUrl: `${apiUrl}/account/`,
    deposit: `${apiUrl}/account/deposit`,
    withdraw: `${apiUrl}/account/withdraw`,
    getAccountOperations: `${apiUrl}/account/operations/`,
  }
}

export default apiPaths
