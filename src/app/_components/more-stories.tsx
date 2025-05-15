'use client'

import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { motion } from "motion/react"
import Link from "next/link";
type Props = {
  posts: Post[];
  hideTitle?: boolean;
};

export function MoreStories({ posts, hideTitle = false }: Props) {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        {!hideTitle && (
          <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-light text-black mb-16 tracking-tight"
            >
            Articles
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} className="border border-dashed border-black p-[1rem] rounded-[10px]" key={post.slug}>
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
