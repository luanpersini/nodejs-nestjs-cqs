import { HttpStatus } from '@nestjs/common'

export interface ICustomHttpClient {
  request(options: any): Promise<any>
  logErrorMessage(options: any, error: any): void
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  clientName: string
  body?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  status: HttpStatus
  body?: T
}

export type HttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete'
