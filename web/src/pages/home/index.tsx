import { useQuery, useLazyQuery } from "@apollo/client";
import { Box, Button, Heading } from "rebass";
import { LIST_USERS } from "../../graphql/queries/list-users";
import { GET_WEBSITES } from "../../graphql/queries/get-websites";
import { User } from "../../typings/user";
import { UserCard } from "./components";
import React from "react";

export const HomePage = () => {
  const { data, loading, error } = useQuery<{ users: User[] }>(LIST_USERS);
  const [randomQuery, {data: dados, loading: carregando, error: erro}] = useLazyQuery<{users: User[] }>(GET_WEBSITES);


  if (loading) return <>Carregando...</>;
  if (error || !data?.users) return <>Deu ruim :(</>;

  const { users } = data;

  async function handleButtonClick(e: React.FormEvent) {
    e.preventDefault()
    const dados = await randomQuery()

    if (carregando) return <>Carregando...</>;
    if (erro || !dados?.data) return <>Deu ruim :(</>;

    const websites = dados?.data?.users?.map((element) => element?.website)
    const pickANumber = Math.floor(Math.random() * 10)
    const siteSorteado = websites[pickANumber]

    window.open("https://www."+siteSorteado, '_blank')

  }

  
  return (
    <Box p={60}>
      <Heading fontSize={72} mb={54}>
        Todos usuários
      </Heading>

      <Button mb={4} onClick={(e) => handleButtonClick(e)}>
        Randomize website
      </Button>

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
