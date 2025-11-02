"use client";
import { isLiked, toggleLike } from "@/supabase/Likes";
import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function LikeBtn({ movieId }: { movieId: string }) {
  const [like, setLike] = useState(false);
  useEffect(() => {
    const checkLike = async () => {
      const result = await isLiked(movieId);
      setLike(result);
    };
    checkLike();
  }, [movieId]);

  const handleLike = async () => {
    toggleLike(movieId);
    const result = await isLiked(movieId);
    setLike(result);
  };

  return (
    <div
      onClick={() => handleLike()}
      className="relative w-6 pb-1 items-center flex justify-center group"
    >
      {like ? (
        <>
          <GoHeartFill className="absolute text-red-600 text-lg  group-hover:opacity-0 transition-all" />
          <GoHeart className="absolute opacity-0 transition-all text-lg group-hover:opacity-100" />
        </>
      ) : (
        <>
          <GoHeartFill className="absolute text-red-600 text-lg opacity-0 group-hover:opacity-100 transition-all" />
          <GoHeart className="absolute transition-all text-lg group-hover:opacity-0" />
        </>
      )}
    </div>
  );
}
