export default async function About() {
  const posts = await (
    await fetch("http://localhost:4000/posts", {
      next: {
        tags: ["posts"],
      },
    })
  ).json();

  return (
    <>
      <h1 className="text-2xl">About Pages</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
