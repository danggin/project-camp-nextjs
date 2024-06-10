type TMetadata = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: TMetadata) {
  return {
    title: `Blog ${params.id} | Sucoding`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Blog Detail Layout</h1>
      {children}
    </>
  );
}
