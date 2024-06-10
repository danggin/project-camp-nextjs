'use client';
import { useRouter } from 'next/navigation';
import { MdError } from 'react-icons/md';

export default function NotFound() {
  const router = useRouter();

  const homePage = () => {
    router.replace('/');
    // push 히스토리를 남긴 채로 지정한 페이지 경로로 이동
    // replace 히스토리를 덮어쓴 후 지정한 페이지 경로로 이동
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center min-h-screen'>
        <MdError className='text-[100px] text-rose-500' />
        <h1 className='text-[50px] font-bold'>...앗...</h1>
        <p className='max-w-[300px] text-lg'>
          이 페이지는 사라졌거나 다른 페이지로 변경되었어요. 주소를 다시 확인해
          주세요.
        </p>
        <div className='flex gap-4 m-4'>
          <button
            className='w-[95px] bg-gray-100 text-blue-500 rounded-md text-lg p-4'
            onClick={() => router.back()}
          >
            이전으로
          </button>
          <button
            className='w-[95px] bg-gray-100 text-rose-500 rounded-md text-lg p-4'
            onClick={homePage}
          >
            홈으로
          </button>
        </div>
      </div>
    </>
  );
}
