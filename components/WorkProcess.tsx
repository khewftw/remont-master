const stages = [
  {
    title: "Обмер и бриф",
    text: "Фиксируем задачу, сроки и зону ответственности.",
  },
  {
    title: "Смета и договор",
    text: "Прозрачная калькуляция и юридическое закрепление объёма.",
  },
  {
    title: "Производство работ",
    text: "Этапы с контролем качества и отчётностью.",
  },
  {
    title: "Сдача объекта",
    text: "Акт, гарантии, рекомендации по эксплуатации.",
  },
];

export default function WorkProcess() {
  return (
    <section
      id="process"
      className="bg-secondary py-20 md:py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2
            id="process-heading"
            className="font-montserrat text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-main uppercase tracking-tight"
          >
            Этапы <span className="font-semibold text-brand">работы</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            Лаконичная сетка: фото 1:1, без цитат и боковой асимметрии.
          </p>
        </header>
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {stages.map((stage, index) => (
            <article
              key={stage.title}
              className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col text-center"
            >
              <div
                className="mx-auto w-full max-w-[280px] aspect-square rounded-2xl bg-gray-200 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                role="presentation"
                aria-hidden
              />
              <div className="mt-6 px-2">
                <p className="font-montserrat text-xs text-muted tabular-nums mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-montserrat text-lg font-semibold text-main leading-tight">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
                  {stage.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
