import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
    }
  }
`;
