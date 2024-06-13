'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const serverAction = async (formData: formData) => {
  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (response.ok) {
    revalidatePath('/');
    redirect('/');
  }
};

export const deleteUser = async (formData: formData) => {
  const id = formData.get('id');
  await fetch('http://localhost:4000/users/' + id, {
    method: 'DELETE',
  });

  revalidatePath('/');
};

export async function invalidData() {
  revalidatePath('/');
}
