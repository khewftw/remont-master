"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#packages", label: "Тарифы" },
  { href: "#process", label: "Этапы" },
  { href: "#lead", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем скролл, чтобы добавлять тень
  useEffect(() => {
    const handleScroll = () => {
      // Если проскроллили больше 10px вниз — включаем тень
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Слушаем событие скролла
    window.addEventListener("scroll", handleScroll);
    
    // Вызываем один раз при монтировании, чтобы проверить начальное положение
    handleScroll();

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      // fixed прикрепляет шапку к верху, transition-shadow делает появление тени плавным
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.05)]" : "shadow-none"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Убрали скругления и фоны у внутреннего блока, оставили только flex-контейнер и отступы */}
        <div className="flex items-center justify-between py-4">
          
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 min-w-0"
            aria-label="отделка16.рф — на главную"
          >
            <Image
              src="/LOGO.svg"
              alt="отделка16.рф"
              width={240}
              height={41}
              className="h-7 sm:h-8 md:h-9 w-auto max-w-[min(100%,200px)] sm:max-w-[240px] md:max-w-[280px] object-contain object-left"
              priority
            />
          </Link>

          {/* Навигация */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Основная навигация"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] text-muted hover:text-brand transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Контакты и соцсети */}
          <div className="flex items-center gap-6">
            
            {/* Иконки соцсетей */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E8F3E1] text-brand hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1.005-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.433-9.879 9.882-9.879 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 012.893 6.981c-.002 5.446-4.437 9.88-9.886 9.88" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E3F0F8] text-[#2FA6D9] hover:scale-110 transition-transform duration-300"
                aria-label="Telegram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.833.94z" />
                </svg>
              </a>
            </div>

            {/* Телефон и график работы */}
            <div className="flex flex-col items-end text-right">
              <span className="text-[11px] text-muted mb-[2px] hidden sm:block">
                Ежедневно с 09:00-20:00
              </span>
              <a
                href="tel:+78005054374"
                className="font-montserrat text-sm md:text-base font-semibold text-main hover:text-brand transition-colors"
              >
                +7(800)-505-43-74
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}


// ебаное говнище этот vercel
// похуй так-то аккуратность такта