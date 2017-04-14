import React from 'react'; // eslinit-disable-line
import styled from 'styled-components';

const SubTitleLink = styled.a`
    font-size: .75em;
    font-weight: 700;
    cursor: pointer;
    color: #03A9F4;
    margin: 5px;
    width: 100%;
    &:hover{
      color: #0288D1;
    }
    @media (min-width: 480px) {
      font-size: .75em;
      display: block;
    }
    @media (min-width: 768px) {
      font-size: .75em;
      display: block;
    }
    @media (min-width: 992px) {
      font-size: 1.5em;
      display: block;
    }
`;

export default SubTitleLink;
