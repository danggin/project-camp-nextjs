"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDB from "./db";
import { User } from "./model";

export async function fetchMongoDB() {
  connectDB();
  // find all users
  const user = await User.find({});
  return user;
}

export async function insertMogoDB(formData: FormData) {
  connectDB();

  const name = formData.get("name");
  const email = formData.get("email");

  const newUser = new User({
    name,
    email,
  });

  newUser.save();
  revalidatePath("/");
}

export async function deleteMongoDB(formData: FormData) {
  connectDB();
  const id = formData.get("id");
  await User.findByIdAndDelete(id);
  revalidatePath("/");
}

export const serverAction = async (formData: FormData) => {
  const response = await fetch("http://localhost:4000/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    revalidatePath("/");
    redirect("/");
  }
};

export async function deleteUser(formData: FormData) {
  const id = formData.get("id");
  await fetch("http://localhost:4000/users/" + id, {
    method: "DELETE",
  });
  revalidatePath("/");
}

export async function invalidData() {
  revalidatePath("/");
}
