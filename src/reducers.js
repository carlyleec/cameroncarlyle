import { combineReducers } from 'redux';

// Import Reducers
import markdownModal from './containers/MarkdownModal/reducers';
// import { apollo } from './modules/gql/gqlClient';

const reducers = combineReducers({ markdownModal });

export default reducers;
