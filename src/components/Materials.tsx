import { motion } from 'framer-motion';

interface TechItem {
  title: string;
  category: string;
  desc: string;
}

const technologies: TechItem[] = [
  {
    title: 'Кварцевые покрытия',
    category: 'Химия',
    desc: 'Многослойные диоксид-кремниевые (SiO2) составы для придания зеркального блеска и гидрофобности кузова.',
  },
  {
    title: 'Полиуретановая плёнка',
    category: 'Броня',
    desc: 'Защитные плёнки толщиной 190-200 микрон с функцией самовосстановления поверхностных царапин под действием тепла.',
  },
  {
    title: 'Инфракрасная сушка',
    category: 'Оборудование',
    desc: 'ИК-лампы коротковолнового диапазона для глубокой полимеризации и запекания нанесенных керамических составов.',
  },
  {
    title: 'Светодиодный свет 5500K',
    category: 'Контроль',
    desc: 'Спектральные источники света, имитирующие прямое солнечное излучение для обнаружения тончайших микродефектов.',
  },
  {
    title: 'pH-нейтральные формулы',
    category: 'Очистка',
    desc: 'Сбалансированные шампуни и консерванты, деликатно устраняющие загрязнения без пересушивания кожи и вымывания полимеров.',
  },
  {
    title: 'Ультразвуковые толщиномеры',
    category: 'Аналитика',
    desc: 'Приборы для бесконтактного измерения толщины лака на металлических и углепластиковых деталях перед началом работы.',
  },
];

export default function Materials() {
  return (
    <section id="materials" className="py-24 md:py-36 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layout split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit">
            <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
              технологии и материалы
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-tight tracking-tight mb-6">
              Материалы, которые работают на{' '}
              <span className="font-serif-luxury italic text-accent-color">
                глубину и защиту
              </span>
            </h3>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-normal">
              Мы используем передовой инструментарий детейлинг-индустрии, чтобы результат работы сохранялся на годы, а не недели.
            </p>
          </div>

          {/* Right Column: Grid of technologies */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="p-8 rounded-[4px] bg-bg-card/30 border border-border-primary flex flex-col justify-between min-h-[14rem] h-auto"
              >
                <div className="text-[9px] tracking-[0.15em] text-accent-color uppercase font-mono font-medium mb-4">
                  {tech.category}
                </div>
                
                <div>
                  <h4 className="text-lg font-normal text-text-primary mb-2 tracking-tight">
                    {tech.title}
                  </h4>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
