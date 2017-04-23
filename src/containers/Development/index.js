import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { groupBy } from 'lodash';

import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardTitleWithImage from '../../components/CardTitleWithImage';
import CardBody from '../../components/CardBody';

import MarkdownModal from '../MarkdownModal/MarkdownModal';
import Opener from '../MarkdownModal/Opener';

import renderMarkdown from '../../utils/renderMarkdown';

import { query, options } from './query';

const OpenerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 95%;
  flex-wrap: wrap;
`;

const Development = ({ data }) => {
  if (data.loading) {
    return <Loading>Loading</Loading>;
  }
  if (data.error) {
    console.log(data.error) //eslint-disable-line
    return (<div>An unexpected error occurred</div>);
  }
  const dataObj = groupBy(data.cards, 'id');
  return (
    <Container>
      <Card padding="30px" margin="0px" background="FFF">
        <CardTitleWithImage src={dataObj.portfolio[0].image}>{dataObj.portfolio[0].title}</CardTitleWithImage>
        <CardBody dangerouslySetInnerHTML={renderMarkdown(dataObj.portfolio[0].body)} />
        <OpenerWrapper>
          <Opener label={dataObj.simplicity[0].title} image={dataObj.simplicity[0].image} markdown={dataObj.simplicity[0].body} />
          <Opener label={dataObj.oneasheville[0].title} image={dataObj.oneasheville[0].image} markdown={dataObj.oneasheville[0].body} />
          <Opener label={dataObj.steepslope[0].title} image={dataObj.steepslope[0].image} markdown={dataObj.steepslope[0].body} />
        </OpenerWrapper>
      </Card>
      <Card padding="30px" margin="0px" background="FFF">
        <CardTitleWithImage src={dataObj.core[0].image}>{dataObj.core[0].title}</CardTitleWithImage>
        <CardBody dangerouslySetInnerHTML={renderMarkdown(dataObj.core[0].body)} />
      </Card>
      <Card padding="30px" margin="0px" background="FFF">
        <CardTitleWithImage src={dataObj.js[0].image}>{dataObj.js[0].title}</CardTitleWithImage>
        <CardBody dangerouslySetInnerHTML={renderMarkdown(dataObj.js[0].body)} />
      </Card>
      <Card padding="30px" margin="0px" background="FFF">
        <CardTitleWithImage src={dataObj.otherdev[0].image}>{dataObj.otherdev[0].title}</CardTitleWithImage>
        <CardBody dangerouslySetInnerHTML={renderMarkdown(dataObj.otherdev[0].body)} />
      </Card>
      <MarkdownModal />
    </Container>
  );
};

Development.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    cards: React.PropTypes.array,
  }).isRequired,
};

export default graphql(query, options)(Development);
