"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Subscription from "@/components/Subscription";
import Copyright from "@/components/Copyright";

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
      <Hero />
      <SubHero />
      <Subscription />
      <Copyright />
    </>
  );
}
