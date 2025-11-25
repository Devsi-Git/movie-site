import { getCommentByUser } from "@/supabase/comments";
import { getFilmById } from "@/supabase/films";

export default async function UserComment({ id }: { id: string }) {
  const comments = await getCommentByUser(id);

  const films = await Promise.all(
    comments.map(async (comment) => {
      const film = await getFilmById(comment.film_id);
      return { commentId: comment.id, film };
    })
  );

  const filmsMap = Object.fromEntries(films.map((f) => [f.commentId, f.film]));
  console.log(filmsMap);

  return (
    <div className="max-w-[260px] space-y-2 p-2 w-[260px] rounded-xl flex flex-col overflow-y-auto scroll-thin h-80 border border-[#6A6A6A]">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="p-2 pr-3 py-1.5 min-w-40 h-fit w-fit rounded-t-xl rounded-r-xl bg-gray-900"
          >
            <h4 className="text-sm text-gray-400">
              on: {filmsMap[comment.id]?.name || "Unknown"}
            </h4>
            <p className="pl-2 leading-5 mt-1 break-words text-gray-300">
              {comment.content}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-sm leading-5 self-center text-gray-400">
          you did not post a comment yet.
        </p>
      )}
    </div>
  );
}
