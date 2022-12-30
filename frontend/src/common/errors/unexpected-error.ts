import { errorMessages } from './error-messages'

export class UnexpectedError extends Error {
  constructor () {    
    super(errorMessages.UnexpectedError)
    this.name = 'Unexpected Error'
  }  
}
