"use client";
import Product from "@/components/ui/product";
import products from "@/lib/store/products.json"

export default function ProductsSection() {
  return (
    <section className="p-4 font-semibold">
      <div className="mx-auto py-8 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {products.map((product: any, index: number) => (
            <Product key={index} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
