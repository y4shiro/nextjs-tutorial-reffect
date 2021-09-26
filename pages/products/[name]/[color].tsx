import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Name: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <h1>
      {router.query.name}の{router.query.color}カラーです
    </h1>
  );
};

export default Name;
