import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const CardTitleSmall = styled.h1`
  font-size: .75em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  width: 100%;
  height: 100%;
  margin: 10px;
  @media (min-width: 480px) {
    font-size: .75em;
    margin: 10px;
  }
  @media (min-width: 768px) {
    font-size: 1em;
    margin: 10px;
  }
  @media (min-width: 992px) {
    font-size: 1.5em;
    margin: 10px;
  }
`;

export default CardTitleSmall;
