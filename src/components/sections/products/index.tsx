import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-8">
        <a href="#" className="overflow-hidden min-h-min">
          <div className="relative h-auto w-auto aspect-auto border-b-4 border-white bg-[linear-gradient(to_top,_#111,_#000)]">
            <Image src="/products/tee.webp" alt="" width={800} height={800} />
          </div>

          <div className="pt-3 font-medium">
            <div className="flex items-center justify-between">
              <p className="tracking-wide">Black t-shirt</p>

              <p>$7.95</p>
            </div>
          </div>
        </a>
        <a href="#" className="overflow-hidden min-h-min">
          <div className="relative h-auto w-auto aspect-auto border-b-4 border-white bg-[linear-gradient(to_top,_#111,_#000)]">
            <Image
              src="/products/hoodie.webp"
              alt=""
              width={800}
              height={800}
            />
          </div>

          <div className="pt-3 font-medium min-h-min">
            {" "}
            <div className="flex items-center justify-between">
              <p className="tracking-wide">Black t-shirt</p>

              <p>$7.95</p>
            </div>
          </div>
        </a>
        <a href="#" className="overflow-hidden">
          <div className="relative h-auto w-auto aspect-auto border-b-4 border-white bg-[linear-gradient(to_top,_#111,_#000)]">
            <Image src="/products/cap.webp" alt="" width={800} height={800} />
          </div>

          <div className="pt-3 font-medium">
            <div className="flex items-center justify-between">
              <p className="tracking-wide">Black t-shirt</p>

              <p>$7.95</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
