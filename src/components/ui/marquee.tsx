"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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
    <section className="relative max-w-screen p-4 border-t-2 border-b-2 border-white">
      <div
        className="relative text-2xl font-bold overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <div ref={marqueeRef} className="inline-block">
          <span className="mx-2">
            - A man can{`'`}t have enought basement. swag
          </span>
          <span className="mx-2">
            -- A man can{`'`}t have enought basement. swag
          </span>
        </div>
      </div>

      <Image
        src="/marquee-shape.svg"
        alt=""
        className="absolute left-20"
        width={100}
        height={100}
      />
      <Image
        src="/marquee-shape2.svg"
        alt=""
        className="absolute right-24 bottom-8"
        width={100}
        height={100}
      />
    </section>
  );
}
