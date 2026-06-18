

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#F5F5F5] px-6 py-16 border-t border-black/10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="DRS Logo" className="h-9 w-auto" />
            </div>
            <p className="text-black/60 text-sm leading-relaxed mb-3">
              Data collection services
              <br />
              for multiple industries.
            </p>
            <p className="text-black/40 text-sm">
              Pune, Maharashtra, India
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-black font-medium text-sm mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#services" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  B2B Contact Data
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  Industry Directories
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  Custom Data Collection
                </a>
              </li>
              <li>
                <a href="#services" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  Business Research
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-black font-medium text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#about" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  Process
                </a>
              </li>
              <li>
                <a href="#industries" className="text-black/60 text-sm hover:text-black transition-colors duration-200">
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-black font-medium text-sm mb-4">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:founders@deeprootstudios.in"
                  className="text-black/60 text-sm hover:text-black transition-colors duration-200"
                >
                  founders@deeprootstudios.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919579276597"
                  className="text-black/60 text-sm hover:text-black transition-colors duration-200"
                >
                  +91 95792 76597
                </a>
              </li>
              <li>
                <a
                  href="https://deeprootstudios.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 text-sm hover:text-black transition-colors duration-200"
                >
                  deeprootstudios.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-black/10 pt-6">
          <p className="text-black/40 text-sm">
            © 2026 Deep Root Studios Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
