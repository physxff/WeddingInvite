"use client";

import { motion } from "framer-motion";

export default function Ribbon1() {
  const path =
    "m3653.883 933.893C1524.244 1708.725 1858.313 205.457-197.081 994.209"
              return (
    <section className="flex justify-center -mt-24 mb-12">
      <svg
        viewBox="0 0 3200 1200"
        className="w-screen h-auto"
      >
        <motion.path
        d={path}
        fill="none"
        stroke="#c81d25"
        strokeWidth={80}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        
        whileInView={{ pathLength: 1 }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />
      </svg>
    </section>
  );
}