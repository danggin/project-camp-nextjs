'use client';

// 1. eroor 컴포넌트는 컴포넌트의 에러가 발생될 경우 처리되는 컴포넌트
// 2. 경로마다 중첩해서 지정할 수 있다
// 3. 가장 가까운 경로의 error 컴포넌트가 실행된다.
// 4. err와 reset을 props로 받아 사용한다.
// 5. error는 객체, rest은 함수
// 6. reset 함수를 실행하면 이전 컴포넌트를 다시 불러온다.
// 7. 단, 이전 컴포넌트가 client component일 경우에만 해당된다.

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Blog Error Component: {error.message}</h1>
      <button onClick={reset}>Try again!</button>
    </>
  );
}
