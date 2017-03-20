import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 
              0 1px 18px 0 rgba(0,0,0,0.12), 
              0 3px 5px -1px rgba(0,0,0,0.3);
  padding: ${props => props.padding};
  margin: ${props => props.margin}
  margin-bottom: 20px;
  background: ${props => props.background};
  border-radius: 4px;
`;

export default Card;
