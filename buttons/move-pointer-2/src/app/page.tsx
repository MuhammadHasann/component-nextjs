"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const spanVariants = {
  center_top: {
    top: ["50%", "25%"],
    opacity: [1, 0],
  },
  bottom_center: {
    top: ["75%", "50%"],
    opacity: [0, 1],
  },
};

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textbuttonRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cursorX = useMotionValue<number>(0);
  const cursorY = useMotionValue<number>(0);

  const pointer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, element: HTMLButtonElement | null) => {
    if (element) {
      const rect = element.getBoundingClientRect();

      const deltaX = rect.left + rect.width / 2;
      const deltaY = rect.top + rect.height / 2;

      cursorX.set((e.clientX - deltaX) / 2);
      cursorY.set((e.clientY - deltaY) / 2);
    }
  };

  useEffect(() => {
    if (textbuttonRef.current) {
      document.documentElement.style.setProperty("--tw-width-text_button", `${textbuttonRef.current.clientWidth}px`);
      document.documentElement.style.setProperty("--tw-height-text_button", `${textbuttonRef.current.clientHeight}px`);
    }
  }, [textbuttonRef]);

  return (
    <section className="flex justify-center items-center w-full h-dvh bg-gradient-radial">
      <motion.button
        ref={buttonRef}
        className="size-button button overflow-clip relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={(e) => pointer(e, buttonRef.current)}
        onMouseLeave={() => {
          cursorX.set(0);
          cursorY.set(0);
        }}
        style={{
          x: cursorX,
          y: cursorY,
          transition: "0.3s linear",
        }}
        //
      >
        <motion.span
          ref={textbuttonRef}
          className="absolute-center text-lg font-semibold text-light text-nowrap"
          animate={isHovered ? "center_top" : "bottom_center"}
          variants={spanVariants}
          //
        >
          Get started now
        </motion.span>
        <motion.span
          className="absolute-center text-lg font-semibold text-light text-nowrap"
          animate={isHovered ? "bottom_center" : "center_top"}
          variants={spanVariants}
          //
        >
          Get started now
        </motion.span>
      </motion.button>
    </section>
  );
}
