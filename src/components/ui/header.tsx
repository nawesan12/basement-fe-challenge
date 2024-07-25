import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Cart from "./cart";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <span>basement.</span>
      <div className="gap-4 items-center hidden md:flex lg:flex">
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
        <Cart />
      </Sheet>
    </header>
  );
}
