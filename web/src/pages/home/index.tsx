import { useQuery } from "@apollo/client";
import { Box, Heading } from "rebass";
import { LIST_USERS } from "../../graphql/queries/list-users";
import { User } from "../../typings/user";
import { UserCard } from "./components";

export const HomePage = () => {
  const { data, loading, error } = useQuery<{ users: User[] }>(LIST_USERS);

  if (loading) return <>Carregando...</>;
  if (error || !data?.users) return <>Deu ruim :(</>;

  const { users } = data;

  return (
    <Box p={60}>
      <Heading fontSize={72} mb={54}>
        Todos usuários
      </Heading>

      {users.map(({ id, name, username, website }) => (
        <UserCard
          key={id}
          id={id}
          name={name}
          username={username}
          website={website}
        />
      ))}
    </Box>
  );
};
