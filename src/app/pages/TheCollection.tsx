import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import clsx from 'clsx';

// Product Data
const products = [
  // Black Tea
  { 
    id: "opa", 
    name: "OPA",
    subName: "Amber Valley Embrace",
    category: "black", 
    tag: "Gentle. Golden. Grand.", 
    image: "https://images.unsplash.com/photo-1733527517375-a614aec98444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  { 
    id: "bop1", 
    name: "BOP1", 
    subName: "Ruwanwella Legacy",
    category: "black", 
    tag: "Rich. Wiry. Classic.", 
    image: "https://images.unsplash.com/photo-1654434142227-9f38c4e5c706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  { 
    id: "super-pekoe", 
    name: "Super Pekoe", 
    subName: "Serpentine Ridge Secret",
    category: "black", 
    tag: "Bold. Rolled. Robust.", 
    image: "https://images.unsplash.com/photo-1671778440118-4bc5eced58e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  { 
    id: "tippy-fbop", 
    name: "Tippy FBOP", 
    subName: "Sinharaja Foothills Bloom",
    category: "black", 
    tag: "Golden. Tipped. Bloom.", 
    image: "https://images.unsplash.com/photo-1733527517375-a614aec98444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  { 
    id: "op1", 
    name: "OP1", 
    subName: "Ruwanwella Gold",
    category: "black", 
    tag: "Delicate. Wiry. Refined.", 
    image: "https://images.unsplash.com/photo-1654434142227-9f38c4e5c706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  // Green Tea
  { 
    id: "shotty-green", 
    name: "Shotty Green Tea", 
    subName: "High Grown Vista",
    category: "green", 
    tag: "Crisp. Rolled. Vital.", 
    image: "https://images.unsplash.com/photo-1664385375278-c3a231ee2bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  // Infusions
  { 
    id: "soursop", 
    name: "Soursop Green Tea", 
    subName: "Orchard Infusion",
    category: "infusion", 
    tag: "Exotic. Creamy. Tropical.", 
    image: "https://images.unsplash.com/photo-1604697976842-d36fa5a1b2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  },
  { 
    id: "earl-grey", 
    name: "Earl Grey", 
    subName: "Highland Bergamot",
    category: "infusion", 
    tag: "Citrus. Aromatic. Timeless.", 
    image: "https://images.unsplash.com/photo-1594136579292-d98588fe6429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  }
];

export const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(filter);

  useEffect(() => {
    setActiveFilter(filter);
  }, [filter]);

  const handleFilterChange = (newFilter: string) => {
    setActiveFilter(newFilter);
    setSearchParams(newFilter === 'all' ? {} : { filter: newFilter });
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent font-['Roboto'] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">The Collection</h1>
          <p className="text-lg text-gray-400 font-serif italic max-w-2xl mx-auto">
            "Each leaf tells a story of its contour. From the amber valleys to the misty ridges."
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {['all', 'black', 'green', 'infusion'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={clsx("px-6 py-2 uppercase tracking-widest text-sm font-bold border transition-all duration-300", {
                "bg-white text-black border-white": activeFilter === cat,
                "bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white": activeFilter !== cat
              })}
            >
              {cat === 'all' ? 'All Collections' : cat === 'infusion' ? 'Infusions' : `${cat} Tea`}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <Link to={`/collection/${product.id}`} key={product.id} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Card */}
                <div className="relative aspect-[4/5] bg-zinc-900 shadow-sm overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-gray-600">
                      {/* Fallback/Loading state */}
                      <span className="uppercase tracking-widest text-xs">Loading...</span>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-white text-black py-3 uppercase text-xs font-bold tracking-widest hover:bg-[#f28900] hover:text-white transition-colors">
                      View Story
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center group-hover:text-[#f28900] transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-[#f28900]">{product.name}</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{product.subName}</p>
                  <p className="font-serif italic text-gray-300">{product.tag}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
