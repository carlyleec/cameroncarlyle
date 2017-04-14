import marked from 'marked';
const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

const renderMarkdown = markdown => (
  { __html: marked(markdown, { sanitize: true, renderer }).toString() }
);

export default renderMarkdown;
