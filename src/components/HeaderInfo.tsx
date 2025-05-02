import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../services/auth';  // ← импорт вашего типа
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
        <Link to="/chat">AI Chatbot</Link>
        {user ? (
          <span className="signIn">Привет, {user.name ?? user.email}</span>
        ) : (
          <button className="signIn" onClick={onLogin}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}