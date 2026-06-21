import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

interface PackageItem {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  benefit?: string;
  badge?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const packages: PackageItem[] = [
  {
    id: 1,
    name: 'Essential',
    price: 'от 12 000 ₽',
    oldPrice: '15 000 ₽',
    benefit: 'Выгода 3 000 ₽',
    badge: 'Базовый уход',
    features: [
      'Деликатная двухфазная мойка кузова',
      'Очистка кузова от битума и металлических вкраплений',
      'Лёгкая одношаговая полировка лака (устранение паутинки)',
      'Базовая консервирующая уборка салона пылесосом',
      'Нанесение гидрофобного кварцевого кварц-силана на 6 месяцев',
    ],
    cta: 'Выбрать Essential',
  },
  {
    id: 2,
    name: 'Gloss',
    price: 'от 35 000 ₽',
    oldPrice: '45 000 ₽',
    benefit: 'Выгода 10 000 ₽',
    badge: 'Выбор владельцев • Хит',
    features: [
      'Трёхфазная премиальная мойка и глубокая очистка',
      'Абразивная восстановительная полировка (удаление до 85% царапин)',
      'Нанесение 2-х слоев керамического покрытия (до 24 месяцев защиты)',
      'Полный детейлинг интерьера с разбором (химчистка и уход за кожей)',
      'Гидрофобное покрытие «антидождь» на все стекла автомобиля',
    ],
    cta: 'Выбрать Gloss',
    popular: true,
  },
  {
    id: 3,
    name: 'Armor',
    price: 'от 75 000 ₽',
    oldPrice: '90 000 ₽',
    benefit: 'Выгода 15 000 ₽',
    badge: 'Абсолютная броня',
    features: [
      'Полный комплекс подготовительных работ',
      'Антигравийная полиуретановая плёнка зон риска (капот, бампер, крылья)',
      'Нанесение керамики на открытые зоны кузова и диски',
      'Полировка и бронирование передней/задней оптики плёнкой',
      'Внутренняя обработка кожи защитными кремами-консервантами',
    ],
    cta: 'Выбрать Armor',
  },
  {
    id: 4,
    name: 'Bespoke',
    price: 'по запросу',
    badge: 'Индивидуальный шедевр',
    features: [
      'Полностью индивидуальная программа восстановления кузова',
      'Реставрация дефектов салона (потертости кожи, сколы пластика)',
      'Нанесение редких лимитированных защитных кварцевых составов',
      'Детейлинг подкапотного пространства с консервацией проводки',
      'Персональное сопровождение мастера на всех этапах работы',
    ],
    cta: 'Записаться на осмотр',
  },
];

export default function Prices() {
  const handleScrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prices" className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-color/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <div className="text-[12px] tracking-[0.2em] text-accent-color uppercase font-semibold mb-4">
            стоимость услуг
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Программы ухода под{' '}
            <span className="font-serif-luxury italic text-accent-color">
              состояние автомобиля
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Выберите готовый сбалансированный пакет услуг или запишитесь на бесплатную диагностику для составления персональной программы.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: pkg.id * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className={`p-0.5 rounded-[4px] flex flex-col ${
                pkg.popular
                  ? 'bg-gradient-to-b from-accent-color via-accent-color/40 to-transparent hover:shadow-[0_0_50px_rgba(212,175,55,0.25)] shadow-xl'
                  : 'bg-gradient-to-b from-border-primary to-transparent hover:shadow-lg'
              } transition-all duration-500 hover:scale-[1.01]`}
            >
              {/* Inner bezel core - solid background color for popular to prevent transparency merging with background gradients */}
              <div className={`border border-white/5 rounded-[4px] p-8 flex flex-col justify-between flex-1 relative overflow-hidden ${
                pkg.popular ? 'bg-[#151515]' : 'bg-bg-card/45'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent-color text-bg-primary text-[10px] tracking-[0.15em] font-bold uppercase px-4 py-1.5 rounded-bl-[4px] select-none shadow-sm">
                    {pkg.badge || 'ПОПУЛЯРНЫЙ'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm tracking-widest text-text-secondary uppercase font-medium">
                      {pkg.name}
                    </div>
                    {pkg.badge && !pkg.popular && (
                      <span className="text-[9px] tracking-wider text-accent-color border border-accent-color/30 rounded px-1.5 py-0.5 font-mono uppercase bg-accent-color/5">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Pricing and discounts */}
                  <div className="flex flex-col mb-8">
                    {pkg.oldPrice && (
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm line-through text-text-secondary/70 font-mono">
                          {pkg.oldPrice}
                        </span>
                        {pkg.benefit && (
                          <span className="text-[10px] text-accent-color font-semibold uppercase tracking-wider font-mono">
                            ({pkg.benefit})
                          </span>
                        )}
                      </div>
                    )}
                    <div className="text-3xl font-normal text-text-primary tracking-tight font-mono">
                      {pkg.price}
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-border-primary mb-8" />

                  {/* Feature checklist */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-text-primary/90 leading-relaxed font-normal">
                        <Check size={16} className="text-accent-color shrink-0 mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing CTA */}
                <a
                  href="#cta"
                  onClick={handleScrollToCTA}
                  className={`w-full justify-center inline-flex items-center space-x-2 py-3.5 rounded-[4px] text-xs font-semibold uppercase tracking-widest active:scale-95 transition-all duration-300 group ${
                    pkg.popular
                      ? 'bg-accent-color text-bg-primary hover:bg-accent-color/85'
                      : 'border border-border-primary hover:border-text-primary text-text-primary backdrop-blur-sm'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
