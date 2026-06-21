import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Процесс', href: '#process' },
    { name: 'Работы', href: '#portfolio' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Цены', href: '#prices' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#footer' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-bg-primary/75 backdrop-blur-md border-b border-border-primary'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            className="flex flex-col tracking-[0.2em] group select-none bg-transparent border-0 p-0 text-left cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-xl md:text-2xl font-light text-text-primary">
              ДЕТАЛИ
            </span>
            <span className="text-[7px] tracking-[0.3em] text-text-secondary uppercase">
              detailing studio
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-color transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Items */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <a
              href="#cta"
              onClick={(e) => handleLinkClick(e, '#cta')}
              className="hidden md:inline-flex items-center space-x-2 bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-bg-primary px-6 py-2.5 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 group"
            >
              <span>Оставить заявку</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-[2px] bg-text-primary/10 group-hover:bg-bg-primary/20 transition-colors">
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-[4px] border border-border-primary bg-bg-card/40 text-text-primary cursor-pointer active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-2xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.5 }}
                  className="text-2xl font-light tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <a
                href="#cta"
                onClick={(e) => handleLinkClick(e, '#cta')}
                className="w-full justify-center inline-flex items-center space-x-2 border border-text-primary text-text-primary hover:bg-text-primary hover:text-bg-primary py-4 rounded-[4px] text-sm font-semibold uppercase tracking-wider active:scale-95 transition-transform"
              >
                <span>Оставить заявку</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>

              <div className="text-center text-xs tracking-wider text-text-secondary uppercase">
                detali detailing • moscow
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
