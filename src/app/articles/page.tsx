import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

export default function Articles() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-4 xl:px-96 w-full pt-4 md:pt-8">
        <div className="pb-8">          
          <h1 className="text-3xl font-bold md:text-2xl right-24 bottom-24 tracking-tight text-black leading-tight">
          All my writings
          </h1>

        </div>
      </div>
      <div>
        {allPosts.length > 0 ? (
          <MoreStories posts={allPosts} hideTitle={true} />
        ) : (
          <p className="text-xl">Aucun article disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
} 