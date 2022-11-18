import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Post {
    id: ID!
    userId: Int!
    title: String
    body: String
  }

  type Comment {
    id: ID!
    postId: Int!
    name: String
    email: String
    body: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts(userId: ID!): [Post]
    post(id: ID!): Post
    comments(postId: ID!): [Comment]
  }
`;
