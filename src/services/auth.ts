const API_URL = import.meta.env.VITE_API_URL;

export interface User {
  name: string;
  id: number;
  email: string;
  is_available: boolean;
  teams?: Teams[];
}
export interface Teams{
  team: TeamID;
  role: string,
  joined_at: string;
  projects?: ProjectMembership[];
}
export interface TeamID{
  id: number;
  name: string;
  code: string;
  created_at: string;
}
export interface ProjectMembership{
  project: Project;
  role: string;
  joined_at: string;
}
export interface Project{
  id: number;
  name: string;
  description: string;
  team_id: number;
  created_by: number;
  created_at: string;
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