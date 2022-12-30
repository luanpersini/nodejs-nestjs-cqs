import { ApiProperty } from '@nestjs/swagger'
import { CONSTANTS } from '@presentation/helpers/Constants'
import { IsDecimal, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class AccountOperationDto {
  @ApiProperty({
    required: true,
    example: CONSTANTS.UUID_EXAMPLE,
    description: 'accountId'
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  accountId: string

  @ApiProperty({
    required: true,
    example: CONSTANTS.UUID_EXAMPLE,
    description: 'operationId'
  })
  @IsString()
  @IsUUID('4')
  @IsNotEmpty()
  operationId: string
  
  @ApiProperty({
    required: true,
    example: CONSTANTS.UUID_EXAMPLE,
    description: 'sourceId'
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  sourceId: string

  @ApiProperty({
    required: true,
    example: '1234.99',
    description: 'Amount with two decimal cases. $1234.99'
  })
  @IsDecimal()
  @IsNotEmpty()
  amount: number
}
