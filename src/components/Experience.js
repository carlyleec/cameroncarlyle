import React from 'react';
import styled from 'styled-components';

import renderMarkdown from '../utils/renderMarkdown';
import Container from './Container';
import Card from './Card';
import CardBody from './CardBody';
import CardSection from './CardSection';
import CardSectionTitle from './CardSectionTitle';
import CardSectionBody from './CardSectionBody';
import LinkButton from './LinkButton';
import OrganizationLink from './OrganizationLink';
import IntraCardTitle from './IntraCardTitle';

import data from '../data/experience';

const OrganizationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
`;

const OrganizationDisabled = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  flex: 0 1 100%;
  text-align: center;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Place = styled.a`
    cursor: pointer;
    color: #03A9F4;
    &:hover{
      color: #0288D1;
    }
`;

const DateRange = styled.div`
  color: #B0BEC5;
`;

const ExperienceHeader = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`;

const ExperienceTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #607D8B;
  margin: 5px;
`;

const renderOrganization = (org, link) => {
  if (link === null) {
    return <OrganizationDisabled>{ `@ ${org}`}</OrganizationDisabled>;
  }
  return (
    <OrganizationWrapper>
      <OrganizationLink href={link} target="_blank" >{`@ ${org}`}</OrganizationLink>
    </OrganizationWrapper>
  );
};

const renderPresent = () => (
  <ExperienceWrapper>
    <IntraCardTitle>{data.present.title}</IntraCardTitle>
    <Card background="#FFF" padding="25px">
      <CardBody dangerouslySetInnerHTML={renderMarkdown(data.present.body)} />
    </Card>
  </ExperienceWrapper>
);

const renderSingleExperience = exp => (
  <ExperienceWrapper key={exp.id}>
    <IntraCardTitle>{exp.end.toUpperCase()}</IntraCardTitle>
    <Card background="#FFF" padding="15px">
      <ExperienceHeader>
        <Place>{exp.place}</Place>
        <DateRange>{`${exp.start.toUpperCase()}- ${exp.end.toUpperCase()}`}</DateRange>
      </ExperienceHeader>
      <ExperienceTitle>{exp.title}</ExperienceTitle>
      { renderOrganization(exp.organization, exp.organization_link) }
      <CardBody dangerouslySetInnerHTML={renderMarkdown(exp.body)} />
    </Card>
  </ExperienceWrapper>
);


const Experience = () => (
  <Container>
    { renderPresent() }
    {
      data.experiences.map(exp => renderSingleExperience(exp))
    }
    <Card background="#FFF" padding="15px" margin="0px" >
      <ExperienceTitle>Keep Exploring</ExperienceTitle>
      <Container>
        <CardSection>
          <CardSectionTitle>Education</CardSectionTitle>
          <CardSectionBody>A foundation of knowledge and ideas</CardSectionBody>
          <LinkButton to="/education">Learn More</LinkButton>
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

Experience.propTypes = {};

export default Experience;
