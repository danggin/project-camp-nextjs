import Image from 'next/image';

export default async function Home() {
  const posts = await (await fetch('http://localhost:4000/posts')).json();

  return (
    <>
      <h1 className='text-2xl'>Home</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h2 className='text-2xl'>{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
