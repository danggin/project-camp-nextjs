'use client';

import { useSearchParams } from 'next/navigation';

type TBlogDynamic = {
  params: {
    id: string;
  };
};

export default function BlogDynamic({ params }: TBlogDynamic) {
  console.log(params.id);

  const searchParams = useSearchParams();

  //   console.log(searchParams.get('lang'));

  return (
    <>
      <h1>BlogDynamic Component</h1>
    </>
  );
}
