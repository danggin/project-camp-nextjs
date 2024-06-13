import { register } from '@/lib/action';

export default function RegisterForm() {
  return (
    <>
      <form action={register}>
        <input type='text' name='name' placeholder='Enter Your name' />
        <input type='email' name='email' placeholder='Enter Your Email' />
        <input
          type='password'
          name='password'
          placeholder='Enter Your Password'
        />
        <button>Register</button>
      </form>
    </>
  );
}
