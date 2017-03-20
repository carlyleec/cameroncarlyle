import marked from 'marked';

const renderMarkdown = markdown => (
  { __html: marked(markdown, { sanitize: true }).toString() }
);

export default renderMarkdown;
