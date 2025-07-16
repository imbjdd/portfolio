import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

export default function Articles() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Container>
      <div className="max-w-5xl mx-auto w-full pt-4 pb-12 md:pb-20 md:pt-8">
        <Header />
        <div className="py-8 md:py-16">          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            All my writings
          </h1>
          <div className={"mt-8"}>
            {allPosts.length > 0 ? (
              <MoreStories posts={allPosts} hideTitle={true} />
            ) : (
              <p className="text-xl">Aucun article disponible pour le moment.</p>
            )}
          </div>
        </div>
      </div>
      </Container>
    </main>
  );
} 