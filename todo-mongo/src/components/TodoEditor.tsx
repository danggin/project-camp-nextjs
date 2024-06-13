'use client';
import Input from './html/Input';
import Button from './html/Button';
import { useRef } from 'react';
import { addTodo } from '@/lib/action';

export default function TodoEditor() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          await addTodo(formData);
          ref.current?.reset();
        }}
        className='flex gap-2'
      >
        <Input type='text' name='text' placeholder='Enter Your Todo' />
        <Button type='submit' style={'w-[77px] bg-[#4F4F4F] text-white'}>
          Add
        </Button>
      </form>
    </>
  );
}
