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

export async function addUser(formData: FormData) {
  connectDB();

  const name = formData.get('name');
  const email = formData.get('email');

  const newUser = new User({
    name,
    email,
  });

  newUser.save();
  revalidatePath('/');
}

export async function deleteUser(formData: FormData) {
  connectDB();
  const id = formData.get('id');
  await User.findByIdAndDelete(id);
  revalidatePath('/');
}
