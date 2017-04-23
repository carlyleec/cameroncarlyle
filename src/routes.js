import React from 'react';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
// import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

// GraphQL Client
import client from './graphql/client';


// Routed components
import App from './components/App';
import Home from './components/Home';
import Layout from './components/Layout';
import Education from './containers/Education';
import Experience from './containers/Experience';
import Expertise from './containers/Expertise';
import Design from './containers/Design';
import Development from './containers/Development';
import Data from './containers/Data';
import Contact from './components/Contact';
import GraphiQLPage from './components/GraphiQLPage';

const Routes = props => (
  <ApolloProvider client={client} store={props.store}>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route component={Layout}>
          <Route path="education" component={Education}></Route>
          <Route path="experience" component={Experience}></Route>
          <Route path="expertise">
            <IndexRoute component={Expertise} />
            <Route path="design" component={Design}></Route>
            <Route path="development" component={Development}></Route>
            <Route path="data" component={Data}></Route>
          </Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="graphiql" component={GraphiQLPage}></Route>
        </Route>
      </Route>
    </Router>
  </ApolloProvider>
);

Routes.propTypes = {
  /* eslint-disable */
  store: React.PropTypes.object.isRequired,
};

export default Routes;
