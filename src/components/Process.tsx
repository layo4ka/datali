import { useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  num: string;
  title: string;
  desc: string;
  details: string[];
}

const steps: Step[] = [
  {
    id: 'diagnose',
    num: '01',
    title: 'Диагностика',
    desc: 'Оцениваем состояние лака, салона, оптики и защитных покрытий.',
    details: ['Измерение толщины ЛКП толщиномером', 'Выявление скрытых царапин спецсветом', 'Составление карты дефектов'],
  },
  {
    id: 'prepare',
    num: '02',
    title: 'Подготовка',
    desc: 'Деликатно очищаем автомобиль и готовим поверхности к работе.',
    details: ['Двухфазная безопасная мойка кузова', 'Очистка синтетической глиной от битума', 'Маскировка резиновых и пластиковых элементов'],
  },
  {
    id: 'correct',
    num: '03',
    title: 'Коррекция',
    desc: 'Полируем, восстанавливаем, очищаем и устраняем дефекты.',
    details: ['Абразивная резка глубоких царапин', 'Финишная антиголограммная полировка', 'Химчистка и реставрация кожи салона'],
  },
  {
    id: 'protect',
    num: '04',
    title: 'Защита',
    desc: 'Наносим керамику, плёнку или защитные составы под задачу.',
    details: ['Обезжиривание поверхностей изопропилом', 'Нанесение керамических составов / PPF', 'Запекание покрытий ИК-лампами'],
  },
  {
    id: 'qc',
    num: '05',
    title: 'Контроль качества',
    desc: 'Проверяем каждую зону под разным светом и передаём владельцу.',
    details: ['Осмотр под монохроматическим светом', 'Финальная уборка салона пылесосом', 'Передача авто и рекомендации по уходу'],
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="py-24 md:py-36 bg-bg-primary relative overflow-hidden">
      {/* Decorative vertical/horizontal grids to look like a blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-24 text-left">
          <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
            рабочий процесс
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Процесс, в котором нет{' '}
            <span className="font-serif-luxury italic text-accent-color">
              случайных движений
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Каждый автомобиль проходит строго регламентированный технологический цикл, гарантирующий безупречный и безопасный результат.
          </p>
        </div>

        {/* Desktop Process view: interactive horizontal timeline slider */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6 relative">
            {/* Timeline connector line */}
            <div className="absolute top-12 left-0 right-0 h-[1px] bg-border-primary z-0" />
            <motion.div 
              className="absolute top-12 left-0 h-[1px] bg-accent-color z-0"
              animate={{ width: `${(activeIndex / 4) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative z-10 flex flex-col items-start cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Node circle */}
                <div className="mb-8">
                  <motion.div
                    className={`w-24 h-24 rounded-[4px] flex items-center justify-center border font-mono transition-all duration-300 ${
                      index <= activeIndex
                        ? 'border-accent-color bg-bg-primary text-accent-color font-medium'
                        : 'border-border-primary bg-bg-secondary text-text-secondary'
                    }`}
                    animate={index === activeIndex ? { scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.2)' } : { scale: 1 }}
                  >
                    <span className="text-xl">{step.num}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <h4 className={`text-lg mb-2 font-normal transition-colors duration-300 ${index === activeIndex ? 'text-accent-color' : 'text-text-primary'}`}>
                  {step.title}
                </h4>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal mb-4 min-h-[48px]">
                  {step.desc}
                </p>

                {/* Detailed steps list */}
                <ul className="space-y-1.5 border-l border-border-primary pl-4">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs md:text-sm text-text-secondary font-normal">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Process view: simple vertical timeline list */}
        <div className="lg:hidden flex flex-col space-y-12 relative">
          {/* Vertical line helper */}
          <div className="absolute top-4 bottom-4 left-6 w-[1px] bg-border-primary z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-6 relative z-10"
            >
              {/* Vertical bubble */}
              <div className="w-12 h-12 rounded-[4px] flex items-center justify-center border border-border-primary bg-bg-secondary text-text-primary text-sm font-mono shrink-0">
                {step.num}
              </div>

              {/* Body */}
              <div className="flex-1 pb-4 border-b border-border-primary last:border-0 last:pb-0">
                <h4 className="text-lg font-normal text-text-primary mb-2">
                  {step.title}
                </h4>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal mb-4">
                  {step.desc}
                </p>

                <ul className="space-y-1 pl-1">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs md:text-sm text-text-secondary font-normal">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
