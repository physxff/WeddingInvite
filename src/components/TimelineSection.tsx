"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  { time: "15:30", title: "Сбор гостей" },
  { time: "16:00", title: "Церемония регистрации" },
  { time: "17:00", title: "Банкет" },
  { time: "23:00", title: "Завершение вечера" },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const ribbonPath =
    "M-2523.024 46.635C332.933 1167.327-1013.074-937.328 1497.969 559.981 2177.7362 1002.37 2211.8392 199.43 2806.4898 362.3792 3235.7174 558.9942 3059.3628 882.3116 3027.2482 1225.941 3038.1096 1353.2608 3091.4108 1397.0154 3214.3656 1403.8492 3326.8904 1396.2194 3374.623 1284.0484 3346.7786 1192.5612 3291.8868 1103.4606 3237.4426 1080.774 3120.8458 1124.1446 2960.7782 1207.7862 3057.399 1538.295 3305.796 1833.8406 3390.512 1930.5058 3384.2818 2133.0898 3208.7958 2133.0958 3098.8914 2130.4988 3068.7592 2064.9946 3083.1712 1974.5978 3119.854 1873.7204 3218.1108 1867.17 3273.1344 1910.4032 3391.5284 2017.3224 3286.0914 2135.7842 3307.984 2665.947 3309.0448 2736.5714 3279.3646 2774.2028 3223.911 2775.2414 3147.0318 2776.8774 3113.3452 2722.7742 3114.6166 2665.947 3126.615 2598.2338 3178.6782 2575.7756 3225.5926 2580.1936 3317.5096 2609.4622 3314.447 2656.4212 3305.2598 2783.003 3284.2974 2918.1436 3199.9262 2977.3868 3144.5294 3399.529 3136.2688 3473.8692 3144.3286 3496.809 3183.388 3518.5082 3257.165 3535.8684 3296.2244 3497.4286 3295.6048 3450.9306 3292.505 3396.3714 3270.8058 3360.4118 3208.187 3365.9928 3139.3688 3378.3916 3117.6732 3454.8398 3143.0142 3532.7218 3180.2132 3649.9034 3275.0082 3660.9766 3350.8008 3645.4338 3670.2954 3581.769 3730.0786 3899.827 4139.3104 3706.228 4234.9982 3858.2888 4597.6748 3789.2266 4553.4644 3554.039 4298.9726 4076.1372 5243.552 3245.5364 5716.584 3676.527 5851.34 3793.828 5301.83 3767.175 5594.508 3327.947 5747.871 3072.974 6234.738 3151.66 6392.11 3569.677c24.194 82.887 127.662 162.413 326.369 135.18 211.144-41.426 128.4-256.172-10.69-252.57-122.944 4.01-188.426 208.47 8.658 253.294 455.676 167.358 930.336 122.152 1097.032 93.898 228.854-36.73 146.918-307.964-45.206-276.884-172.832 23.05-159.468 286.31 36.072 284.505C8121.814 3801.375 8385.99 3790.786 8529.622 3411.994"
  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-3xl">

        <p className="mb-20 text-center text-sm uppercase tracking-[0.4em] text-neutral-500">
          ПРОГРАММА ДНЯ
        </p>

        <div className="relative">

          {/* ЛЕНТА */}
          <div
            className="
              absolute
              left-[-4765px]
              top-[-520px]
              h-[1800px]
              w-[9970px]
              pointer-events-none
            "
          >
            <svg
              viewBox="-16000 -1100 40000 7000"
              className="h-full w-full"
              preserveAspectRatio="xMinYMin meet"
            >
              <motion.path
                d={ribbonPath}
                fill="none"
                stroke="#c81d25"
                strokeWidth={35}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* ТАЙМЛАЙН */}
          <div className="relative z-10 space-y-28 pl-16 md:pl-24">

            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <p className="text-4xl font-light">
                  {event.time}
                </p>

                <p className="mt-2 text-lg md:text-xl">
                  {event.title}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}