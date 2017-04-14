import { OPEN_MARKDOWN_MODAL, CLOSE_MARKDOWN_MODAL } from './constants';

export const openMarkdownModal = markdown => ({
  type: OPEN_MARKDOWN_MODAL,
  markdown,
});

export const closeMarkdownModal = () => ({
  type: CLOSE_MARKDOWN_MODAL,
});
