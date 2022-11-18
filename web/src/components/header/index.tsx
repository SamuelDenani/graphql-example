import { useHistory } from "react-router-dom";
import { Button, Flex, Heading } from "rebass";

export const Header = () => {
  const history = useHistory();

  const handleBackButtonClick = () => history.goBack();

  return (
    <Flex justifyContent="space-between" p={20} mb={60}>
      <Button onClick={handleBackButtonClick}>Voltar</Button>
      <Heading>GraphQL Example</Heading>
      <div></div>
    </Flex>
  );
};
