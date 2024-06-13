import connectDB from '@/lib/db';
import FormAdd from '@/components/FormAdd';
import UserList from '@/components/UserList';

export default function page() {
  return (
    <>
      <div className='flex flex-col justify-top p-5 items-center h-screen gap-8'>
        <FormAdd />
        <UserList />
      </div>
    </>
  );
}
