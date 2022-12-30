export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  authorizationToken?: string | null
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
  error?: T
}

export enum HttpMethod {
  post = 'post',
  get = 'get',
  put = 'put',
  patch = 'patch',
  delete = 'delete'
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export const HttpStatusCodeName = {
  ok: 'Success',
  noContent: 'NoContent',
  badRequest: 'BadRequest',
  unauthorized: 'Unauthorized',
  forbidden: 'Forbidden',
  notFound: 'NotFound',
  serverError: 'ServerError'
}
