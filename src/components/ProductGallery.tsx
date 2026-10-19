import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/shop";

interface ProductGalleryProps {
  product: Product;
}

/**
 * 详情页图区：以实拍原图为主体，附一张同图的放大检视视图。
 * 单张实拍素材不足以支撑多图时，用「整体 / 局部」两种取景代替假图库。
 */
export function ProductGallery({ product }: ProductGalleryProps) {
  const [zoom, setZoom] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="lg:sticky lg:top-28">
      <figure className="card-figure border border-hairline bg-paper-raise">
        <button
          type="button"
          onClick={() => setZoom((v) => !v)}
          aria-pressed={zoom}
          className={cn(
            "block w-full cursor-zoom-in overflow-hidden",
            zoom && "cursor-zoom-out",
          )}
          style={{ aspectRatio: product.ratio }}
        >
          {failed ? (
            <span
              className={cn(
                "fabric-block grid h-full w-full place-items-center bg-[var(--fabric)]",
              )}
              style={{ "--fabric": `var(--${product.fabric})` } as React.CSSProperties}
            >
              <span className="fabric-block__mono text-4xl">{product.mono}</span>
            </span>
          ) : (
            <img
              src={product.url}
              alt={`${product.nameEn} ${product.nameCn}`}
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={cn(
                "h-full w-full object-cover transition-all duration-700 ease-out",
                loaded ? "opacity-100" : "opacity-0",
                zoom && "scale-[1.6]",
              )}
            />
          )}
        </button>
        <figcaption className="flex items-center justify-between gap-4 border-t border-hairline px-4 py-3">
          <span className="mono-label text-ink-mute">
            {zoom ? "Detail view" : "Full view"}
          </span>
          <span className="mono-label text-clay">
            {zoom ? "Click to fit" : "Click to zoom"}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
