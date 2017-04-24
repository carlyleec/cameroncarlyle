import React from 'react';
import { render } from 'react-dom';


// Import Redux Store
import configureStore from './configureStore';

// Import Routes
import Routes from './routes';

// // Import favicons
import './images/images';

// Import favicons
import './pdfs/pdfs';

// Import favicons
import './favicons/favicons';


// Import styles
require('./styles/styles.css');


const store = configureStore();

// initAuth(store);

render((
  <Routes store={store} />
), document.getElementById('app'));
