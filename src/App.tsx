import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChatBot from './services/ChatBot';
import { User, loginWithGoogle, getCurrentUser } from './services/auth';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(u => setUser(u))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div style={{ padding: 20 }}>Загрузка…</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              user={user}             // теперь user имеет тип User | null
              onLogin={loginWithGoogle}
            />
          }
        />
        <Route
          path="/chat"
          element={
            user
              ? <ChatBot />
              : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}
