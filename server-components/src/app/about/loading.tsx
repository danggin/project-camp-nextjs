import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  // 자신과 가장 인접한 loading 컴포넌트를 보여줌

  return (
    <>
      <AiOutlineLoading3Quarters className='animate-spin' />
    </>
  );
}
