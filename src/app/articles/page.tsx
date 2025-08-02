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
        <div className="py-8 md:py-16">          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
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