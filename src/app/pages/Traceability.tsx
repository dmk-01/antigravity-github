import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/ui/FadeIn';
import { Calendar, Mountain, TrendingUp, Users, ArrowRight, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Traceability = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* 1. Hero Section: The Philosophy */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573485215080-a42ce73c0af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwaG9sZGluZyUyMGZyZXNoJTIwZ3JlZW4lMjB0ZWElMjBsZWF2ZXMlMjBlc3RhdGV8ZW58MXx8fHwxNzcwOTY2MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Hand holding fresh tea leaves" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight">
              Transparency is not a claim. <br/><span className="text-[#f28900]">It is a coordinate.</span>
            </h1>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-200 mb-8 italic">
              "I have vowed that every leaf in your cup comes from a specific place and a specific person. We do not hide behind generic blends. We celebrate the specific soil, the specific ridge, and the specific hands that crafted your tea. This is the Planter's Promise—verified."
            </p>
            <div className="flex justify-center">
              <span className="uppercase tracking-widest text-sm font-bold border-t border-[#f28900] pt-4 text-[#f28900]">
                — Lasantha, Master Planter
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Mechanism: How It Works */}
      <section className="py-24 px-6 relative bg-zinc-900 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <FadeIn direction="right" className="flex-1 order-2 md:order-1">
             <div className="relative bg-black border border-white/10 rounded-xl p-8 max-w-md mx-auto shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-[#f28900] text-black text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-full z-20">
                   Back of Pack
                </div>
                <div className="aspect-[3/4] bg-zinc-800 rounded mb-4 relative overflow-hidden group">
                   <img 
                      src="https://images.unsplash.com/photo-1685575112968-7dd67bc447b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2Nhbm5pbmclMjBxciUyMGNvZGUlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDk2NjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Scanning QR Code"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <QrCode size={64} className="text-white drop-shadow-lg" />
                   </div>
                </div>
                <div className="space-y-2">
                   <div className="h-2 bg-zinc-700 w-3/4 rounded"></div>
                   <div className="h-2 bg-zinc-700 w-1/2 rounded"></div>
                   <div className="h-2 bg-zinc-700 w-full rounded mt-4"></div>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left" className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Scan the Promise.</h2>
            <div className="w-20 h-1 bg-[#f28900] mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Turn your pack over. You will find a unique QR code on the back panel. Scan it to unlock the specific history of the tea you are about to drink.
            </p>
            <p className="text-gray-400 text-sm">
              Each code is linked to a specific harvest batch, ensuring what you learn is true for the exact leaves in your hand.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. What You Will Discover (The Data Points) */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">What You Will Discover</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Real data points that prove authenticity, straight from the source.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "The Date", desc: "See exactly when your tea was plucked and packed. Freshness is a record, not an opinion." },
              { icon: Mountain, title: "The Contour", desc: "Identify the exact slope (e.g., Serpentine Ridge) where your leaf was grown." },
              { icon: TrendingUp, title: "The Elevation", desc: "See the altitude that gifted your tea its unique character and flavor profile." },
              { icon: Users, title: "The Hands", desc: "Meet the specific Team Leader or Plucker responsible for the harvest of that batch." }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} className="bg-zinc-900/50 border border-white/5 p-8 rounded-lg hover:border-[#f28900]/50 transition-colors group">
                <div className="w-12 h-12 bg-[#f28900]/10 rounded-full flex items-center justify-center mb-6 text-[#f28900] group-hover:bg-[#f28900] group-hover:text-black transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sample Traceability Story */}
      <section className="py-24 px-6 bg-zinc-900/30 relative">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-2xl font-bold uppercase text-[#f28900] mb-2">Live Example</h2>
            <p className="text-3xl md:text-4xl font-black text-white">Sample Traceability Story</p>
            <p className="mt-4 text-gray-400">Don't have a pack yet? See a sample of our latest harvest below.</p>
          </FadeIn>

          <div className="flex flex-col lg:flex-row bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* Left Side - Image */}
            <div className="lg:w-1/3 relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1499848144902-af767f6d0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbHVja2VyJTIwd29tYW4lMjBzcmklMjBsYW5rYSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDk2NjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Selvi - Tea Plucker"
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                 <p className="text-white font-bold text-lg">Selvi</p>
                 <p className="text-[#f28900] text-sm uppercase tracking-wider">Master Plucker</p>
               </div>
            </div>

            {/* Right Side - Data */}
            <div className="lg:w-2/3 p-8 md:p-12">
               <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-zinc-800 px-4 py-2 rounded border border-white/5">
                    <span className="text-xs text-gray-500 block uppercase">Batch ID</span>
                    <span className="text-[#f28900] font-mono font-bold">#TP-KAL-045</span>
                  </div>
                  <div className="bg-zinc-800 px-4 py-2 rounded border border-white/5">
                    <span className="text-xs text-gray-500 block uppercase">Grade</span>
                    <span className="text-white font-bold">Super Pekoe</span>
                  </div>
                  <div className="bg-zinc-800 px-4 py-2 rounded border border-white/5">
                    <span className="text-xs text-gray-500 block uppercase">Origin</span>
                    <span className="text-white font-bold">Kalawana Ridge Secret</span>
                  </div>
                  <div className="bg-zinc-800 px-4 py-2 rounded border border-white/5">
                    <span className="text-xs text-gray-500 block uppercase">Harvest Date</span>
                    <span className="text-white font-bold">Nov 12, 2025</span>
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                    <h4 className="text-[#f28900] text-sm uppercase font-bold mb-2">The Plucker's Voice</h4>
                    <p className="font-serif italic text-lg text-gray-300">"The morning mist on the Ridge was heavy today. We picked only the tightest pearls."</p>
                  </div>
                  
                  <div className="w-full h-px bg-white/10"></div>

                  <div>
                    <h4 className="text-[#f28900] text-sm uppercase font-bold mb-2">The Planter's Note</h4>
                    <p className="text-gray-300">"This batch from Kalawana showed exceptional nutty character due to the dry spell in early November. A vintage week for the estate."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The "Chain of Custody" (Map Visual) */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1672008622713-b2f1628a9ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwYWVyaWFsJTIwbWFwfGVufDF8fHx8MTc3MDk2NjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
             alt="Map Background"
             className="w-full h-full object-cover opacity-20 grayscale"
           />
           <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
           <FadeIn direction="up" className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-white">100% Single Origin. <br/>Zero Adulteration.</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                 Most teas travel through auction houses, blenders, and middlemen, losing their identity along the way. Our tea travels a straighter path. We maintain a strict Chain of Custody to ensure that the tea you scan is the tea you sip.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-bold uppercase tracking-widest text-[#f28900]">
                 <span className="flex items-center gap-2">The Bush <ArrowRight size={16} /></span>
                 <span className="flex items-center gap-2">The Factory <ArrowRight size={16} /></span>
                 <span className="flex items-center gap-2">Tasting Room <ArrowRight size={16} /></span>
                 <span className="text-white">Your Cup</span>
              </div>
           </FadeIn>

           {/* Stylized Map Pins Visual (CSS/SVG) */}
           <div className="relative w-full max-w-2xl mx-auto h-[300px] border border-white/10 rounded-xl bg-zinc-900/50 p-8 flex items-center justify-center">
              <div className="absolute top-1/4 left-1/4 animate-pulse">
                 <div className="w-3 h-3 bg-[#f28900] rounded-full shadow-[0_0_10px_#f28900]"></div>
                 <span className="text-[10px] uppercase text-gray-400 mt-1 block">Kalawana</span>
              </div>
              <div className="absolute top-1/2 left-1/3">
                 <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                 <span className="text-[10px] uppercase text-gray-500 mt-1 block">Sinharaja</span>
              </div>
              <div className="absolute top-1/3 right-1/3">
                 <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                 <span className="text-[10px] uppercase text-gray-500 mt-1 block">Nuwara Eliya</span>
              </div>
              <div className="absolute bottom-1/3 right-1/4">
                 <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                 <span className="text-[10px] uppercase text-gray-500 mt-1 block">Ruwanwella</span>
              </div>
              
              {/* Connection Lines (Decoration) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                 <path d="M180,80 Q250,150 400,100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                 <path d="M180,80 L230,150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <div className="z-10 bg-black/80 px-6 py-3 rounded border border-white/20">
                 <p className="text-xs uppercase tracking-widest text-gray-400">Active Monitoring</p>
                 <p className="text-[#f28900] font-bold">All Estates Verified</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Footer Call to Action */}
      <section className="py-24 px-6 bg-[#f28900] text-black text-center">
         <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">Ready to experience the difference?</h2>
            <Link to="/collection">
               <button className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                  Explore the Collection
               </button>
            </Link>
         </div>
      </section>
    </div>
  );
};
