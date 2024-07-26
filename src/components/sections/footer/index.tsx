import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto grid place-items-center">
      <section>
        <Image
          src="/footer-text.svg"
          className="w-screen max-w-screen p-4"
          alt=""
          width={1000}
          height={1000}
        />
        {/* <h3 className="text-[14vw] font-bold leading-none flex flex-col max-w-min">
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
        </h3> */}
      </section>

      {/* <section className="border-t-2 mt-4 border-white w-full p-4 lg:grid-cols-6 ">
        <section className="grid-cols-3 ">
          <h2>basement.</h2>
          <Image src="/globe.png" alt="" width={100} height={100} />
          <div className="">
            <span>
              ENOUGH ABOUT US,{" "}
              <span className="underline">TELL US ABOUT YOU</span>{" "}
            </span>
            <span>WE ARE THE BASEMENT</span>
          </div>
          &copy; basement.studio &reg; all rights reserved.
        </section>
        <section></section>
      </section> */}
    </footer>
  );
}
