"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Marquee() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    // Levitation effect for the images
    gsap.to(imageRef1.current, {
      y: -17, // Move up by 10 pixels
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation direction
      ease: "power1.inOut", // Smooth easing
      duration: 2, // Duration of each half of the animation
    });

    gsap.to(imageRef2.current, {
      y: -20, // Move up by 10 pixels
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation direction
      ease: "power1.inOut", // Smooth easing
      duration: 2, // Duration of each half of the animation
      delay: 1, // Add a delay to desynchronize the animations
    });

    // Infinite marquee effect
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    //@ts-ignore
    const marqueeWidth = marquee.scrollWidth;

    // Create a clone of the marquee content
    //@ts-ignore
    const clone = marquee.cloneNode(true);
    //@ts-ignore
    container.appendChild(clone);

    gsap.set([marquee, clone], { display: "inline-block" });

    gsap.to(container, {
      x: -marqueeWidth,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % marqueeWidth}px`, // Ensure smooth looping
      },
    });
  }, []);

  return (
    <section className="relative max-w-screen p-4 border-t-2 border-b-2 border-white">
      <div
        className="relative text-2xl font-bold whitespace-nowrap"
        ref={containerRef}
      >
        <div ref={marqueeRef} className="inline-block">
          <span className="mx-2">
            - A man can{`'`}t have enough basement. swag
          </span>
        </div>
      </div>

      <Image
        src="/marquee-shape.svg"
        alt=""
        ref={imageRef1}
        className="absolute z-20 left-20 object-contain size-[10vw] md:size-[11vw] lg:size-[11vw]"
        width={120}
        height={120}
      />
      <Image
        src="/marquee-shape2.svg"
        alt=""
        ref={imageRef2}
        className="absolute z-20 right-24 bottom-8 object-contain  size-[10vw] md:size-[11vw] lg:size-[11vw]"
        width={120}
        height={120}
      />
    </section>
  );
}
