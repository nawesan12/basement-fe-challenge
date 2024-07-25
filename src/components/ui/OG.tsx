import Image from "next/image";

export default function OG() {
  return (
    <section className="h-screen grid place-items-center">
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
