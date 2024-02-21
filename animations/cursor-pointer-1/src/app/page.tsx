"use client";

import React, { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const pointer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;

    const { top, left }: DOMRect = containerRef.current.getBoundingClientRect();

    const cursorX: number = e.clientX - left;
    const cursorY: number = e.clientY - top;

    document.documentElement.style.setProperty("--positionX", `${cursorX}px`);
    document.documentElement.style.setProperty("--positionY", `${cursorY}px`);
  };

  return (
    <section className="w-full bg-white">
      <div
        ref={containerRef}
        className="overflow-hidden relative w-full h-dvh bg-black
                  after:content-[''] after:absolute after:top-[--positionY] after:-translate-y-1/2 after:left-[--positionX] after:-translate-x-1/2 after:hidden after:w-20 after:h-20 after:bg-purple-400 after:rounded-full after:blur-2xl after:duration-100 after:ease-linear
                  hover:after:block"
        onMouseMove={pointer}
      ></div>
    </section>
  );
}
