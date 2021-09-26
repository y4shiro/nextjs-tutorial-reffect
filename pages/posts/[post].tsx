import type { GetServerSideProps, NextPage } from 'next';

const post: NextPage = ({ post }) => {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!Object.keys(post).length) {
    return { notFound: true };
  }
  return { props: { post } };
};

export default post;
