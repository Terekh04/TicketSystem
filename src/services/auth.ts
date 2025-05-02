// сервис для Google-OAuth и получения текущего юзера
const API_URL    = import.meta.env.VITE_API_URL    as string;
const API_PREFIX = import.meta.env.VITE_API_PREFIX as string || '';

export interface User {
  id: number;
  name?: string;
  email: string;
  role: string;
}

// Перенаправить браузер на /api/auth/google
export function loginWithGoogle() {
  window.location.href = `${API_URL}${API_PREFIX}/auth/google`;
}

// Получить залогиненного пользователя по HttpOnly-куки
export async function getCurrentUser(): Promise<User | null> {
  const res = await fetch(`${API_URL}${API_PREFIX}/auth/me`, {
    credentials: 'include',
  });
  if (!res.ok) return null;
  return res.json();
}
