import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Card from './Card';
import Title from './Title';
import Breadcrumbs from './Breadcrumbs';


const designImg = require('../images/design.png');
const developmentImg = require('../images/development.png');
const dataImg = require('../images/data.png');



const CardImage = styled.img`
  display: block;
  max-width: 100%; 
  height: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  width: 45%;
  display: block;
  margin: auto;
  @media (min-width: 480px) {
    width: 33%;
    display: inline-block;
  }
  @media (min-width: 768px) {
    width: 38%;
    display: block;
  }
  @media (min-width: 992px) {
    width: 33%;
    display: inline-block;
  }
`;

const LinkWrapper = styled.h1`
  font-size: 2em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  width: 100%;
  text-align: center;
`;


const Expertise = () => (
  <div className="container">
    <Breadcrumbs crumbs={['EXPERTISE']}/>
    <Title>I'm a fullstack designer and developer.</Title>
    <Column>
      <Card padding="0px" margin="10px">
        <CardImage role="presentation" src={designImg} />
        <LinkWrapper>
          <Link to="/expertise/design" >DESIGN</Link>
        </LinkWrapper>
      </Card>
    </Column>
    <Column>
      <Card padding="0px" margin="10px">
        <img role="presentation" className="img-responsive center-block" src={developmentImg} />
        <LinkWrapper>
          <Link to="/expertise/development" >DEVELOPMENT</Link>
        </LinkWrapper>
      </Card>
    </Column>
    <Column>
      <Card padding="0px" margin="10px">
        <img role="presentation" className="img-responsive center-block" src={dataImg} />
        <LinkWrapper>
          <Link to="/expertise/data" >DATA</Link>
        </LinkWrapper>
      </Card>
    </Column>
  </div>
);

Expertise.propTypes = {};

export default Expertise;




