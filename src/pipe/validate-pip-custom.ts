import { ValidationError, ValidationPipe } from '@nestjs/common'

export class ValidatePipCustom extends ValidationPipe {
  protected flattenValidationErrors(validationErrors: ValidationError[]): any[] {
    console.log(validationErrors)
    return validationErrors.map((err) => {
      return {
        feild: err.property,
        message: Object.values(err.constraints),
      }
    })
  }
}
