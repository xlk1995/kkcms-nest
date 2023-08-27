import { BadRequestException } from '@nestjs/common'

export const validatafail = (filed: string, message: string) => {
  throw new BadRequestException({
    filed,
    message,
  })
}
