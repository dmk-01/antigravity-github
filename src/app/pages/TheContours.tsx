import React from 'react';
import { motion } from 'motion/react';

const regions = [
  {
    name: "Amber Valley",
    elevation: "Low Elevation (600m)",
    character: "Full-bodied, malty, with mineral notes.",
    description: "Nestled in the lower valleys where the sun lingers longest. The quartz-rich soil here absorbs the heat, producing teas that are robust, dark, and full of character. This is the home of our grand OPA grades.",
    image: "https://images.unsplash.com/photo-1713101644412-322ca89d1c05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Serpentine Ridge",
    elevation: "Mid Elevation (1200m)",
    character: "Complex, aromatic, with a hint of spice.",
    description: "A winding ridge that catches both the morning mist and the afternoon sun. The fluctuating temperatures here stress the bushes just enough to concentrate the flavor in the leaf. The birthplace of our signature Super Pekoe.",
    image: "https://images.unsplash.com/photo-1707989921990-e3a1831b34a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "High Grown Vista",
    elevation: "High Elevation (1800m+)",
    character: "Delicate, floral, and bright.",
    description: "Where the tea bushes touch the clouds. The air is thin and cool, slowing the growth of the leaf. This slow maturation creates the delicate, floral compounds found in our premium Green Teas and Earl Grey base.",
    image: "https://images.unsplash.com/photo-1677128350738-9dbc8710438d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export const TheContours = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent font-['Roboto'] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-white"
          >
            The Contours
          </motion.h1>
          <p className="text-xl text-gray-400 font-serif italic max-w-3xl mx-auto">
            "Tea is not just a plant; it is the expression of the earth it grows in. We call these unique expressions 'Contours'."
          </p>
        </div>

        <div className="space-y-32">
          {regions.map((region, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-video overflow-hidden shadow-2xl">
                   <img src={region.image} alt={region.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <div className="flex items-baseline gap-4">
                  <h2 className="text-4xl font-black uppercase tracking-tight text-white">{region.name}</h2>
                  <span className="text-[#f28900] font-bold text-sm tracking-widest">{region.elevation}</span>
                </div>
                
                <h3 className="text-xl font-serif italic text-gray-300">{region.character}</h3>
                
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  {region.description}
                </p>

                <div className="pt-4">
                   <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-[#f28900] hover:border-[#f28900] transition-colors">
                     View Teas from this Region
                   </button>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
