import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu as MenuIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSite } from '../../context/SiteContext';

export const Header = () => {
  const { pathname } = useLocation();
  const { siteData } = useSite();
  const isHome = pathname === '/';
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-end px-6 md:px-12 transition-all duration-300 text-zinc-900 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-[33px] border-b border-white/50 shadow-sm ${isHome ? 'py-4' : 'pt-[24px] pb-2'}`}>
      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8 text-[12px] font-[var(--site-font-family)] font-medium tracking-widest uppercase order-1">
        {siteData.navigation.map((item, index) => (
          <Link key={index} to={item.path} className="hover:text-[var(--site-primary-color)] transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden order-1 py-4">
        <Link to="/collection" className="text-current uppercase text-xs font-bold tracking-widest border border-current px-3 py-1 flex items-center gap-2">
          <MenuIcon size={16} /> MENU
        </Link>
      </div>

      {/* Logo & CTA */}
      <div className="flex flex-col items-end gap-4 z-50 order-2">
        <div className="w-[180px] md:w-[240px]">
          <Link to="/">
            <img
              src={siteData.logo}
              alt="The Planter's Promise"
              className="w-full h-auto object-contain transition-all duration-300"
            />
          </Link>
        </div>

        <Link to="/contact" className="hidden lg:block pb-2">
          <button className="px-5 py-2 text-[12px] font-medium tracking-widest uppercase border transition-all duration-300 border-zinc-900 hover:bg-zinc-900 hover:text-white">
            Contact / Buy
          </button>
        </Link>
      </div>
    </header>
  );
};

