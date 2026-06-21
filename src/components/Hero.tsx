import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  isAppLoading: boolean;
}

export default function Hero({ isAppLoading }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let reverseIntervalId: number | undefined;
    const video = videoRef.current;

    if (!isAppLoading && video) {
      video.currentTime = 0;
      
      const playTimeout = setTimeout(() => {
        video.play().catch((err) => {
          console.warn('Video play interrupted or blocked by browser policies:', err);
        });
      }, 500);

      const handleEnded = () => {
        const fps = 60;
        const intervalMs = 1000 / fps;
        const step = 1 / fps;

        reverseIntervalId = window.setInterval(() => {
          if (video.currentTime <= 0.05) {
            video.currentTime = 0;
            video.pause();
            if (reverseIntervalId) {
              clearInterval(reverseIntervalId);
              reverseIntervalId = undefined;
            }
          } else {
            video.currentTime = Math.max(0, video.currentTime - step);
          }
        }, intervalMs);
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        clearTimeout(playTimeout);
        if (video) {
          video.removeEventListener('ended', handleEnded);
        }
        if (reverseIntervalId) {
          clearInterval(reverseIntervalId);
        }
      };
    }
  }, [isAppLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '7+ лет', label: 'Опыт мастеров' },
    { value: '1200+', label: 'Детейлинг-проектов' },
    { value: 'Честная', label: 'Гарантия на все работы' },
    { value: 'Люкс', label: 'Мировые бренды и составы' },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Car Image with parallax look and clean masking gradient */}
      <div className="absolute inset-0 z-0">
        {/* Masking gradients - strong on the left for text contrast, completely transparent on the right for clean video */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/50 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent z-10 md:hidden" />
        
        {/* Fallback image behind the video */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right opacity-30 z-0"
          style={{ backgroundImage: "url('/images/hero-car.png')" }}
        />
        
        {/* Cinematic Video Background (Plays forward, then reverse, and stops at start frame, 100% sharp opacity) */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right pointer-events-none z-0"
          src="/hero-porsche.mp4"
          muted
          preload="auto"
          playsInline
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        {/* Left Aligned Copywriting (Editorial style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 rounded-[4px] px-4 py-1.5 border border-border-primary bg-bg-card/40 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium text-accent-color"
          >
            Детейлинг как искусство
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-text-primary leading-[1.05] mb-6"
          >
            Детейлинг, в котором автомобиль становится{' '}
            <span className="font-serif-luxury italic font-light text-accent-color">
              объектом искусства
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[55ch] mb-8 font-normal"
          >
            Возвращаем автомобилю состояние нового — с точностью до каждой детали: от глубины лака до фактуры кожи в салоне.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#cta"
              onClick={handleScrollToCTA}
              className="inline-flex items-center space-x-2 border border-accent-color text-accent-color hover:bg-accent-color hover:text-bg-primary px-8 py-3.5 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 group shadow-lg"
            >
              <span>Оставить заявку</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-[2px] bg-accent-color/10 group-hover:bg-bg-primary/20 transition-colors">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>

            <a
              href="#services"
              onClick={handleScrollToServices}
              className="inline-flex items-center space-x-2 border border-border-primary hover:border-text-primary px-8 py-3.5 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 text-text-primary backdrop-blur-sm bg-bg-card/25"
            >
              <span>Наши услуги</span>
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Microtext list */}
          <motion.div
            variants={itemVariants}
            className="text-[11px] tracking-[0.25em] text-text-secondary uppercase flex flex-wrap items-center gap-y-2"
          >
            <span>Полировка</span>
            <span className="mx-3 text-border-primary">•</span>
            <span>Керамика</span>
            <span className="mx-3 text-border-primary">•</span>
            <span>Плёнка</span>
            <span className="mx-3 text-border-primary">•</span>
            <span>Интерьер</span>
          </motion.div>
        </motion.div>

        {/* Right Aligned floating stats with Double-Bezel nested architecture */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="grid grid-cols-2 gap-6 w-full max-w-md md:max-w-lg"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent backdrop-blur-md transition-all duration-500 hover:scale-[1.03]"
              >
                {/* Inner Double-Bezel core container */}
                <div className="bg-bg-card/40 border border-white/5 rounded-[4px] p-8 flex flex-col justify-between h-40 relative overflow-hidden">
                  {/* Subtle inner reflection glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Laser line bottom-accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-color transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  
                  <div className="text-3xl md:text-4xl font-bold text-accent-color tracking-tight font-mono">
                    {stat.value}
                  </div>
                  
                  <div className="text-[11px] tracking-[0.12em] text-text-primary uppercase font-normal leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
