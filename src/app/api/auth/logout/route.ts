import { NextResponse } from "next/server";

export async function POST() {
  // Удаляем токен, устанавливая куку с истекшим сроком действия
  const response = NextResponse.json({ message: "Выход выполнен" });
  response.cookies.set("token", "", { maxAge: 0, path: "/" });

  return response;
}
