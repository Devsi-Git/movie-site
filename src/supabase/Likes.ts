"use server";

import { getUser } from "@/lib/getUser";
import { supabase } from "./initialize";
import { redirect } from "next/navigation";

export async function initial(movieId: string) {
  console.log(
    "step 111111111111111111111111111111111111111111111111111111111111111111"
  );
  const user = await getUser();

  const userId = user?.id;

  const { data } = await supabase
    .from("likes")
    .select("*")
    .eq("movie_id", movieId)
    .eq("user_id", userId)
    .single();

  return { userId, data };
}

export async function toggleLike(movieId: string) {
  const { userId, data } = await initial(movieId);
  if (!userId) {
    redirect("/loginORsignup");
  }

  if (data) {
    const { error } = await supabase
      .from("likes")
      .delete()
      .eq("movie_id", movieId)
      .eq("user_id", userId);

    if (error) {
      return null;
    }
  } else {
    const { data: likeData, error } = await supabase
      .from("likes")
      .insert([{ movie_id: movieId, user_id: userId }])
      .select();

    if (error || !likeData) {
      return null;
    }

    return likeData;
  }
}

export async function isLiked(movieId: string) {
  const { userId, data } = await initial(movieId);

  if (data && userId) {
    return true;
  } else return false;
}
