"use client";
import { signUp } from "@/supabase/auth";
import { useActionState } from "react";
import Input from "./Input";

const initialState = {
  data: {},
  error: [],
};

export default function Form() {
  const [formState, formAction] = useActionState(signUp, initialState);

  return (
    <>
      <form action={formAction} className="flex gap-3 mt-15 w-[40%]   flex-col">
        <Input type="text" name="email" placeholder="email" />

        <Input type="password" name="password" placeholder="password" />
        {formState.error.map((err, i) => (
          <p
            key={i}
            className=" text-xs font-light cursor-pointer text-[#b82727]"
          >
            {err}
          </p>
        ))}
        <button
          type="submit"
          className="mt-10 w-full cursor-pointer z-10 hover:scale-105 transition-all bg-[#00ADEF]  rounded-full py-2 "
        >
          Login
        </button>
      </form>
    </>
  );
}
