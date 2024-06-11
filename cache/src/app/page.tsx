import Button from "@/components/Button";

export default async function Home() {
  const posts = await (
    await fetch("http://localhost:4000/posts", {
      next: {
        tags: ["posts"],
      },
    })
  ).json();
  return (
    <>
      <h1 className="text-2xl">Home Pages</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <Button />
    </>
  );
}
