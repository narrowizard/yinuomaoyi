import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/products";

const NAV = [
  { label: "Collection", hash: "#collection" },
  { label: "About", hash: "#about" },
];

/** 吸顶品牌栏：CP logo + 店名（细字重大字距全大写） */
export function SiteHeader() {
  const [lifted, setLifted] = useState(false);
  const [logoBroken, setLogoBroken] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        lifted
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1600px] items-center gap-3 px-5 sm:h-24 sm:gap-5 sm:px-8 lg:px-12">
        {/* Logo */}
        {logoBroken ? (
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink font-display text-[0.8125rem] tracking-[0.08em] sm:size-11 sm:text-base">
            {BRAND.mark}
          </span>
        ) : (
          <img
            src={BRAND.logoUrl}
            alt={`${BRAND.name} logo`}
            width={132}
            height={72}
            onError={() => setLogoBroken(true)}
            className="h-8 w-auto shrink-0 sm:h-11"
          />
        )}

        <span className="hidden h-8 w-px bg-hairline sm:block" aria-hidden />

        {/* 店名 */}
        <div className="min-w-0 flex-1">
          <h1 className="brand-wordmark truncate text-[0.6875rem] sm:text-[0.9375rem] lg:text-base">
            {BRAND.name}
          </h1>
          <p className="mono-label mt-1 hidden truncate text-[0.5rem] sm:block">
            {BRAND.tagline}
          </p>
        </div>

        {/* 锚点导航 */}
        <nav className="flex shrink-0 items-center gap-5 sm:gap-8">
          {NAV.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className="story-link mono-label hidden text-ink transition-colors duration-300 hover:text-clay sm:inline-block"
            >
              {item.label}
            </a>
          ))}
          <a href="#collection" className="mono-label text-ink sm:hidden">
            Index
          </a>
        </nav>
      </div>
    </header>
  );
}
