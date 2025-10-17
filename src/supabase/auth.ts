"use server";
import z, { email } from "zod";
import { supabase } from "./initialize";

interface State {
  data: Record<string, object>;
  error: string;
}

const user = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export async function signUp(prevState: State, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = user.safeParse({ email, password });

  if (!res.success) {
    return { data: {}, error: res.error.message };
  }

  const { data, error } = await supabase.auth.signUp({
    email: res.data.email,
    password: res.data.password,
  });

  if (error || !data) {
    return { data: {}, error: error?.message };
  }

  return { data: data, error: "" };
}
