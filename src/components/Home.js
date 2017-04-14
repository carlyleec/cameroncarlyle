import React from 'react';
import styled from 'styled-components';

import HomeSvg from './HomeSvg';

const HomeWrapper = styled.div`
  display: flex;
  height: 80vh;
  flex-basis: 90%;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
`;

const Homepage = () => (
  <HomeWrapper>
    <HomeSvg />
  </HomeWrapper>
);

Homepage.propTypes = {};

export default Homepage;
