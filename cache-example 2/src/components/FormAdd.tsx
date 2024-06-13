'use client';

import { serverAction } from '@/libs/actions';
import { useRef } from 'react';

export default function FormAdd() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        action={async (formData) => {
          await serverAction(formData);
          ref.current?.reset();
        }}
        className='w-[300px]'
      >
        <input
          type='text'
          name='name'
          placeholder='Enter Your Name'
          className='border border-gray-300 rounded-md p-2 block mb-4 w-full'
        />
        <input
          type='text'
          name='email'
          placeholder='Enter Your Email'
          className='border border-gray-300 rounded-md p-2 block mb-4 w-full'
        />
        <button
          type='submit'
          className='block w-full rounded-md bg-blue-500 text-white p-2 mt-2'
        >
          Save
        </button>
      </form>
    </>
  );
}
