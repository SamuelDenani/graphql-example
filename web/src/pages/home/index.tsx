import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Box, Heading } from "rebass";
import { LIST_USERS } from "../../graphql/queries/list-users";
import { User } from "../../typings/user";
import { GetPosts, UserCard } from "./components";
import { GetUsers } from "./components/Users";

const container = {
  "width": "100%", 
  "justifyContent": "space-between",
   "display": "flex",
   "margin": "50px"
  }

export const HomePage = () => {
  const [allUsers, setAllUsers] = useState(true)
  const [allposts, setAllPosts] = useState(false)

  const viewPosts = () =>{
    setAllUsers(false)
    setAllPosts(true)
  }
  

  return (

    <Box p={60}>
      <Heading fontSize={72} mt={50} mb={54}>
        Página Inicial
      </Heading>
      <div style={container}>
        <button onClick={()=>setAllUsers(true)}>Todos os usuários</button>
        <button onClick={viewPosts}>Todos os Posts</button>
      </div>
      {allUsers && (
        <GetUsers />
      )}
      {allposts && (
        <GetPosts />
      )}
      
    </Box>
  );
};
