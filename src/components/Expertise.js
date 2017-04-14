import React from 'react';

import Container from './Container';
import Card from './Card';
import CardSection from './CardSection';
import CardSectionTitle from './CardSectionTitle';
import CardSectionBody from './CardSectionBody';
import CardImage from './CardImage';
import LinkButton from './LinkButton';
import renderMarkdown from '../utils/renderMarkdown';

import data from '../data/expertise';


const Expertise = () => (
  <Container>
    {
      data.map((expertise, index) => {
        if (index % 2 === 0) {
          return (
            <Card key={expertise.title} padding="20px" margin="0px" background="FFF">
              <CardSection>
                <CardSectionTitle>{expertise.title}</CardSectionTitle>
                <CardSectionBody dangerouslySetInnerHTML={renderMarkdown(expertise.body)} />
                <LinkButton to={expertise.linkTo}>Learn More</LinkButton>
              </CardSection>
              <CardImage role="presentation" src={expertise.image} />
            </Card>
          );
        }

        return (
          <Card key={expertise.title} padding="20px" margin="0px" background="FFF">
            <CardImage role="presentation" src={expertise.image} />
            <CardSection>
              <CardSectionTitle>{expertise.title}</CardSectionTitle>
              <CardSectionBody dangerouslySetInnerHTML={renderMarkdown(expertise.body)} />
              <LinkButton to={expertise.linkTo}>Learn More</LinkButton>
            </CardSection>
          </Card>
        );
      })
    }
  </Container>
);

Expertise.propTypes = {};

export default Expertise;
