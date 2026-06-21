import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Сколько времени занимает детейлинг?',
    answer: 'Сроки зависят от состояния автомобиля и выбранного объема работ. Лёгкий уход или базовая полировка занимают от 1 дня, химчистка салона — 1–2 дня. Полный комплекс восстановительных работ с нанесением защитной плёнки или керамического покрытия может занять от 2 до 4 дней.',
  },
  {
    id: 2,
    question: 'Можно ли убрать абсолютно все царапины?',
    answer: 'Мы убираем до 90-95% царапин. Исключение составляют дефекты, пробившие лак до базы (грунта/металла). В таких случаях абразивная полировка не поможет — требуется локальный подкрас или перекраска детали. Наша главная задача — безопасно восстановить блеск, не истончив заводской лак критически.',
  },
  {
    id: 3,
    question: 'Чем профессиональная керамика отличается от воска?',
    answer: 'Керамическое покрытие на основе диоксида кремния (SiO2) химически связывается с лаком автомобиля, образуя твердый защитный слой. В отличие от воска, который смывается за 3–4 мойки, керамика держится от 1 года до 3 лет, защищает от химических реагентов и имеет выраженный гидрофобный эффект.',
  },
  {
    id: 4,
    question: 'Обязательно ли приезжать на осмотр перед расчётом стоимости?',
    answer: 'Да, для точной оценки стоимости и составления программы осмотр необходим. Нам нужно измерить толщину лака толщиномером, оценить степень повреждений и износ кожи салона. Первичный осмотр и консультация проводятся бесплатно.',
  },
  {
    id: 5,
    question: 'Работаете ли вы с эксклюзивными и редкими суперкарами?',
    answer: 'Да. Мы обладаем опытом работы с редкими автомобилями, ретро-классикой и хрупкими покрытиями (матовый лак, углепластик, анилиновая кожа). Применяем деликатные низкооборотистые полировальные системы и специализированную химию премиум-уровня.',
  },
  {
    id: 6,
    question: 'Как ухаживать за автомобилем после нанесения керамики или плёнки?',
    answer: 'Для продления срока службы покрытий рекомендуется мыть автомобиль исключительно в две фазы на проверенных детейлинг-мойках (избегая агрессивной бесконтактной щелочной пены). После сдачи автомобиля мы выдадим вам подробную печатную памятку с рекомендациями.',
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border-primary">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left text-text-primary hover:text-accent-color transition-colors duration-300 cursor-pointer"
      >
        <span className="text-base md:text-lg font-normal tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-text-secondary"
        >
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal pb-6 max-w-[70ch]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <div className="text-[10px] tracking-[0.2em] text-accent-color uppercase font-medium mb-4">
            вопросы и ответы
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight">
            Часто задаваемые{' '}
            <span className="font-serif-luxury italic text-accent-color">
              вопросы
            </span>
          </h3>
        </div>

        {/* Accordions Stack */}
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
