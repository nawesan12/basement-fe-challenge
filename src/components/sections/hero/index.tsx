import Image from "next/image";

export default function Hero() {
  return (
    <main className="py-4">
      {/* 
      I CODED THE SOLUTION BEFORE LOOKING AT THE ASSETS FIGMA PAGE AAAA
      <h1 className="text-[14vw] font-bold text-center leading-none ">
        BASEMENT{" "}
        <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] flex items-center justify-center w-full gap-4">
          <span className="text-[2vw] text-white [text-shadow:none] font-normal border border-white px-8 py-4 rounded-[100%]">
            EST
          </span>
          SUPPLY
          <span className="text-[2vw] text-white [text-shadow:none] font-normal border border-white px-8 py-4 rounded-[100%]">
            2K19
          </span>
        </span>
      </h1> */}
      <Image
        src="/header-text.svg"
        alt=""
        className="max-w-screen w-screen p-4"
        width={1000}
        height={1000}
      />
    </main>
  );
}
