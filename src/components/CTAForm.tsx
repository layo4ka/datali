import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: '',
    comment: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const services = [
    'Полировка кузова',
    'Керамическое покрытие',
    'Антигравийная плёнка',
    'Детейлинг интерьера',
    'Химчистка салона',
    'Реставрация кожи',
    'Полировка и защита оптики',
    'Комплексный детейлинг',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.car) {
      setErrorMsg('Пожалуйста, заполните Имя, Телефон и Марку автомобиля.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        // Confetti burst for luxury feedback
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FAF6F0', '#1A1A1A'],
        });
      }, 1500);
  };

  return (
    <section id="cta" className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden">
      {/* Background soft lighting blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-color/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column Text */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="text-[12px] tracking-[0.2em] text-accent-color uppercase font-semibold mb-4">
            запись в студию
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-tight tracking-tight mb-6">
            Пусть автомобиль снова выглядит{' '}
            <span className="font-serif-luxury italic text-accent-color">
              так, как должен
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal mb-8 max-w-[45ch]">
            Оставьте заявку — мы проведём первичную консультацию, оценим объем необходимых работ и предложим сбалансированную программу ухода под состояние вашего автомобиля.
          </p>

          <div className="text-sm text-text-secondary font-normal font-mono flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
            <span>Ответим в течение рабочего дня. Без навязчивых продаж.</span>
          </div>
        </div>

        {/* Right Column Form Box wrapped in double bezel */}
        <div className="lg:col-span-7">
          <div className="p-1.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent shadow-2xl">
            <div className="bg-bg-card border border-white/5 rounded-[4px] p-8 md:p-12 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Error Notice */}
                    {status === 'error' && (
                      <div className="text-xs text-red-500 font-normal border border-red-500/20 bg-red-500/5 px-4 py-2.5 rounded-lg">
                        {errorMsg}
                      </div>
                    )}

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label htmlFor="cta-name" className="text-xs tracking-wider text-text-secondary uppercase mb-2 font-semibold">
                          Ваше имя *
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Алексей"
                          className="bg-bg-primary/55 border border-border-primary rounded-[4px] px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-color transition-colors placeholder:text-text-secondary/40 font-normal"
                          disabled={status === 'loading'}
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col">
                        <label htmlFor="cta-phone" className="text-xs tracking-wider text-text-secondary uppercase mb-2 font-semibold">
                          Телефон *
                        </label>
                        <input
                          id="cta-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (999) 000-00-00"
                          className="bg-bg-primary/55 border border-border-primary rounded-[4px] px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-color transition-colors placeholder:text-text-secondary/40 font-normal"
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Car input */}
                      <div className="flex flex-col">
                        <label htmlFor="cta-car" className="text-xs tracking-wider text-text-secondary uppercase mb-2 font-semibold">
                          Марка и модель авто *
                        </label>
                        <input
                          id="cta-car"
                          type="text"
                          name="car"
                          value={formData.car}
                          onChange={handleChange}
                          placeholder="Porsche 911"
                          className="bg-bg-primary/55 border border-border-primary rounded-[4px] px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-color transition-colors placeholder:text-text-secondary/40 font-normal"
                          disabled={status === 'loading'}
                        />
                      </div>

                      {/* Service input */}
                      <div className="flex flex-col">
                        <label htmlFor="cta-service" className="text-xs tracking-wider text-text-secondary uppercase mb-2 font-semibold">
                          Интересующая услуга
                        </label>
                        <select
                          id="cta-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="bg-bg-primary/55 border border-border-primary rounded-[4px] px-4 py-3.5 text-sm text-text-primary focus:outline-none focus:border-accent-color transition-colors font-normal appearance-none"
                          disabled={status === 'loading'}
                        >
                          <option value="">Выберите из списка</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col">
                      <label htmlFor="cta-comment" className="text-xs tracking-wider text-text-secondary uppercase mb-2 font-semibold">
                        Комментарий к заявке
                      </label>
                      <textarea
                        id="cta-comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Опишите состояние авто и ваши пожелания..."
                        rows={3}
                        className="bg-bg-primary/55 border border-border-primary rounded-[4px] px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-color transition-colors placeholder:text-text-secondary/40 font-normal resize-none"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full justify-center inline-flex items-center space-x-2 border border-accent-color text-accent-color hover:bg-accent-color hover:text-bg-primary bg-transparent py-4 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-[0.98] disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Отправка...</span>
                      ) : (
                        <>
                          <span>Отправить заявку</span>
                          <ArrowRight size={14} strokeWidth={2.5} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 size={56} className="text-green-500 mb-6" />
                    <h4 className="text-2xl font-light text-text-primary mb-3">
                      Заявка успешно принята
                    </h4>
                    <p className="text-text-secondary text-base font-normal max-w-[36ch] leading-relaxed">
                      Спасибо за обращение! Наш мастер свяжется с вами по телефону в ближайшее время для обсуждения деталей.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
