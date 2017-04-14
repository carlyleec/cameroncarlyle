import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin-left: 10px;
  margin: 5px;
  @media (min-width: 480px) {
    font-size: 2em;
  }
  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 992px) {
    font-size: 3.5em;
  }
`;

const Image = styled.img`
  height: 30px;
  @media (min-width: 480px) {
    height: 30px;
  }
  @media (min-width: 768px) {
    height: 50px;
  }
  @media (min-width: 992px) {
    height: 75px;
  }
`;

const Wrapper = styled.div`
  flex: 0 0 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`;


const TitleWithImage = props => (
  <Wrapper>
    <Image src={props.src} ></Image>
    <Title>{props.children}</Title>
  </Wrapper>
);

export default TitleWithImage;
