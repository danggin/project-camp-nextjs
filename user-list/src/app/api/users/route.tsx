import connectDB from '@/libs/db';
import { User } from '@/libs/schema';

export async function GET(request: Request) {
  connectDB();
  // find all users
  const users = await User.find({});

  return Response.json(users);
}
