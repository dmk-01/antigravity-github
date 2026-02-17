import React from 'react';
import { Signature } from '../components/Signature';
import { motion } from 'motion/react';
import { FadeIn } from '../components/ui/FadeIn';

export const ThePlanter = () => {
  return (
    <div className="w-full pt-32 pb-24 font-['Roboto'] bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight text-white">
              Not Just Grown. <span className="text-[#f28900]">Guided.</span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <FadeIn direction="right" className="flex-1 w-full">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1677128350738-9dbc8710438d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Master Planter Inspecting Tea" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-serif italic text-lg">"Respect the soil, and it will respect the leaf."</p>
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn direction="left" delay={0.2} className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold font-serif mb-6 text-white">The Story of Mastery</h2>
            
            <p className="text-lg leading-relaxed text-gray-300 font-light">
              Quality is not a benchmark to be met; it is a way of life I have walked for thirty-five years. I have learned that true character cannot be manufactured; it must be nurtured in the soil, coaxed by the mist, and harvested by hands that are respected.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300 font-light">
              When you choose The Planter’s Promise, you are holding my personal guarantee. We do not blend with inferior origins. We do not use refuse tea. We offer only the honest harvest of the <span className="italic">Camellia sinensis</span> bush.
            </p>

            <div className="pt-8">
               <Signature className="w-64 h-auto text-white" />
               <p className="mt-2 text-sm uppercase tracking-widest font-bold text-gray-500">Lasantha, Master Planter</p>
            </div>
          </FadeIn>

        </div>
        
        {/* Timeline Visual Element */}
        <div className="mt-32">
           <FadeIn direction="up">
             <h3 className="text-center text-2xl font-bold mb-16 uppercase tracking-widest text-white">A Life in Tea</h3>
           </FadeIn>
           <div className="relative border-l-2 border-gray-700 ml-6 md:mx-auto md:w-2/3 space-y-12 pl-8 md:pl-0">
              {[
                { year: "1990", title: "The Beginning", text: "Started as a junior planter in the mist-covered hills of Nuwara Eliya." },
                { year: "2005", title: "Mastering the Ridge", text: "Became Head Planter, overseeing the renowned Serpentine Ridge." },
                { year: "2015", title: "The Promise", text: "Founded The Planter's Promise to bring unblended, pure Ceylon tea to the world." },
                { year: "2025", title: "A New Legacy", text: "Celebrating 35 years of unwavering commitment to quality." }
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up" className="relative md:flex items-center md:gap-8 group">
                   <div className="absolute -left-[41px] md:left-auto md:right-full md:mr-8 w-6 h-6 bg-[#f28900] rounded-full border-4 border-zinc-900 shadow-md z-10 md:translate-x-3 transition-transform group-hover:scale-125"></div>
                   <div className="md:w-1/2 md:text-right md:pr-16 hidden md:block">
                      {index % 2 === 0 && (
                        <div>
                          <span className="text-[#f28900] font-black text-2xl block mb-1">{item.year}</span>
                          <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                          <p className="text-gray-400 font-light">{item.text}</p>
                        </div>
                      )}
                   </div>
                   <div className="md:w-1/2 md:pl-8">
                     <div className="md:hidden">
                        <span className="text-[#f28900] font-black text-2xl block mb-1">{item.year}</span>
                        <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                     </div>
                     <div className="md:hidden">
                        <p className="text-gray-400 font-light">{item.text}</p>
                     </div>
                     {index % 2 !== 0 && (
                        <div className="hidden md:block">
                          <span className="text-[#f28900] font-black text-2xl block mb-1">{item.year}</span>
                          <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                          <p className="text-gray-400 font-light">{item.text}</p>
                        </div>
                      )}
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
