import Image from "next/image";

export default function CartProduct() {
    return (
        <article className="p-4 border border-white grid grid-cols-12">
          <div className="bg-[linear-gradient(to_top,#111,#000)] p-4 size-44 aspect-square col-span-4">
            <Image
              src="/products/hoodie.webp"
              className=""
              alt="Basement Studio"
              width={600}
              height={600}
            />
          </div>

          <div className="col-span-8 font-bold flex flex-col justify-between text-white">
            <div>
              <h4 className="text-3xl">BLACK T-SHIRT</h4>
              <h5 className="opacity-70 font-bold">
                Unisex Basic Softstyle T-Shirt
              </h5>
            </div>

            <div className="grid grid-cols-4 grid-rows-2">
              <div className="col-span-4 row-span-1 text-lg flex items-center gap-2">
                <p>QUANTITY:</p>
                <div className="quantifier border border-white px-2 py-1 rounded-full text-lg font-bold max-w-min flex gap-4">
                  <button>-</button>3<button>+</button>
                </div>
              </div>
              <div className="col-span-3 row-span-1 text-lg flex items-center gap-2">
                <p>SIZE:</p>
                <ul className="flex">
                  <li>
                    <button className="border-white focus:border size-8 rounded-[100%]">
                      S
                    </button>
                  </li>
                  <li>
                    <button className="border-white focus:border size-8 rounded-[100%]">
                      M
                    </button>
                  </li>
                  <li>
                    <button className="border-white focus:border size-8 rounded-[100%]">
                      L
                    </button>
                  </li>
                  <li>
                    <button className="border-white focus:border size-8 rounded-[100%]">
                      XL
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 text-3xl font-bold pr-2">
                <p>
                  $12,50
                </p>

              </div>
            </div>
          </div>
        </article>
    )
}