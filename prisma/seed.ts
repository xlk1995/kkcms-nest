// run command npx prisma db seed
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function run() {
  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        name: 'abc',
        password: '123',
      },
    })
  }
}
run()
