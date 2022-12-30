import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, ObservableInput } from 'rxjs'

import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(catchError(ErrorsInterceptor.checkError))
  }

  static checkError(error: any): ObservableInput<any> {
    console.log(error)

    const status = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR    

    const internalServerDetails = {
      message: 'Internal Server Error',
      statusCode: status
    }
    
    const response = error instanceof HttpException ? error.getResponse() : internalServerDetails
  

    throw new HttpException(response, status)  
  }
}
