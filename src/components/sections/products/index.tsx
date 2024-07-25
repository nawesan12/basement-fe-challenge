import Product from "@/components/ui/product";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="p-4 font-semibold">
      <div className="mx-auto py-8 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <Product />

          <li>
            <a href="#" className="group block overflow-hidden">
              <section className="bg-[linear-gradient(to_top,#111,#000)]">
                <Image
                  src="/products/hoodie.webp"
                  alt=""
                  width={600}
                  height={600}
                  className="h-[350px] border-b-4 border-white mb-2 w-full object-contain transition duration-500 sm:h-[450px]"
                />
              </section>

              <div>
                <p className="flex justify-between">
                  <span className=""> Black hoodie </span>

                  <span className="tracking-wider"> $13 </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <section className="bg-[linear-gradient(to_top,#111,#000)]">
                <Image
                  src="/products/cap.webp"
                  alt=""
                  width={600}
                  height={600}
                  className="h-[350px] border-b-4 border-white mb-2 w-full object-contain transition duration-500 sm:h-[450px]"
                />
              </section>

              <div>
                <p className="flex justify-between">
                  <span> Black cap </span>

                  <span className="tracking-wider"> $23 </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
