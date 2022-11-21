import { gql } from "@apollo/client";

export const GET_POST = gql`
  query Posts {
    posts(userId: 1) {
      id
      userId
      title
      body
    }
}
`;
