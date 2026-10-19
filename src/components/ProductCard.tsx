import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/shop";

interface ProductCardProps {
  product: Product;
  /** 同列内的序号，用于滚动渐入的交错延迟 */
  index: number;
}

/**
 * 陈列卡片：图片 / 名字 / 简介三项信息。
 * 整卡为链接，点击进入该商品的详情页。
 */
export function ProductCard({ product, index }: ProductCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(product.url) && !failed;

  return (
    <article className="group/card mb-5 break-inside-avoid sm:mb-7">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        aria-label={`查看 ${product.nameCn} 详情`}
        className="card-figure relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
        style={{ aspectRatio: product.ratio }}
      >
        {showImage ? (
          <img
            src={product.url}
            alt={`${product.nameEn} ${product.nameCn}`}
            loading="lazy"
            decoding="async"
            data-loaded={loaded ? "true" : "false"}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cn("media-fade card-media", !loaded && "absolute inset-0")}
          />
        ) : (
          <div
            className={cn("fabric-block bg-[var(--fabric)]", !showImage && "reveal")}
            style={
              {
                "--fabric": `var(--${product.fabric})`,
              } as React.CSSProperties
            }
            role="img"
            aria-label={`${product.nameEn} 示意图待补充`}
          >
            <span className="fabric-block__mono text-3xl sm:text-4xl">
              {product.mono}
            </span>
          </div>
        )}
      </Link>

      <header
        className="reveal pt-4 sm:pt-5"
        data-reveal-delay={String(Math.min(index, 5) * 90)}
      >
        <p className="mono-label mb-2 group-hover/card:text-clay transition-colors duration-300">
          {product.category}
        </p>
        <h3 className="font-brand text-[0.8125rem] leading-snug tracking-[0.1em] uppercase text-ink">
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="transition-colors duration-300 hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
          >
            {product.nameEn}
          </Link>
        </h3>
        <p className="han-note mt-1 text-[0.8125rem] text-ink-soft">
          {product.nameCn}
        </p>
        <p className="mt-2 line-clamp-2 max-w-[34ch] text-[0.75rem] leading-relaxed text-ink-mute transition-colors duration-300 group-hover/card:text-ink-soft">
          {product.desc}
        </p>
      </header>
    </article>
  );
}
