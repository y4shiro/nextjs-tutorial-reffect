import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const index: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Post 一覧</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
};

export default index;
