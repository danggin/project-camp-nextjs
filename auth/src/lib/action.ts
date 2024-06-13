'use server';
import connectDB from './db';
import { redirect } from 'next/navigation';
import { User } from './schema';
import { hash } from 'bcryptjs';
import { signIn } from '@/auth';

export async function register(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!name || !email || !password) {
    console.log('입력값이 부족합니다.');
  }

  connectDB();

  // 있는 회원인지 조회
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    console.log('이미 가입된 회원입니다.');
  }

  // 없는 회원이라면 DB에 넣기
  const hashPassword = await hash(String(password), 10); // 비밀번호 암호화
  const user = new User({
    name,
    email,
    password: hashPassword,
  });

  await user.save();
  redirect('/');
}

// 로그인

export async function login(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    console.log('입력값이 부족합니다.');
  }

  try {
    console.log('try', email, password);
    await signIn('credentials', {
      redirect: false,
      callbackURL: '/',
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
}
