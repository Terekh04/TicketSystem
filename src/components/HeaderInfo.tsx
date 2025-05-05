import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../services/auth';  // ← импорт вашего типа
import { loginWithGoogle } from '../services/auth';
import './HeaderInfo.css';

interface Props {
  user: User | null;  // теперь явно User или null
  onLogin: () => void;
}

export default function HeaderInfo({ user, onLogin }: Props) {
  return (
    <header>
      <div className="logoOver">
        TicketSystem
        <div className="logo">
          <img src="/android-chrome-black-cropped192x192.png" alt="Logo" />
        </div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to={user ? "/teams" : "#"}
          onClick={(e) => {
            if (!user) {
              e.preventDefault(); // отменяем переход
              loginWithGoogle(); // запускаем авторизацию
            }
          }}>Teams</Link>
        <Link to={user ? "/chat" : "#"}
          onClick={(e) => {
            if (!user) {
              e.preventDefault(); // отменяем переход
              loginWithGoogle(); // запускаем авторизацию
            }
          }}>
            AI Chatbot</Link>
        {user ? (
          <span className="signIn">Привет, {(user.name?.split(' ')[0])}
</span>
        ) : (
          <button className="signIn" onClick={onLogin}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}