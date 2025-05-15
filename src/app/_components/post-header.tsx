import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg italic">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
