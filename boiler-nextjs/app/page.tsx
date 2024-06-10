'use client';
// Next.js 14
// 서버 컴포넌트 - 화면에 보이기 전에 실행 되는 컴포넌트

import './globals.css';
import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

// 클라이언트 컴포넌트 - 웹 브라우저에 코드가 불러와지고 실행되는 컴포넌트.
export default function Page() {
  const router = useRouter();
  console.log(router);
  const onClickHandler = () => {
    router.replace('/login'); // 결제하기 같은 페이지에서 사용 기록이 남지 않도록 할 때 사용
  };
  return (
    <>
      <h1 className='roboto'>page Component</h1>
      <h1 className={roboto.className}>page Component</h1>
      <button onClick={onClickHandler}>클릭</button>
    </>
  );
}
