import { BRAND } from "@/data/products";

const TICKER = [
  "Bottoms",
  "Sets",
  "Sweatpants",
  "Knitwear",
  "Streetwear",
  "In Stock",
];

/** 进店引言条：一句英文品牌主张 + 中文小注 + 品类走马灯 */
export function HeroBand() {
  return (
    <section className="relative overflow-hidden pt-[5.5rem] sm:pt-24">
      {/* 层叠暖调底纹 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 0%, var(--clay-soft) 0%, transparent 55%), radial-gradient(90% 70% at 95% 10%, var(--fabric-sage) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12">
        <p className="mono-label reveal mb-8 sm:mb-10">
          Vol. 01 — Autumn Selection
        </p>

        <h2 className="display-title max-w-[18ch] text-[2.5rem] leading-[0.98] sm:text-6xl lg:text-[5.25rem]">
          <span className="hero-line">
            <span style={{ animationDelay: "120ms" }}>Considered</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "260ms" }} className="italic text-clay">
              goods,
            </span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "400ms" }}>shipped well.</span>
          </span>
        </h2>

        <div className="mt-10 flex flex-col gap-8 border-t border-hairline pt-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
          <p className="han-note reveal max-w-[46ch] text-sm leading-7 text-ink-soft sm:text-[0.9375rem]">
            {BRAND.shortName}
            立足义乌产业带，专注针织卫裤与成套运动休闲服的选品与出口，
            支持现货批发与来样定制，发货前逐件质检。此处为当季在售款陈列。
          </p>
          <p className="mono-label reveal shrink-0 text-ink-mute">
            7 Pieces / 2 Categories
          </p>
        </div>
      </div>

      {/* 品类走马灯 */}
      <div className="relative border-y border-hairline bg-paper-raise py-3">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex shrink-0">
              {TICKER.map((word) => (
                <span
                  key={`${dup}-${word}`}
                  className="mono-label flex items-center gap-8 px-8 text-ink-mute"
                >
                  {word}
                  <span className="size-1 rounded-full bg-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
