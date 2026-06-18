import LogoIcon from './LogoIcon';

const Navbar = () => {
  const navLinks = ['Services', 'Industries', 'Process', 'About', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-7 h-7 text-black" />
          <span className="text-2xl font-medium tracking-tight text-black">
            DRS
          </span>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Right: CTA Button */}
        <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Request a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
