"use client"
import Image from "next/image";
import useStore from "@/lib/store/products-store";
import { toast } from "sonner";

export default function Product({ product }: { product: any }) {
  const { products, addProductToCart } = useStore();

  function addToCart(product: any) {
    addProductToCart(product)
    toast.success("Product added to cart!")
    console.log(products)
  }
  return (
    <li className="h-3/4">
      <section className="group block overflow-hidden">
        <section className="relative bg-[linear-gradient(to_top,#111,#000)]">
          <Image
            src={product.image}
            alt=""
            width={600}
            height={600}
            className="border-b-4 border-white mb-2 h-full object-contain transition duration-500 sm:h-[450px]"
          />
          <button
            onClick={() => addToCart(product)}
            className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] absolute inset-0 flex items-center justify-center text-4xl font-bold bg-black bg-opacity-50 transition opacity-0 group-hover:opacity-100"
          >
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
            <span>{product.name}</span>
            <span className="tracking-wider">${product.price}</span>
          </p>
        </div>
      </section>
    </li>
  );
}
