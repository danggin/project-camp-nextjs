// export async function generateMetadata() {
//   // API Call...
//   // const posts = await (await fetch("http://localhost:4000/posts")).json();

//   return {
//     title: posts[0].title,
//   };
// }

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
