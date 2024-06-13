'use client';

import { addUser } from '@/lib/action';
import { useRef } from 'react';
import { useFormState } from 'react-dom';

export default function FormAdd() {
  const [state, formAction] = useFormState(addUser, {
    success: false,
    message: '',
  });
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form ref={ref} action={formAction} className='w-[300px]'>
        <input
          type='text'
          name='name'
          placeholder='Enter User Name'
          className='border border-gray-300 rounded-md p-2 block mb-4 w-full'
        />
        <input
          type='email'
          name='email'
          placeholder='Enter User Email'
          className='border border-gray-300 rounded-md p-2 block mb-4 w-full'
        />
        <button className='bg-blue-500 text-white p-2 rounded-md mt-2 block w-full'>
          Save
        </button>
      </form>
      {state.success && (
        <h1
          className={`${state.success && 'text-blue-500'} ${!state.success && 'text-rose-500'} `}
        >
          {state.message}
        </h1>
      )}
    </>
  );
}
