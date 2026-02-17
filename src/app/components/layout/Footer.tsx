import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, MapPin, Lock } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const Footer = () => {
  const { siteData } = useSite();
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 font-[var(--site-font-family)]">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/">
              <img src={siteData.logo} alt="The Planter's Promise" className="w-48 brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Personally Tasted. Ethically Rooted.<br />
              A vow kept in every sip.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#f28900]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/collection" className="hover:text-white transition-colors">Our Collection</Link></li>
              <li><Link to="/planter" className="hover:text-white transition-colors">The Planter's Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/brew-guide" className="hover:text-white transition-colors">Brew Guide</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Trade Inquiries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#f28900]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@theplanterspromise.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Packed & Marketed by:<br />
                  The Planter Promise (Pvt) Ltd.<br />
                  Colombo 05, Sri Lanka.
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#f28900]">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="hover:text-[#f28900] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#f28900] transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-[#f28900] transition-colors"><Facebook size={24} /></a>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link to="/login" className="hover:text-white flex items-center gap-1"><Lock size={10} /> Admin Login</Link></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>© 2026 The Planter Promise. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">All Designs & IP Subject to Exclusive Supply Agreement with Design Logics Connect.</p>
        </div>

      </div>
    </footer>
  );
};

