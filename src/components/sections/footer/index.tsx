"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Footer() {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the image
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut",
    });
  }, []);

  return (
    <footer className="mx-auto grid place-items-center">
      <h3 className="text-[14vw] font-bold leading-none flex flex-col max-w-min">
        <span className="flex items-center gap-6 justify-end">
          <Image
            ref={imageRef}
            src="/footer-waves.webp"
            alt=""
            width={200}
            height={200}
            className="w-[20vw] aspect-video relative bottom-4 right-4"
          />
          WEAR
        </span>
        <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
          EVERYDAY
        </span>
      </h3>
    </footer>
  );
}
