import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_POST } from '../../../../graphql/queries';
import { Post } from '../../../../typings/post';

export const GetPosts = () => {
  const { data, loading, error } = useQuery<{ posts: Post[]}>(GET_POST);
  console.log(data)

  if (loading) return <>Carregando...</>;
  if (error || !data?.posts) return <>Deu ruim :(</>;

  const { posts } = data;


  return (
    <>
      {posts.map(({id, title, body})=>(
         <>
          <h1>{title}</h1>
          <p>{body}</p>
          <a href="">ler mais</a>
         </>
      ))}
    </>
    
  )
}
