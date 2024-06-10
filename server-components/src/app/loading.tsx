import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  // streaming : 로딩이 필요한 부분에만 로딩 컴포넌트를 표시

  return (
    <>
      <AiOutlineLoading3Quarters className='animate-spin' />
    </>
  );
}
