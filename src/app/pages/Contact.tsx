import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent font-['Roboto'] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-white"
          >
            Contact & Inquiries
          </motion.h1>
          <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
            "Whether for export inquiries or a personal appreciation of tea, we are here to listen."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div>
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Reach Us</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <Mail className="text-[#f28900] mt-1" />
                    <div>
                      <p className="font-bold text-white">Email</p>
                      <a href="mailto:info@theplanterspromise.com" className="text-gray-400 hover:text-[#f28900] transition-colors">info@theplanterspromise.com</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="text-[#f28900] mt-1" />
                    <div>
                      <p className="font-bold text-white">Address</p>
                      <p className="text-gray-400">The Planter Promise (Pvt) Ltd.<br/>No. 123, High Level Road,<br/>Colombo 05, Sri Lanka.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Phone className="text-[#f28900] mt-1" />
                    <div>
                       <p className="font-bold text-white">Phone</p>
                       <p className="text-gray-400">+94 11 234 5678</p>
                    </div>
                 </div>
               </div>
            </div>

            <div>
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Follow Our Journey</h3>
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"><Instagram size={20} /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"><Linkedin size={20} /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"><Facebook size={20} /></a>
               </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-zinc-900 p-8 md:p-12 rounded-2xl"
          >
             <h3 className="text-2xl font-bold mb-8 text-white">Send an Inquiry</h3>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                      <input type="text" className="w-full bg-zinc-800 text-white border-b-2 border-zinc-700 p-3 focus:border-[#f28900] outline-none transition-colors placeholder-zinc-500" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                      <input type="text" className="w-full bg-zinc-800 text-white border-b-2 border-zinc-700 p-3 focus:border-[#f28900] outline-none transition-colors placeholder-zinc-500" placeholder="Doe" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                   <input type="email" className="w-full bg-zinc-800 text-white border-b-2 border-zinc-700 p-3 focus:border-[#f28900] outline-none transition-colors placeholder-zinc-500" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interest</label>
                   <select className="w-full bg-zinc-800 text-white border-b-2 border-zinc-700 p-3 focus:border-[#f28900] outline-none transition-colors">
                      <option>Export / Wholesale</option>
                      <option>Retail Purchase</option>
                      <option>General Inquiry</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                   <textarea className="w-full bg-zinc-800 text-white border-b-2 border-zinc-700 p-3 focus:border-[#f28900] outline-none transition-colors h-32 resize-none placeholder-zinc-500" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-[#f28900] hover:text-white transition-colors">
                   Send Message
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
