"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '../header2';
import "./hamburger2.scss"

export default function Hamburger_2({ isMenuOpen, toggleMenu }) {
  const { slideMenu } = config;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className="slide-menu__overlay"
            variants={slideMenu.animations.overlay}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={toggleMenu}
          />

          <motion.aside
            className="slide-menu"
            variants={slideMenu.animations.menu}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="slide-menu__content">
              <header className="slide-menu__header">
                <motion.button
                  className="slide-menu__close"
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </header>

              <nav className="slide-menu__nav">
                {slideMenu.items.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="slide-menu__item"
                    custom={index}
                    variants={slideMenu.animations.item}
                    initial="initial"
                    animate="animate"
                  >
                    <div className={`slide-menu__icon ${item.color}`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="slide-menu__label">{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <footer className="slide-menu__footer">
                <motion.button
                  className="slide-menu__cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Prendre rendez-vous
                </motion.button>
              </footer>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
} 