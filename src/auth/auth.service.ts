import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { PrismaService } from 'src/common/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { hash } from 'argon2'
import { LoginDto } from './dto/login.dto'
import { validatafail } from 'src/helper'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async registe(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return user
  }
  async login(loginDto: LoginDto) {
    const { name, password } = loginDto
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ name }, { password: name }, { mobile: name }],
      },
    })
    return user
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth'
  }

  findAll() {
    return `This action returns all auth`
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }
}
