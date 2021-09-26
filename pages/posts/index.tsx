import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

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
