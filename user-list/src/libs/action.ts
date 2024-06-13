'use server';

import { revalidatePath } from 'next/cache';
import connectDB from './db';
import { User } from './schema';

export async function fetchUser() {
  connectDB();
  // find all users
  const user = await User.find({});
  return user;
}

export async function addUser(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  connectDB();

  const name = formData.get('name');
  const email = formData.get('email');

  if (email === '' || name === '') {
    return { success: false, message: 'Please fill in the form.' };
  }

  const newUser = new User({
    name,
    email,
  });

  newUser.save();
  revalidatePath('/');

  return { success: true, message: 'Your infoemation is saved.' };
}

export async function deleteUser(formData: FormData) {
  connectDB();
  const id = formData.get('id');
  await User.findByIdAndDelete(id);
  revalidatePath('/');
}
