import React from "react";
import { useLazyQuery } from "@apollo/client";

import { Box, Button, Flex } from "rebass";

import { User } from "../../typings/user";

import { GET_USER_CONTACT } from "../../graphql/queries/get-user-contact";
import { UserContactCard } from "./components/UserContactCard";

export const ContactPage = () => {
  const [search, { data, error, loading }] = useLazyQuery<{
    users: User[];
  }>(GET_USER_CONTACT);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    search();
  };

  return (
    <Box>
      <Box as="form" onSubmit={handleSubmit} width={1 / 2} margin="0 auto 48px">
        <Flex justifyContent="center">
          <Button backgroundColor="#884fdd" ml="2" disabled={!!data}>
            Carregar contatos
          </Button>
        </Flex>
      </Box>
      {loading && <>Carregando...</>}
      {error && <>Deu ruim :c</>}
      {data?.users && (
        <Box
          sx={{
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            maxWidth: "932px",
            margin: "auto",
          }}
        >
          {data.users.map((user) => {
            const { id, name, phone, email } = user;
            return (
              <UserContactCard
                key={id}
                name={name}
                phone={phone}
                email={email}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};
