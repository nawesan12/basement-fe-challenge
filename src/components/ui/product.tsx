import Image from "next/image";

export default function Product() {
  return (
    <li>
      <a href="#" className="group block overflow-hidden">
        <section className="relative bg-[linear-gradient(to_top,#111,#000)]">
          <Image
            src="/products/tee.webp"
            alt=""
            width={600}
            height={600}
            className="h-[350px] border-b-4 border-white mb-2 w-full object-contain transition duration-500 sm:h-[450px]"
          />
          <button className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] absolute inset-0 flex items-center justify-center text-4xl font-bold bg-black bg-opacity-50 transition opacity-0 group-hover:opacity-100">
            <span className="absolute z-10">
              <Image
                src="/globe.png"
                alt=""
                width={200}
                height={200}
                className="z-10"
              />
            </span>
            <span className="relative z-20">ADD TO CART</span>
          </button>
        </section>

        <div>
          <p className="flex justify-between">
            <span>Black t-shirt</span>
            <span className="tracking-wider">$7.95</span>
          </p>
        </div>
      </a>
    </li>
  );
}
