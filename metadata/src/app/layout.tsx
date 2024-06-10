import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Sucoding',
    default: 'Next.JS | Sucoding',
  },
  description: "Let's learn next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <div className='flex gap-4'>
          <Link href='/login' className='text-blue-500 underline'>
            Login
          </Link>
          <Link href='/register' className='text-blue-500 underline'>
            Register
          </Link>
          <Link href='/password' className='text-blue-500 underline'>
            Password
          </Link>
          <Link href='/blog' className='text-blue-500 underline'>
            Blog
          </Link>
          <Link href='/blog/1' className='text-blue-500 underline'>
            Blog 1
          </Link>
          <Link href='/blog/2' className='text-blue-500 underline'>
            Blog 2
          </Link>
          <Link href='/blog/read' className='text-blue-500 underline'>
            Blog Read
          </Link>
        </div>
      </body>
    </html>
  );
}
