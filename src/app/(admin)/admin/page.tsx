"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/logoutButton";

export default function AdminPage() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      router.push("/login");
      return;
    }

    // Получаем данные пользователя (добавьте API-роут при необходимости)
    setUser({ email: "admin@example.com" }); // Заглушка
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Admin panel</h1>
      <LogoutButton/>
      {user ? <p>Welcome, {user.email}!</p> : <p>Loading...</p>}
    </div>
  );
}
