"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RingTransition from "./RingTransition";

export default function Invitation() {
  return (
    <section className="min-h-screen py-0">

      {/* Верхняя часть */}
      <div className="mx-auto max-w-5xl px-6">

        {/* Блок 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="grid gap-8 md:grid-cols-[280px_1fr] items-start"
        >
          <div className="text-lg leading-9 md:text-2xl md:leading-[2.4rem]">
            <p>
              Мы начинаем новую главу нашей истории и будем счастливы,
              если вы разделите этот особенный день вместе с нами.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/img1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg leading-9 md:text-2xl md:leading-[2.4rem]">
            <p className="mt-8">
              Этот день станет одним из самых важных в нашей жизни,
              и нам очень хочется провести его рядом с теми,
              кто дорог нашему сердцу.
            </p>
          </div>
        </motion.div>

        {/* Блок 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="mt-12 grid gap-8 md:grid-cols-[1fr_320px] items-center"
        >
          <div className="order-2 md:order-1 text-lg leading-9 md:text-2xl md:leading-[2.4rem]">
            <p>
              Приглашаем вас на нашу свадьбу.
            </p>

            <p className="mt-8">
              Мы будем рады разделить с вами
              искренние эмоции, счастливые моменты
              и воспоминания, которые останутся с нами
              на долгие годы.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl rotate-2">
              <Image
                src="/img2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>


    </section>
  );
}