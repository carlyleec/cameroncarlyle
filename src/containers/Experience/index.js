import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

import renderMarkdown from '../../utils/renderMarkdown';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardBody from '../../components/CardBody';
import CardSection from '../../components/CardSection';
import CardSectionTitle from '../../components/CardSectionTitle';
import SubTitle from '../../components/SubTitle';
import LinkButton from '../../components/LinkButton';
import OrganizationLink from '../../components/OrganizationLink';
import IntraCardTitle from '../../components/IntraCardTitle';

import { query, options } from './query';

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


const Experience = (props) => {
  if (props.data.loading) {
    return <Loading>Loading</Loading>;
  }
  if (props.data.error) {
    console.log(this.props.data.error) //eslint-disable-line
    return (<div>An unexpected error occurred</div>);
  }
  return (
    <Container>
      <ExperienceWrapper>
        <IntraCardTitle>{props.data.status.title}</IntraCardTitle>
        <Card background="#FFF" padding="25px">
          <CardBody dangerouslySetInnerHTML={renderMarkdown(props.data.status.body)} />
        </Card>
      </ExperienceWrapper>
      {
        props.data.jobs.map(exp => renderSingleExperience(exp))
      }
      <Card background="#FFF" padding="15px" margin="0px" >
        <ExperienceTitle>Keep Exploring</ExperienceTitle>
        <Container>
          <CardSection>
            <CardSectionTitle>Education</CardSectionTitle>
            <SubTitle>A foundation of knowledge and ideas</SubTitle>
            <LinkButton to="/education">Learn More</LinkButton>
          </CardSection>
          <CardSection>
            <CardSectionTitle>Expertise</CardSectionTitle>
            <SubTitle>Design, Development, and Data</SubTitle>
            <LinkButton to="/expertise">Learn More</LinkButton>
          </CardSection>
        </Container>
      </Card>
    </Container>
  );
};

Experience.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    jobs: React.PropTypes.array,
    status: React.PropTypes.object,
  }).isRequired,
};

export default graphql(query, options)(Experience);
