import { cookies } from "next/headers";
import { Session } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function setSession(session: Session) {
  const { access_token, refresh_token } = session;

  const cookieStore = await cookies();
  cookieStore.set("sb-access", access_token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
  cookieStore.set("sb-refresh", refresh_token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
  redirect("/");
}
