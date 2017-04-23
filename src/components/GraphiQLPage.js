import React from 'react';
import styled from 'styled-components';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import Container from './Container';

const GraphiQLWrapper = styled.div`
  height: 90vh;
  width: 100%;
`;

const url = 'https://rlk7p3dxd8.execute-api.us-west-1.amazonaws.com/production/graphql';

const graphQLFetcher = graphQLParams => (
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
);

const GraphiQLPage = () => (
  <Container>
    <GraphiQLWrapper>
      <GraphiQL fetcher={graphQLFetcher} />
    </GraphiQLWrapper>
  </Container>
);

export default GraphiQLPage;
