import { IsNotEmpty } from 'class-validator'
import { RegisterDto } from './register.dto'
import { IsExists } from 'src/validate/is-exists'

export class LoginDto extends RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsExists('user', ['name', 'email', 'mobile'], { message: '用户不存在' })
  name: string
}
