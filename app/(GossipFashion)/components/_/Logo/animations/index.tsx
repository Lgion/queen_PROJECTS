import { motion } from 'framer-motion';
import React from 'react';

// Animation de base avec fondu
export const FadeInAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Animation de rebond
export const BounceAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.div>
);

// Animation de rotation 3D
export const Rotate3DAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ rotateY: 0 }}
    animate={{ rotateY: 360 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    style={{ perspective: 1000 }}
  >
    {children}
  </motion.div>
);

// Animation d'apparition avec échelle et rotation
export const PopAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

// Animation de texte lettre par lettre
export const TextWaveAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const text = children?.toString() || '';
  return (
    <div style={{ display: 'flex' }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

// Animation de surlignage
export const HighlightAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ backgroundSize: "0% 100%" }}
    whileHover={{
      backgroundSize: "100% 100%",
      transition: { duration: 0.3 }
    }}
    style={{
      backgroundImage: "linear-gradient(120deg, #e11d48 0%, #fb7185 100%)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 100%",
      color: "inherit",
      padding: "0.25em 0"
    }}
  >
    {children}
  </motion.div>
);

// Animation de glitch
export const GlitchAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ x: 0, y: 0 }}
    animate={{
      x: [0, -2, 2, -2, 0],
      y: [0, 2, -2, 2, 0],
      filter: [
        'hue-rotate(0deg)',
        'hue-rotate(90deg)',
        'hue-rotate(180deg)',
        'hue-rotate(270deg)',
        'hue-rotate(0deg)'
      ]
    }}
    transition={{
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 5
    }}
  >
    {children}
  </motion.div>
); 