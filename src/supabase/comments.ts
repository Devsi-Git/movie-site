"use server";

import { getUser } from "@/lib/getUser";
import { supabase } from "./initialize";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getCommentByFilm(id: string) {
  const { data: comments, error } = await supabase
    .from("comments")
    .select("*")
    .eq("film_id", id);
  if (error || !comments) {
    return [];
  }
  return comments;
}

export async function newComment(formData: FormData) {
  const user = await getUser();
  if (!user) {
    redirect("/loginORsignup");
  }
  const userName = user?.user_metadata.userName;
  const userId = user?.id;

  const filmId = String(formData.get("id"));
  const comment = String(formData.get("comment"));

  if (comment && comment.trim().length === 0) {
    return;
  }

  const { data, error } = await supabase
    .from("comments")
    .insert([
      {
        content: comment,
        film_id: filmId,
        whoComment: userName,
        user_id: userId,
      },
    ])
    .select();

  if (error || !data) {
    console.log(error);
    return;
  }

  revalidatePath("/movie");
}
