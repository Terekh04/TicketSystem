// /src/api.ts
export const API_BASE = __API_BASE__ as string

// Тип ответа от бэка
interface ShowUser {
  id: number
  name: string
  email: string | null
  role: string
  is_available: boolean
  // …остальные поля…
}

interface ChatResponse {
  reply: string
  session_id: string
  ticket?: { id: number; title: string; /* … */ }
}

// /src/services/auth.ts
export async function login(username: string, password: string): Promise<ShowUser> {
  const res = await fetch(`${API_BASE}/auth/login_in_site`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username, password }),
  })
  if (!res.ok) throw new Error('Auth failed')
  return res.json() as Promise<ShowUser>
}

export async function fetchMe(): Promise<ShowUser> {
  const res = await fetch(`${API_BASE}/auth/me`, {
    credentials: 'include'
  })
  if (!res.ok) throw new Error('Not authenticated')
  return res.json() as Promise<ShowUser>
}

// /src/services/chat.ts
export async function sendMessage(message: string): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })
  if (!res.ok) throw new Error('Chat error')
  return res.json() as Promise<ChatResponse>
}
