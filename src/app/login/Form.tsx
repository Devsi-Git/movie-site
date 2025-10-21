"use client";
import { signUp } from "@/supabase/auth";
import { useActionState } from "react";
import Input from "./Input";

const initialState = {
  data: {},
  error: { supabase: "", email: "", password: "", name: "" },
};

export default function Form() {
  const [formState, formAction] = useActionState(signUp, initialState);
  const { supabase, email, name, password } = formState.error;
  return (
    <>
      <form action={formAction} className="flex gap-3 mt-15 w-[40%]   flex-col">
        <div>
          <Input type="text" name="name" placeholder="user name" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {name}
          </p>
        </div>
        <div>
          <Input type="text" name="email" placeholder="email" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {email}
          </p>
        </div>
        <div>
          <Input type="password" name="password" placeholder="password" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {password}
          </p>
        </div>

        <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
          {supabase}
        </p>

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
