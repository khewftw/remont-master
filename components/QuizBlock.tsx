"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Circle, Check } from "@phosphor-icons/react/dist/ssr";

// Теперь image необязателен (знак вопроса)
type QuizOption = {
  label: string;
  image?: string; 
};

type QuizStep = {
  title: string;
  hint: string;
  options: QuizOption[];
};

const quizSteps: QuizStep[] = [
  {
    title: "Тип объекта",
    hint: "Это поможет нам подобрать нужную бригаду и оценить масштаб работ.",
    options: [
      { label: "Новостройка", image: "/images/quiz/1.webp" },
      { label: "Вторичное жилье", image: "/images/quiz/2.jpg" },
      { label: "Коммерция (B2B)", image: "/images/quiz/3.webp" },
      { label: "Загородный дом", image: "/images/quiz/4.webp" },
    ],
  },
  {
    title: "Площадь помещения",
    hint: "Укажите примерную площадь. Точные замеры сделает наш инженер бесплатно.",
    options: [
      // Здесь без картинок
      { label: "До 50 м²" },
      { label: "50-100 м²" },
      { label: "100-150 м²" },
      { label: "Более 150 м²" },
    ],
  },
  {
    title: "Уровень отделки",
    hint: "Определяет класс черновых и чистовых материалов, сложность сетей.",
    options: [
      { label: "Капитальный (White Box)", image: "/images/quiz/6.jpg" },
      { label: "Под ключ (Стандарт)", image: "/images/quiz/7.webp" },
      { label: "Дизайнерский / Премиум", image: "/images/quiz/8.webp" },
      { label: "Пока нужна консультация", image: "/images/quiz/9.jpg" },
    ],
  },
  {
    title: "Желаемые сроки",
    hint: "Поможет нам забронировать время архитектора и прораба.",
    options: [
      // Здесь без картинок
      { label: "Как можно скорее" },
      { label: "В течение месяца" },
      { label: "В течение 3 месяцев" },
      { label: "Пока прицениваюсь" },
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

export default function QuizBlock() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [answers, setAnswers] = useState<string[]>(Array(quizSteps.length).fill(""));
  const [form, setForm] = useState({ name: "", phone: "", consent: false });

  const current = quizSteps[step];
  const isLastStep = step === quizSteps.length - 1;
  const isStepAnswered = answers[step]?.length > 0;

  function selectOption(option: string) {
    setAnswers((prev) => prev.map((item, idx) => (idx === step ? option : item)));
    setTimeout(() => {
      if (!isLastStep) {
        setDirection(1);
        setStep((prev) => prev + 1);
      } else {
        setDirection(1);
        setShowForm(true);
      }
    }, 450);
  }

  function next() {
    if (!isStepAnswered) return;
    setDirection(1);
    if (!isLastStep) setStep((prev) => prev + 1);
    else setShowForm(true);
  }

  function back() {
    setDirection(-1);
    if (showForm) {
      setShowForm(false);
      return;
    }
    setStep((prev) => Math.max(0, prev - 1));
  }

  return (
    <section id="quiz" className="bg-secondary py-20 md:py-24 lg:py-32" aria-labelledby="quiz-heading">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <header className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2
            id="quiz-heading"
            className="font-montserrat text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-main uppercase tracking-tight"
          >
            РАССЧИТАЙТЕ СМЕТУ <br className="hidden sm:block" />
            <span className="font-semibold text-brand">НОВОЙ КВАРТИРЫ ЗА 4 ШАГА</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            Ответьте на несколько вопросов, чтобы мы подобрали оптимальное решение и подготовили предварительную смету.
          </p>
        </header>

        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden lg:flex-row lg:min-h-[560px]">
          
          <div className="w-full bg-[#F9FAFB] p-6 lg:w-[320px] xl:w-[380px] lg:border-r border-gray-100 xl:p-10 shrink-0 border-b lg:border-b-0">
            <h3 className="mb-8 font-montserrat text-sm font-bold uppercase tracking-widest text-brand">
              Этапы оценки
            </h3>
            
            <div className="relative space-y-6">
              <div className="absolute bottom-4 left-[11px] top-4 w-[2px] bg-gray-200" />
              
              {quizSteps.map((item, idx) => {
                const isActive = !showForm && idx === step;
                const isCompleted = idx < step || (showForm && answers[idx]);
                
                return (
                  <div key={item.title} className="relative flex items-center gap-4">
                    <div className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#F9FAFB] transition-colors duration-300 ${
                      isActive ? "text-brand ring-2 ring-brand ring-offset-2 ring-offset-[#F9FAFB]" :
                      isCompleted ? "text-brand" : "text-gray-300"
                    }`}>
                      {isCompleted ? <CheckCircle size={24} weight="fill" /> : <Circle size={12} weight="fill" />}
                    </div>
                    
                    <span className={`text-sm font-semibold font-montserrat transition-colors duration-300 ${
                      isActive ? "text-main" :
                      isCompleted ? "text-main/50" : "text-gray-400"
                    }`}>
                      {item.title}
                    </span>
                  </div>
                );
              })}

              <div className="relative flex items-center gap-4">
                <div className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#F9FAFB] transition-colors duration-300 ${
                  showForm ? "text-brand ring-2 ring-brand ring-offset-2 ring-offset-[#F9FAFB]" : "text-gray-300"
                }`}>
                  <Circle size={12} weight="fill" />
                </div>
                <span className={`text-sm font-semibold font-montserrat transition-colors duration-300 ${
                  showForm ? "text-main" : "text-gray-400"
                }`}>
                  Контакты
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col bg-white p-6 sm:p-10 xl:p-12">
            <div className="flex-1">
              <AnimatePresence mode="wait" custom={direction}>
                {!showForm ? (
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex h-full flex-col"
                  >
                    <h3 className="font-montserrat text-2xl font-semibold text-main md:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      {current.hint}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {current.options.map((opt) => {
                        const isActive = answers[step] === opt.label;

                        // ЕСЛИ ЕСТЬ ФОТО - рендерим фотокарточку
                        if (opt.image) {
                          return (
                            <button
                              key={opt.label}
                              onClick={() => selectOption(opt.label)}
                              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 h-32 md:h-40 flex flex-col justify-end p-4 text-left ${
                                isActive
                                  ? "border-brand shadow-[0_0_0_4px_rgba(133,194,64,0.1)]"
                                  : "border-transparent hover:border-brand/40"
                              }`}
                            >
                              <Image 
                                src={opt.image} 
                                alt={opt.label} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110 z-0 bg-gray-200" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/40 to-transparent z-10 transition-opacity duration-300 group-hover:from-[#2B2B2B]/95" />
                              <div className="relative z-20 flex justify-between items-end w-full">
                                <span className={`text-sm md:text-base font-montserrat font-bold text-white pr-4 transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`}>
                                  {opt.label}
                               </span>
                                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                  isActive ? "text-brand bg-white scale-110" : "text-white/50 group-hover:text-white"
                                }`}>
                                  {isActive ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} weight="regular" />}
                                </div>
                              </div>
                            </button>
                          );
                        }

                        // ЕСЛИ НЕТ ФОТО - рендерим стильную текстовую кнопку
                        return (
                          <button
                            key={opt.label}
                            onClick={() => selectOption(opt.label)}
                            className={`group flex items-center justify-between rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                              isActive
                                ? "border-brand bg-[#F4F9F1] shadow-[0_0_0_4px_rgba(133,194,64,0.1)]"
                                : "border-gray-100 bg-white hover:border-brand/40 hover:bg-[#F9FAFB]"
                            }`}
                          >
                            <span className={`text-sm md:text-base font-montserrat font-semibold transition-colors ${
                              isActive ? "text-brand" : "text-main"
                            }`}>
                              {opt.label}
                            </span>
                            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                              isActive ? "text-brand" : "text-gray-300 group-hover:text-brand/40"
                            }`}>
                              {isActive ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} weight="regular" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h3 className="font-montserrat text-2xl font-semibold text-main md:text-3xl">
                      Отлично, остался последний шаг!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      Мы получили вводные данные. Оставьте контакты, и наш инженер свяжется с вами в течение 10 минут для предварительного расчета.
                    </p>

                    <form className="mt-8 max-w-md space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-muted">Ваше имя</label>
                        <input
                          type="text"
                          placeholder="Иван Иванов"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3.5 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 text-main"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-muted">Телефон</label>
                        <input
                          type="tel"
                          placeholder="+7 (999) 000-00-00"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3.5 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 text-main"
                        />
                      </div>
                      
                      <label className="flex cursor-pointer items-start gap-3 pt-2 group">
                        <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 bg-white transition-colors group-hover:border-brand">
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                            className="peer absolute inset-0 cursor-pointer opacity-0"
                          />
                          <Check weight="bold" className={`h-3 w-3 text-brand transition-opacity ${form.consent ? "opacity-100" : "opacity-0"}`} />
                        </div>
                        <span className="text-xs leading-relaxed text-muted">
                          Я согласен с политикой конфиденциальности и на обработку персональных данных
                        </span>
                      </label>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <button
                onClick={back}
                disabled={step === 0 && !showForm}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-gray-100 hover:text-main disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft size={18} weight="bold" />
                Назад
              </button>

              <button
                onClick={showForm ? undefined : next}
                disabled={(!showForm && !isStepAnswered) || (showForm && (!form.name || !form.phone || !form.consent))}
                className="flex items-center justify-center gap-3 rounded-xl bg-brand px-8 py-4 text-white shadow-[0_8px_24px_rgba(133,194,64,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(133,194,64,0.35)] disabled:pointer-events-none disabled:opacity-50 disabled:transform-none disabled:shadow-none"
              >
                <span className="font-montserrat text-[13px] font-medium tracking-widest uppercase">
                  {showForm ? "Получить расчет" : "Далее"}
                </span>
                {!showForm && <ArrowRight size={18} weight="bold" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}