import React from 'react';
import { graphql } from 'react-apollo';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import CardSectionTitle from '../../components/CardSectionTitle';
import CardSectionBody from '../../components//CardSectionBody';
import CardImage from '../../components/CardImage';
import LinkButton from '../../components/LinkButton';

import renderMarkdown from '../../utils/renderMarkdown';
import orderCards from '../../utils/orderCards';

import { query, options } from './query';

const cardOrder = ['design', 'development', 'data'];

const Expertise = ({ data }) => {
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
        orderCards(data.cards, cardOrder).map((expertise, index) => {
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
};

Expertise.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    cards: React.PropTypes.array,
  }).isRequired,
};

export default graphql(query, options)(Expertise);
