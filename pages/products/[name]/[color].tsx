import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Name: NextPage = () => {
  const router = useRouter();
  const { name, color } = router.query;
  return (
    <h1>
      {name}の{color}カラーです
    </h1>
  );
};

export default Name;
