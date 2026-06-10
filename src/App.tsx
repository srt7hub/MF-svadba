import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect, Fragment } from "react";
import timingGlasses from "@/src/assets/images/timing_glasses.webp";
import timingFlowers from "@/src/assets/images/timing_flowers.webp";
import timingTable from "@/src/assets/images/timing_table.webp";
import timingCandles from "@/src/assets/images/timing_candles.webp";

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const targetDate = new Date("2026-09-12T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return difference > 0 ? difference : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference > 0 ? difference : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const getPlural = (num: number, one: string, two: string, five: string) => {
    let n = Math.abs(num);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
  };

  return (
    <div className="flex min-h-[100dvh] w-full bg-[#EAE8E3]">
      <div className="mx-auto w-full max-w-[430px] bg-white font-sans text-[#222] shadow-2xl selection:bg-[#7A7A6A]/20">
      {/* --- HERO SCREEN --- */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0d140d] text-white selection:bg-white/20" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        {/* Background Image Container */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: shouldReduceMotion ? 1 : 1.05, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.6 : 4, ease: "easeOut" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/v11.mp4"
          poster="/hero-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Subtle, elegant overlay matching the theme */}
        <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(15, 26, 15, 0.3) 40%, rgba(10, 15, 10, 0.9) 100%)" }} />
        <div className="absolute top-0 left-0 w-full h-64 opacity-40" style={{ background: "radial-gradient(ellipse at 50% -20%, #000 0%, transparent 80%)" }} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center pt-12 pb-24 px-6 sm:px-8">
        <motion.div
          className="flex w-full flex-col items-center text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
        >
          {/* Names Group */}
          <div className="mb-12 flex flex-col items-center gap-7">
            <h1 className="font-serif ml-[0.25em] text-[52px] font-light tracking-[0.22em] uppercase leading-none">
              Марат
            </h1>

            <span className="font-serif text-[40px] italic leading-none opacity-80" style={{ fontWeight: 300 }}>
              &
            </span>

            <h1 className="font-serif ml-[0.25em] text-[52px] font-light tracking-[0.22em] uppercase leading-none">
              Фирюза
            </h1>
          </div>

          {/* Divider */}
          <div className="w-10 h-[1px] bg-white opacity-30 mb-8" />

          {/* Date */}
          <div className="ml-[0.5em] text-[16px] tracking-[0.5em] font-light opacity-80">
            12.09.2026
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldReduceMotion ? 0.4 : [0.2, 0.6, 0.2], y: shouldReduceMotion ? 0 : [0, 8, 0] }}
          transition={{
            opacity: shouldReduceMotion ? { duration: 2, delay: 2.5 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
      </section>

      {/* --- INVITATION SCREEN --- */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-8 text-[#222]">
        {/* Paper Texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Background 'wedding' text */}
        <div className="absolute top-[52%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 -rotate-12 select-none font-script text-[150px] leading-none text-[#7A7A6A] opacity-5 sm:text-[180px]">
          wedding
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center text-center"
        >
          {/* Header */}
          <h2 className="flex flex-col items-center font-serif text-[42px] font-light leading-[1.15] tracking-[0.1em] uppercase">
            <span>Дорогие</span>
            <span className="ml-[0.1em]">гости!</span>
          </h2>

          {/* Separator / Leaf */}
          <div className="my-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-[50px] bg-[#7A7A6A]/30"></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-[#7A7A6A]/50">
              <path d="M12 21C12 21 6 15 6 10.5C6 7.5 8.5 5 12 5C15.5 5 18 7.5 18 10.5C18 15 12 21 12 21Z" />
              <path d="M12 21V12" />
              <path d="M12 16L9 13.5" />
              <path d="M12 13L14.5 11" />
            </svg>
            <div className="h-[1px] w-[50px] bg-[#7A7A6A]/30"></div>
          </div>

          {/* Text */}
          <div className="mx-auto flex w-full max-w-[310px] flex-col gap-6 font-serif text-[17px] font-light leading-[1.7] tracking-[0.02em] opacity-90 text-[#222] [text-wrap:balance]">
            <p>
              С большой радостью приглашаем вас на наш семейный праздник — нашу свадьбу!
            </p>
            <p>
              Мы очень хотим, чтобы в этот день с нами рядом были наши самые близкие люди.
            </p>
          </div>

          {/* Date Block */}
          <div className="relative mt-[70px] flex w-full max-w-[315px] items-center justify-center">
            
            {/* Arch text */}
            <svg width="240" height="120" viewBox="0 0 240 120" className="absolute -top-[20px] left-1/2 w-[240px] -translate-x-1/2 overflow-visible">
              <path id="curve-september" d="M 40,110 A 80,80 0 0,1 200,110" fill="transparent" />
              <text className="fill-[#222] font-serif text-[13px] tracking-[0.4em] uppercase" textAnchor="middle">
                <textPath href="#curve-september" startOffset="50%">Сентябрь</textPath>
              </text>
            </svg>

            {/* Left Block (Day) */}
            <div className="absolute top-1/2 left-0 -translate-y-[calc(50%-10px)] flex flex-col items-center justify-center gap-[10px]">
              <div className="h-[1px] w-[45px] bg-[#7A7A6A]/30"></div>
              <span className="ml-[0.25em] font-serif text-[12px] tracking-[0.25em] uppercase text-[#222]">Суббота</span>
              <div className="h-[1px] w-[45px] bg-[#7A7A6A]/30"></div>
            </div>

            {/* Middle Block (12) - Centered (nudged left to optically balance the digit shapes) */}
            <div className="relative z-10 -translate-x-[6px] font-serif text-[170px] font-light leading-[0.8] tracking-[-0.03em]">
              12
            </div>

            {/* Right Block (Year) */}
            <div className="absolute top-1/2 right-0 -translate-y-[calc(50%-10px)] flex flex-col items-center justify-center gap-[10px]">
              <div className="h-[1px] w-[45px] bg-[#7A7A6A]/30"></div>
              <span className="ml-[0.25em] font-serif text-[16px] tracking-[0.35em] text-[#222]">2026</span>
              <div className="h-[1px] w-[45px] bg-[#7A7A6A]/30"></div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- LOCATION SCREEN --- */}
      <section className="relative flex w-full flex-col items-center pt-8 pb-16 bg-white text-[#222] overflow-hidden">
        {/* Paper Texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter2">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter2)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center px-6 text-center"
        >
          {/* Header Group */}
          <div className="relative mt-8 flex flex-col items-center">
            <div className="absolute top-[40%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 select-none font-script text-[80px] leading-none text-[#7A7A6A] opacity-[0.08] sm:text-[90px]">
              location
            </div>
            <h2 className="relative z-10 ml-[0.2em] font-serif text-[32px] font-light tracking-[0.2em] uppercase">
              Локация
            </h2>
          </div>

          {/* Place Title */}
          <div className="mt-8 font-serif text-[24px] font-light tracking-[0.1em] uppercase text-[#222]">
            Pravda Hall
          </div>
          
          {/* Address */}
          <div className="mt-3 font-serif text-[17px] font-light tracking-[0.05em] text-[#222]">
            Проспект Октября, 79/1
          </div>

          {/* Triptych Image — full-bleed, side panels run to the screen edges */}
          <div className="relative mt-12 -mx-6 w-[calc(100%+48px)] h-[420px] bg-white sm:h-[460px]">
            <img
              src="/qw1.webp"
              alt="Интерьер Pravda Hall"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Vertical gaps between the three panels */}
            <div className="absolute left-[33.333%] top-0 bottom-0 w-[6px] -translate-x-1/2 bg-white" />
            <div className="absolute left-[66.666%] top-0 bottom-0 w-[6px] -translate-x-1/2 bg-white" />

            {/* Top & bottom cutouts: shorten the two side panels so the center one stands taller */}
            <div className="absolute left-0 top-0 w-1/3 h-[3%] bg-white" />
            <div className="absolute left-0 bottom-0 w-1/3 h-[3%] bg-white" />
            <div className="absolute right-0 top-0 w-1/3 h-[3%] bg-white" />
            <div className="absolute right-0 bottom-0 w-1/3 h-[3%] bg-white" />
          </div>

          {/* Map Button */}
          <a 
            href="https://yandex.ru/maps/172/ufa/?from=api-maps&ll=56.021375%2C54.773022&mode=routes&origin=jsapi_2_1_79&rtext=~54.773022%2C56.021375&rtt=auto&ruri=~&utm_source=jsapi&z=15" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex w-[260px] items-center justify-center border border-[#7A7A6A]/60 py-4 font-serif text-[13px] font-light tracking-[0.15em] uppercase text-[#222] transition-colors hover:bg-[#7A7A6A]/5 active:bg-[#7A7A6A]/10"
          >
            Построить маршрут
          </a>
        </motion.div>
      </section>

      {/* --- COUNTDOWN SCREEN --- */}
      <section className="relative flex w-full flex-col items-center pt-12 pb-16 bg-white text-[#222] overflow-hidden">
        {/* Paper Texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter4">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter4)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center px-6 text-center"
        >
          {/* Header Group */}
          <div className="relative mt-8 flex flex-col items-center w-full">
            <div className="absolute top-[-45px] left-1/2 z-0 -translate-x-1/2 -rotate-6 select-none font-script text-[65px] leading-none text-[#7A7A6A] opacity-[0.08] sm:top-[-50px] sm:text-[75px]">
              countdown
            </div>
            <h2 className="relative z-10 ml-[0.2em] font-serif text-[26px] font-light tracking-[0.15em] sm:text-[28px] sm:tracking-[0.2em] uppercase">
              До нашей свадьбы
            </h2>
          </div>

          <p className="mt-3 font-serif text-[17px] font-light tracking-[0.05em] text-[#222]/80">
            {timeLeft > 0 ? "Осталось совсем немного времени" : "Этот день настал"}
          </p>

          {timeLeft <= 0 ? (
            <div className="mt-12 mb-4 flex flex-col items-center">
              <span className="font-script text-[64px] leading-none text-[#5A5A4A]">Сегодня</span>
              <span className="mt-6 font-serif text-[15px] font-light tracking-[0.1em] uppercase text-[#222]">
                Мы ждём вас ✦
              </span>
            </div>
          ) : (
          <>
          {/* Days — hero number */}
          <div className="mt-[10px] flex flex-col items-center">
             <span className="text-[150px] sm:text-[170px] font-serif leading-none text-[#5A5A4A] font-light tracking-tight">{days}</span>
             <span className="mt-5 font-serif text-[14px] uppercase tracking-[0.3em] text-[#222]/80">
               {getPlural(days, 'день', 'дня', 'дней')}
             </span>
          </div>

          {/* Full-width separator with center diamond */}
          <div className="relative mt-7 mb-8 w-full max-w-[340px] flex items-center justify-center">
            <div className="h-[1px] w-full bg-[#7A7A6A]/30"></div>
            <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#7A7A6A]"></div>
          </div>

          {/* H M S — clean numbers with thin vertical dividers */}
          <div className="flex w-full max-w-[340px] items-center justify-between font-serif text-[#222]">
            {[
              { value: hours, label: getPlural(hours, 'час', 'часа', 'часов') },
              { value: minutes, label: getPlural(minutes, 'минута', 'минуты', 'минут') },
              { value: seconds, label: getPlural(seconds, 'секунда', 'секунды', 'секунд') },
            ].map((unit, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="relative h-[44px] w-[1px] bg-[#7A7A6A]/30">
                    <div className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#7A7A6A]"></div>
                  </div>
                )}
                <div className="flex flex-1 flex-col items-center">
                  <span className="text-[42px] sm:text-[46px] font-light leading-none text-[#5A5A4A]">
                    {formatNumber(unit.value)}
                  </span>
                  <span className="mt-4 text-[10px] uppercase tracking-[0.15em] text-[#222]/70">
                    {unit.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
          </>
          )}
        </motion.div>
      </section>

      {/* --- TIMING SCREEN --- */}
      <section className="relative flex w-full flex-col items-center pt-12 pb-16 bg-white text-[#222] overflow-hidden">
        {/* Paper Texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter3">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter3)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center px-6 text-center"
        >
          {/* Header Group */}
          <div className="relative mt-4 flex flex-col items-center w-full mb-12">
            <div className="absolute top-[-55px] left-1/2 z-0 -translate-x-1/2 -rotate-6 select-none font-script text-[80px] leading-none text-[#7A7A6A] opacity-[0.08] sm:text-[90px]">
              timing
            </div>
            <h2 className="relative z-10 ml-[0.2em] font-serif text-[32px] font-light tracking-[0.2em] uppercase">
              Тайминг
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative w-full max-w-[340px] mt-4">
            {/* Top Diamond */}
            <div className="absolute left-1/2 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#7A7A6A]" />
            
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-8 w-[1px] -translate-x-1/2 bg-[#7A7A6A]/30 z-0"></div>

            <div className="relative z-10 flex flex-col w-full">
               {/* Item 1 */}
              <div className="relative flex w-full items-center justify-between py-8">
                <div className="w-1/2 text-right pr-[48px] sm:pr-[56px]">
                  <span className="font-serif text-[34px] font-light tracking-[0.05em] text-[#222]">14:30</span>
                </div>
                <div className="absolute left-1/2 top-1/2 w-[72px] h-[72px] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white z-10">
                   <img src={timingGlasses} alt="Сбор гостей" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="w-1/2 text-left pl-[48px] sm:pl-[56px]">
                  <span className="font-serif text-[11px] uppercase tracking-[0.15em] text-[#222]">Сбор гостей</span>
                </div>
              </div>

              {/* Horizontal Separator */}
              <div className="mx-auto w-[90%] h-[1px] bg-[#7A7A6A]/20" />

              {/* Item 2 */}
              <div className="relative flex w-full items-center justify-between py-8">
                <div className="w-1/2 text-right pr-[48px] sm:pr-[56px]">
                  <span className="font-serif text-[34px] font-light tracking-[0.05em] text-[#222]">15:00</span>
                </div>
                <div className="absolute left-1/2 top-1/2 w-[72px] h-[72px] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white z-10">
                   <img src={timingFlowers} alt="Церемония бракосочетания" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="w-1/2 text-left pl-[48px] sm:pl-[56px]">
                  <span className="flex flex-col font-serif text-[11px] uppercase tracking-[0.15em] text-[#222] leading-[1.6]">
                    <span>Церемония</span>
                    <span>бракосочетания</span>
                  </span>
                </div>
              </div>

              {/* Horizontal Separator */}
              <div className="mx-auto w-[90%] h-[1px] bg-[#7A7A6A]/20" />

              {/* Item 3 */}
              <div className="relative flex w-full items-center justify-between py-8">
                <div className="w-1/2 text-right pr-[48px] sm:pr-[56px]">
                  <span className="font-serif text-[34px] font-light tracking-[0.05em] text-[#222]">16:00</span>
                </div>
                <div className="absolute left-1/2 top-1/2 w-[72px] h-[72px] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white z-10">
                   <img src={timingTable} alt="Свадебный банкет" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="w-1/2 text-left pl-[48px] sm:pl-[56px]">
                  <span className="flex flex-col font-serif text-[11px] uppercase tracking-[0.15em] text-[#222] leading-[1.6]">
                    <span>Свадебный</span>
                    <span>банкет</span>
                  </span>
                </div>
              </div>

              {/* Horizontal Separator */}
              <div className="mx-auto w-[90%] h-[1px] bg-[#7A7A6A]/20" />

              {/* Item 4 */}
              <div className="relative flex w-full items-center justify-between py-8">
                <div className="w-1/2 text-right pr-[48px] sm:pr-[56px]">
                  <span className="font-serif text-[34px] font-light tracking-[0.05em] text-[#222]">23:00</span>
                </div>
                <div className="absolute left-1/2 top-1/2 w-[72px] h-[72px] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white z-10">
                   <img src={timingCandles} alt="Завершение вечера" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="w-1/2 text-left pl-[48px] sm:pl-[56px]">
                  <span className="flex flex-col font-serif text-[11px] uppercase tracking-[0.15em] text-[#222] leading-[1.6]">
                    <span>Завершение</span>
                    <span>вечера</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT SCREEN --- */}
      <section className="relative flex w-full flex-col items-center pt-12 pb-24 bg-white text-[#222] overflow-hidden">
        {/* Paper Texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter5">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter5)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center px-6 text-center"
        >
          {/* Header Group */}
          <div className="relative mt-4 flex flex-col items-center w-full mb-6">
            <div className="absolute top-[-70px] left-[48%] z-0 -translate-x-1/2 -rotate-6 select-none font-script text-[110px] leading-none text-[#7A7A6A] opacity-[0.08] sm:top-[-90px] sm:text-[140px]">
              contact
            </div>
            <h2 className="relative z-10 ml-[0.2em] font-serif text-[20px] font-light tracking-[0.2em] sm:text-[24px] sm:tracking-[0.25em] uppercase">
              По всем вопросам
            </h2>
          </div>

          <div className="relative flex flex-col items-center w-full">
            {/* Description */}
            <p className="font-serif text-[15px] font-light tracking-[0.05em] text-[#222]/90 leading-[1.8] mb-12 mt-2">
              Если у вас возникнут вопросы,<br/>мы всегда будем рады помочь.
            </p>

            {/* Phone numbers section */}
            <div className="relative flex w-full max-w-[340px] items-start justify-between mt-4">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-[-25px] bottom-[-25px] w-[1px] -translate-x-1/2 bg-[#7A7A6A]/30 z-0">
                <div className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#7A7A6A]"></div>
              </div>

              {/* Left Column */}
              <div className="flex flex-1 flex-col items-center pr-2 sm:pr-4">
                <span className="font-serif text-[13px] uppercase tracking-[0.2em] text-[#222] mb-3">Марат</span>
                <div className="h-[1px] w-[20px] bg-[#7A7A6A]/30 mb-4"></div>
                <a href="tel:+79279251330" className="font-serif text-[13px] sm:text-[15px] font-light tracking-[0.05em] text-[#5A5A4A] hover:opacity-70 transition-opacity">
                  +7 (927) 925-13-30
                </a>
              </div>

              {/* Right Column */}
              <div className="flex flex-1 flex-col items-center pl-2 sm:pl-4">
                <span className="font-serif text-[13px] uppercase tracking-[0.2em] text-[#222] mb-3">Фирюза</span>
                <div className="h-[1px] w-[20px] bg-[#7A7A6A]/30 mb-4"></div>
                <a href="tel:+79273573030" className="font-serif text-[13px] sm:text-[15px] font-light tracking-[0.05em] text-[#5A5A4A] hover:opacity-70 transition-opacity">
                  +7 (927) 357-30-30
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FINALE SCREEN --- */}
      <section className="relative flex w-full flex-col justify-start overflow-hidden text-[#EAE8E3] min-h-[100dvh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#222]">
          <img src="/qw4.webp" alt="Марат и Фирюза" className="h-full w-full object-cover object-top" loading="lazy" />
          <div className="absolute top-0 left-0 right-0 h-[60dvh] bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
        </div>
        
        {/* Paper Texture Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.2] mix-blend-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noiseFilter6">
              <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter6)" />
          </svg>
        </div>

        <div className="relative z-10 flex w-full flex-col flex-1 items-center pt-16 sm:pt-20 pb-10">
          {/* Top Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex w-full flex-col items-center px-4 text-center"
          >
            <div className="absolute top-[40%] left-[50%] z-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 select-none font-script text-[110px] sm:text-[150px] leading-none text-white opacity-[0.06] whitespace-nowrap mt-[-10px]">
              thank you
            </div>
            
            <p className="relative z-10 font-serif text-[15px] sm:text-[17px] font-light tracking-[0.05em] text-[#EAE8E3]/95 leading-[1.8]">
              Спасибо,<br/>что разделите этот день с нами
            </p>
          </motion.div>

          {/* Center Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center px-4 text-center w-full mt-6 sm:mt-8"
          >
            <h2 className="font-serif text-[36px] sm:text-[42px] font-light tracking-[0.05em] text-[#EAE8E3] whitespace-nowrap">
              Марат &amp; Фирюза
            </h2>

            <div className="mt-4 font-serif text-[15px] sm:text-[17px] font-light tracking-[0.1em] text-[#EAE8E3]/90 whitespace-nowrap">
              12.09.2026
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
