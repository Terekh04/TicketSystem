import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { User } from "../services/auth";
import './LoadingPage.css';

interface Props {
  userName?: string;
  onComplete: () => void;
}

export default function IntroScreen({ userName = "Stranger", onComplete }: Props) {
  const user: User = {
    id: 0,
    name: userName,
    email: "",
    role: "user",
  };

  const name = userName.split(" ")[0];
  const [showHello, setShowHello] = useState(false);
  const [showName, setShowName] = useState(false);
  const [startFade, setStartFade] = useState(false); // 🔄 для запуска фэйда
  const [hideIntro, setHideIntro] = useState(false);
  const text = `Hello, ${name}!`.split("");
  useEffect(() => {
    const timers = [
      setTimeout(() => setShowHello(true), 500),
      setTimeout(() => setShowName(true), 1500),
      setTimeout(() => setStartFade(true), 2500),      // начало фэйда
      setTimeout(() => {
        setHideIntro(true); // убираем интро после fade
        onComplete();
      }, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

    return (
      <>
        <AnimatePresence>
          {!hideIntro && (
            <motion.div
              className="intro-screen"
              initial={{ opacity: 1 }}
              animate={{ opacity: startFade ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{ position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "2rem",
                zIndex: 9999,
                fontFamily: "'Sora', sans-serif",
   }}
            >
              {showHello && (
                <div>
      {text.map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        {char}
      </motion.span>
    ))}
              </div>

              )}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
    
}
