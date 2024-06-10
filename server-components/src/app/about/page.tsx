import ServerOne from '@/components/ServerOne';
import ServerTwo from '@/components/ServerTwo';
import { Suspense } from 'react';

export default function About() {
  // Suspense : React 18에서 나온 기능이지만 Next에서 많이 쓴다
  // Suspense 는 병렬 처리되어야 적용된다
  // Suspense 가 적용되지 않는 경우에는 loading 컴포넌트가 적용된다

  return (
    <>
      <h1>About Page</h1>
      <Suspense
        fallback={<h1 className='text-blue-500'>Suspense one loading...</h1>}
      >
        <ServerOne />
      </Suspense>
      <Suspense
        fallback={<h1 className='text-rose-500'>Suspense two loading...</h1>}
      >
        <ServerTwo />
      </Suspense>
    </>
  );
}
