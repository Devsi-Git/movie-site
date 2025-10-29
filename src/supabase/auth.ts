"use server";
import z from "zod";
import { supabase } from "./initialize";
import { setSession } from "@/lib/setSession";


const user = z.object({
  name: z.string().min(3, "username cant be under 6 characters !"),
  email: z.string().email("invalid email address !"),
  password: z.string().min(6, "password cant be under 6 characters !"),
});

export interface State {
  error: {
    supabase: string;
    email: string;
    password: string;
    name: string;
  };
}

export async function signUp(prevState: State, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = user.safeParse({ email, password, name });

  const errorObject: { [key: string]: string } = {};
  if (!res.success) {
    const messages = res.error.issues;

    messages.forEach((error) => {
      const path = error.path[0].toString();
      errorObject[path] = error.message;
    });

    return {
      error: {
        supabase: "",
        name: errorObject.name,
        email: errorObject.email,
        password: errorObject.password,
      },
    };
  }

  const { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({
      email: res.data.email,
      password: res.data.password,
    });

  if (loginError) {
    if (loginError.message.includes("Invalid login")) {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email: res.data.email,
          password: res.data.password,
          options: {
            data: { userName: res.data.name },
          },
        });

      if (signUpError) {
        return {
          error: {
            supabase: signUpError.message,
            email: "",
            name: "",
            password: "",
          },
        };
      }

      if (signUpData?.session) await setSession(signUpData.session);
      return {
        error: { supabase: "", email: "", name: "", password: "" },
      };
    } else {
      return {
        error: {
          supabase: loginError.message,
          email: "",
          name: "",
          password: "",
        },
      };
    }
  }

  if (loginData?.session) await setSession(loginData.session);

  return {
    error: { supabase: "", email: "", name: "", password: "" },
  };
}


