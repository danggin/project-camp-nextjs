'use client';

export default function BlogCard() {
  const random = Math.ceil(Math.random() * (3 - 1) + 1);
  console.log(random);

  if (random === 2) {
    throw new Error('Random Error');
  }

  return (
    <>
      <h1>BlogCard Component</h1>
    </>
  );
}
