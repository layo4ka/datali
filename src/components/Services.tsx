import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  duration: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Полировка кузова',
    desc: 'Убираем паутинку, голограммы и глубокие следы эксплуатации, возвращая лаку глубину и чистое зеркальное отражение.',
    duration: 'от 1 дня',
    image: '/cartinki/polirovka.jpg',
  },
  {
    id: 2,
    title: 'Керамическое покрытие',
    desc: 'Формируем прочный кварцевый слой с мощным гидрофобным эффектом, ослепительным блеском и стойкостью к реагентам.',
    duration: 'от 2 дней',
    image: '/cartinki/ceramika.jpg',
  },
  {
    id: 3,
    title: 'Антигравийная плёнка',
    desc: 'Защищаем уязвимые зоны кузова высококлассным полиуретаном от сколов, царапин, дорожного мусора и химии.',
    duration: 'от 3 дней',
    image: '/cartinki/antigraviy.jpg',
  },
  {
    id: 4,
    title: 'Детейлинг интерьера',
    desc: 'Глубокая очистка салона, деликатное восстановление текстур, защитный уход за кожей, деревом и алькантарой.',
    duration: 'от 1 дня',
    image: '/cartinki/interier.jpg',
  },
  {
    id: 5,
    title: 'Химчистка салона',
    desc: 'Бережно удаляем любые загрязнения, аллергены и посторонние запахи, возвращая материалам заводскую свежесть.',
    duration: 'от 12 часов',
    image: '/cartinki/himcgistka.webp',
  },
  {
    id: 6,
    title: 'Реставрация кожи',
    desc: 'Восстанавливаем цвет, устраняем потертости, мелкие трещины и порезы кожаных элементов сидений и руля.',
    duration: 'от 1 дня',
    image: '/cartinki/kozha.jpg',
  },
  {
    id: 7,
    title: 'Защита и полировка оптики',
    desc: 'Возвращаем фарам идеальную светопропускаемость, устраняем помутнения и бронируем оптику защитной пленкой.',
    duration: 'от 3 часов',
    image: '/cartinki/polirovka-far.jpg',
  },
  {
    id: 8,
    title: 'Комплексный детейлинг',
    desc: 'Премиальная программа всестороннего ухода за кузовом, подкапотным пространством и салоном для максимального блеска.',
    duration: 'от 3 дней',
    image: '/cartinki/polniydetailing.jpg',
  },
];

function TiltCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse coordinate ratios to degrees of rotation
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse positions (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="p-1 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent backdrop-blur-[10px] transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
    >
      {/* Inner card with double bezel decoration */}
      <div 
        style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
        className="bg-bg-card/40 border border-white/5 rounded-[4px] overflow-hidden min-h-[460px] h-auto flex flex-col justify-between group relative pb-6"
      >
        {/* Background Image Container with hover zoom */}
        <div className="h-44 w-full overflow-hidden relative border-b border-border-primary">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent z-10" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Subtle light streak overlay on image */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="w-[30%] h-full bg-white/10 absolute -skew-x-[30deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
          </div>

          {/* Floating Duration Tag */}
          <div className="absolute top-4 left-4 z-20 rounded-[2px] px-3 py-1 bg-bg-primary/80 backdrop-blur-sm border border-border-primary text-[10px] tracking-wide text-text-primary uppercase font-light font-mono">
            {service.duration}
          </div>
        </div>

        {/* Text Area */}
        <div className="p-6 flex-1 flex flex-col justify-between items-start" style={{ transform: 'translateZ(20px)' }}>
          <div>
            <h4 className="text-xl font-normal text-text-primary mb-3 tracking-tight group-hover:text-accent-color transition-colors">
              {service.title}
            </h4>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal line-clamp-4">
              {service.desc}
            </p>
          </div>

          <a
            href="#cta"
            onClick={handleScrollToCTA}
            className="mt-4 inline-flex items-center space-x-1.5 text-[11px] font-semibold text-text-primary uppercase tracking-widest group-hover:text-accent-color transition-colors border-b border-transparent group-hover:border-accent-color pb-0.5"
          >
            <span>Оставить заявку</span>
            <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-bg-primary relative overflow-hidden">
      {/* Decorative glows in background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-24 text-left">
          <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
            наши услуги
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Услуги, доведённые до{' '}
            <span className="font-serif-luxury italic text-accent-color">
              совершенства
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Каждое направление работы — это выверенная технологическая карта, проверенные составы и деликатный ручной труд.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <TiltCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
