import React from 'react';
import styled from 'styled-components';

import renderMarkdown from '../utils/renderMarkdown';
import Container from './Container';
import Card from './Card';
import CardTitleWithImage from './CardTitleWithImage';
import CardBody from './CardBody';

import MarkdownModal from '../containers/MarkdownModal/MarkdownModal';
import Opener from '../containers/MarkdownModal/Opener';


import data from '../data/development';

const OpenerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 95%;
  flex-wrap: wrap;
`;

const Development = () => (
  <Container>
    <Card padding="30px" margin="0px" background="FFF">
      <CardTitleWithImage src={data.portfolio.image}>{data.portfolio.title}</CardTitleWithImage>
      <CardBody dangerouslySetInnerHTML={renderMarkdown(data.portfolio.body)} />
      <OpenerWrapper>
        <Opener label={data.simplicity.title} image={data.simplicity.image} markdown={data.simplicity.body} />
        <Opener label={data.oneasheville.title} image={data.oneasheville.image} markdown={data.oneasheville.body} />
        <Opener label={data.steepslope.title} image={data.steepslope.image} markdown={data.steepslope.body} />
      </OpenerWrapper>
    </Card>
    <Card padding="30px" margin="0px" background="FFF">
      <CardTitleWithImage src={data.core.image}>{data.core.title}</CardTitleWithImage>
      <CardBody dangerouslySetInnerHTML={renderMarkdown(data.core.body)} />
    </Card>
    <Card padding="30px" margin="0px" background="FFF">
      <CardTitleWithImage src={data.js.image}>{data.js.title}</CardTitleWithImage>
      <CardBody dangerouslySetInnerHTML={renderMarkdown(data.js.body)} />
    </Card>
    <Card padding="30px" margin="0px" background="FFF">
      <CardTitleWithImage src={data.other.image}>{data.other.title}</CardTitleWithImage>
      <CardBody dangerouslySetInnerHTML={renderMarkdown(data.other.body)} />
    </Card>
    <MarkdownModal />
  </Container>
);

Development.propTypes = {};

export default Development;
