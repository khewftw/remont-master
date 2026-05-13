"use client";

import Image from "next/image";
import { 
  EnvelopeOpen, 
  NotePencil, 
  Certificate, 
  FileText 
} from "@phosphor-icons/react/dist/ssr";

export default function Gallery() {
  return (
    <section className="relative w-full bg-[#F9FAFB] py-24 md:py-32 overflow-hidden">
      {/* Легкие вертикальные линии на фоне (паттерн) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '150px 100%' 
        }} 
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-main uppercase tracking-tight">
            Нас выбирают <span className="text-brand font-medium">за:</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Строго соблюдаем технологии, сроки и бюджет. Без сюрпризов и скрытых платежей в процессе ремонта.
          </p>
        </div>

        {/* 
          Контейнер карточек с ОБЩЕЙ усиленной тенью. 
          filter drop-shadow идеально обводит все clip-path вырезы и наложения
        */}
        <div className="relative flex flex-col lg:flex-row w-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] lg:drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          {/* Волнистая пунктирная линия (Скрыта на мобилках) */}
          <div className="absolute top-[68px] left-0 w-full h-[100px] pointer-events-none z-10 hidden lg:block">
            <svg viewBox="0 0 1100 100" className="w-full h-full" preserveAspectRatio="none">
              <path 
                d="M 60 50 Q 200 -10 340 50 T 620 50 T 900 50" 
                stroke="#85C240" 
                strokeWidth="1.5" 
                strokeDasharray="6 6" 
                fill="none" 
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Летающий молоток */}
          <div className="hidden lg:block absolute -top-24 -right-16 xl:-right-24 z-30 pointer-events-none drop-shadow-2xl hover:scale-105 transition-transform duration-500">
            <Image 
              src="/images/hammer.png" 
              alt="Молоток" 
              width={340} 
              height={340} 
              className="object-contain -rotate-12"
            />
          </div>

          {/* Карточка 01 (Темная) */}
          <div className="flex-1 bg-[#F4F5F6] p-8 lg:pt-10 lg:pl-10 lg:pr-12 relative z-20
               lg:[clip-path:polygon(0%_0%,calc(100%-24px)_0%,100%_50%,calc(100%-24px)_100%,0%_100%)]
               rounded-t-2xl lg:rounded-none lg:rounded-l-[20px] border-b lg:border-b-0 border-gray-200/50 lg:border-none">
            <span className="text-brand font-bold text-[13px] font-montserrat tracking-widest block mb-4">01</span>
            <div className="w-14 h-14 rounded-xl bg-white text-brand flex items-center justify-center relative z-20 shadow-sm">
              <EnvelopeOpen size={26} weight="fill" />
            </div>
            <h3 className="mt-8 font-montserrat font-bold text-main text-[16px] leading-snug">
              Точная смета <br className="hidden lg:block"/> за 24 часа
            </h3>
            <p className="mt-4 text-[13px] text-muted leading-relaxed">
              Выезд инженера бесплатно. Подробный расчет стоимости работ и черновых материалов до копейки. Подстроимся под ваш бюджет.
            </p>
          </div>

          {/* Карточка 02 (Светлая) */}
          <div className="flex-1 bg-white p-8 lg:pt-10 lg:px-12 relative z-20 lg:-ml-[24px]
               lg:[clip-path:polygon(0%_0%,calc(100%-24px)_0%,100%_50%,calc(100%-24px)_100%,0%_100%,24px_50%)]
               border-b lg:border-b-0 border-gray-100/50 lg:border-none">
            <span className="text-brand font-bold text-[13px] font-montserrat tracking-widest block mb-4">02</span>
            <div className="w-14 h-14 rounded-xl bg-[#F4F9F1] text-brand flex items-center justify-center relative z-20">
              <NotePencil size={26} weight="fill" />
            </div>
            <h3 className="mt-8 font-montserrat font-bold text-main text-[16px] leading-snug">
              Экспертный контроль <br className="hidden lg:block"/> на каждом этапе
            </h3>
            <p className="mt-4 text-[13px] text-muted leading-relaxed">
              Фотографии, видео, акты — полный отчет на каждом шаге. Вы можете контролировать ремонт удаленно, как будто сами на объекте.
            </p>
          </div>

          {/* Карточка 03 (Темная) */}
          <div className="flex-1 bg-[#F4F5F6] p-8 lg:pt-10 lg:px-12 relative z-20 lg:-ml-[24px]
               lg:[clip-path:polygon(0%_0%,calc(100%-24px)_0%,100%_50%,calc(100%-24px)_100%,0%_100%,24px_50%)]
               border-b lg:border-b-0 border-gray-200/50 lg:border-none">
            <span className="text-brand font-bold text-[13px] font-montserrat tracking-widest block mb-4">03</span>
            <div className="w-14 h-14 rounded-xl bg-white text-brand flex items-center justify-center relative z-20 shadow-sm">
              <Certificate size={26} weight="fill" />
            </div>
            <h3 className="mt-8 font-montserrat font-bold text-main text-[16px] leading-snug">
              Качество, подтвержденное <br className="hidden lg:block"/> стандартами
            </h3>
            <p className="mt-4 text-[13px] text-muted leading-relaxed">
              Строим по ГОСТу, используем сертифицированные материалы, соблюдаем СНиП. Без компромиссов в электрике, сантехнике и отделке.
            </p>
          </div>

          {/* Карточка 04 (Светлая) */}
          <div className="flex-1 bg-white p-8 lg:pt-10 lg:pl-12 lg:pr-8 relative z-20 lg:-ml-[24px]
               lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,24px_50%)]
               rounded-b-2xl lg:rounded-none lg:rounded-r-[20px] lg:border-none">
            <span className="text-brand font-bold text-[13px] font-montserrat tracking-widest block mb-4">04</span>
            <div className="w-14 h-14 rounded-xl bg-[#F4F9F1] text-brand flex items-center justify-center relative z-20">
              <FileText size={26} weight="fill" />
            </div>
            <h3 className="mt-8 font-montserrat font-bold text-main text-[16px] leading-snug">
              Гарантия до 3 лет <br className="hidden lg:block"/> на все работы
            </h3>
            <p className="mt-4 text-[13px] text-muted leading-relaxed lg:max-w-[85%]">
              Используем только проверенные технологии и материалы, которые служат десятилетиями. Ответственность и сроки фиксируем в договоре.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}