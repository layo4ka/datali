import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
  ];

  return (
    <footer id="footer" className="bg-bg-primary border-t border-border-primary pt-24 pb-12 relative overflow-hidden">
      
      {/* Blueprint grid lines overlay in footer */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col tracking-[0.2em] w-max select-none mb-6 bg-transparent border-0 p-0 text-left cursor-pointer"
            >
              <span className="text-2xl font-light text-text-primary">
                ДЕТАЛИ
              </span>
              <span className="text-[8px] tracking-[0.3em] text-text-secondary uppercase">
                detailing studio
              </span>
            </button>
            
            <p className="text-text-secondary text-sm leading-relaxed font-normal mb-8 max-w-[32ch]">
              Премиальный детейлинг с глубоким вниманием к состоянию каждой поверхности вашего автомобиля.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/k0zik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary tracking-wider transition-colors uppercase border-b border-transparent hover:border-text-primary pb-0.5 font-normal"
              >
                Telegram
              </a>
              <span className="text-border-primary text-xs">•</span>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary tracking-wider transition-colors uppercase border-b border-transparent hover:border-text-primary pb-0.5 font-normal"
              >
                WhatsApp
              </a>
              <span className="text-border-primary text-xs">•</span>
              <a
                href="https://drive2.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary tracking-wider transition-colors uppercase border-b border-transparent hover:border-text-primary pb-0.5 font-normal"
              >
                Drive2
              </a>
            </div>
          </div>

          {/* Quick links & contact info */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Quick Links Menu */}
            <div>
              <div className="text-xs tracking-[0.2em] text-text-secondary uppercase font-semibold mb-6">
                разновидности
              </div>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors font-normal"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address / Contacts */}
            <div>
              <div className="text-xs tracking-[0.2em] text-text-secondary uppercase font-semibold mb-6">
                контакты
              </div>
              
              <ul className="space-y-4 text-sm font-normal text-text-secondary">
                <li>
                  <span className="block text-xs tracking-wider text-text-secondary/60 uppercase mb-1 font-mono font-medium">телефон</span>
                  <a href="tel:+79990000000" className="text-text-primary hover:text-accent-color transition-colors">
                    +7 999 000-00-00
                  </a>
                </li>
                <li>
                  <span className="block text-xs tracking-wider text-text-secondary/60 uppercase mb-1 font-mono font-medium">адрес студии</span>
                  <span className="text-text-primary leading-relaxed">
                    Москва, ул. Примерная, 12
                  </span>
                </li>
                <li>
                  <span className="block text-xs tracking-wider text-text-secondary/60 uppercase mb-1 font-mono font-medium">график работы</span>
                  <span className="text-text-primary">
                    Ежедневно 10:00–21:00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Map/Artwork Column */}
          <div className="lg:col-span-4">
            <div className="p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent h-56 relative overflow-hidden group shadow-lg">
              {/* Inner core displaying map artwork */}
              <div className="bg-bg-card border border-white/5 rounded-[4px] w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                
                {/* Visual map abstract design */}
                <div className="absolute inset-0 opacity-10 group-hover:scale-105 transition-transform duration-700 ease-out z-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0%,transparent_70%)]" />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.05)_46%,rgba(255,255,255,0.05)_47%,transparent_48%)] bg-[size:10px_10px]" />
                
                {/* Pointer indicator */}
                <div className="relative z-10 w-10 h-10 rounded-full border border-accent-color/30 bg-accent-color/10 flex items-center justify-center mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-color animate-pulse-slow" />
                </div>

                <div className="relative z-10">
                  <div className="text-xs text-text-primary mb-1">
                    Схема проезда
                  </div>
                  <div className="text-xs text-text-secondary font-normal font-mono mb-4">
                    Мы находимся в ЗАО, 10 мин от метро
                  </div>
                  <a
                    href="https://yandex.ru/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 bg-bg-primary border border-border-primary hover:border-text-primary px-4 py-2 rounded-[4px] text-[10px] uppercase tracking-wider text-text-primary transition-all duration-300"
                  >
                    <span>Открыть карту</span>
                    <ArrowUpRight size={10} strokeWidth={2.5} />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border-primary mb-8" />

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-text-secondary tracking-wider uppercase font-mono">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span>© {currentYear} Detali. Все права защищены.</span>
            <a
              href="https://t.me/k0zik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent-color/30 hover:border-accent-color px-4 py-2 bg-accent-color/5 hover:bg-accent-color hover:text-bg-primary text-accent-color transition-all duration-300 rounded-[2px]"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>Связаться в Telegram — @k0zik</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#/privacy" className="hover:text-text-primary transition-colors">Политика конфиденциальности</a>
            <span>•</span>
            <a href="#/consent" className="hover:text-text-primary transition-colors">Согласие на обработку данных</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
