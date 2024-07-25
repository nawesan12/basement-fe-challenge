"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OG() {
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(imageRef.current, {
        y: -window.innerHeight, // Move up by the height of the screen
        duration: 1, // Duration of the animation in seconds
        opacity: 0, // Fade out
      });
    }, 2000);
  }, []);
  return (
    <section className="h-screen grid place-items-center fixed" ref={imageRef}>
      <Image
        src="/OG.webp"
        alt="Basement Studio Supply"
        className="flicker-2 max-h-screen aspect-video"
        width={1920}
        height={1080}
      />
    </section>
  );
}
