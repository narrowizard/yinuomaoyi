import { BRAND } from "@/data/products";

/** About 锚点区块：店铺介绍 + 地址 + 版权行 */
export function SiteFooter() {
  return (
    <footer id="about" className="scroll-mt-24 border-t border-hairline bg-paper-sunk">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <p className="mono-label reveal mb-8">About the shop</p>

        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[1.4fr_1fr]">
          <h2 className="display-title reveal max-w-[24ch] text-2xl leading-[1.15] sm:text-[2.25rem]">
            A Yiwu sourcing desk for knit sweatpants and{" "}
            <span className="italic text-clay">coordinated</span> track sets.
          </h2>

          <div className="reveal">
            <p className="mono-label mb-3 text-clay">Address</p>
            <p className="whitespace-pre-line text-[0.8125rem] leading-6 text-ink-soft">
              {BRAND.address}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={BRAND.logoUrl}
              alt=""
              aria-hidden
              className="h-6 w-auto opacity-80"
            />
            <span className="brand-wordmark text-[0.5625rem] sm:text-[0.625rem]">
              {BRAND.name}
            </span>
          </div>
          <p className="mono-label text-ink-mute">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
