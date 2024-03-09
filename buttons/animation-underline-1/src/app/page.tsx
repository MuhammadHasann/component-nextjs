"use client";

import { motion } from "framer-motion";

const underlineVariants = {
  non: {
    x: "100%",
    scaleX: 0,
    transitionEnd: {
      x: "0%",
      scaleX: 0,
    },
  },
  active: {
    x: "0%",
    scaleX: 1,
  },
};

export default function Home() {
  return (
    <section className="flex justify-center items-center w-full h-dvh bg-gradient-radial">
      <motion.button
        className="cursor-pointer relative py-0.5"
        initial="non"
        animate="non"
        whileHover="active"
        //
      >
        <span className="text-2xl font-semibold text-light uppercase">Underline button</span>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-light origin-left"
          variants={underlineVariants}
          transition={{
            spring: false,
          }}
          //
        ></motion.div>
      </motion.button>
    </section>
  );
}
