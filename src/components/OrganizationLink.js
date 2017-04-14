import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const OrganizationLink = styled.a`
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    color: #7986CB;
    flex: 0 1 100%;
    margin: 5px;
    text-decoration: none;
    text-align: center;
    &:hover{
      color: #3F51B5;
    }
    @media (min-width: 480px) {
      font-size: .75em;
    }
    @media (min-width: 768px) {
      font-size: .75em;
    }
    @media (min-width: 992px) {
      font-size: 1.5em;
    }
`;

export default OrganizationLink;
