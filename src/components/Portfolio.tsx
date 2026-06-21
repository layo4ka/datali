import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  carName: string;
  type: string;
  category: 'polish' | 'ceramic' | 'film' | 'interior';
  result: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    carName: 'Porsche 911 Carrera',
    type: 'Восстановительная полировка + Керамика',
    category: 'ceramic',
    result: 'Восстановлен глубокий зеркальный лак кузова, защищен на 2 года.',
    image: '/cartinki/porshe.png',
  },
  {
    id: 2,
    carName: 'BMW M5 Competition',
    type: 'Антигравийная плёнка зон риска',
    category: 'film',
    result: 'Полная защита передней части кузова высококлассным полиуретаном.',
    image: '/cartinki/bmwm5.png',
  },
  {
    id: 3,
    carName: 'Mercedes-Benz S-Class',
    type: 'Детейлинг интерьера + Защита кожи',
    category: 'interior',
    result: 'Глубокая химчистка салона и обработка кожи кварцевым составом.',
    image: '/cartinki/mercedessclass.png',
  },
  {
    id: 4,
    carName: 'Audi RS6 Avant',
    type: 'Абразивная полировка + Комплекс Gloss',
    category: 'polish',
    result: 'Кузов избавлен от царапин, покрыт двумя слоями кварца.',
    image: '/cartinki/ausirs6.png',
  },
  {
    id: 5,
    carName: 'Range Rover Autobiography',
    type: 'Реставрация кожи сидений',
    category: 'interior',
    result: 'Устранены затертости водительского сидения, восстановлен цвет.',
    image: '/cartinki/rangerover.png',
  },
  {
    id: 6,
    carName: 'Tesla Model S Plaid',
    type: 'Керамика кузова и оптики',
    category: 'ceramic',
    result: 'Гидрофобный эффект стекол и глубокий блеск краски кузова.',
    image: '/cartinki/tesla.png',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { label: 'Все работы', value: 'all' },
    { label: 'Полировка', value: 'polish' },
    { label: 'Керамика', value: 'ceramic' },
    { label: 'Плёнка', value: 'film' },
    { label: 'Интерьер', value: 'interior' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-xl text-left mb-8 md:mb-0">
            <div className="text-xs tracking-[0.2em] text-accent-color uppercase font-semibold mb-4">
              наше портфолио
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight">
              Автомобили, которые снова{' '}
              <span className="font-serif-luxury italic text-accent-color">
                выглядят как событие
              </span>
            </h3>
          </div>

          {/* Filters list */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-[4px] text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-text-primary text-bg-primary font-semibold'
                    : 'border border-border-primary text-text-secondary hover:text-text-primary hover:border-text-secondary bg-bg-card/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                key={project.id}
                className="group relative rounded-[4px] overflow-hidden bg-bg-card border border-border-primary aspect-[4/3] cursor-pointer"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.carName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                  <div className="text-xs tracking-widest text-accent-color uppercase mb-2 font-mono">
                    {project.type}
                  </div>
                  
                  <h4 className="text-xl font-normal text-white mb-2 tracking-tight">
                    {project.carName}
                  </h4>
                  
                  {/* Subtle reveal details */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                    <p className="text-neutral-300 text-sm leading-relaxed font-normal mt-2">
                      {project.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
