import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <Link href='/' className='text-blue-500 underline'>
            Home
          </Link>
          <Link href='/about' className='text-blue-500 underline'>
            About
          </Link>
          <Link href='/blog' className='text-blue-500 underline'>
            Blog
          </Link>
        </div>
      </body>
    </html>
  );
}
