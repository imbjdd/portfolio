import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Awards } from "@/app/_components/awards";
import { Resume } from "@/app/_components/resume";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts;

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-300 to-10% to-white">
      <Container>
        <Header />
        <Intro />
      </Container>
      
      <Container>
        <Awards />
        <div className="flex flex-col gap-4">
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </div>
        <Resume />
      </Container>
    </main>
  );
}
