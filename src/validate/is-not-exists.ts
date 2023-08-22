import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator'
import { PrismaClient } from '@prisma/client'

// 验证表字段是否唯一
export function IsNotExists(table: string, fileds: string[], validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [table],
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient()
          const res = await prisma[table].findFirst({
            where: {
              OR: fileds.map((filed) => ({ [filed]: value })),
            },
          })
          return !Boolean(res)
        },
      },
    })
  }
}
