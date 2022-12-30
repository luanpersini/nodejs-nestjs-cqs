export interface EnvConfig {
  apiUrl: string
}

const envConfig: EnvConfig = {
 apiUrl: process.env.REACT_APP_API_URL!
}

export default envConfig
