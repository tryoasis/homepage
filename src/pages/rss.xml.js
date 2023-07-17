import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true }); 
const posts = Object.values(postImportResult);

export function get(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Uppercut Blog',
    // `<description>` field in output xml
    description: 'A snarky blog about Unified APIs, startups, and open-source.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: import.meta.env.SITE,
    items: import.meta.glob('./blog/**/*.md'),
    items: posts.map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.publishedAt,
        content: sanitizeHtml(post.compiledContent()),
        }))
  });
}