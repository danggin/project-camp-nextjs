import { redirect } from 'next/navigation';

type TBlogDetail = {
  params: {
    id: string;
  };
};

export default function BlogDetail({ params }: TBlogDetail) {
  const numberId = parseInt(params.id);

  if (Number.isNaN(numberId)) {
    redirect('/blog/page/notfound');
  }

  return (
    <>
      <h1>Blog {params.id} Component</h1>
    </>
  );
}
