import React from 'react';
import { motion } from 'framer-motion';

const FlashCard = ({ front, back, height = 200, delay = 0 }) => {
  return (
    <motion.div
      className="flash-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ height }}
    >
      <div className="flash-card-inner">
        <div
          className="flash-card-front glass-card"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          {front}
        </div>
        <div className="flash-card-back">
          {back}
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;
