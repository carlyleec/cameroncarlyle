import gql from 'graphql-tag';

export const query = gql`
  query ($page: String!){
    cards(page : $page){
      id,
      title,
      linkTo,
      image,
      body
    }
  }
`;

export const options = {
  options: {
    variables: {
      page: "/expertise", // eslint-disable-line
    },
  },
};
