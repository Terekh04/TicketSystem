const API_URL    = import.meta.env.VITE_API_URL
const API_PREFIX = import.meta.env.VITE_API_PREFIX || ''


export interface User {
  id: number;
  name?: string;
  email: string;
  role: string;
}

export function loginWithGoogle() {
  window.location.href = `${API_URL}${API_PREFIX}/auth/google`
}

export async function getCurrentUser(): Promise<User | null> {
  const res = await fetch(`${API_URL}${API_PREFIX}/auth/me`, {
    credentials: 'include',
  })
  if (!res.ok) return null
  return res.json()
}
