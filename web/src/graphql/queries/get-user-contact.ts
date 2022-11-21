import { gql } from "@apollo/client";

export const GET_USER_CONTACT = gql`
  query GetUserContact {
    users {
      id
      name
      email
      phone
    }
  }
`;
