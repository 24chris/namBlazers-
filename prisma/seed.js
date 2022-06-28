// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { data } from '../data/links'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
    },
  })

  await prisma.link.createMany({
    data: data,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

  //next step is to override the next modules to be able to seed the database