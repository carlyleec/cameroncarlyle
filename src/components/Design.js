import React from 'react';

import renderMarkdown from '../utils/renderMarkdown';
import Container from './Container';
import Card from './Card';
import CardTitleWithImage from './CardTitleWithImage';
import CardBody from './CardBody';

import data from '../data/design';


const Design = () => (
  <Container>
    {
      data.map(card => (
        <Card padding="30px" margin="0px" background="FFF">
          <CardTitleWithImage src={card.image}>{card.title}</CardTitleWithImage>
          <CardBody dangerouslySetInnerHTML={renderMarkdown(card.body)} />
        </Card>
      ))
    }
  </Container>
);

Design.propTypes = {};

export default Design;
