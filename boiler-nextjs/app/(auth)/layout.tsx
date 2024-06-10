export const metadata = {
  title: "Auth Page",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3>auth header</h3>
      {children}
      <h4>auth footer</h4>
    </>
  );
}
