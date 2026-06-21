import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden border-t border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-[12px] tracking-[0.2em] text-accent-color uppercase font-semibold mb-4">
            до и после
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary leading-none tracking-tight mb-6">
            Разница видна{' '}
            <span className="font-serif-luxury italic text-accent-color">
              в отражении
            </span>
          </h3>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Проведите слайдер, чтобы увидеть разницу в состоянии лакокрасочного покрытия до полировки и после нанесения керамической защиты.
          </p>
        </div>

        {/* Double-Bezel nested container for Slider */}
        <div className="p-1.5 rounded-[4px] bg-gradient-to-b from-border-primary to-transparent max-w-4xl mx-auto relative z-10 shadow-2xl">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[480px] w-full rounded-[4px] overflow-hidden cursor-ew-resize select-none bg-black border border-white/5"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX);
              }
            }}
            role="none"
          >
            {/* After Image (Glossy mirror finish) - Background layer (visible on the right) */}
            <div className="absolute inset-0">
              <img 
                src="/images/paint-after.png" 
                alt="Paint after restoration" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-6 right-6 z-10 rounded-[2px] px-3 py-1 bg-accent-color/90 border border-white/10 text-xs tracking-widest text-white uppercase font-normal font-mono">
                После (Зеркальный блеск)
              </div>
            </div>

            {/* Before Image (Swirl marks) - Clipped Foreground layer (visible on the left) */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            >
              <img 
                src="/images/paint-before.png" 
                alt="Paint before restoration" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-6 left-6 z-10 rounded-[2px] px-3 py-1 bg-black/75 border border-white/10 text-xs tracking-widest text-white uppercase font-normal font-mono">
                До (Царапины и паутинка)
              </div>
            </div>

            {/* Drag Line / Divider */}
            <div 
              className="absolute top-0 bottom-0 w-[1px] bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Knob */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-[4px] bg-white text-black shadow-2xl flex items-center justify-center border border-neutral-300"
                style={{ cursor: 'ew-resize' }}
              >
                <div className="flex space-x-1">
                  <div className="w-[1.5px] h-3 bg-neutral-600" />
                  <div className="w-[1.5px] h-3 bg-neutral-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Microtext hint below */}
        <div className="text-center text-xs md:text-sm text-text-secondary uppercase tracking-[0.2em] mt-6 font-normal">
          Зажмите и перетаскивайте кольцо в центре
        </div>

      </div>
    </section>
  );
}
