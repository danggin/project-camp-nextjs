export const metadata = {
  title: 'Blog',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Blog Layout</h1>
      {children}
    </>
  );
}
