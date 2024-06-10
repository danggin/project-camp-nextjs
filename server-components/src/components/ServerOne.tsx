// 트리 구조에서 중간 컴포넌트를 client componenet로 설정할 경우
// 연결된 하위 컴포넌트는 전부 client component가 된다
// client component 하위에는 server componene가 올 수 없다
// 되도록이면 연결된 가장 마지막 컴포넌트를 client component로 설정해야 한다

export default async function ServerOne() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Server component는 특정 컴포넌트가 지연이 되면 그 페이지는 렌더링되지 않는다
  // 가장 느리게 로딩되는 컴포넌트를 기다린 후 렌더링한다
  // => streaming 을 도입
  // 사용자가 보는 웹페이지의 화면을 끊김없이 스트리밍하게 해준다

  return (
    <>
      <h1>ServerOne Component</h1>
    </>
  );
}
