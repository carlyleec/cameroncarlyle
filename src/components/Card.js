import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 95%;
  flex-wrap: wrap;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 3px 5px -1px rgba(0,0,0,0.3);
  padding: ${props => props.padding};
  margin: ${props => props.margin}
  margin-top: 20px;
  margin-bottom: 20px;
  background: ${props => props.background};
  border-radius: 4px;
  @media (min-width: 480px) {
    flex: 0 0 90%;
  }
  &:hover{
    background: ${props => props.hover};
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 8px 10px -1px rgba(0,0,0,0.3);
  }
`;

export default Card;
