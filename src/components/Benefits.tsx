import { motion } from 'framer-motion';
import { Lightbulb, ShieldAlert, Award, Sliders, CheckCircle2, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Правильный детейлинг-свет',
    desc: 'Наше помещение оборудовано профессиональными лампами разной цветовой температуры, позволяющими увидеть мельчайшие риски.',
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: 'Настоящая коррекция ЛКП',
    desc: 'Мы не забиваем царапины силиконовыми полиролями, которые смоются через две мойки. Мы полностью убираем их с поверхности лака.',
    icon: <ShieldAlert size={24} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: 'Премиальная автохимия',
    desc: 'Используем химию премиум-сегмента: pH-нейтральные шампуни, защитные составы для кожи на натуральных восках и маслах.',
    icon: <Award size={24} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: 'Индивидуальный подбор программ',
    desc: 'Не предлагаем шаблонные решения. Подбираем мягкие или твердые круги и пасты в зависимости от жесткости лака вашего авто.',
    icon: <Sliders size={24} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: 'Фиксация этапов работы',
    desc: 'По желанию клиента предоставляем фото- и видеоотчет процесса: от диагностики ЛКП до нанесения финишного состава.',
    icon: <Eye size={24} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: 'Честные рекомендации',
    desc: 'Никогда не навязываем лишнего. Если кузов не требует глубокой полировки, мы честно скажем об этом и предложим очищающий уход.',
    icon: <HeartHandshake size={24} strokeWidth={1.5} />,
  },
  {
    id: 7,
    title: 'Деликатность к деталям',
    desc: 'Бережно работаем со швами, решетками радиатора, хромом и уплотнителями. Все стыки тщательно маскируются перед работой.',
    icon: <Sparkles size={24} strokeWidth={1.5} />,
  },
  {
    id: 8,
    title: 'Инструкции по уходу',
    desc: 'После окончания работ выдаем подробную памятку о правильном уходе за защитными покрытиями для продления их службы.',
    icon: <CheckCircle2 size={24} strokeWidth={1.5} />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden border-t border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-24 text-left">
          <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
            наши преимущества
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Почему владельцы{' '}
            <span className="font-serif-luxury italic text-accent-color">
              доверяют нам
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            В основе нашей работы лежат прозрачность процесса, премиальные расходные материалы и любовь к сложным эстетическим задачам.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-0.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent hover:scale-[1.01] transition-all duration-300"
            >
              {/* Double-Bezel Card */}
              <div className="bg-bg-card/45 border border-white/5 rounded-[4px] p-8 flex flex-col justify-between min-h-[310px] h-auto py-8">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-[4px] border border-border-primary bg-bg-primary flex items-center justify-center text-accent-color mb-6">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-end">
                  <h4 className="text-lg font-normal text-text-primary mb-2 tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal">
                    {benefit.desc}
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
