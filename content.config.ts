import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
      title: z.string(),
      description: z.string(),
      seo: z.intersection(
        z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                meta: z.array(z.record(z.string(), z.any())).optional(),
                link: z.array(z.record(z.string(), z.any())).optional(),
                }),
        z.record(z.string(), z.any()),
        ).optional().default({}),
      body: z.object({
          type: z.string(),
          children: z.any(),
          toc: z.any(),
        }),
      navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true),
      }),
    }),
  },
})
