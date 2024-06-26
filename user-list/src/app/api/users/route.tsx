import connectDB from '@/lib/db';
import { User } from '@/lib/schema';

export async function GET(request: Request) {
  connectDB();
  // find all users
  const users = await User.find({});

  return Response.json(users);
}
