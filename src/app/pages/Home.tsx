import React, { useRef } from 'react';
import { Signature } from '../components/Signature';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import { useSite } from '../context/SiteContext';
import { Gallery } from '../components/Gallery';

const HERO_IMAGE = "https://images.unsplash.com/photo-1544739313-6afd0fc50211?q=80&w=2070&auto=format&fit=crop";

const collections = [
  {
    id: 1,
    title: "The Classics",
    subtitle: "Golden & Grand.",
    description: "BOP1, OPA",
    image: "https://images.unsplash.com/photo-1654434142227-9f38c4e5c706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: 2,
    title: "The Connoisseur",
    subtitle: "Bold & Rare.",
    description: "Super Pekoe, Tippy FBOP",
    image: "https://images.unsplash.com/photo-1671778440118-4bc5eced58e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: 3,
    title: "The Infusions",
    subtitle: "Exotic & Aromatic.",
    description: "Soursop, Earl Grey",
    image: "https://images.unsplash.com/photo-1594136579292-d98588fe6429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export const Home = () => {
  const { siteData } = useSite();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(heroScrollY, [0, 0.5], [1, 0]);

  const getContent = (key: string, def: string) => siteData.contents[key] || def;

  return (
    <div className="flex flex-col w-full font-[var(--site-font-family)]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <motion.div
          style={{ y: yHero }}
          className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full"
        >
          <img
            src={HERO_IMAGE}
            alt="Tea Plantation at Sunrise"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-16 pt-32 pb-16 h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black leading-tight tracking-tight drop-shadow-2xl mb-6">
              {getContent('hero-title', 'Personally Tasted. Ethically Rooted.')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-wide text-gray-200 drop-shadow-lg mb-10 font-serif">
              {getContent('hero-subtitle', '35 Years of Mastery. 100% Pure Ceylon Tea. A Vow Kept in Every Sip.')}
            </h2>

            <Link to="/collection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-4 text-lg font-bold tracking-widest uppercase rounded-none"
              >
                {getContent('hero-cta', 'Explore the Promise')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quality Vow Section (Introduction) */}
      <section className="bg-black py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16">
          <FadeIn direction="right" className="max-w-2xl flex-1">
            <h2 className="text-3xl md:text-[36px] font-bold mb-8 text-white">{getContent('vow-title', 'The Planter’s Quality Vow')}</h2>
            <div className="space-y-8 text-gray-200">
              <p className="text-xl md:text-[26px] italic font-light leading-relaxed font-serif border-l-4 border-[#f28900] pl-6">
                "{getContent('vow-content', 'My personal guarantee of authentic Ceylon tea, born from thirty-five years of mastering the terrain. Personally selected from specific contours and crafted without compromise for a truly genuine experience.')}"
              </p>
              <div className="flex items-center gap-4 pl-6">
                <div className="h-[1px] w-12 bg-gray-600"></div>
                <p className="text-base md:text-[14px] font-bold tracking-widest uppercase">Lasantha, Master Planter</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="flex-shrink-0 flex flex-col items-center justify-center lg:items-end">
            <Signature className="w-[300px] h-[220px] md:w-[400px] md:h-[300px] text-white" />
            <span className="text-sm text-gray-500 mt-2 font-serif italic">Est. 1990</span>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white px-6 md:px-16">
        <div className="container mx-auto">
          <Gallery />
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="bg-zinc-900 py-24 px-6 md:px-16">
        <div className="container mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Collections</h2>
            <div className="w-24 h-1 bg-[#f28900] mx-auto"></div>
          </FadeIn>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <Link to="/collection" key={item.id}>
              <FadeIn delay={index * 0.15} className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group cursor-pointer overflow-hidden h-[500px] shadow-lg bg-zinc-800"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-3xl font-bold mb-2 font-serif">{item.title}</h3>
                      <p className="text-[#f28900] text-lg font-bold uppercase tracking-wider mb-2">{item.subtitle}</p>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
