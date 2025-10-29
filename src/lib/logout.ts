"use server";

import { cookies } from "next/headers";
import { supabase } from "@/supabase/initialize";
import { redirect } from "next/navigation";

export async function logout() {
  await supabase.auth.signOut();

  const cookieStore = cookies();

  (await cookieStore).set("sb-access", "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });

  (await cookieStore).set("sb-refresh", "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });
  redirect("/");
}
