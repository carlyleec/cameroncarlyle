import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  height: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  width: 60px;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 3px 5px -1px rgba(0,0,0,0.3);
  padding: 0px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  &:hover{
    cursor: pointer;
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 8px 10px -1px rgba(0,0,0,0.3);
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: .75em;
  margin: auto;
`;

const ExternalLink = styled.a`
  text-decoration: none;
`;

const ExternalLinkImage = props => (
  <Wrapper>
    <ExternalLink href={props.href} target="_blank">
      <Image src={props.src}></Image>
      <Title>{props.title}</Title>
    </ExternalLink>
  </Wrapper>

);

export default ExternalLinkImage;
