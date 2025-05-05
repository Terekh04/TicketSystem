import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/auth";

interface Props {
  user: any;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, children }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Вместо loginWithGoogle — редирект на главную
      navigate("/", { replace: true });
    }
  }, [user]);

  if (!user) return null;

  return <>{children}</>;
}
