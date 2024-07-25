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
          <Button className="rounded-full font-bold border px-8">
            Cart (0)
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black">
          <SheetHeader>
            <SheetTitle>
              <h3 className="text-6xl text-center text-white mt-8">
                {" "}
                YOUR CART
              </h3>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
