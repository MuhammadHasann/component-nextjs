"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Component from "@/components/Component";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-[50dvh] bg-dark">
        <h1 className="text-5xl font-semibold text-light text-center">Parallax Zoom Image</h1>
        <span className="text-sm text-gray-500">with Framer Motion</span>
      </section>
      <Component />
      <section className="flex flex-col justify-center items-center w-full h-dvh bg-dark">
        <span className="text-sm text-gray-500">done</span>
      </section>
    </>
  );
}
