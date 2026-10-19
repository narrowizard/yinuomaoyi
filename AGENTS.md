# AGENTS.md

## Dependencies

- 无平台默认之外的第三方依赖。图标使用已内置的 `lucide-react`，动效为 CSS keyframes + 模板预置 `reveal-engine`（未引入 framer-motion 等动画库）。

## Architecture

- 技术形态：Vite + React 19 + TanStack Router（文件路由）+ Tailwind v4 单页站点。
- 路由结构：`src/routes/_shell.tsx` 为无路径壳布局（吸顶 SiteHeader + SiteFooter），其下 `_shell.index.tsx` 接管 `/`，`_shell.product.$productId.tsx` 提供 `/product/:id` 详情页。原独立 `index.tsx` 已删除以避免与 `/_shell/` 争抢 `/`。
- 数据契约：商品字段定义在 `src/types/shop.ts`，唯一数据源是 `src/data/products.ts`（含 BRAND 品牌信息与 getAdjacentProducts 相邻款导航）；新增款式只需追加该数组。
- 详情页文案（story / highlights / specs / colors / care）均为静态内容，无价格字段——按需求刻意排除交易信息。
- 设计 token 全部集中在 `src/styles.css`（oklch 变量 + `@theme inline`），组件仅消费 theme utility。

## Lessons

- 商品实拍图来自用户上传，代码中必须引用 `.assets_mapping` 里的 CDN URL，不能写沙箱本地路径。
- 瀑布流列高均衡依赖 `Product.ratio`，该值取自图片真实像素尺寸；替换图片时若不改 ratio 会导致占位与实际比例不一致、出现布局跳动。
- CSS 自定义属性写入 `style` 时需 `as React.CSSProperties` 断言，否则 tsc 报 TS2353。
- loader 返回的对象在 `.map()` 回调参数上会失去推断（TS7006），需显式标注参数类型。
