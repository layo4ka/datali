import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit transition before reporting completion
      setTimeout(onComplete, 800);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle animated background smoke/glow effect */}
          <div className="absolute inset-0 bg-radial-gradient from-neutral-900 via-black to-black opacity-60" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10">
            {/* Logo animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mb-8"
            >
              <div className="text-4xl md:text-5xl font-light tracking-[0.25em] text-[#F4F1EA] select-none">
                ДЕТАЛИ
              </div>
              <div className="text-[10px] tracking-[0.4em] text-neutral-500 mt-2 uppercase font-medium">
                detailing studio
              </div>
            </motion.div>

            {/* Glowing line of light simulation (car panel reflection) */}
            <div className="relative w-64 h-[1px] bg-neutral-900 overflow-hidden mb-6">
              <motion.div
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ left: '-150%' }}
                animate={{ left: '150%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
                style={{
                  boxShadow: '0 0 12px 3px rgba(59, 130, 246, 0.5)',
                }}
              />
            </div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-serif-luxury text-lg md:text-xl italic text-neutral-400 font-light tracking-wide"
            >
              Каждая деталь имеет значение
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
