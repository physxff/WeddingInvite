"use client";

import { motion } from "framer-motion";

export default function DressCodeSection() {
  return (
    <section className="px-6 py-0 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          Дресс-код
        </p>

        <p className="mt-10 text-lg md:text-2xl leading-9 md:leading-[2.4rem]">
          Нам будет особенно приятно, если вы поддержите стилистику нашего
          праздника и выберете наряды в черно-белой гамме.
        </p>

        <p className="mt-8 text-lg md:text-2xl leading-9 md:leading-[2.4rem]">
          Если вы решите остановить свой выбор на белом платье, будем благодарны,
          если образ будет дополнен черными акцентами — обувью, аксессуарами,
          сумочкой или другими деталями.
        </p>

        <p className="mt-8 text-lg md:text-2xl leading-9 md:leading-[2.4rem]">
          Спасибо, что разделите с нами не только этот день, но и его атмосферу.
        </p>
      </motion.div>

    </section>
  );
}