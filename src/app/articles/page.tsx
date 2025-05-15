import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

export default function Articles() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <Container>
        <Header />
        <div className="my-16 md:my-24">          
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
      </Container>
    </main>
  );
} 