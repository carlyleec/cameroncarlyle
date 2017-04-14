import { OPEN_MARKDOWN_MODAL, CLOSE_MARKDOWN_MODAL } from './constants';

const initialState = {
  markdown: 'Dude, where\'s my markdown?',
  open: false,
};

const markdownModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MARKDOWN_MODAL:
      return {
        markdown: action.markdown,
        open: true,
      };
    case CLOSE_MARKDOWN_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default markdownModal;
