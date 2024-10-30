"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '../header2';
import "./hamburger4.scss"

export default function Hamburger_4({ isMenuOpen, toggleMenu }) {
  const { perspective3DMenu } = config;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <div className="perspective-menu">
          <motion.div 
            className="perspective-menu__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />

          <motion.div
            className="perspective-menu__container"
            variants={perspective3DMenu.animations.container}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ perspective: "1000px" }}
          >
            <header className="perspective-menu__header">
              <motion.button
                className="perspective-menu__close"
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </header>

            <nav className="perspective-menu__nav">
              {perspective3DMenu.items.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="perspective-menu__item"
                  initial={{ opacity: 0, z: item.z, rotateX: 90 }}
                  animate={{ 
                    opacity: 1, 
                    z: 0, 
                    rotateX: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    z: 30,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`perspective-menu__icon bg-gradient-to-r ${item.color}`}
                    whileHover={{
                      rotateY: 180,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="perspective-menu__label">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            <motion.footer 
              className="perspective-menu__footer"
              initial={{ opacity: 0, y: 50, z: -50 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                z: 0,
                transition: { delay: 0.4 }
              }}
            >
              <motion.button
                className="perspective-menu__cta"
                whileHover={{ 
                  scale: 1.05,
                  z: 20,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Prendre rendez-vous
              </motion.button>
            </motion.footer>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 