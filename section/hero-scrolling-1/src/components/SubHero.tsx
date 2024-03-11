"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const SubHero = () => {
  const subHeroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: subHeroRef,
    offset: ["-25vh start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={subHeroRef} className={`${lora.className} h-[150dvh] bg-light`}>
      <div className="sticky top-0 flex justify-center items-center w-full h-[75dvh]">
        <div className="w-fit h-fit">
          <motion.span
            className="inline-block text-xl font-medium text-dark text-center"
            style={{
              opacity,
            }}
          >
            <span className="font-light text-gray-600">Framer University</span> is on a mission to help <br />
            people build stunning websites with Framer
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
