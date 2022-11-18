import { Card, Heading, Text } from "rebass";

type Props = {
  name: string;
  body: string;
};

export const CommentCard = ({ name, body }: Props) => {
  return (
    <Card maxWidth={180} mr={32}>
      <Heading>{name}</Heading>
      <Text color="#aaa">{body}</Text>
    </Card>
  );
};
