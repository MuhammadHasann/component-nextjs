"use client";

import { Lora } from "next/font/google";
import { useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  const svgText = useRef<HTMLDivElement>(null);
  const texts = useRef<Array<SVGTextPathElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: svgText,
    offset: ["start end", "end end"],
  });
  const springScrollYProgress = useSpring(scrollYProgress);

  useEffect(() => {
    springScrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        if (text) {
          text.setAttribute("startOffset", `${-40 + i * 40 + e * 50}%`);
        }
      });
    });
  });

  return (
    <>
      <section className="flex justify-center items-center w-full h-dvh bg-light">
        <span className="text-xl font-semibold text-dark">scroll down</span>
      </section>
      <section ref={svgText} className={`${lora.className} flex justify-center items-center w-full h-dvh bg-light`}>
        <svg viewBox="0 0 1228 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="curve" d="M0 375.5C345 375.5 364.182 115 614 115C863.818 115 927 375.5 1228 375.5" stroke="none" />
          <text className="text-4xl font-semibold fill-dark uppercase">
            {[...Array(3)].map((_, i) => (
              <textPath key={i} ref={(ref) => (texts.current[i] = ref)} href="#curve" startOffset={i * 35 + "%"}>
                Quick brown fox jumps
              </textPath>
            ))}
          </text>
        </svg>
      </section>
    </>
  );
}
