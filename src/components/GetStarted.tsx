import React from 'react';
import { User } from '../services/auth';  // ← импорт вашего типа
import './GetStarted.css';

interface Props {
  user: User | null;  // User или null
  onLogin: () => void;
}

export default function GetStarted({ user, onLogin }: Props) {
  return (
    <div className="start">
      {user ? (
        <h1>Добро пожаловать, {user.name ?? user.email}!</h1>
      ) : (
        <>
          <h1>Organize teamwork with AI</h1>
          <h2>TicketSystem — платформа для управления задачами с AI-ассистентом.</h2>
          <button className="button" onClick={onLogin}>
            Get Started
          </button>
        </>
      )}
    </div>
  );
}