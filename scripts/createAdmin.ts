import prisma from "@/app/lib/db";
import { hash } from "bcrypt";


async function createAdmin() {
  const email = "admin@gmail.com";
  const password = "admin"; // Замените на нужный пароль

  // Хешируем пароль
  const hashedPassword = await hash(password, 10);

  // Создаем пользователя
  const admin = await prisma.users.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("✅ Администратор создан:", admin);
  await prisma.$disconnect();
}

createAdmin().catch((err) => {
  console.error("❌ Ошибка:", err);
  prisma.$disconnect();
  process.exit(1);
});
