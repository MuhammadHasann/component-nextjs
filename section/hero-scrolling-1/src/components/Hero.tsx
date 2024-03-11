"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} className={`${lora.className} overflow-clip h-[200dvh] bg-light`}>
      <motion.div className="sticky top-0 flex flex-col justify-center items-center w-full h-dvh bg-gradient-radial" style={{ scale, opacity }}>
        <span className="text-4xl text-gray-400">
          Hello, my name is <span className="text-light font-semibold">noname.</span>
          <br />
          and I run <span className="text-light font-semibold">Framer Motion.</span>
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
