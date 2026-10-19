export type FabricToken =
  | "fabric-ivory"
  | "fabric-sage"
  | "fabric-bone"
  | "fabric-clay"
  | "fabric-slate"
  | "fabric-charcoal";

/** 图片资源：url 为空时以面料色块占位，保持卡片比例 */
export interface MediaAsset {
  url: string;
  /** 宽高比，如 "3 / 4"，用于占位与防布局跳动 */
  ratio: string;
  fabric: FabricToken;
}

/** 详情页规格表的一行 */
export interface SpecRow {
  label: string;
  value: string;
}

export interface Product extends MediaAsset {
  id: string;
  /** 图内缩写（占位态显示） */
  mono: string;
  nameEn: string;
  nameCn: string;
  desc: string;
  category: string;
  /** 详情页：一句英文小标 */
  kicker: string;
  /** 详情页：设计说明段落 */
  story: string[];
  /** 详情页：三个要点 */
  highlights: string[];
  /** 详情页：规格表 */
  specs: SpecRow[];
  /** 详情页：可选颜色 */
  colors: string[];
  /** 详情页：可选尺码 */
  sizes: string[];
  /** 详情页：洗护建议 */
  care: string;
}
