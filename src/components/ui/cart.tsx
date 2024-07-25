import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "./sheet";
import CartProduct from "./cart-product";

export default function Cart() {

  return (
    <SheetContent className="bg-black p-0">
      <SheetHeader>
        <SheetTitle>
          <h3 className="text-7xl text-center px-2 text-white mt-20 whitespace-nowrap">
            {" "}
            YOUR &nbsp;
            <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
              CART
            </span>
          </h3>
        </SheetTitle>
      </SheetHeader>

      <section className="cart-content p-4 min-h-96">
        <CartProduct />
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
  )
}