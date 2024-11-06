"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '../header2';
import "./hamburger3.scss"

export default function Hamburger_3({ isMenuOpen, toggleMenu }) {
  const { floatingMenu } = config;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          className="floating-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="floating-menu__backdrop"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={toggleMenu}
          />

          <motion.div
            className="floating-menu__container"
            variants={floatingMenu.animations.container}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <header className="floating-menu__header">
              <motion.button
                className="floating-menu__close"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </header>

            <motion.nav 
              className="floating-menu__nav"
              variants={floatingMenu.animations.stagger}
            >
              {floatingMenu.items.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="floating-menu__item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: item.delay }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={`floating-menu__icon bg-gradient-to-r ${item.color}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.span 
                    className="floating-menu__label"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: item.delay + 0.2 }
                    }}
                  >
                    {item.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.nav>

            <motion.footer 
              className="floating-menu__footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5 }
              }}
            >
              <motion.button
                className="floating-menu__cta"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Prendre rendez-vous
              </motion.button>
            </motion.footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 