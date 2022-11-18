import { Link } from "react-router-dom";
import { Card, Flex, Heading, Text } from "rebass";

type Props = {
  id: number;
  name: string;
  username: string;
  website: string;
};

export const UserCard = ({ id, name, username, website }: Props) => {
  return (
    <Card mb={32}>
      <Link to={`/users/${id}`}>
        <Flex mb={2}>
          <Heading fontSize={5} color="#884fdd" marginRight={3}>
            {name}
          </Heading>
          <Text color="#fff" fontSize={4}>
            {username}
          </Text>
        </Flex>

        <Text color="#fff" fontSize={3}>
          {website}
        </Text>
      </Link>
    </Card>
  );
};
