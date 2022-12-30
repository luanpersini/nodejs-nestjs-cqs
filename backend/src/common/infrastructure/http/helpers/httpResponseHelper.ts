import { BadRequestException, ConflictException, HttpStatus, InternalServerErrorException } from '@nestjs/common'
import { HttpResponse } from '../ICustomHttpClient'

//TODO: Implement a test for this class
export class HttpResponseHelper {
  public static isHttpResponseSuccess(status: HttpStatus): boolean {
    return status >= 200 && status <= 299
  }

  public static throwHttpException(response: HttpResponse, defaultErrorMessage: string): void {
    const { status, body } = response

    switch (status) {
      case HttpStatus.BAD_REQUEST:
        throw new BadRequestException(body.message)
      case HttpStatus.CONFLICT:
        throw new ConflictException(body.message)
      default:
        throw new InternalServerErrorException(defaultErrorMessage)
    }
  }
}