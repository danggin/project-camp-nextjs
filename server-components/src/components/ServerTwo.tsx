export default async function ServerTwo() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return (
    <>
      <h1>ServerTwo Component</h1>
    </>
  );
}
