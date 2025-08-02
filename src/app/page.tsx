import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Awards } from "@/app/_components/awards";
import { Resume } from "@/app/_components/resume";
import { MoreStories } from "@/app/_components/more-stories";
import { Snapshots } from "@/app/_components/snapshots";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

import "./globals.css";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts;

  return (
    <main className="min-h-screen bg-white w-screen overflow-x-hidden min-w-96">
      <Container>
      </Container>
      <Header />

      <Intro />
            
        <Awards />
        <div className="flex flex-col gap-4">
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </div>
        {/* <Resume /> */}
        <Snapshots />
    </main>
  );
}
