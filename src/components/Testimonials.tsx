import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  car: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Алексей',
    car: 'Porsche Cayenne S',
    quote: 'После полировки и покрытия керамикой автомобиль стал выглядеть глубже и ярче, чем в день покупки. Отражения под вечерним светом города просто завораживают.',
  },
  {
    id: 2,
    name: 'Мария',
    car: 'Mercedes-Benz GLC Coupe',
    quote: 'Понравился честный и экспертный подход мастеров: сначала провели диагностику ЛКП, объяснили, какие царапины уйдут полностью, а какие лучше не трогать ради сохранения толщины лака. Рекомендую.',
  },
  {
    id: 3,
    name: 'Дмитрий',
    car: 'BMW 5 Series',
    quote: 'Делал полный детейлинг салона. Кожа сидений вернула свою матовую фактуру и мягкость, пропали все посторонние запахи. Ощущение нового авто без лишнего блеска и дешевых ароматизаторов.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden border-t border-b border-border-primary">
      {/* Soft color spotlight behind cards */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent-color/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
            отзывы клиентов
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Разница видна в{' '}
            <span className="font-serif-luxury italic text-accent-color">
              каждом отзыве
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Мы гордимся тем, что наши клиенты доверяют нам свои автомобили и ценят наше бескомпромиссное отношение к деталям.
          </p>
        </div>

        {/* Grid layout for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent"
            >
              {/* Double bezel nested container */}
              <div className="bg-bg-card/40 border border-white/5 rounded-[4px] p-8 flex flex-col justify-between min-h-[320px] h-auto py-10">
                
                {/* Quote text */}
                <p className="font-serif-luxury italic text-neutral-300 text-base md:text-lg leading-relaxed font-normal mb-6">
                  «{t.quote}»
                </p>

                {/* Client info */}
                <div>
                  <div className="w-8 h-[1px] bg-accent-color mb-3" />
                  <div className="text-sm font-normal text-text-primary mb-1">
                    {t.name}
                  </div>
                  <div className="text-[10px] tracking-wide text-text-secondary uppercase font-mono">
                    {t.car}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
