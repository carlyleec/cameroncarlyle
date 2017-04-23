import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

import Container from './Container';
import Navbar from './Navbar';

const AppWrapper = styled.div`
  width: 100%;
`;

const App = props => (
  <AppWrapper>
    <Container>
      <Navbar page={props.location.pathname} />
    </Container>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="page"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(props.children, {
        key: props.location.pathname,
      })}
    </ReactCSSTransitionGroup>
  </AppWrapper>
);

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
};


export default App;
