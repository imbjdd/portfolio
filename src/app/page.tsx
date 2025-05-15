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
    <main className="min-h-screen bg-white">
      <Container>
        <Header />
        <Intro />
      </Container>
      
      <div id="content">
        <Awards />
        <Container>
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </Container>
        <Resume />
      </div>
    </main>
  );
}
