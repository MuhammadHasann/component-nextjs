"use client";

import { useRef } from "react";

const Button = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pointer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!buttonRef.current) return;

    const { top, left }: DOMRect = buttonRef.current.getBoundingClientRect();

    const cursorX = e.clientX - left;
    const cursorY = e.clientY - top;

    document.documentElement.style.setProperty("--positionX", `${cursorX}px`);
    document.documentElement.style.setProperty("--positionY", `${cursorY}px`);
  };

  return (
    <button
      ref={buttonRef}
      className="overflow-clip relative py-3 px-8 w-fit min-w-32 h-fit bg-dark font-semibold text-light border border-light rounded-full transition duration-300 ease-in-out
                hover:scale-125
                before:content-[''] before:pointer-events-none before:absolute before:top-[--positionY] before:-translate-y-1/2 before:left-[--positionX] before:-translate-x-1/2 before:w-0 before:aspect-square before:bg-light before:rounded-full before:transition-[width] before:duration-300 before:ease-in-out
                hover:before:w-96"
      onMouseMove={pointer}
    >
      <span className="relative z-10 mix-blend-difference">Button</span>
    </button>
  );
};

export default Button;
