export default function LeadForm() {
  return (
    <section
      id="lead"
      className="bg-white py-20 md:py-24 lg:py-32"
      aria-labelledby="lead-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Главный контейнер карточки */}
        <div className="relative w-full rounded-[32px] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          
          {/* Фоновая картинка (адаптив) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cta-bg.png" 
              alt="Премиальный интерьер" 
              className="hidden md:block w-full h-full object-cover object-bottom" 
            />
            <img 
              src="/images/cta-bg-mobile.png" 
              alt="Премиальный интерьер" 
              className="block md:hidden w-full h-full object-cover object-bottom" 
            />
          </div>

          {/* 
            PROGRESSIVE BLUR (Плавное размытие)
            backdrop-blur задает силу размытия, а mask-image скрывает это размытие к низу
          */}
          <div 
            className="absolute inset-0 z-0 backdrop-blur-[16px] pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 30%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 30%)'
            }}
          />

          {/* Градиент-маска (Fade-to-White) для осветления */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none" />

          {/* Контент (Поверх картинки, размытия и маски) */}
          <div className="relative z-10 flex flex-col items-center justify-start text-center pt-16 pb-[250px] px-6 sm:px-10 md:pt-24 md:pb-[350px]">
            
            <h2
              id="lead-heading"
              className="font-montserrat text-3xl sm:text-4xl md:text-[44px] font-light leading-[1.2] text-main uppercase tracking-tight max-w-3xl"
            >
              Забронируйте бригаду <br className="hidden sm:block" />
              <span className="font-semibold text-brand">по текущей цене</span>
            </h2>
            
            <p className="mt-5 text-base md:text-lg text-main/90 leading-relaxed max-w-2xl font-medium">
              Цены на строительные материалы растут каждый сезон. <br className="hidden sm:block" />
              Оставьте заявку сейчас, и мы зафиксируем для вас стоимость ремонта на 6 месяцев!
            </p>
            
            <a
              href="#lead-modal"
              className="mt-10 group inline-flex items-center justify-center gap-3 rounded-xl bg-brand px-10 py-5 text-white shadow-[0_12px_32px_rgba(133,194,64,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(133,194,64,0.45)]"
            >
              <span className="font-montserrat text-[14px] font-bold tracking-widest uppercase">
                Рассчитать проект
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}