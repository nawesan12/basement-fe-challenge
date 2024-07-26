import Image from "next/image";

export default function CartProduct({ product }: { product: any }) {
  return (
    <article className="p-4 border border-white grid grid-cols-6">
      <div className="bg-[linear-gradient(to_top,#111,#000)]  col-span-2">
        <Image
          src={product.image}
          className="max-h-60 object-contain"
          alt={`Basement Studio ${product.name}`}
          width={600}
          height={600}
        />
      </div>

      <div className="col-span-4 ml-2 font-bold flex flex-col justify-between text-white">
        <div>
          <h4 className="lg:text-3xl text-lg uppercase">{product.name}</h4>
          <h5 className="opacity-70 font-bold">
            {product.description}
          </h5>
        </div>

        <div className="grid grid-cols-4 grid-rows-2">
          <div className="col-span-4 row-span-1 text-lg flex items-center gap-2">
            <p>QUANTITY:</p>
            <div className="quantifier border border-white px-2 py-1 rounded-full text-sm lg:text-lg font-bold max-w-min flex gap-4">
              <button>-</button>1<button>+</button>
            </div>
          </div>
          <div className="col-span-3 row-span-1 text-lg flex items-center gap-2">
            <p>SIZE:</p>
            <ul className="flex gap-2">
              <li>
                <button className="border-white focus:border lg:size-8 rounded-[100%]">
                  S
                </button>
              </li>
              <li>
                <button className="border-white focus:border lg:size-8 rounded-[100%]">
                  M
                </button>
              </li>
              <li>
                <button className="border-white focus:border lg:size-8 rounded-[100%]">
                  L
                </button>
              </li>
              <li>
                <button className="border-white focus:border lg:size-8 rounded-[100%]">
                  XL
                </button>
              </li>
            </ul>
          </div>
          <p className="col-span-1 text-xl md:text-xl lg:text-2xl font-bold pr-2">
            ${product.price}
          </p>
        </div>
      </div>
    </article>
  );
}
