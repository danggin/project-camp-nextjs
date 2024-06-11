"use client";
import { clickHandler } from "@/libs/actions";
export default function Button() {
  return (
    <>
      <form action={clickHandler}>
        <button type="submit">무력화</button>
      </form>
    </>
  );
}
