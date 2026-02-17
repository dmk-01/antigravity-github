import React from 'react';
import { motion } from 'motion/react';
import { Scale, Thermometer, Timer, Coffee } from 'lucide-react';

export const BrewGuide = () => {
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
            The Ritual of the Perfect Cup
          </motion.h1>
          <p className="text-xl text-gray-400 font-serif italic">
            "To rush tea is to waste it. Respect the leaf, and it will reward you."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { 
               step: "01",
               title: "The Measure", 
               desc: "Use 1 Teaspoon (2g) per cup. Do not overcrowd the infuser; give the leaves space to unfurl.", 
               icon: <Scale size={64} /> 
             },
             { 
               step: "02",
               title: "The Heat", 
               desc: "Bring fresh water to a rolling boil. 100°C for Black Tea, 80°C for Green Tea. Never re-boil old water.", 
               icon: <Thermometer size={64} /> 
             },
             { 
               step: "03",
               title: "The Infuse", 
               desc: "Pour water over leaves. Steep for 3-5 Minutes depending on desired strength. Cover while steeping.", 
               icon: <Timer size={64} /> 
             },
             { 
               step: "04",
               title: "The Serve", 
               desc: "Pour, sip, and savor the contour. Best enjoyed plain to appreciate the true character of the terroir.", 
               icon: <Coffee size={64} /> 
             }
           ].map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2, duration: 0.6 }}
               className="flex flex-col items-center text-center p-8 border border-zinc-800 rounded-3xl hover:shadow-2xl hover:border-[#f28900] transition-all duration-300 group bg-zinc-900"
             >
               <span className="text-6xl font-black text-zinc-800 mb-4 group-hover:text-[#f28900]/20 transition-colors">{item.step}</span>
               <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300 stroke-1">{item.icon}</div>
               <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">{item.title}</h3>
               <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Pro Tip Section */}
        <div className="mt-24 bg-[#f28900] text-white p-12 rounded-2xl text-center">
           <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Master Planter's Tip</h3>
           <p className="text-lg font-serif italic max-w-2xl mx-auto">
             "For the best flavor, pre-heat your cup or pot with hot water before brewing. This ensures the water temperature remains constant during infusion."
           </p>
        </div>

      </div>
    </div>
  );
};
