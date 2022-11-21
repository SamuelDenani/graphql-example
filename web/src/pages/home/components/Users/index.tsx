import { useQuery } from '@apollo/client';
import React from 'react'
import { LIST_USERS } from '../../../../graphql/queries/list-users';
import { User } from '../../../../typings/user';
import { UserCard } from '../user-card'

export const GetUsers = () => {
  const { data, loading, error } = useQuery<{ users: User[] }>(LIST_USERS);

    if (loading) return <>Carregando...</>;
    if (error || !data?.users) return <>Deu ruim :(</>;

    const { users } = data;
 
    return (
      <>
       { users.map(({ id, name, username, website }) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            username={username}
            website={website}
          />
        ))
      }
      </>
    )
  
}
