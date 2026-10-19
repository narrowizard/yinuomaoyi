// 共享壳布局：吸顶品牌栏 + 页脚，包裹首页与商品详情页。
// 前缀 `_` 表示该布局不占用 URL 路径段。
import { Outlet } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell")({
  component: ShellLayout,
});

function ShellLayout() {
  return (
    <div className="paper-grain min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
