import { getCommentByFilm } from "@/supabase/comments";

export default async function CommentBox({ id }: { id: string }) {
  const comments = await getCommentByFilm(id);

  return (
    <div className="max-w-[260px] space-y-2 p-2 w-[260px] max-[426px]:max-w-[300px] max-[376px]:max-w-[270px] max-[426px]:mt-10  max-lg:max-w-[380px]  max-lg:w-[380px] flex-col rounded-xl flex overflow-y-auto scroll-thin h-80 border border-[#6A6A6A] ">
      {comments.length > 0 ? (
        comments.map((item) => (
          <div
            key={item.id}
            className="p-2 py-1.5 min-w-40 h-fit w-fit rounded-t-xl rounded-r-xl bg-gray-900"
          >
            <div className="flex justify-between">
              <h4 className="text-sm text-gray-400">{item.whoComment}</h4>
              <time
                className="text-sm  text-gray-500"
                dateTime={item.created_at}
              >
                {item.created_at.split("T")[0]}
              </time>
            </div>
            <p className="pl-2 leading-5 mt-1 break-words text-gray-300">
              {item.content}
            </p>
          </div>
        ))
      ) : (
        <div className="h-full flex items-center">
          <p className="  text-center text-sm leading-5  text-gray-400">
            Be the first who comment on this movie.
          </p>
        </div>
      )}
    </div>
  );
}
