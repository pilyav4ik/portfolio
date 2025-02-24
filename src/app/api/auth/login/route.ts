import prisma from "@/app/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Ищем пользователя
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
  }

  // Проверяем пароль
  const isValid = await compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
  }

  // Создаем JWT токен
  const token = sign({ userId: user.id, role: user.role }, SECRET, { expiresIn: "1h" });

  return NextResponse.json({ token }, { status: 200 });
}
