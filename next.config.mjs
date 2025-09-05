import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  // 让 Next 识别 MD/MDX 扩展名
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

export default withContentlayer(withMDX(nextConfig));
