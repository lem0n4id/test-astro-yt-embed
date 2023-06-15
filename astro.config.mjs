import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind()],
	site: 'https://lem0n4id.github.io',
  	base: '/test-astro-yt-embed',
});
