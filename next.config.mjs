// next.config.mjs
import createMDX from '@next/mdx';
import { withContentlayer } from 'next-contentlayer2';

const withMDX = createMDX({
  // 如需 remark/rehype 插件可在这里配置
  options: {
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
});

const nextConfig = {
  reactStrictMode: true,
  // 让 Next 识别 .md / .mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withContentlayer(withMDX(nextConfig));
