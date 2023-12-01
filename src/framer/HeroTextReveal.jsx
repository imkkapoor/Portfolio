import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroTextReveal({ children, xValue, isLeft }) {
  const [isMarginNeeded, setIsMarginNeeded] = useState(true);

  const handleResize = () => {
    setIsMarginNeeded(window.innerWidth > 550);
  };

  useEffect(() => {
    // Set initial width
    setIsMarginNeeded(window.innerWidth > 550);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const marginSide = isLeft ? 'marginLeft' : 'marginRight';
  const transition = {
    initial: { opacity: 0, x: xValue },
    animate: {
      opacity: 1,
      x: 0,
      [marginSide]: isMarginNeeded ? '20vw' : '0',
      fontSize: isMarginNeeded ? '100px' : '80px',
    },
  };
  return (
    <motion.div
      variants={transition}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
