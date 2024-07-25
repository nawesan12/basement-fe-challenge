"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    //@ts-ignore
    const marqueeWidth = marquee?.scrollWidth;

    // Clone the marquee content
    //@ts-ignore
    const clone = marquee?.cloneNode(true);
    //@ts-ignore
    container?.appendChild(clone);

    gsap.set(clone, { position: "absolute", top: 0, left: marqueeWidth });

    gsap.to(container, {
      x: -marqueeWidth,
      duration: 10,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        gsap.set(container, { x: 0 });
      },
    });
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden whitespace-nowrap"
      ref={containerRef}
    >
      <div ref={marqueeRef} className="inline-block absolute top-0">
        <span className="mx-2">Your scrolling text goes here. </span>
        <span className="mx-2">Your scrolling text goes here. </span>
        <span className="mx-2">Your scrolling text goes here. </span>
      </div>
    </div>
  );
}
