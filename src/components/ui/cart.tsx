import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "./sheet";
import CartProduct from "./cart-product";

export default function Cart() {
  return (
    <SheetContent className="bg-black p-0 w-screen lg:h-3/4 md:h-full lg:w-2/4 md:w-3/4 flex flex-col justify-between">
      <SheetHeader>
        <SheetTitle>
          <h3 className="hidden md:block lg:block lg:text-7xl md:text-6xl text-center leading-none px-2 text-white mt-20 whitespace-nowrap">
            YOUR{" "}
            <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
              CART
            </span>
          </h3>

          <h3 className="block md:hidden lg:hidden text-[30vw] text-center leading-none px-2 text-white mt-20">
            YOUR
            <span className="block text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
              CART
            </span>
          </h3>
        </SheetTitle>
      </SheetHeader>

      <section className="cart-content p-4 min-h-96 h-full overflow-y-auto overflow-x-hidden">
        <CartProduct />
      </section>

      <SheetFooter>
        <section className="lg:border-t border-white w-full flex-col lg:flex-row items-center text-center flex justify-between lg:border-b lg:border-l">
          <div className="font-bold py-4 px-6 lg:px-8 text-3xl text-white whitespace-nowrap flex w-full justify-between lg:justify-start lg:space-x-4">
            <span>TOTAL: </span>
            <span>$37,50</span>
          </div>

          <hr className="w-11/12 pt-4 block mx-auto lg:hidden" />
          <span className="text-black py-4 px-6 lg:px-8 font-bold text-6xl md:text-7xl text-center lg:text-3xl [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] lg:border-l border-l-white gap-4">
            CHECKOUT
          </span>
        </section>
      </SheetFooter>
    </SheetContent>
  );
}
