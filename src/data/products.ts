import type { Product } from "@/types/shop";

/** 顶栏与页脚共用的品牌信息 */
export const BRAND = {
  name: "YIWU COOPERATION IMPORT&EXPORT",
  shortName: "YIWU COOPERATION",
  mark: "CP",
  tagline: "SINCE 1998 · SELECTED GOODS FROM YIWU",
  address: "BLDG 2, LIANPING VILLAGE FUTIAN STREET YIWU ZHEJIANG CHINA",
  logoUrl:
    "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792212871128-图片1.png?auth_key=85069d9880bdc68c8450e30b2f54bc97feaac62b4056ca5e1ffe18872623ee62",
} as const;

/**
 * 站内静态陈列清单（无后台、无数据库）。
 * ratio 取自实拍图真实像素比例，用于占位与防布局跳动。
 */
export const PRODUCTS: Product[] = [
  {
    id: "camo-star-sweatpants",
    mono: "CS",
    nameEn: "Camo Star Wide Sweatpants",
    nameCn: "迷彩拼星阔腿卫裤",
    desc: "麻灰毛圈布拼接暗色迷彩侧片，大五角星印花，松紧腰配抽绳。",
    category: "Bottoms",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719728-微信图片_20261017145457_251_143.jpg?auth_key=52de7a76d8a475f19e9f0a85714902aa1a983237d6aa1e4ac273eb6be106a16d",
    ratio: "1442 / 1920",
    fabric: "fabric-slate",
    kicker: "Panelled sweat pant",
    story: [
      "以麻灰色毛圈布为主体的阔腿卫裤，侧缝嵌入一整片暗色调迷彩布料，前幅叠加大尺寸五角星印花，星形内部同样以迷彩填充，让图案与拼片彼此呼应而不是各说各话。",
      "裤长刻意做长，落地形成自然堆叠；腰头为松紧加外置抽绳，两侧斜插袋可直接插手，穿着姿态更接近街头版型而非运动短裤的放大版。",
    ],
    highlights: [
      "侧缝整片迷彩拼布，非印花仿制",
      "大五角星与侧片同花型，视觉连贯",
      "落肩裆 + 超长直筒，自然堆鞋面",
    ],
    specs: [
      { label: "Fabric", value: "棉涤毛圈布（抓绒内里）" },
      { label: "Weight", value: "约 320 g/m²" },
      { label: "Fit", value: "宽松阔腿 / 低裆" },
      { label: "Waist", value: "松紧 + 外置抽绳" },
      { label: "Pockets", value: "两侧斜插袋" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["麻灰 / 暗迷彩", "深灰 / 黑迷彩"],
    sizes: ["S", "M", "L", "XL"],
    care: "反面冷水机洗，深色拼片单独洗涤一次；不可漂白，低温熨烫避开印花区域。",
  },
  {
    id: "star-badge-sweatpants",
    mono: "SB",
    nameEn: "Star Badge Balloon Sweatpants",
    nameCn: "皮标星星灯笼卫裤",
    desc: "麻灰色落肩裆廓形，前幅缀迷彩五角星皮标，腰头撞色抽绳。",
    category: "Bottoms",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719729-微信图片_20261017145457_252_143.jpg?auth_key=916c8e50446dd239635b88098fd40460388a396f6cf69f3ed484c8e10fb32dbe",
    ratio: "1440 / 1920",
    fabric: "fabric-slate",
    kicker: "Appliqué balloon pant",
    story: [
      "同一块麻灰毛圈布，用立体裁剪做出灯笼般的鼓胀轮廓：胯部放宽、裤脚收拢，行走时裤管有明确的体积感。",
      "右前幅缝一枚迷彩五角星皮标，边缘做压胶封边，是整条裤子唯一的装饰点；腰头翻出一圈迷彩内里，与皮标形成上下呼应。",
    ],
    highlights: [
      "前幅迷彩星形皮标，压胶封边不翘角",
      "腰头翻边露出撞色迷彩内里",
      "灯笼版型：胯宽脚收，体积感明确",
    ],
    specs: [
      { label: "Fabric", value: "棉涤毛圈布（抓绒内里）" },
      { label: "Weight", value: "约 340 g/m²" },
      { label: "Fit", value: "灯笼版型 / 收口裤脚" },
      { label: "Waist", value: "松紧 + 撞色抽绳" },
      { label: "Detail", value: "五角星皮标贴绣" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["麻灰 / 迷彩", "米白 / 卡其迷彩"],
    sizes: ["S", "M", "L", "XL"],
    care: "建议装袋机洗以保护皮标；皮标处不可熨烫，悬挂阴干。",
  },
  {
    id: "three-stripe-baggies-no2683",
    mono: "26",
    nameEn: 'Three-Stripe Baggies "No.2683"',
    nameCn: "三条杠气球裤 2683",
    desc: "货号 2683，白／花灰／黑／藏青四色，侧身三条杠与弧形分割线。",
    category: "Bottoms",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719736-微信图片_20261017145458_253_143.jpg?auth_key=dfa11951b05872beb4f76e22e4f7ba19d5ddfcb5a6e1e4ff63c8c94766b909e8",
    ratio: "1280 / 1708",
    fabric: "fabric-charcoal",
    kicker: "Stock item No.2683",
    story: [
      "常备货号 2683 的气球裤版型：从腰头到裤脚走一条完整的弧线分割，侧身嵌入三条平行杠，把视线纵向拉长。",
      "同一版型提供白、花灰、黑、藏青四个基础色，条纹配色随主体反向（浅底深条 / 深底浅条），便于按市场偏好下单混色。",
    ],
    highlights: [
      "货号 2683 常备现货，可混色拼单",
      "弧形分割线自腰头贯穿至裤脚",
      "侧身三条杠随底色反向配色",
    ],
    specs: [
      { label: "Item No.", value: "2683" },
      { label: "Fabric", value: "棉涤毛圈布" },
      { label: "Weight", value: "约 300 g/m²" },
      { label: "Fit", value: "气球裤 / 宽松锥形" },
      { label: "Colors", value: "白 / 花灰 / 黑 / 藏青" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["白色", "花灰", "黑色", "藏青"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    care: "冷水机洗，深浅色分开；白色款避免与含荧光剂洗涤剂同用。",
  },
  {
    id: "star-print-track-suit",
    mono: "SP",
    nameEn: "Star Print Track Suit",
    nameCn: "满印星星运动套装",
    desc: "米白底深蓝满印星形，罗纹领口袖口，侧边蓝色条纹成套出品。",
    category: "Sets",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719749-微信图片_20261017145459_254_143.jpg?auth_key=1c95b1e4465b74ca8211f9e49bc585a3b102390c66723e65ba13ea5e635448af",
    ratio: "1440 / 1920",
    fabric: "fabric-bone",
    kicker: "Two-piece set",
    story: [
      "上衣与长裤使用同一卷面料，满印大小交错的星形，深蓝与浅灰双色叠印在米白底上，成套穿着时图案连续不断版。",
      "外套为立领拉链款，领口、袖口与下摆使用纯深蓝罗纹收边；长裤侧缝保留三条杠织带，视觉上把套装拉回运动服的语言。",
    ],
    highlights: [
      "上衣与裤子同卷面料，图案成套连续",
      "领口袖口纯色罗纹收边，勾勒轮廓",
      "裤侧三条杠织带，运动语言明确",
    ],
    specs: [
      { label: "Set", value: "立领拉链外套 + 直筒长裤" },
      { label: "Fabric", value: "棉涤针织布（满印）" },
      { label: "Weight", value: "约 280 g/m²" },
      { label: "Fit", value: "宽松 / 落肩" },
      { label: "Trim", value: "罗纹领口袖口 + 侧织带" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["米白 / 深蓝"],
    sizes: ["S", "M", "L", "XL"],
    care: "拉链拉合后反面机洗，避免罗纹部位被拉扯；不可烘干高温定型。",
  },
  {
    id: "velaro-half-zip-set",
    mono: "VL",
    nameEn: "VELARO Half-Zip Knit Set",
    nameCn: "翻领半拉链两件套",
    desc: "VELARO 吊牌现货，黑白两色，针织翻领半开襟上衣配直筒长裤。",
    category: "Sets",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719745-微信图片_20261017145459_255_143.jpg?auth_key=8f76dca57a7be864ec5723d537b0fdeefb4fe15591addcb9c801604b51467597",
    ratio: "4096 / 3072",
    fabric: "fabric-ivory",
    kicker: "Tagged stock",
    story: [
      "带 VELARO 成品吊牌的现货套装，黑色与米白两组同时挂样。上衣为针织翻领、前襟半开拉链，可按需拉开形成小 V 领。",
      "配套长裤为松紧腰直筒版型，裤侧有一条明线，整体偏简洁通勤，适合以成品批发方式出货。",
    ],
    highlights: [
      "带品牌吊牌现货，可即刻排单发货",
      "针织翻领 + 半开襟拉链，领型可调",
      "配套直筒长裤，松紧腰免改尺",
    ],
    specs: [
      { label: "Brand tag", value: "VELARO" },
      { label: "Set", value: "半拉链翻领上衣 + 直筒长裤" },
      { label: "Fabric", value: "棉涤针织布" },
      { label: "Weight", value: "约 300 g/m²" },
      { label: "Sizes on tag", value: "L / XL（可续码）" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["黑色", "米白色"],
    sizes: ["L", "XL", "XXL"],
    care: "冷水轻柔机洗，翻领处整理后平铺晾干，避免拉链齿压出折痕。",
  },
  {
    id: "contrast-collar-quarter-zip",
    mono: "CC",
    nameEn: "Contrast Collar Quarter-Zip Set",
    nameCn: "撞色立领套头套装",
    desc: "米白与燕麦灰两色，异色立领与前襟拉链，插肩袖侧条收边。",
    category: "Sets",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719757-微信图片_20261017145500_256_143.jpg?auth_key=7af7d0c03e707f7041efbd4e58dc7205f71af69dabe0cc3043d28503076e0588",
    ratio: "4096 / 3072",
    fabric: "fabric-clay",
    kicker: "Colour-blocked set",
    story: [
      "以撞色立领作为唯一强调：米白款配深灰领，燕麦灰款配黑色领，前襟四分之一拉链与领子同色，形成干净的一条竖向重点。",
      "袖子为插肩剪裁，肩缝一路斜向延伸至领口，袖外侧压一条细织带；配套长裤同色同料，松紧腰直筒。",
    ],
    highlights: [
      "立领与前襟拉链同色，撞色集中一处",
      "插肩袖剪裁，肩线斜向延伸至领口",
      "上衣与长裤同色同料，成套出货",
    ],
    specs: [
      { label: "Set", value: "四分之一拉链套头衫 + 直筒长裤" },
      { label: "Fabric", value: "棉涤抓绒针织" },
      { label: "Weight", value: "约 320 g/m²" },
      { label: "Sleeve", value: "插肩袖 + 侧织带" },
      { label: "Collar", value: "撞色立领" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["米白 / 深灰领", "燕麦灰 / 黑领"],
    sizes: ["M", "L", "XL"],
    care: "反面机洗，撞色领首次洗涤请与浅色衣物分开；起球处用剃球器处理。",
  },
  {
    id: "full-zip-collared-set",
    mono: "FZ",
    nameEn: "Full-Zip Collared Lounge Set",
    nameCn: "大翻领全拉链套装",
    desc: "浅灰与黑色两色，大翻领全开拉链外套配松紧腰直筒长裤。",
    category: "Sets",
    url: "https://conversation.cdn.meoo.host/conversations/369708378005696512/image/2026-10-17/1792221719776-微信图片_20261017145501_257_143.jpg?auth_key=03b2b94e1f41214802122cfab14300063562b23014d613707e21ad43edfc39bf",
    ratio: "4096 / 3072",
    fabric: "fabric-sage",
    kicker: "Open-front lounge",
    story: [
      "外套走全开拉链结构，配一片可以向外翻开的大领，敞开穿时领片自然垂成西装驳头的形状，拉上则回到运动夹克拉领。",
      "浅灰与黑色两个基础色，内里可见白色包边处理；配套长裤为松紧腰直筒，前片有一道中线压褶。",
    ],
    highlights: [
      "全开拉链 + 可外翻大领，两种穿法",
      "内里白色包边，接缝收口干净",
      "长裤前片压中线，偏通勤观感",
    ],
    specs: [
      { label: "Set", value: "全拉链翻领外套 + 直筒长裤" },
      { label: "Fabric", value: "棉涤毛圈布" },
      { label: "Weight", value: "约 340 g/m²" },
      { label: "Closure", value: "全长拉链" },
      { label: "Finish", value: "内里白色包边" },
      { label: "Origin", value: "浙江义乌" },
    ],
    colors: ["浅灰", "黑色"],
    sizes: ["S", "M", "L", "XL"],
    care: "拉合拉链后反面机洗；领片较大，晾晒时将领子摊开避免变形。",
  },
];

/** 供详情页取「上一款 / 下一款」 */
export function getAdjacentProducts(id: string) {
  const index = PRODUCTS.findIndex((p) => p.id === id);
  if (index < 0) return { prev: null, next: null };
  const prev = index > 0 ? PRODUCTS[index - 1] : PRODUCTS[PRODUCTS.length - 1];
  const next = index < PRODUCTS.length - 1 ? PRODUCTS[index + 1] : PRODUCTS[0];
  return { prev, next };
}
