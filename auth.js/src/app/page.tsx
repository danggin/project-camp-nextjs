import { getSession } from '@/lib/getSession';

export default async function Home() {
  const session = await getSession();
  console.log(session);

  return (
    <>
      <h1>Home Pages</h1>
    </>
  );
}
