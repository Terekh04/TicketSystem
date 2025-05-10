import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { User } from "../services/auth";


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

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowHello(true), 500),
      setTimeout(() => setShowName(true), 1500),
      setTimeout(() => setStartFade(true), 4500),      // начало фэйда
      setTimeout(() => {
        setHideIntro(true); // убираем интро после fade
        onComplete();
      }, 5500),
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
              <div className="hello">
              {showHello && (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{ display: "flex", gap: "0.5em" }}
>
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0 }} // появление сразу
  >
    Hello...
  </motion.span>
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: showName ? 1 : 0 }}
    transition={{ duration: 1, delay: 1 }} // появление с задержкой
  >
    {name}
  </motion.span>
</motion.div>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
    
}
