import { API_BASE } from "../api";

const GetOAuthToken = async () => {
  try {
    const res = await fetch(`${API_BASE}/auth/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Not authenticated");

    const user = await res.json();
    console.log("Current user:", user);
  } catch (err) {
    console.error(err);
  }
};

export default GetOAuthToken;
