import { clickHandler } from "@/libs/actions";

export default async function APage() {
  const posts = await (
    await fetch("http://localhost:4000/posts", {
      next: {
        tags: ["posts"],
      },
    })
  ).json();
  return (
    <>
      <h1>A Pages</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <form action={clickHandler}>
        <button type="submit">무력화</button>
      </form>
    </>
  );
}
