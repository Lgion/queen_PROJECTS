"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '../header2';
import "./hamburger1.scss"

export default function Hamburger_1({ isMenuOpen, toggleMenu }) {
  const { circularMenu } = config;
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.article
          initial="closed"
          animate="open"
          exit="closed"
          variants={circularMenu.animations.container}
          className="circular-menu"
          onClick={() => toggleMenu()}
        >
          <motion.section
            className="circular-menu__container"
            onClick={(e) => e.stopPropagation()}
          >
            {circularMenu.items.map((item, index) => {
              const angle = ((index * (360 / circularMenu.items.length)) - 90) * (Math.PI / 180);
              const radius = 130;
              const x = 150 + Math.cos(angle) * radius;
              const y = 150 + Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.label}
                  variants={circularMenu.animations.item}
                  className="absolute circular-menu__item"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <motion.button
                    className={`circular-menu__button ${item.color} safe`}
                  >
                    <item.icon className="circular-menu__icon" />
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="circular-menu__label"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}

            <motion.button
              className="circular-menu__center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Menu</span>
            </motion.button>
          </motion.section>
        </motion.article>
      )}
    </AnimatePresence>
  );
} 