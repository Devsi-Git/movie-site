"use client";
import { signUp } from "@/supabase/auth";
import { useActionState } from "react";
import Input from "../components/Input";

const initialState = {
  error: { supabase: "", email: "", password: "", name: "" },
};

export default function Form() {
  const [formState, formAction] = useActionState(signUp, initialState);
  const { supabase, email, name, password } = formState.error;
  return (
    <>
      <form
        className="flex justify-center gap-3 w-[40%] max-lg:w-[50%]  max-md:w-[75%] max-sm:w-[42%] max-[426px]:w-[50%] max-[376px]:w-[53%] flex-col"
        action={formAction}
      >
        <div className="max-sm:text-sm max-[376px]:text-xs">
          <Input type="text" name="name" placeholder="user name" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {name}
          </p>
        </div>
        <div className="max-sm:text-sm max-[376px]:text-xs">
          <Input type="text" name="email" placeholder="email" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {email}
          </p>
        </div>
        <div className="max-sm:text-sm max-[376px]:text-xs">
          <Input type="password" name="password" placeholder="password" />
          <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
            {password}
          </p>
        </div>

        <p className=" text-xs font-light cursor-pointer mt-1 ml-1 text-[#b82727]">
          {supabase}
        </p>

        <button
          className="mt-10 max-sm:text-sm max-sm:mt-5 w-full cursor-pointer z-10 hover:scale-105 transition-all bg-[#00ADEF]  rounded-full py-2 "
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}
