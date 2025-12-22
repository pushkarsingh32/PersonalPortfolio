import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      url: `/blog/${document.slug}`,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
