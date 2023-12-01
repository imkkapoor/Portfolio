import { motion } from 'framer-motion';
import React from 'react';

export default function NavbarReveal({ children, opacityValue }) {
  const transition = {
    initial: { opacity: 0 },
    animate: { opacity: opacityValue ? 1 : 0 },
    exit: { opacity: 0 },
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
