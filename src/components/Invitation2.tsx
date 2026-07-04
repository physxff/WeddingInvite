"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RingTransition from "./RingTransition";

export default function Invitation() {
  return (
    <section className="py-0">
      
      <div className="mx-auto max-w-5xl px-6">

        {/* Блок 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative mt-1.5"
        >
          <div className="max-w-3xl text-lg leading-9 md:text-2xl md:leading-[2.4rem]">
            <p>
              Будем счастливы видеть вас среди самых близких людей
              в этот особенный день.
            </p>
          </div>

          <div className="mt-12 md:absolute md:right-0 md:-top-12">
            <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl -rotate-2">
              <Image
                src="/img3.jpg"
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