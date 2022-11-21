import { Card, Heading, Text } from "rebass";

type Props = {
  name: string;
  phone: string;
  email: string;
};

export const UserContactCard = ({name, phone, email }: Props) => (
  <Card maxWidth={360} mb={40} mr={16}>
    <Heading fontSize={3} color="#fff" mb={2}>
      {name}
    </Heading>
    <Text fontSize={2} color="#ccc">
      Telefone: {phone}
    </Text>
    <Text fontSize={2} color="#ccc">
      Email: {email}
    </Text>
  </Card>
);