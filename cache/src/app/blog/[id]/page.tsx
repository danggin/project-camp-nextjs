export default function Blog() {
  return (
    <>
      <h1>Blog Component</h1>
      <h2 className='text-2xl'>{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
