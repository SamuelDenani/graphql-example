import { gql } from "@apollo/client";

export const GET_USER_POSTS = gql`
  query GetUserPosts($userId: ID!) {
    posts(userId: $userId) {
      id
      title
      body
    }
  }
`;
