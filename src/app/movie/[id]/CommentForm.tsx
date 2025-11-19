import Input from "@/app/components/Input";
import CommentBox from "./CommentBox";
import { newComment } from "@/supabase/comments";
import { LuSendHorizontal } from "react-icons/lu";

export default function CommentForm({ id }: { id: string }) {
  return (
    <aside>
      <div className="flex gap-5 items-center flex-col">
        <form className="flex gap-3" action={newComment}>
          <Input type="text" placeholder="your opinion..." name="comment" />
          <input type="hidden" name="id" value={id} />
          <button type="submit">
            <LuSendHorizontal className="hover:scale-110 transition-all text-gray-300 text-xl" />
          </button>
        </form>
        <CommentBox id={id} />
      </div>
    </aside>
  );
}
