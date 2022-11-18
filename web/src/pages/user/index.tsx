import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Heading, Text } from "rebass";
import { GET_USER, GET_USER_POSTS } from "../../graphql/queries";
import { Post as TPost } from "../../typings/post";
import { User } from "../../typings/user";
import { Post } from "./components";

export const UserPage = () => {
  const { userId }: never = useParams();
  const { data, loading, error } = useQuery<{ user: User }, { userId: string }>(
    GET_USER,
    { variables: { userId } }
  );

  const { data: userPosts, loading: postsLoading } = useQuery<
    { posts: TPost[] },
    { userId: string }
  >(GET_USER_POSTS, {
    variables: { userId },
  });

  if (loading) return <>Carregando...</>;
  if (error || (!loading && !data?.user)) return <>Deu ruim :(</>;

  const { user } = data!;

  return (
    <Box p={60}>
      <Flex mb={4}>
        <Heading fontSize={6} mr={3} color="#884fdd">
          {user.username}
        </Heading>
        <Text fontSize={3}>{user.name}</Text>
      </Flex>
      <Flex>
        <Text mr={2}>{user.email}</Text>|<Text ml={2}>{user.website}</Text>
      </Flex>

      <Heading mt={6} mb={4}>
        Posts de {user.username}
      </Heading>

      <Flex flexWrap="wrap">
        {postsLoading && <>Carregando posts de {user.username}...</>}

        {userPosts?.posts &&
          userPosts.posts.map(({ id, title, body }) => (
            <Post key={id} id={id} title={title} body={body} />
          ))}
      </Flex>
    </Box>
  );
};
