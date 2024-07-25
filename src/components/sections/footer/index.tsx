import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto grid place-items-center">
      <h3 className="text-[14vw] font-bold leading-none flex flex-col max-w-min">
        <span className="flex items-center gap-6 justify-end">
          <Image
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
