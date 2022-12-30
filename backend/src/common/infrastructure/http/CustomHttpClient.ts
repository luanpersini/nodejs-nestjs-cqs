import { Injectable, InternalServerErrorException } from '@nestjs/common'
import axios, { AxiosResponse } from 'axios'
import { HttpResponse, ICustomHttpClient } from './ICustomHttpClient'

@Injectable()

//TODO: Implement a test for this class
export class CustomHttpClient implements ICustomHttpClient {
  public async request(options: any): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        ...options,
        timeout: 10000
      })
    } catch (error: any) {
      if (error.response) {
        axiosResponse = error.response
      } else {
        this.logErrorMessage(options, error)
        throw new InternalServerErrorException('There was a error with an external service.')
      }
    }

    const { status, data } = axiosResponse
    const body = { ...data, clientName: options.clientName }

    if (status >= 400 && status <= 499) {
      this.logErrorMessage(options, axiosResponse)
    }

    return {
      status,
      body
    }
  }

  public logErrorMessage({ method, url, body, clientName }, error: any): void {
    const hasData = body ? ` with body ${JSON.stringify(body)}` : ''
    const errorStatus = error.status || error.code
    const errorMessage = error.message || error.data?.message
    const errorData = JSON.stringify(error?.data)

    console.log(`Error at ${method.toUpperCase()} request on url ${url}
    ${hasData}
    DETAILS => ${errorStatus} ${error.statusText} 
    error data: ${errorData}
    error message: ${errorMessage}
    client name: ${clientName}`)
  }
}
