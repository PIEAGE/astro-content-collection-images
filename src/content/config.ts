import { z, reference, defineCollection } from "astro:content";

const advice = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tableOfContents: z.array(z.string()),
      href: z.string(),
      blogImage: image(),
    }),
});

export const collections = {
  advice: advice,
};
