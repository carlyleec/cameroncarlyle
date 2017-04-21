import gql from 'graphql-tag';

export const query = gql`
  query {
    schools{
      id,
      name,
      link,
      city,
      state,
      degree_type,
      degree,
      graduation_month,
      graduation_year,
      coursework,
      body,
    }
  }
`;

export const options = {};
