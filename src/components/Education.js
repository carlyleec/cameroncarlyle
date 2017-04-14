import React from 'react';
import styled from 'styled-components';

import renderMarkdown from '../utils/renderMarkdown';
import Container from './Container';
import IntraCardTitle from './IntraCardTitle';
import Card from './Card';
import CardTitleSmall from './CardTitleSmall';
import CardBody from './CardBody';
import CardSection from './CardSection';
import CardSectionTitle from './CardSectionTitle';
import CardSectionBody from './CardSectionBody';
import LinkButton from './LinkButton';
import OrganizationLink from './OrganizationLink';

import data from '../data/education';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`;

const CourseworkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
`;

const Course = styled.p`
  border: 2px solid #78909C;
  border-radius: 4px;
  text-align: center;
  flex: 1 1 33%;
  font-size: .5em;
  padding: .1em;
  margin: .2em;
  @media (min-width: 480px) {
    font-size: 1em;
    padding: .2em;
    margin: .5em;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #607D8B;
  margin: 5px;
`;

const Education = () => (
  <Container>
    {
      data.map(school => (
        <Wrapper key={school.id}>
          <IntraCardTitle>{`${school.graduation_month.toUpperCase()}, ${school.graduation_year}`}</IntraCardTitle>
          <Card background="#FFF" padding="15px">
            <Title>{`${school.degree_type} ${school.degree}`}</Title>
            <OrganizationLink href={school.link} target="_blank">{`@ ${school.school}`}</OrganizationLink>
            <CardBody dangerouslySetInnerHTML={renderMarkdown(school.body)} />
            <CourseworkWrapper>
              <CardTitleSmall>RELEVENT COURSEWORK</CardTitleSmall>
              {
                school.coursework.map(course => <Course>{course}</Course>)
              }
            </CourseworkWrapper>
          </Card>
        </Wrapper>
      ))
    }
    <Card background="#FFF" padding="15px" margin="0px" >
      <Title>Keep Exploring</Title>
      <Container>
        <CardSection>
          <CardSectionTitle>Experience</CardSectionTitle>
          <CardSectionBody>Real-world knowledge and skills</CardSectionBody>
          <LinkButton to="/experience">Learn More</LinkButton>
        </CardSection>
        <CardSection>
          <CardSectionTitle>Expertise</CardSectionTitle>
          <CardSectionBody>Design, Development, and Data</CardSectionBody>
          <LinkButton to="/expertise">Learn More</LinkButton>
        </CardSection>
      </Container>
    </Card>
  </Container>
);

Education.propTypes = {};

export default Education;
