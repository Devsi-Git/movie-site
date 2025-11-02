"use server";
import { cookies } from "next/headers";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/supabase/initialize";
import { redirect } from "next/navigation";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function setSession(session: Session) {
  const { access_token, refresh_token } = session;
  const cookieStore = await cookies();

  const cookieOptions = {
    httpOnly: true,
    sameSite: "strict" as const,
    path: "/",
  };

  cookieStore.set("sb-access", access_token, cookieOptions);
  cookieStore.set("sb-refresh", refresh_token, cookieOptions);
}

export async function refreshSession() {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    console.error("Error refreshing session:", error);
    return;
  }

  await setSession(data.session);
}

export async function logout() {
  await supabase.auth.signOut();

  const cookieStore = await cookies();

  const cookieOptions = {
    httpOnly: true,
    sameSite: "strict" as const,
    path: "/",
  };

  cookieStore.set("sb-access", "", cookieOptions);
  cookieStore.set("sb-refresh", "", cookieOptions);
  redirect("/");
}
