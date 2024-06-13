import connectDB from './db';
import { Todo } from '@/lib/schema';
import { revalidatePath } from 'next/cache';

export async function fetchMongoDB() {
  connectDB();
  const todo = Todo.find({});
  return todo;
}

export async function addTodo(formData: FormData) {
  connectDB();

  const text = formData.get('text');
  const completed = formData.get('completed');

  if (text === '') {
    return { success: false, message: 'Please enter your todo.' };
  }

  const newUser = new Todo({
    text,
    completed,
  });

  newUser.save();
  revalidatePath('/');
}
