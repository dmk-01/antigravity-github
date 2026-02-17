import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxBackgroundProps {
  src: string;
  alt?: string;
  className?: string;
  speed?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  src, 
  alt = "", 
  className = "", 
  speed = 0.5 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
       <motion.div 
         style={{ y }}
         className="absolute inset-0 h-[130%] w-full -top-[15%]"
       >
         <img src={src} alt={alt} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay for readability usually */}
       </motion.div>
    </div>
  );
};
