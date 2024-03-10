"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import Picture1 from "../../public/assets/images/1.jpg";
import Picture2 from "../../public/assets/images/2.jpg";
import Picture3 from "../../public/assets/images/3.jpg";
import Picture4 from "../../public/assets/images/4.jpg";
import Picture5 from "../../public/assets/images/5.jpg";
import Picture6 from "../../public/assets/images/6.jpg";
import Picture7 from "../../public/assets/images/7.jpg";

const Component = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      width: "25vw",
      height: "25vh",
      position: {
        top: "0",
        left: "0",
      },
    },
    {
      src: Picture2,
      scale: scale5,
      width: "35vw",
      height: "30vh",
      position: {
        top: "-32.5vh",
        left: "5vw",
      },
    },
    {
      src: Picture3,
      scale: scale6,
      width: "20vw",
      height: "45vh",
      position: {
        top: "-10vh",
        left: "-25vw",
      },
    },
    {
      src: Picture4,
      scale: scale5,
      width: "25vw",
      height: "25vh",
      position: {
        top: "0",
        left: "27.5vw",
      },
    },
    {
      src: Picture5,
      scale: scale6,
      width: "20vw",
      height: "30vh",
      position: {
        top: "32.5vh",
        left: "5vw",
      },
    },
    {
      src: Picture6,
      scale: scale8,
      width: "30vw",
      height: "25vh",
      position: {
        top: "30vh",
        left: "-22.5vw",
      },
    },
    {
      src: Picture7,
      scale: scale9,
      width: "20vw",
      height: "20vh",
      position: {
        top: "27.5vh",
        left: "27.5vw",
      },
    },
  ];

  return (
    <section ref={parallaxRef} className="h-[300dvh]">
      <div className="overflow-clip sticky top-0 w-full h-dvh bg-light">
        {pictures.map((picture, i) => (
          <motion.div key={i} className="absolute flex justify-center items-center w-full h-full bg-transparent" style={{ scale: picture.scale }}>
            <div
              className="relative"
              style={{
                top: picture.position.top,
                left: picture.position.left,
                width: picture.width,
                height: picture.height,
              }}
            >
              <Image
                src={picture.src}
                alt="Image"
                fill
                sizes="(max-width: 640px) 100vw"
                placeholder="blur"
                className="object-cover"
                //
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Component;
