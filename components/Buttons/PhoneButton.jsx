/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function CallButton({color,text,icon, onClick}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (

      <motion.button
      onClick={onClick}
        className="flex items-center justify-center  text-white shadow-lg  focus:outline-none "
        initial={{ width: '48px', height: '48px', borderRadius: '50%' }}
        animate={{
          width: isHovered ? '160px' : '48px',
          height: '48px',
          borderRadius: isHovered ? '24px' : '50%'
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like curve for more natural motion
          width: { type: "spring", stiffness: 300, damping: 20 }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{originX:2 ,backgroundColor: color }}
      >
        <motion.div
          className="flex items-center justify-center"
          animate={{
            gap: isHovered ? '8px' : '0px'
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 0.9 : 1,
            //   y: isHovered ? 0 : [0, -2, 0]
            }}
            transition={{ 
              scale: { duration: 0.3 },
              y: { repeat: isHovered ? 0 : Infinity, repeatDelay: 1.5, duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0, x: -10 }}
              animate={{ opacity: 1, width: 'auto', x: 0 }}
              exit={{ opacity: 0, width: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-balooTwo text-sm tracking-wide whitespace-nowrap"
            >
                {text}
            </motion.span>
          )}
        </motion.div>
      </motion.button>

  );
}