"use client";

import Image from "next/image";

// Подробный список всех работ (14 пунктов)
const ALL_FEATURES = [
  "Демонтаж и возведение межкомнатных перегородок",
  "Устройство черновой стяжки пола",
  "Оштукатуривание стен и откосов по маякам",
  "Прокладка труб водоснабжения и канализации",
  "Монтаж черновой электрики со сборкой щитка",
  "Шпатлевка стен под обои или покраску",
  "Настил чистового пола (ламинат, кварцвинил, паркет)",
  "Укладка керамогранита и плитки в санузлах",
  "Монтаж натяжных или гипсокартонных потолков",
  "Оклейка стен обоями или покраска в 2 слоя",
  "Установка межкомнатных дверей и плинтусов",
  "Установка розеток, выключателей и светильников",
  "Монтаж чистовой сантехники (унитаз, ванна, раковина)",
  "Вынос строительного мусора и финальный клининг",
];

const packages = [
  {
    name: "Черновой",
    // Первые 5 пунктов включены, остальные отключены
    features: ALL_FEATURES.map((text, index) => ({
      text,
      included: index < 5,
    })),
    highlight: false,
  },
  {
    name: "White Box",
    // Первые 6 пунктов включены + 14-й (вынос мусора)
    features: ALL_FEATURES.map((text, index) => ({
      text,
      included: index < 6 || index === 13,
    })),
    highlight: false,
  },
  {
    name: "Под ключ",
    // Включено всё
    features: ALL_FEATURES.map((text) => ({
      text,
      included: true,
    })),
    highlight: true,
  },
];

export default function PricingPackages() {
  return (
    <section
      id="packages"
      className="relative bg-[#F9FAFB] py-20 md:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="packages-heading"
    >
      {/* Паттерн вертикальных линий на фоне */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "150px 100%",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        {/* Рулетка на заднем фоне (выглядывает слева) */}
        {/* Помести PNG файл рулетки в public/images/roulette.png */}
        <div className="hidden lg:block absolute top-32 -left-28 xl:-left-40 z-0 drop-shadow-2xl pointer-events-none hover:rotate-2 transition-transform duration-700">
          <Image
            src="/images/roulette.png"
            alt="Измерительная рулетка"
            width={400}
            height={400}
            className="object-contain -rotate-12"
          />
        </div>

        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2
            id="packages-heading"
            className="font-montserrat text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-main uppercase tracking-tight"
          >
            Выберите свою <span className="font-semibold text-brand">комплектацию</span>
          </h2>
          {/* Добавленный подзаголовок */}
          <p className="mt-4 text-base md:text-lg text-muted max-w-xl mx-auto">
            Ознакомьтесь с подробным перечнем работ, включенных в каждый из наших тарифов, и выберите оптимальный вариант для вашего ремонта.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col bg-white rounded-[20px] p-8 md:p-10 transition-all duration-300 group ${
                pkg.highlight
                  ? "border-2 border-brand shadow-[0_15px_40px_rgba(133,194,64,0.15)] relative z-20 scale-100 lg:scale-[1.03]"
                  : "border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              }`}
            >
              {/* Центрированный заголовок карточки */}
              <div className="text-center mb-8 border-b border-gray-100 pb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted mb-3">
                  Т а р и ф
                </p>
                <h3 className="font-montserrat text-xl md:text-2xl font-semibold text-main uppercase tracking-tight">
                  {pkg.name}
                </h3>
              </div>

              {/* Детальный список услуг */}
              <ul className="space-y-4 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Точка (Буллет) */}
                    <div
                      className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${
                        f.included ? "bg-brand" : "bg-gray-200"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Текст пункта */}
                    <span
                      className={`text-[13px] leading-relaxed transition-colors duration-300 ${
                        f.included ? "text-main font-medium" : "text-gray-400"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Кнопка внизу */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <a
                  href="#lead"
                  className={`flex w-full items-center justify-center gap-2.5 rounded-xl py-4 font-montserrat font-bold text-[13px] uppercase tracking-wide transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-brand text-white shadow-[0_8px_20px_rgba(133,194,64,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(133,194,64,0.4)]"
                      : "bg-[#F4F9F1] text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  Рассчитать стоимость
                  {/* Иконка стрелочки */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}