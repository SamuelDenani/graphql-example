import { gql } from "@apollo/client";

export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: ID!) {
    comments(postId: $postId) {
      id
      name
      email
      body
    }
  }
`;
