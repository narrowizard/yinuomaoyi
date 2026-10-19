import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/shop";

/** 断点与列数：桌面 3 → 中屏 2 → 窄屏 1（款数较少时避免单列过空） */
const COLUMN_STEPS: ReadonlyArray<readonly [number, number]> = [
  [1024, 3],
  [640, 2],
  [0, 1],
];

function columnsFor(width: number): number {
  for (const [min, cols] of COLUMN_STEPS) {
    if (width >= min) return cols;
  }
  return 1;
}

function useColumnCount(): number {
  const [cols, setCols] = useState(() =>
    typeof window === "undefined" ? 3 : columnsFor(window.innerWidth),
  );

  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setCols(columnsFor(window.innerWidth)));
    };
    window.addEventListener("resize", onResize, { passive: true });
    onResize();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return cols;
}

/** 按最短列优先分配，保持原始顺序的视觉流向 */
function distribute(products: Product[], cols: number): Product[][] {
  const buckets: Product[][] = Array.from({ length: cols }, () => []);
  // 以声明的比例近似高度做均衡分配
  const heights = products.map((p) => {
    const [w, h] = p.ratio.split("/").map((n) => Number.parseFloat(n));
    return Number.isFinite(w) && Number.isFinite(h) && w > 0 ? h / w : 1;
  });
  const totals = new Array<number>(cols).fill(0);

  products.forEach((product, i) => {
    let target = 0;
    for (let c = 1; c < cols; c += 1) {
      if (totals[c] < totals[target] - 0.05) target = c;
    }
    buckets[target].push(product);
    totals[target] += heights[i] + 0.55; // 文字区经验高度
  });

  return buckets;
}

export function MasonryGrid({ products }: { products: Product[] }) {
  const cols = useColumnCount();
  const buckets = distribute(products, cols);

  return (
    <div className="flex items-start gap-4 sm:gap-6">
      {buckets.map((bucket, colIndex) => (
        <div key={colIndex} className="min-w-0 flex-1">
          {bucket.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i + colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
