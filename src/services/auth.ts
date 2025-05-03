const API_URL = import.meta.env.VITE_API_URL;

export interface User {
  id: number;
  name?: string;
  email: string;
  role: string;
}

export function loginWithGoogle() {
  // В dev → "https://ticketsystem-qfj9.onrender.com/auth/google"
  // В prod →   "/api/auth/google"
  window.location.href = `${API_URL}/auth/google`;
}

export async function getCurrentUser(): Promise<User | null> {
  const res = await fetch(`${API_URL}/auth/me`, {
    credentials: 'include',
  });
  if (!res.ok) return null;
  return res.json();
}