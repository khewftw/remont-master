import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-100 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link
              href="/"
              className="inline-block max-w-full"
              aria-label="отделка16.рф — на главную"
            >
              <Image
                src="/LOGO.svg"
                alt="отделка16.рф"
                width={260}
                height={44}
                className="h-8 sm:h-9 w-auto max-w-full object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Внутренняя отделка помещений. Фиксированная смета и сроки в
              договоре.
            </p>
            <p className="mt-6 text-sm text-muted">
              <a
                href="tel:+78000000000"
                className="font-montserrat font-semibold text-main hover:text-brand transition-colors"
              >
                +7 (800) 000-00-00
              </a>
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h2 className="font-montserrat text-sm font-semibold text-main uppercase tracking-wide">
              Реквизиты
            </h2>
            <address className="mt-4 not-italic text-sm md:text-base text-muted leading-relaxed space-y-2">
              <p>ООО «Пример»</p>
              <p>ИНН 0000000000 / КПП 000000000</p>
              <p>ОГРН 0000000000000</p>
              <p>Юр. адрес: г. Москва, ул. Примерная, д. 1</p>
            </address>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h2 className="font-montserrat text-sm font-semibold text-main uppercase tracking-wide">
              Банковские реквизиты
            </h2>
            <div className="mt-4 text-sm md:text-base text-muted leading-relaxed space-y-2">
              <p>Р/с 40702810000000000000</p>
              <p>Банк ПАО «Пример»</p>
              <p>БИК 000000000 / к/с 30101810000000000000</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} отделка16.рф. Все права защищены.</p>
          <p>Политика конфиденциальности — заглушка</p>
        </div>
      </div>
    </footer>
  );
}
