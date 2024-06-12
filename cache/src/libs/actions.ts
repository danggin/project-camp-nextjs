"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function clickHandler() {
  revalidateTag("posts");
}
