import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Проверяем, существует ли пользователь
  const existingUser = await prisma.users.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "Пользователь уже существует" }, { status: 400 });
  }

  // Хешируем пароль
  const hashedPassword = await hash(password, 10);

  // Создаем пользователя
  const user = await prisma.users.create({
    data: { email, password: hashedPassword },
  });

  return NextResponse.json({ user }, { status: 201 });
}
