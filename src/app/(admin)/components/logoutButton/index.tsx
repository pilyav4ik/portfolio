"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="p-6">
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Выйти
      </button>
    </div>
  );
}
