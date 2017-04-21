import React from 'react'; //eslint-disable-line
import styled from 'styled-components';

const CardSectionBody = styled.p`
  font-size: .75em;
  font-weight: 400;
  line-height: 1.1;
  color: inherit;
  flex: 0 1;
  margin: auto;
  text-align: center;
  margin-bottom: 5px;
  @media (min-width: 480px) {
    font-size: 1em;
  }
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
  @media (min-width: 992px) {
    font-size: 2em;
  }
`;

export default CardSectionBody;
