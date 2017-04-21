import React from 'react';
import { graphql } from 'react-apollo';

import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardTitleWithImage from '../../components/CardTitleWithImage';
import CardBody from '../../components/CardBody';

import renderMarkdown from '../../utils/renderMarkdown';
import orderCards from '../../utils/orderCards';

import { query, options } from './query';


const cardOrder = ['storage', 'geospatial', 'viz'];

const Data = ({ data }) => {
  if (data.loading) {
    return <Loading>Loading</Loading>;
  }
  if (data.error) {
    console.log(this.props.data.error) //eslint-disable-line
    return (<div>An unexpected error occurred</div>);
  }
  return (
    <Container>
      {
        orderCards(data.cards, cardOrder).map(card => (
          <Card key={card.id} padding="30px" margin="0px" background="FFF">
            <CardTitleWithImage src={card.image}>{card.title}</CardTitleWithImage>
            <CardBody dangerouslySetInnerHTML={renderMarkdown(card.body)} />
          </Card>
        ))
      }
    </Container>
  );
};

Data.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    cards: React.PropTypes.array,
  }).isRequired,
};

export default graphql(query, options)(Data);
