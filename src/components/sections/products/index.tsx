import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="p-4">
      <div className="mx-auto py-8 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <li>
            <a href="#" className="group block overflow-hidden">
              <Image
                src="/products/tee.webp"
                alt=""
                width={600}
                height={600}
                className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <p>
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <Image
                src="/products/hoodie.webp"
                alt=""
                width={600}
                height={600}
                className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <p>
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <Image
                src="/products/cap.webp"
                alt=""
                width={600}
                height={600}
                className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <p>
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
