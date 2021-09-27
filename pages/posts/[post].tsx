import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  InferGetStaticPropsType,
} from 'next';
import type { Post } from './index';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!Object.keys(post).length) {
    return { notFound: true };
  }
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post: Post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default post;
