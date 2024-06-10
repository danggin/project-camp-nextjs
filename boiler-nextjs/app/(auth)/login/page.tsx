'use client';

import { usePathname } from 'next/navigation';

export default function Login() {
  const pathname = usePathname();
  return (
    <>
      <h1>Login Component</h1>
    </>
  );
}
