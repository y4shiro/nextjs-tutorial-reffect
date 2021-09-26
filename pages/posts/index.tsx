import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const index: NextPage = ({ posts }) => {
  return (
    <div>
      <h1>Post 一覧</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
};

export default index;
