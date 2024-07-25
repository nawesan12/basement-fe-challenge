import Image from "next/image";
import { Button } from "./button";

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
      <Button className="rounded-full font-bold border-white border px-8">
        Cart (0)
      </Button>
    </header>
  );
}
