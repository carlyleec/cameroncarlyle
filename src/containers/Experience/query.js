import gql from 'graphql-tag';

export const query = gql`
  query {
    jobs{
      id,
      title,
      place,
      organization,
      organization_link,
      start,
      end,
      body,
    }
    status{
      id,
      title,
      body,
    }
  }
`;

export const options = {};
