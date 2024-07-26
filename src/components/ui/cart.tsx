import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "./sheet";
import CartProduct from "./cart-product";

export default function Cart() {
  return (
    <SheetContent className="bg-black p-0 w-screen lg:h-3/4 md:h-full lg:w-2/4 md:w-3/4 flex flex-col justify-between">
      <SheetHeader>
        <SheetTitle>
          <h3 className="lg:text-7xl text-6xl text-center px-2 text-white mt-20 whitespace-nowrap">
            {" "}
            YOUR &nbsp;
            <span className="text-black [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
              CART
            </span>
          </h3>
        </SheetTitle>
      </SheetHeader>

      <section className="cart-content p-4 min-h-96 h-full overflow-y-auto overflow-x-hidden">
        <CartProduct />
      </section>

      <SheetFooter>
        <section className="border-t border-white w-full flex justify-between">
          <div className="font-bold py-4 px-6 lg:px-8 grid text-lg lg:text-3xl text-white whitespace-nowrap">
            TOTAL: $37,50
          </div>
          <span className="text-black py-4 px-6 lg:px-8 font-bold text-3xl [text-shadow:-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] border-l border-l-white gap-4">
            CHECKOUT
          </span>
        </section>
      </SheetFooter>
    </SheetContent>
  );
}
