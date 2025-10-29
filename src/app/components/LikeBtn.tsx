"use clinet";
import { useEffect } from "react";
import { isLiked, toggleLike } from "@/supabase/Likes";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function LikeBtn({ movieId }: { movieId: string }) {
  useEffect(() => {
    const liked = isLiked(movieId);
    return () => {};
  }, [movieId]);

  return (
    <div
      onClick={() => toggleLike(movieId)}
      className="relative w-6 pb-1 items-center flex justify-center group"
    >
      12
      {/* {liked ? (
        <GoHeartFill className="absolute text-red-600 text-lg opacity-0 group-hover:opacity-100 transition-all" />
      ) : (
        <GoHeart className="absolute transition-all text-lg group-hover:opacity-0" />
      )} */}
    </div>
  );
}
