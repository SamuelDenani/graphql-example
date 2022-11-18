import { gql } from "@apollo/client";

export const LIST_USERS = gql`
  query ListUsers {
    users {
      id
      name
      username
      email
      website
    }
  }
`;
