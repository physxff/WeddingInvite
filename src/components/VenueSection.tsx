"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VenueSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >

          {/* ТЕКСТ */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
              Место проведения
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Livini
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-8">
              г. Абакан
              <br />
              ул. Абаканская, д. 50
            </p>

            {/* КНОПКА */}
            <button
              onClick={() => setOpen(!open)}
              className="mt-10 inline-flex rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
            >
              {open ? "Закрыть карту" : "Открыть карту"}
            </button>
          </div>

          {/* КАРТИНКА / КАРТА */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

            <AnimatePresence mode="wait">
              {!open ? (
                <motion.img
                  key="img"
                  src="/venue.jpg"
                  alt="Место проведения"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.div
                  key="map"
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=91.482039%2C53.715237&z=17&pt=91.482039%2C53.715237,pm2rdm"
                    className="w-full h-full"
                    loading="lazy"
                    />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </motion.div>

      </div>
    </section>
  );
}