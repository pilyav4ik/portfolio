"use client";

import { useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/utils/supabase/client';

export default function AdminClientComponent({ user: initialUser }: { user: User | null }) {
  const [user, setUser] = useState<User | null>(initialUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const supabaseClient = supabase;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { data, error } = await (await supabaseClient).auth.signInWithPassword({
      email,
      password,
    });
    
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setUser(data.user ?? null);
      setEmail('');
      setPassword('');
      router.refresh();
    }
  };

  const handleLogout = async () => {
    await (await supabase).auth.signOut();
    setUser(null);
    router.refresh();
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-24 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" disabled={loading} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400">
            {loading ? 'Logging in...' : 'Submit'}
          </button>
          {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
        </form>
      </div>
    );
  }
  
  return (
    <div className="max-w-md mx-auto mt-24 p-6 border border-gray-200 rounded-lg shadow-md bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Welcome, {user.email}!</h2>
      <div className="mt-8">
        {/* Here admin panel content */}
      </div>
      <button onClick={handleLogout} className="mt-6 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition">
        Log Out
      </button>
    </div>
  );
}