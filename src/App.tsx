import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChatBot from './services/ChatBot';
import { User, loginWithGoogle, getCurrentUser } from './services/auth';
import IntroScreen from './pages/LoadingPage';
import { motion, AnimatePresence } from "framer-motion";

interface LocationState {
  skipIntro?: boolean;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  // Типизируем useLocation
  const location = useLocation(); // Используем useLocation без дженерика

  // Получение текущего пользователя
  useEffect(() => {
    getCurrentUser()
      .then(u => setUser(u))
      .finally(() => setLoading(false));
  }, []);

  // Проверка, нужно ли скипнуть интро
  useEffect(() => {
    if (!loading) {
      const state = location.state as LocationState | null; // Явно кастуем тип состояния
      if (state?.skipIntro) {
        setIntroDone(true); // Пропускаем интро, если есть флаг
      }
    }
  }, [loading, location]);

  return (
    <>
      {!introDone && !loading && (
        <IntroScreen
          userName={user?.name || "Stranger"}
          onComplete={() => setIntroDone(true)}
        />
      )}

      <AnimatePresence>
        {introDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key="main-content"
          >
            <Routes>
              <Route
                path="/"
                element={<MainPage user={user} onLogin={loginWithGoogle} />}
              />
              <Route path="/chat" element={<ChatBot user={user} onLogin={loginWithGoogle}/>} />
              <Route path="/teams" element={<div>Teams page</div>} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
