import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    slug: { type: "string", required: true },
    pillar: { type: "boolean", required: true },
    tldr: { type: "string", required: true },
    faqs: { type: "json", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/apa-youtube/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/apa-youtube",
  documentTypes: [Guide],
  mdx: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [],
  },
});
