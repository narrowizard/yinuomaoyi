// 首页：引言条 + 商品瀑布流（壳布局见 routes/_shell.tsx）
import { HeroBand } from "@/components/HeroBand";
import { MasonryGrid } from "@/components/MasonryGrid";
import { PRODUCTS } from "@/data/products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/")({
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <HeroBand />

      <section
        id="collection"
        className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-5 sm:mb-14">
          <h2 className="display-title text-xl sm:text-3xl">The Collection</h2>
          <p className="mono-label shrink-0 pb-1 text-ink-mute">
            {PRODUCTS.length} Styles · In Stock
          </p>
        </div>

        <MasonryGrid products={PRODUCTS} />
      </section>
    </>
  );
}
