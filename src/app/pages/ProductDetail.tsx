import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Leaf, Droplet, Sun, CheckCircle } from 'lucide-react';

// Shared Product Data (Mock Database)
const products = {
  "opa": {
    name: "OPA",
    subName: "Amber Valley Embrace",
    hook: "Gentle. Golden. Grand.",
    description: "From the sun-drenched lower slopes of Amber Valley, these large, loosely rolled leaves unfurl to reveal a golden liquor. The soil here is rich in quartz, imparting a subtle mineral sweetness that lingers on the palate.",
    notes: ["Sweet Wood", "Honey", "Mineral"],
    origin: "Amber Valley",
    ingredients: "Single Origin 100% Pure Ceylon Black Tea",
    image: "https://images.unsplash.com/photo-1733527517375-a614aec98444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "bop1": {
    name: "BOP1",
    subName: "Ruwanwella Legacy",
    hook: "Rich. Wiry. Classic.",
    description: "A true classic from the Ruwanwella estate. These wiry, neat leaves brew a bright, coppery infusion with a strength that wakes the senses. It is the morning ritual of the planter himself.",
    notes: ["Malt", "Citrus", "Oak"],
    origin: "Ruwanwella Estate",
    ingredients: "Single Origin 100% Pure Ceylon Black Tea",
    image: "https://images.unsplash.com/photo-1654434142227-9f38c4e5c706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "super-pekoe": {
    name: "Super Pekoe",
    subName: "Serpentine Ridge Secret",
    hook: "Bold. Rolled. Robust.",
    description: "From the winding trails of Serpentine Ridge comes a tea of hidden depths. These shotty, tightly curled leaves are 'pearls' of flavor, locking in the essence of the terroir until they meet hot water. This brew is dark, intense, and mysteriously complex.",
    notes: ["Nutty", "Malty", "Fruity Undertone"],
    origin: "Kalawana Ridge Secret",
    ingredients: "Single Origin 100% Pure Ceylon Black Tea",
    image: "https://images.unsplash.com/photo-1671778440118-4bc5eced58e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "tippy-fbop": {
    name: "Tippy FBOP",
    subName: "Sinharaja Foothills Bloom",
    hook: "Golden. Tipped. Bloom.",
    description: "Harvested where the rainforest meets the tea fields. Abundant in silver and golden tips, this tea offers a delicate, floral aroma with a light body that dances on the tongue.",
    notes: ["Floral", "Caramel", "Light Spice"],
    origin: "Sinharaja Foothills",
    ingredients: "Single Origin 100% Pure Ceylon Black Tea",
    image: "https://images.unsplash.com/photo-1733527517375-a614aec98444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "op1": {
    name: "OP1",
    subName: "Ruwanwella Gold",
    hook: "Delicate. Wiry. Refined.",
    description: "The champagne of our black teas. Long, wiry leaves that brew a pale gold liquor. It is subtle, sophisticated, and best enjoyed without milk to appreciate its true character.",
    notes: ["Dried Fruit", "Honey", "Soft Wood"],
    origin: "Ruwanwella Estate",
    ingredients: "Single Origin 100% Pure Ceylon Black Tea",
    image: "https://images.unsplash.com/photo-1654434142227-9f38c4e5c706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "shotty-green": {
    name: "Shotty Green Tea",
    subName: "High Grown Vista",
    hook: "Crisp. Rolled. Vital.",
    description: "Steam-fixed to preserve the vibrant green color and antioxidants. These tightly rolled leaves unfurl to release a grassy, fresh aroma reminiscent of the high-altitude winds.",
    notes: ["Grass", "Seaweed", "Chestnut"],
    origin: "High Grown Vista",
    ingredients: "100% Pure Ceylon Green Tea",
    image: "https://images.unsplash.com/photo-1664385375278-c3a231ee2bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "soursop": {
    name: "Soursop Green Tea",
    subName: "Orchard Infusion",
    hook: "Exotic. Creamy. Tropical.",
    description: "We blend our high-grown green tea with natural soursop extracts. The result is a creamy, tangy, and sweet cup that transports you to the tropical orchards of the island.",
    notes: ["Creamy", "Tangy", "Sweet"],
    origin: "Orchard Infusion",
    ingredients: "Ceylon Green Tea, Natural Soursop Extract",
    image: "https://images.unsplash.com/photo-1604697976842-d36fa5a1b2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  "earl-grey": {
    name: "Earl Grey",
    subName: "Highland Bergamot",
    hook: "Citrus. Aromatic. Timeless.",
    description: "A timeless classic reimagined. We use natural bergamot oil from high-altitude citrus groves, blended with our robust black tea for a zesty, aromatic cup.",
    notes: ["Bergamot", "Citrus Zest", "Robust Tea"],
    origin: "Highland Bergamot",
    ingredients: "Ceylon Black Tea, Natural Bergamot Oil",
    image: "https://images.unsplash.com/photo-1594136579292-d98588fe6429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
};

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/collection" className="text-[#f28900] underline">Return to Collection</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-transparent font-['Roboto'] text-white">
      {/* Breadcrumb / Back */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Link to="/collection" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} className="mr-2" /> Back to Collection
        </Link>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="aspect-square bg-zinc-800 relative overflow-hidden shadow-2xl">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight text-white">{product.name}</h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-8">{product.subName}</h2>

          <div className="mb-10">
            <p className="text-[#f28900] text-xl font-bold italic serif mb-6">{product.hook}</p>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              {product.description}
            </p>
          </div>

          {/* Tasting Notes */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-700 pb-2 text-gray-400">Tasting Notes</h3>
            <div className="flex gap-4">
              {product.notes.map((note, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 bg-zinc-800 p-4 rounded-full w-24 h-24 justify-center text-center">
                   <div className="text-[#f28900]">
                      {/* Simple Icon Logic */}
                      {idx === 0 ? <Leaf size={20} /> : idx === 1 ? <Droplet size={20} /> : <Sun size={20} />}
                   </div>
                   <span className="text-xs font-medium leading-tight text-white">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-10 text-sm">
             <div>
                <h4 className="font-bold uppercase tracking-widest mb-1 text-gray-400 text-xs">Origin</h4>
                <p className="font-medium text-white">{product.origin}</p>
             </div>
             <div>
                <h4 className="font-bold uppercase tracking-widest mb-1 text-gray-400 text-xs">Ingredients</h4>
                <p className="font-medium text-white">{product.ingredients}</p>
             </div>
             <div>
                <h4 className="font-bold uppercase tracking-widest mb-1 text-gray-400 text-xs">Nutritional Facts (per 2g)</h4>
                <p className="font-medium text-white">Calories: 0 | Fat: 0g | Sugar: 0g</p>
             </div>
             <div>
                <h4 className="font-bold uppercase tracking-widest mb-1 text-gray-400 text-xs">Certifications</h4>
                <div className="flex items-center gap-2 text-[#4C8C2B] font-bold">
                   <CheckCircle size={16} /> Rainforest Alliance
                </div>
             </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#f28900] hover:text-white transition-colors w-full md:w-auto">
              Inquire for Export
            </button>
            <button className="border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto">
              Add to List
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
