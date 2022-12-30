import { ApiProperty } from '@nestjs/swagger'
import { CONSTANTS } from '@presentation/helpers/Constants'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class UuidDto {
  @ApiProperty({
    required: true,
    example: CONSTANTS.UUID_EXAMPLE,
    description: 'uuid'  
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  id: string
}