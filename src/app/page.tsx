import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import ProductsSection from "@/components/sections/products";
import Header from "@/components/ui/header";
import OG from "@/components/ui/OG";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="text-white">
      <Toaster />
      <OG />
      <Header />
      <Hero />
      <ProductsSection />
      <Footer />
    </main>
  );
}
