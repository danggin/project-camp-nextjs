export const metadata = {
  title: 'Login',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Login Layout</h1>
      {children}
    </>
  );
}
