'use client';

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section
      // На мобилках высота подстраивается (h-auto), появляется скролл. 
      // На десктопе (md:) блок жестко занимает 100% высоты экрана.
      className="relative flex flex-col h-auto min-h-[100dvh] md:h-[100dvh] md:min-h-[700px] bg-white pt-24 md:pt-28 lg:pt-36 pb-0 overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      {/* 1. ВЕРХНЯЯ ЧАСТЬ: Текст */}
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-8 mb-8 lg:mb-10 shrink-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
          
          {/* Левый блок: Заголовок */}
          <div className="w-full lg:w-7/12">
            <h1
              id="hero-heading"
              className="font-montserrat text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] text-main tracking-tight uppercase"
            >
              Внутренняя отделка <br className="hidden md:block" />
              <span className="font-semibold text-brand">
                с фиксированной сметой в договоре
              </span>
            </h1>
          </div>

          {/* Правый блок: Подзаголовок и кнопка */}
          <div className="w-full lg:w-4/12 flex flex-col gap-6 lg:pt-2">
            <div className="flex items-start gap-4">
              <div className="w-8 h-[2px] bg-brand mt-2.5 shrink-0" aria-hidden="true" />
              <p className="text-base text-main font-medium leading-relaxed">
                Строим за 3-4 месяца. Фиксируем сроки и стоимость в договоре, без скрытых платежей!
              </p>
            </div>

            <div className="w-full">
              <a
                href="#lead"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-7 py-4 text-white shadow-[0_12px_32px_rgba(133,194,64,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(133,194,64,0.45)]"
              >
                <span className="font-montserrat text-[13px] font-medium tracking-widest uppercase">
                  Узнать стоимость
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 transition-opacity group-hover:opacity-100">
                  <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. НИЖНЯЯ ЧАСТЬ: Слайдер */}
      {/* На мобилках соотношение сторон 9:16 (уходит за нижний край экрана), на десктопе тянется на оставшееся место */}
      <div className="relative w-full aspect-[9/16] md:aspect-auto md:flex-1 group select-none overflow-hidden">
        
        {/* ФОТО ПОСЛЕ (After) */}
        <div className="absolute inset-0">
          <Image
            src="/images/herobg-after.png"
            alt="Готовый ремонт (После)"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* ФОТО ДО (Before) */}
        <div 
          className="absolute inset-0" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src="/images/herobg-before.png"
            alt="Чертеж или черновая (До)"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Затемнение снизу картинки для читабельности плашек */}
        <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/20 to-transparent pointer-events-none z-20" />

        {/* Линия разделителя и ползунок */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-20"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-brand rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l6-6-6-6" />
              <path d="M9 18l-6-6 6-6" />
            </svg>
          </div>
        </div>

        {/* Невидимый input для управления */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Сравнение до и после ремонта"
        />

        {/* Выступающие карточки преимуществ */}
        {/* Прибиты к низу картинки (bottom-4) */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 z-40 w-full px-4 md:px-8 pointer-events-none">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-3 md:gap-6 md:grid-cols-3 pointer-events-auto">
            
            {/* Карточка 1 */}
            <div className="flex items-center gap-4 md:gap-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-4 lg:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-lg bg-brand overflow-hidden">
                <Image src="/images/hero-plashka-1.png" alt="Выход за 48 часов" fill className="object-cover" />
              </div>
              <div>
                <h4 className="mb-1 font-montserrat text-[13px] font-bold text-white md:text-main lg:text-[14px] drop-shadow-md md:drop-shadow-none">Выход за 48 часов</h4>
                <p className="text-[11px] leading-tight text-white/90 md:text-main/90 lg:text-[12px] drop-shadow-md md:drop-shadow-none">начинаем работы сразу после подписания договора</p>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="flex items-center gap-4 md:gap-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-4 lg:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-lg bg-brand overflow-hidden">
                <Image src="/images/hero-plashka-2.png" alt="Работаем с НДС" fill className="object-cover" />
              </div>
              <div>
                <h4 className="mb-1 font-montserrat text-[13px] font-bold text-white md:text-main lg:text-[14px] drop-shadow-md md:drop-shadow-none">Работаем с НДС</h4>
                <p className="text-[11px] leading-tight text-white/90 md:text-main/90 lg:text-[12px] drop-shadow-md md:drop-shadow-none">прозрачная бухгалтерия, любые формы оплаты</p>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="flex items-center gap-4 md:gap-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-4 lg:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-lg bg-brand overflow-hidden">
                <Image src="/images/hero-plashka-3.png" alt="Бесплатный проект" fill className="object-cover" />
              </div>
              <div>
                <h4 className="mb-1 font-montserrat text-[13px] font-bold text-white md:text-main lg:text-[14px] drop-shadow-md md:drop-shadow-none">Бесплатный проект</h4>
                <p className="text-[11px] leading-tight text-white/90 md:text-main/90 lg:text-[12px] drop-shadow-md md:drop-shadow-none">при заключении договора на строительные работы</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}