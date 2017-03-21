import React from 'react';
import styled from 'styled-components';

import HomeSvg from './svgs/HomeSvg';

const HomeWrapper = styled.div`
  margin-top: 100%;
  text-align: center;
  width: 100%;
  @media (min-width: 480px) {
    margin-top: 5%;
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: 768px) {
    margin-top: 70%;
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: 992px) {
    margin-top: 15%;
    width: 60%;
    margin-left: 20%;
  }
`;

const Homepage = () => (
  <div className="container">
    <HomeWrapper>
      <HomeSvg />
    </HomeWrapper>
  </div>
);

Homepage.propTypes = {};

export default Homepage;




