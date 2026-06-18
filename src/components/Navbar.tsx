import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Services', 'Industries', 'Process', 'About', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-4 md:px-6 py-4 md:py-5">
      <div className="flex items-center justify-between max-w-[88rem] mx-auto bg-transparent relative z-40">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <img src="/logo.png" alt="DRS Logo" className="h-7 md:h-9 w-auto" />
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex flex-none items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-4">
          <button className="hidden sm:block bg-black text-white text-sm md:text-base font-medium px-5 md:px-7 py-2 md:py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Request a Quote
          </button>
          <button
            className="md:hidden p-2 -mr-2 text-black z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-black/5 pt-20 pb-8 px-6 flex flex-col gap-6 z-30">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xl text-black font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="sm:hidden bg-black text-white text-base font-medium px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors duration-200 w-full mt-2">
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
