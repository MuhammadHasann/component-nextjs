"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Copyright from "@/components/Copyright";
import Category from "@/components/category/Category";

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
      <Category />
      <Copyright />
    </>
  );
}
