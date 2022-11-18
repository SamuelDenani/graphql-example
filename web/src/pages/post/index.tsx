import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Box, Flex, Heading, Text } from "rebass";

import { GET_POST, GET_POST_COMMENTS } from "../../graphql/queries";
import { Comment } from "../../typings/comment";
import { Post } from "../../typings/post";
import { CommentCard } from "./components";

export const PostPage = () => {
  const { postId }: never = useParams();

  const { data, loading } = useQuery<{ post: Post }, { postId: string }>(
    GET_POST,
    {
      variables: { postId },
    }
  );

  const { data: postComments, loading: commentsLoading } = useQuery<
    { comments: Comment[] },
    { postId: string }
  >(GET_POST_COMMENTS, {
    variables: { postId },
  });

  if (loading) return <>Carregando...</>;

  const { post } = data!;

  return (
    <Box p={60}>
      <Heading mb={2}>{post.title}</Heading>
      <Text color="#aaa">{post.body}</Text>

      <Heading mt={6} mb={3}>
        Comentários:
      </Heading>

      {commentsLoading && <>Carregando comentários do post...</>}

      <Flex flexWrap="wrap">
        {postComments?.comments.map(({ id, name, body }) => (
          <CommentCard key={id} name={name} body={body} />
        ))}
      </Flex>
    </Box>
  );
};
