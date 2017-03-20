import React from 'react';
import { Link } from 'react-router';


const Layout = props => (
  <div className="row">
    { props.children }
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};

export default Layout;
