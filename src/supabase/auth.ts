"use server";
import z from "zod";
import { supabase } from "./initialize";

interface State {
  data: object;  
  error: [];
}

const user = z.object({
  email: z.string().email("invalid email address!"),
  password: z.string().min(6, "password cant be under 6 characters !"),
});

export async function signUp(prevState: State, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = user.safeParse({ email, password });

  if (!res.success) {
    const messages = res.error.issues.map((issue) => issue.message);
    console.log(messages);
    return { data: {}, error: messages };
  }

  const { data, error } = await supabase.auth.signUp({
    email: res.data.email,
    password: res.data.password,
  });

  if (error || !data) {
    return { data: {}, error: [error?.message] };
  }

  return { data: data, error: [] };
}
