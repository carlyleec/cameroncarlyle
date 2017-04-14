import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const CardBody = styled.div`
  font-size: 1em;
  font-weight: 400;
  line-height: 2;
  color: inherit;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 90%;
  margin-bottom: 5px;
  overflow: auto;
  @media (min-width: 480px) {
    font-size: 1em;
  }
  @media (min-width: 768px) {
    font-size: 1em;
  }
  @media (min-width: 992px) {
    font-size: 1.2em;
    margin: 20px;
  }
  >ul>li{
    list-style-type: square;
  }
`;

export default CardBody;
