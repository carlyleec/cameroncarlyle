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
  display: inline-block;
  max-width: 50%; 
  height: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

// const Column = styled.div`
//   width: 45%;
//   display: block;
//   margin: auto;
//   @media (min-width: 480px) {
//     width: 33%;
//     display: inline-block;
//   }
//   @media (min-width: 768px) {
//     width: 38%;
//     display: block;
//   }
//   @media (min-width: 992px) {
//     width: 33%;
//     display: inline-block;
//   }
// `;

const Column = styled.div`
  width: 50%;
  display: inline-block
`;

const Section = styled.div`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  width: 50%;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
`;

const SectionTitle = styled.h1`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  width: 100%;
  display: block;
  text-align: center;
  vertical-align: middle;
  height: 100%;
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
const SectionBody = styled.p`
  font-size: .75em;
  font-weight: 400;
  line-height: 1.1;
  color: inherit;
  width: 100%;
  display: block;
  height: 50%;
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

const LearnMoreLink = styled(Link)`
  background: #2196F3;
  font-size: 1em;
  color: #FFF;
  width: 80%;
  border-radius: 4px;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  display: block;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 
              0 1px 18px 0 rgba(0,0,0,0.12), 
              0 3px 5px -1px rgba(0,0,0,0.3);
  @media (min-width: 480px) {
    font-size: 1em;
  }
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
  @media (min-width: 992px) {
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


const Expertise = () => (
  <div className="container">
    <Breadcrumbs crumbs={['EXPERTISE']} />
    <Card padding="20px" margin="0px" background="FFF">
      <Section>
        <SectionTitle>DESIGN</SectionTitle>
        <SectionBody>I design full-stack web applications. Whether it’s an icon, an interface, a user experience, or a data structure, my aesthetic tends toward simplicity with a focus on usability. </SectionBody>
        <LearnMoreLink to="/expertise/design">Learn More</LearnMoreLink>
      </Section>
      <CardImage role="presentation" src={designImg} />
    </Card>
    <Card padding="20px" margin="0px" background="FFF">
      <CardImage role="presentation" src={developmentImg} />
      <Section>
        <SectionTitle>DEVELOPMENT</SectionTitle>
        <SectionBody>Code is the heart and soul of what I do. Mostly, I build things using modern JavaScript: from UIs to Servers to microservices. I do things in other languages too.</SectionBody>
        <LearnMoreLink to="/expertise/development">Learn More</LearnMoreLink>
      </Section>
    </Card>
    <Card padding="20px" margin="0px" background="FFF" >
      <Section>
        <SectionTitle>DATA</SectionTitle>
        <SectionBody>Data plays a central role in almost every project I've worked on: from databases to Geographic Information Systems (GIS) to the infrastructure that makes it all possible. </SectionBody>
        <LearnMoreLink to="/expertise/data">Learn More</LearnMoreLink>
      </Section>
      <CardImage role="presentation" src={dataImg} />
    </Card>
  </div>
);

Expertise.propTypes = {};

export default Expertise;




