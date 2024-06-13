import connectDB from '@/lib/db';
import { Todo } from '@/lib/schema';

export async function GET(request: Request) {
  connectDB();
  // find all users
  const todos = await Todo.find({});

  return Response.json(todos);
}
