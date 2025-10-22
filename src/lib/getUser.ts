"use server";

import { cookies } from "next/headers";
import { supabase } from "@/supabase/initialize";

export async function getUser() {
  const cookieStore = cookies();
  const access_token = (await cookieStore).get("sb-access")?.value;

  if (!access_token) return null;

  const { data, error } = await supabase.auth.getUser(access_token);

  if (error) return null;
  return data.user;
}
