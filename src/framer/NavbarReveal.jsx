import { motion } from 'framer-motion';
import React from 'react';

export default function NavbarReveal({ children, opacityValue, zValue }) {
  const transition = {
    initial: { opacity: 0, position: 'fixed' },
    animate: {
      opacity: opacityValue ? 1 : 0,
      zIndex: opacityValue ? zValue : -10,

      position: 'fixed',
    },
    exit: { opacity: 0, position: 'fixed' },
  };
  return (
    <motion.div
      variants={transition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
