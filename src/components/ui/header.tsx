import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <span>basement.</span>
      <div className="flex gap-4 items-center">
        <Image src="/icons/circle.svg" alt="" width={22} height={22} />
        <Image src="/icons/hd.svg" alt="" width={44} height={24} />
        <Image src="/icons/eye.svg" alt="" width={80} height={20} />
        <Image src="/icons/4k.svg" alt="" width={44} height={24} />
        <Image src="/icons/warning.svg" alt="" width={22} height={22} />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full font-bold border">Cart (0)</Button>
        </SheetTrigger>
        <SheetContent className="bg-black p-0">
          <SheetHeader>
            <SheetTitle>
              <h3 className="text-8xl text-center text-white mt-20 whitespace-nowrap">
                {" "}
                YOUR &nbsp;
                <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
                  CART
                </span>
              </h3>
            </SheetTitle>
          </SheetHeader>

          <section className="cart-content p-4 min-h-96">
            <article className="p-4 border border-white grid grid-cols-12">
              <div className="bg-[linear-gradient(to_top,#111,#000)] p-4 size-44 aspect-square col-span-4">
                <Image
                  src="/products/hoodie.webp"
                  className=""
                  alt=""
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
                  <div className="col-span-1 text-3xl font-bold">$12,50</div>
                </div>
              </div>
            </article>
          </section>

          <SheetFooter>
            <section className="border-t border-white w-full flex justify-between">
              <div className="font-bold py-4 px-8 grid text-3xl text-white">
                TOTAL: $37,50
              </div>
              <span className="text-black py-4 px-8 font-bold text-3xl [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] border-l border-l-white gap-4">
                CHECKOUT
              </span>
            </section>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
