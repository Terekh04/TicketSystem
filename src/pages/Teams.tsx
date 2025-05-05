import React from "react";
import { User } from "../services/auth";
interface Props {
  user: User | null;
  onLogin: () => void;
}

export default function Teams({ user, onLogin }: Props){
    return <div></div>
}