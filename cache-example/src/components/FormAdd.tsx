'use client';
import { useState } from 'react';

export default function FormAdd() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    setName('');
    setEmail('');
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='w-[300px]'>
        <input
          type='text'
          name='name'
          onChange={onChangeNameHandler}
          value={name}
          placeholder='Enter Your Name'
          className='border border-gray-300 rounded-md p-2 block mb-4 w-full'
        />
        <input
          type='text'
          name='email'
          onChange={onChangeEmailHandler}
          value={email}
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
