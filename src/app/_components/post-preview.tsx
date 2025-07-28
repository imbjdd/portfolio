'use client'

import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="group flex flex-col h-full">
      <div className="flex flex-col flex-grow gap-2">
        <h3 className="text-lg font-semibold tracking-tight">
          <p className="text-black/75 transition-colors">
            {title}
          </p>
        </h3>
        <p className="text-sm text-gray-500 italic">
          <DateFormatter dateString={date} />
        </p>
        {excerpt && (
          <p className="text-gray-600 font-light line-clamp-2">{excerpt}</p>
        )}
        <div className="mt-auto">
          <p 
            className="text-sm font-light text-black hover:text-gray-700 transition-colors inline-flex items-center gap-1 group"
          >
            Read article
            <span className="transform translate-x-0 ml-2 group-hover:translate-x-4 transition-transform duration-300 h-1 w-8 bg-orange-400"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
