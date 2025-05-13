import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChatBot from './services/ChatBot';
import { User, loginWithGoogle, getCurrentUser } from './services/auth';
import IntroScreen from './pages/LoadingPage';
import { motion, AnimatePresence } from "framer-motion";


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  // Получение текущего пользователя
  useEffect(() => {
    getCurrentUser()
      .then(u => setUser(u))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
  const hasSeenIntro = localStorage.getItem('hasSeenIntro');

  if (hasSeenIntro) {
    setIntroDone(true);
  }
}, []);


  return (
    <>
      {!introDone && <IntroScreen userName={user?.name || "Stranger"}
       onComplete={() => {
        localStorage.setItem('hasSeenIntro', 'true'); 
        setIntroDone(true)}
        } 
        />}
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
          element={
            <MainPage
              user={user}
              onLogin={loginWithGoogle}
            />
          }
        />
        <Route
          path="/chat"
          element={<ChatBot />}
        />
        <Route
          path="/teams"
          element={<div>Teams page</div>}
        />
      </Routes>
    </motion.div>
  )}
</AnimatePresence>
  </ >
  );
}
