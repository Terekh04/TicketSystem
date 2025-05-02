import { API_BASE } from "../api";

const GetOAuthToken = async () => {
  console.log(`${API_BASE}'/auth/me'`);
 // пример fetch в TypeScript / React
  fetch(`${API_BASE}/auth/me`, {
    method: "GET",
    credentials: "include",            // <— очень важно!
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => {
    if (!res.ok) throw new Error("Not authenticated");
    return res.json();
  })
  .then(user => {
    console.log("Current user:", user);
  })
  .catch(console.error);
    };

export default GetOAuthToken