import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = props => (
  <div className="">
    <div className="container">
      <ReactCSSTransitionGroup
        component="div"
        transitionName="layout"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(props.children, {
          key: props.location.pathname,
        })}
      </ReactCSSTransitionGroup>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
