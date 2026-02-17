import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
  overlayOpacity?: number; // 0 to 1
  minHeight?: string;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  imageSrc, 
  imageAlt = "Background", 
  children,
  overlayOpacity = 0.4,
  minHeight = "100vh"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight }}>
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[140%] w-full -top-[20%]">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>
      
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};
