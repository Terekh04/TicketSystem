import { useEffect } from "react";
import { loginWithGoogle } from "../services/auth";

export default function RedirectToGoogle() {
  useEffect(() => {
    loginWithGoogle();
  }, []);

  return null; // ничего не рендерим
}
