"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const variants = {
  close: {
    scale: [1, 0.8],
    opacity: [1, 0],
  },
  open: {
    scale: [0.8, 1],
    opacity: [0, 1],
  },
};

const Subscription = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const subscriptionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: subscriptionRef,
  });

  useEffect(() => {
    const onChange = (e: number) => {
      setAnimate(e >= 0.8);
    };

    const unsubscribe = scrollYProgress.on("change", onChange);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={subscriptionRef} className="flex justify-center items-center w-full h-[101vh] bg-light">
      <motion.div
        className="flex flex-col gap-5"
        animate={animate ? "open" : "close"}
        variants={variants}
        transition={{
          type: "spring",
          bounce: 0.5,
          stiffness: 75,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <span className={`${lora.className} text-xl font-medium text-dark`}>Get on the waitlist to stay in the loop.</span>
        <div className="flex items-center gap-5">
          <input
            type="email"
            className="py-3 px-5 bg-dark text-sm text-light rounded-full 
                      transition-all duration-300 ease-in-out
                    placeholder:text-gray-500
                      focus-visible:bg-light focus-visible:text-dark focus-visible:border-dark"
            placeholder="your@email.com"
          />
          <button
            className="py-3 px-5 bg-light text-sm font-medium text-dark rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                      hover:bg-dark hover:text-light"
          >
            Get notified
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscription;
