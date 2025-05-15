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
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-light mb-2 tracking-tight">
          <Link href={`/posts/${slug}`} className="text-black hover:text-gray-700 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          <DateFormatter dateString={date} />
        </p>
        {excerpt && (
          <p className="text-gray-600 font-light mb-4 line-clamp-2">{excerpt}</p>
        )}
        <div className="mt-auto">
          <Link 
            href={`/posts/${slug}`} 
            className="text-sm font-light text-black hover:text-gray-700 transition-colors inline-flex items-center gap-1 group"
          >
            Read article
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
