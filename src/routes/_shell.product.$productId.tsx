// 商品详情页：/product/:productId
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCTS, getAdjacentProducts } from "@/data/products";
import { ProductGallery } from "@/components/ProductGallery";
import { SpecTable } from "@/components/SpecTable";

export const Route = createFileRoute("/_shell/product/$productId")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-[7rem] pb-24 text-center sm:px-8 sm:pt-32">
      <p className="mono-label mb-4 text-clay">Style not found</p>
      <h1 className="display-title text-3xl sm:text-4xl">这款暂未陈列</h1>
      <Link
        to="/#collection"
        className="story-link mono-label mt-8 inline-block text-ink"
      >
        ← Back to collection
      </Link>
    </section>
  );
}

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const { prev, next } = getAdjacentProducts(product.id);

  return (
    <article className="pt-[4.5rem] sm:pt-24">
      {/* 面包屑 */}
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-5 pt-6 sm:px-8 lg:px-12">
        <Link
          to="/#collection"
          className="story-link mono-label inline-flex items-center gap-2 text-ink-mute transition-colors duration-300 hover:text-clay"
        >
          <ArrowLeft className="size-3" aria-hidden />
          Collection
        </Link>
        <span className="text-ink-mute" aria-hidden>
          /
        </span>
        <span className="mono-label truncate text-ink">{product.nameEn}</span>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-16 pt-6 sm:px-8 sm:pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-12">
        {/* 左：实拍图 */}
        <ProductGallery product={product} />

        {/* 右：文案与规格 */}
        <div>
          <p className="mono-label reveal text-clay">{product.category}</p>
          <h1 className="display-title reveal mt-4 text-[2rem] leading-[1.08] sm:text-[2.75rem]">
            {product.nameEn}
          </h1>
          <p className="han-note reveal mt-3 text-lg text-ink-soft">
            {product.nameCn}
          </p>
          <p className="mono-label reveal mt-6 border-t border-hairline pt-6 text-ink-mute">
            {product.kicker}
          </p>

          <div className="reveal mt-6 space-y-4">
            {product.story.map((para: string) => (
              <p key={para} className="text-sm leading-7 text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          {/* 要点 */}
          <ul className="reveal mt-8 space-y-3 border-t border-hairline pt-8">
            {product.highlights.map((point: string, i: number) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-ink">
                <span className="mono-label shrink-0 pt-0.5 text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* 颜色与尺码 */}
          <div className="reveal mt-8 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2">
            <div>
              <p className="mono-label mb-3 text-clay">Colours</p>
              <ul className="space-y-2">
                {product.colors.map((color: string) => (
                  <li
                    key={color}
                    className="flex items-center gap-2.5 text-sm text-ink"
                  >
                    <span
                      aria-hidden
                      className="size-2.5 rounded-full border border-hairline bg-[var(--swatch)]"
                      style={{ "--swatch": swatchOf(color) } as React.CSSProperties}
                    />
                    {color}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label mb-3 text-clay">Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <span
                    key={size}
                    className="mono-label grid min-w-11 place-items-center border border-hairline px-3 py-2 text-ink-soft"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <SpecTable specs={product.specs} />

          {/* 洗护 */}
          <div className="reveal mt-8 border-t border-hairline pt-8">
            <p className="mono-label mb-3 text-clay">Care</p>
            <p className="text-sm leading-7 text-ink-soft">{product.care}</p>
          </div>

          {/* 贸易信息（无价格） */}
          <div className="reveal mt-8 border-t border-hairline pt-8">
            <p className="mono-label mb-3 text-clay">Trade terms</p>
            <p className="text-sm leading-7 text-ink-soft">
              支持现货批发与来样定制，可混色混码拼单；发货前逐件质检并拍照确认。
              具体起订量与交期请到店面谈或电话询价。
            </p>
          </div>
        </div>
      </div>

      {/* 上一款 / 下一款 */}
      <nav
        aria-label="相邻商品"
        className="mx-auto max-w-[1600px] border-t border-hairline px-5 py-8 sm:px-8 lg:px-12"
      >
        <div className="flex items-stretch justify-between gap-4">
          {prev ? (
            <Link
              to="/product/$productId"
              params={{ productId: prev.id }}
              className="group/nav flex min-w-0 flex-1 items-center gap-3 text-left"
            >
              <ArrowLeft
                className="size-4 shrink-0 text-ink-mute transition-transform duration-300 group-hover/nav:-translate-x-1 group-hover/nav:text-clay"
                aria-hidden
              />
              <span className="min-w-0">
                <span className="mono-label block text-ink-mute">Previous</span>
                <span className="brand-wordmark mt-1 block truncate text-[0.6875rem] text-ink">
                  {prev.nameEn}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next && (
            <Link
              to="/product/$productId"
              params={{ productId: next.id }}
              className="group/nav flex min-w-0 flex-1 items-center justify-end gap-3 text-right"
            >
              <span className="min-w-0">
                <span className="mono-label block text-ink-mute">Next</span>
                <span className="brand-wordmark mt-1 block truncate text-[0.6875rem] text-ink">
                  {next.nameEn}
                </span>
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-ink-mute transition-transform duration-300 group-hover/nav:translate-x-1 group-hover/nav:text-clay"
                aria-hidden
              />
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

/** 按颜色名给出色卡底色，仅用于视觉提示 */
function swatchOf(color: string): string {
  const c = color.toLowerCase();
  if (c.includes("黑")) return "oklch(0.2 0.01 60)";
  if (c.includes("藏青")) return "oklch(0.3 0.07 265)";
  if (c.includes("深灰")) return "oklch(0.42 0.01 265)";
  if (c.includes("浅灰") || c.includes("花灰") || c.includes("麻灰"))
    return "oklch(0.75 0.01 265)";
  if (c.includes("燕麥") || c.includes("燕麦") || c.includes("卡其"))
    return "oklch(0.78 0.03 85)";
  if (c.includes("焦糖")) return "oklch(0.62 0.09 65)";
  if (c.includes("米白") || c.includes("乳白")) return "oklch(0.94 0.012 85)";
  if (c.includes("白")) return "oklch(0.98 0.004 95)";
  return "oklch(0.85 0.01 90)";
}
