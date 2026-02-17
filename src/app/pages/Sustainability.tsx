import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Users, Briefcase, Award } from 'lucide-react';

export const Sustainability = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent font-['Roboto'] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-white"
          >
            A Covenant with the Land
          </motion.h1>
          <div className="w-32 h-1 bg-[#4C8C2B] mx-auto mt-6"></div>
        </div>

        {/* Rainforest Alliance Section */}
        <div className="bg-zinc-900 p-8 md:p-16 rounded-2xl shadow-xl mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
             {/* Seal Placeholder */}
             <div className="w-48 h-48 bg-[#4C8C2B] rounded-full flex flex-col items-center justify-center text-white text-center p-4 border-4 border-[#8BC34A] shadow-lg">
                <Award size={64} className="mb-2" />
                <span className="font-bold text-sm uppercase">Rainforest<br/>Alliance<br/>Certified</span>
             </div>
          </div>
          <div className="flex-1">
             <h2 className="text-3xl font-bold text-[#4C8C2B] mb-4">Certified for a Better Future</h2>
             <p className="text-lg text-gray-300 leading-relaxed font-light">
               We partner with the Rainforest Alliance to ensure that our tea is grown in a way that protects nature and improves the lives of farmers and forest communities. This seal represents our commitment to environmental, social, and economic sustainability.
             </p>
          </div>
        </div>

        {/* The 3 Pillars */}
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight text-white">The 3 Pillars of The Promise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               title: "Environmental", 
               icon: <Sprout size={48} />, 
               text: "Protecting our ecosystems and water sources. We maintain buffer zones around waterways and strictly control soil erosion to preserve the land for future generations." 
             },
             { 
               title: "Social", 
               icon: <Users size={48} />, 
               text: "Ensuring dignity, safety, and living wages for our pickers. Our community programs provide housing, healthcare, and education for the families who harvest our tea." 
             },
             { 
               title: "Economic", 
               icon: <Briefcase size={48} />, 
               text: "Fair prices that sustain the plantation communities. By skipping middlemen and exporting directly, we ensure more value returns to the people who create it." 
             }
           ].map((pillar, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2, duration: 0.6 }}
               className="bg-zinc-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#4C8C2B]"
             >
               <div className="text-[#4C8C2B] mb-6 flex justify-center">{pillar.icon}</div>
               <h3 className="text-xl font-bold text-center mb-4 uppercase tracking-wider text-white">{pillar.title}</h3>
               <p className="text-gray-400 text-center font-light leading-relaxed">{pillar.text}</p>
             </motion.div>
           ))}
        </div>

        {/* Image Banner */}
        <div className="mt-24 rounded-2xl overflow-hidden shadow-2xl h-[400px]">
           <img 
             src="https://images.unsplash.com/photo-1499848144902-af767f6d0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
             alt="Happy Tea Pickers" 
             className="w-full h-full object-cover"
           />
        </div>

      </div>
    </div>
  );
};
