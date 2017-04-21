import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

import Container from '../../components/Container';
import Loading from '../../components/Loading';
import renderMarkdown from '../../utils/renderMarkdown';
import IntraCardTitle from '../../components/IntraCardTitle';
import Card from '../../components/Card';
import CardTitleSmall from '../../components/CardTitleSmall';
import CardBody from '../../components/CardBody';
import CardSection from '../../components/CardSection';
import CardSectionTitle from '../../components/CardSectionTitle';
import SubTitle from '../../components/SubTitle';
import LinkButton from '../../components/LinkButton';
import OrganizationLink from '../../components/OrganizationLink';

import { query, options } from './query';

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

const Education = (props) => {
  if (props.data.loading) {
    return <Loading>Loading</Loading>;
  }
  if (props.data.error) {
    console.log(this.props.data.error) //eslint-disable-line
    return (<div>An unexpected error occurred</div>);
  }
  return (
    <Container>
      {
        props.data.schools.map(school => (
          <Wrapper key={school.id}>
            <IntraCardTitle>{`${school.graduation_month.toUpperCase()}, ${school.graduation_year}`}</IntraCardTitle>
            <Card background="#FFF" padding="15px">
              <Title>{`${school.degree_type} ${school.degree}`}</Title>
              <OrganizationLink href={school.link} target="_blank">{`@ ${school.name}`}</OrganizationLink>
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
            <SubTitle>Real-world knowledge and skills</SubTitle>
            <LinkButton to="/experience">Learn More</LinkButton>
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

Education.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    schools: React.PropTypes.array,
  }).isRequired,
};

export default graphql(query, options)(Education);
