import { motion } from 'framer-motion';

export default function Philosophy() {
  const principles = [
    {
      num: '01',
      title: 'Точная диагностика поверхности',
      desc: 'Используем толщиномеры и спектральный детейлинг-свет для выявления микродефектов лака перед началом любых работ.',
      delay: 0.1,
      colSpan: 'lg:col-span-1',
      padding: 'p-8',
      showOverlay: false,
      maxW: '',
    },
    {
      num: '02',
      title: 'Материалы премиального уровня',
      desc: 'Применяем исключительно сертифицированные составы от ведущих мировых лабораторий Японии, Германии и США.',
      delay: 0.2,
      colSpan: 'lg:col-span-1',
      padding: 'p-8',
      showOverlay: false,
      maxW: '',
    },
    {
      num: '03',
      title: 'Ручная работа и контроль',
      desc: 'Каждая деталь обрабатывается мастером вручную. Финальный контроль качества проводится по чек-листу из 45 пунктов.',
      delay: 0.3,
      colSpan: 'lg:col-span-2',
      padding: 'p-10',
      showOverlay: true,
      maxW: 'max-w-[65ch]',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden border-t border-b border-border-primary">
      {/* Background soft glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-color/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-[12px] tracking-[0.25em] text-accent-color uppercase font-semibold mb-4 font-mono">
            // О НАС
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-wider font-serif-luxury">
            ЧТО МЫ <span className="text-accent-color">ДЕЛАЕМ</span>
          </h3>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Manifesto (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 group p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent backdrop-blur-md transition-all duration-500 hover:scale-[1.01]"
          >
            <div className="bg-bg-card border border-white/5 rounded-[4px] p-10 flex flex-col justify-center min-h-[360px] h-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-color/30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div>
                <h4 className="text-2xl md:text-4xl font-normal text-text-primary tracking-tight font-serif-luxury leading-snug">
                  Мы не просто чистим автомобили —{' '}
                  <span className="italic text-accent-color font-medium">
                    мы восстанавливаем и защищаем их первозданный блеск на молекулярном уровне.
                  </span>
                </h4>
                <p className="text-text-primary text-base md:text-lg font-normal max-w-[65ch] mt-6 leading-relaxed">
                  Студия «Детали» рассматривает лакокрасочное покрытие, кожу и элементы интерьера как деликатные поверхности, требующие бережного и высокопрофессионального ухода на самом высоком уровне.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Principle Cards rendered via map */}
          {principles.map((principle) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: principle.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`${principle.colSpan} group p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent backdrop-blur-md transition-all duration-500 hover:scale-[1.01]`}
            >
              <div className={`bg-bg-card border border-white/5 rounded-[4px] ${principle.padding} flex flex-col justify-center min-h-[360px] h-auto relative overflow-hidden py-10`}>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-color/30" />
                {principle.showOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                )}
                
                {/* Large glowing background number */}
                <div className="absolute -bottom-8 -right-4 text-[120px] font-bold font-mono text-accent-color/[0.02] select-none group-hover:text-accent-color/[0.04] transition-colors duration-500">
                  {principle.num}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-accent-color tracking-wider uppercase">
                    {principle.title}
                  </h4>
                  <p className={`text-text-primary text-base md:text-lg leading-relaxed font-normal mt-4 ${principle.maxW}`}>
                    {principle.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
