"use client";

import { 
  PaintBrush, 
  Wall, 
  Ruler, 
  Hammer, 
  HouseLine, 
  SquareHalf, 
  Rows, 
  PaintRoller,
  ArrowRight,
  Stack // Заменили Layers на Stack
} from "@phosphor-icons/react/dist/ssr";

const servicesGrid = [
  // ROW 1
  {
    id: 1,
    title: "Штукатурные работы",
    price: "От 600 руб/м²",
    image: "/images/services/1.jpg",
    icon: <Wall size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "Малярные работы",
    price: "От 180 руб/м²",
    image: "/images/services/2.jpg",
    icon: <PaintBrush size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Напольные покрытия",
    price: "От 500 руб/м²",
    image: "/images/services/3.webp",
    icon: <Rows size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Черновые полы",
    price: "От 400 руб/м²",
    image: "/images/services/4.jpg",
    icon: <SquareHalf size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  
  // ROW 2 (Start)
  {
    id: 5,
    title: "Комплексная отделка",
    price: "Индивидуально",
    image: "/images/services/5.png",
    icon: <HouseLine size={24} weight="fill" />,
    span: "col-span-1 row-span-2", // Высокая карточка на 2 строки
  },
  {
    id: 6,
    title: "Поклейка обоев и фресок",
    price: "От 330 руб/м²",
    image: "/images/services/6.png",
    icon: <PaintRoller size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "Монтаж потолков (ГКЛ)",
    price: "От 220 руб/м²",
    image: "/images/services/7.png",
    icon: <Ruler size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "Декор и молдинги",
    price: "От 200 руб/м.п",
    image: "/images/services/8.jpg",
    icon: <Hammer size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
  
  // ROW 3 (Новая карточка с исправленной иконкой Stack)
  {
    id: 9,
    title: "Устройство стяжки",
    price: "От 600 руб/м²",
    image: "/images/services/9.png",
    icon: <Stack size={24} weight="fill" />,
    span: "col-span-1 row-span-1",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 md:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Заголовок по центру */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="services-heading"
            className="font-montserrat text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.2] text-main uppercase tracking-tight"
          >
            Выполняем все виды <br className="hidden sm:block" />
            <span className="font-semibold text-brand">ремонтных работ</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            От черновой подготовки до финального декора. Честные цены и прозрачные сметы.
          </p>
        </header>

        {/* CSS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] md:auto-rows-[280px] lg:auto-rows-[300px] gap-4 md:gap-6 grid-flow-row-dense">
          
          {/* Рендерим первые 4 квадрата (Весь 1-й ряд) */}
          {servicesGrid.slice(0, 4).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}

          {/* Высокая карточка (Занимает левую колонку во 2-м и 3-м ряду) */}
          <ServiceCard key={servicesGrid[4].id} item={servicesGrid[4]} />

          {/* Следующие 3 квадрата (Добивают 2-й ряд) */}
          {servicesGrid.slice(5, 8).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}

          {/* Форма захвата (Широкая, занимает 2 центральные колонки в 3-м ряду) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-[#2B2B2B] rounded-[20px] p-6 lg:p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-3">
                Не нашли нужную услугу?
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-6 max-w-[400px]">
                Оставьте ваш номер телефона, мы вышлем полный прайс-лист и проконсультируем по вашему объекту.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors text-sm"
                />
                <button className="bg-brand text-white font-montserrat font-bold text-[13px] uppercase tracking-wide px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(133,194,64,0.3)] flex items-center justify-center gap-2 whitespace-nowrap">
                  Оставить заявку
                  <ArrowRight size={16} weight="bold" />
                </button>
              </form>
              <p className="text-[10px] text-gray-500 mt-4">
                Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности.
              </p>
            </div>
          </div>

          {/* Добавленная 9-я карточка (Закрывает дыру в 3-м ряду справа) */}
          <ServiceCard key={servicesGrid[8].id} item={servicesGrid[8]} />

        </div>

        {/* Кнопка "Все услуги" под гридом */}
        <div className="mt-10 lg:mt-12 flex justify-center">
          <button className="w-full max-w-[400px] bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white font-montserrat font-bold text-[13px] px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide">
            Смотреть полный прайс-лист
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>

      </div>
    </section>
  );
}

// Компонент карточки
function ServiceCard({ item }: { item: any }) {
  return (
    <article className={`relative group overflow-hidden rounded-[20px] bg-gray-200 cursor-pointer ${item.span}`}>
      {/* Фоновая картинка */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Затемняющий градиент */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent transition-opacity duration-300 group-hover:from-[#1A1A1A]/95" />

      {/* Иконка в левом верхнем углу */}
      <div className="absolute top-4 left-4 lg:top-5 lg:left-5 bg-white w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg text-brand z-10 transition-transform duration-300 group-hover:-translate-y-1">
        {item.icon}
      </div>

      {/* Текст и цена внизу */}
      <div className="absolute bottom-0 left-0 w-full p-4 lg:p-6 z-10 flex flex-col justify-end">
        <h3 className="font-montserrat font-bold text-white text-lg lg:text-xl leading-tight drop-shadow-md">
          {item.title}
        </h3>
        
        {/* Плашка с ценой */}
        <div className="mt-3 inline-block bg-brand text-white font-montserrat font-bold text-[12px] lg:text-sm px-3 py-1.5 rounded-lg w-fit shadow-md transform transition-transform duration-300 group-hover:-translate-y-1">
          {item.price}
        </div>
      </div>
    </article>
  );
}