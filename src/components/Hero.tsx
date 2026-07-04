"use client";

import { motion } from "framer-motion";
import Handwriting from "./Handwriting";
import { caveat, hand } from "@/lib/fonts";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mb-10 text-lg tracking-[0.3em] uppercase"
      >
        Она сказала
      </motion.p>

      <div className="mb-10 flex w-full justify-center">
        <Handwriting />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-4 w-full max-w-5xl px-8"
      >
        <div className="ml-auto w-fit text-right">

          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Приглашение на свадьбу
          </p>
          </div>
      </motion.div>
          
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-4 w-full max-w-5xl px-8"
      >
        <div className="ml-auto w-fit text-right">
          <p
            className={`${hand.className} mt-2 text-5xl md:text-7xl leading-none`}
          >
            Даниила 
          </p>
        </div>
      </motion.div>  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="mt-0 w-full max-w-5xl px-8"
      >
        <div className="ml-auto w-fit text-right">   
              <p
                className={`${hand.className} mt-0 text-5xl md:text-7xl leading-none`}
              >
                и Виктории
              </p>
              </div> 
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="mt-0 w-full max-w-5xl px-8"
          >
            <div className="ml-auto w-fit text-right">
              <p
                className="mt-2 text-lg md:text-xl font-bold tracking-wide"
                style={{ color: "#c81d25" }}
              >
                26.08.2026
              </p>
              </div>
      </motion.div>
      
    </section>
  );
}