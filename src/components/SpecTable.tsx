import type { SpecRow } from "@/types/shop";

/** 详情页规格表：细线分隔的两列清单 */
export function SpecTable({ specs }: { specs: SpecRow[] }) {
  return (
    <div className="reveal mt-8 border-t border-hairline pt-8">
      <p className="mono-label mb-4 text-clay">Specification</p>
      <dl className="divide-y divide-hairline border-y border-hairline">
        {specs.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[7.5rem_1fr] gap-4 py-3 sm:grid-cols-[9rem_1fr]"
          >
            <dt className="mono-label pt-0.5 text-ink-mute">{row.label}</dt>
            <dd className="text-sm leading-6 text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
