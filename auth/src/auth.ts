import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import connectDB from './lib/db';
import { User } from './lib/schema';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        console.log('Credencials,', credentials);
        const { email, password } = credentials;

        if (!email || !password) {
          console.log('입력값이 부족합니다.');
        }

        connectDB();
        const user = await User.findOne({ email }).select('+password +role');

        if (!user) {
          throw new CredentialsSignin('존재하지 않는 회원입니다.');
        }

        const isMatched = await compare(String(password), user.password);

        if (!isMatched) {
          throw new CredentialsSignin('비밀번호가 일치하지 않습니다.');
        }

        return {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };
      },
    }),
  ],
});
