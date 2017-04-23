import React from 'react'; // eslint-disable-line
import { Link } from 'react-router';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  background: #2196F3;
  font-size: 1em;
  color: #FFF;
  width: 80%;
  border-radius: 4px;
  padding: 5px;
  margin: auto;
  margin-top: 0px;
  display: block;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 3px 5px -1px rgba(0,0,0,0.3);
  @media (min-width: 480px) {
    margin-top: 20px;
    padding: 10px;
    font-size: 1em;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    padding: 10px;
    font-size: 1.5em;
  }
  @media (min-width: 992px) {
    margin-top: 20px;
    padding: 10px;
    font-size: 2em;
  }
  &:hover{
    color: #FFF;
    background: #1976D2;
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 8px 10px -1px rgba(0,0,0,0.3);
  }
`;

export default LinkButton;
