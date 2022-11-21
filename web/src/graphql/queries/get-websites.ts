import { gql } from "@apollo/client";

export const GET_WEBSITES = gql`
  query GetWebsites {
    users {
      website
    }
  }
`;
