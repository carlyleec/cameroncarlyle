import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  color: inherit;
  margin-top: 10.5px;
  margin-bottom: 10.5px;
  width: 100%;
  text-align: center;
`;

const Breadcrumbs = ({ crumbs }) => (
  <BreadcrumbWrapper>
    <Link to="">HOME</Link>
    {
      crumbs.map(crumb => ` | ${crumb}`)
    }
  </BreadcrumbWrapper>
);

Breadcrumbs.propTypes = {
  crumbs: React.PropTypes.arrayOf(React.PropTypes.String),
};

export default Breadcrumbs;
