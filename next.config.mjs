// next.config.mjs
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 让 App Router 识别 .md / .mdx 页面
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // Next 14 默认使用 mdx-rs，这里不再显式打开，减少“实验项”表面因素
}

export default withMDX(nextConfig)

