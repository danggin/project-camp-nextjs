// export const metadata = {
//   title: 'Blog',
// };

export const generateMetadata = async () => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async Title');
    }, 1000);
  });

  return {
    title,
  };
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Blog</h2>
      {children}
    </>
  );
}
