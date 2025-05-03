const apiUrl = import.meta.env.VITE_API_URL;

const GetOAuthToken = async () => {
  console.log(apiUrl + '/auth/me');
 // пример fetch в TypeScript / React
  fetch(`${apiUrl}/auth/me`, {
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