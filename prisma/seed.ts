import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
} as any);

async function main() {
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      id: uuidv4(),
      name: 'admin',
    },
  });

  const adminPassword = await bcrypt.hash('admin123', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      id: uuidv4(),
      name: 'Admin User',
      email: 'admin@example.com',
      telephone: '+55 11 99999-9999',
      document: '12345678901',
      pix: 'admin@example.com',
      password: adminPassword,
      roles: {
        connect: { id: adminRole.id },
      },
    },
  });

  console.log({ adminRole, adminUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
