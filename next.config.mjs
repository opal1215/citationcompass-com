// next.config.mjs
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 让 App Router 能识别 .md / .mdx 页面（如 /app/(legal) 下的 MDX）
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: { mdxRs: true },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
})

export default withMDX(nextConfig)
