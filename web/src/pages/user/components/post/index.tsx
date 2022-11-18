import { Link } from "react-router-dom";
import { Card, Heading, Text } from "rebass";

type Props = {
  id: number;
  title: string;
  body: string;
};

export const Post = ({ id, title, body }: Props) => (
  <Card maxWidth={360} mb={40} mr={16}>
    <Link to={`/posts/${id}`}>
      <Heading fontSize={3} color="#fff" mb={2}>
        {title}
      </Heading>

      <Text fontSize={2} color="#ccc">
        {body}
      </Text>
    </Link>
  </Card>
);
