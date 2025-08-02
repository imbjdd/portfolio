import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Image from "next/image";

export default function Articles() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-4 xl:px-96 w-full pt-4 pb-12 md:pb-20 md:pt-8">
        <div className="py-8 md:py-16 flex flex-col gap-4">          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            Experiences
          </h1>
          <p>I used a lot of different technologies.</p>
          <ul className="list-disc pl-6">
            <li><a href="#AI" className="text-orange-400">AI</a></li>
            <li>Web3</li>
          </ul>
          <section className="mt-8 flex flex-col gap-4">
            <h2 id="AI" className="text-2xl font-semibold">AI</h2>
            <p>My first Experiences with AI were about AI safety. I read the <a className="text-orange-400" href="https://lesswrong.com">Lesswrong</a> blog extensively.</p>
            <p>During the summer of 2024, I took part in the <a className="text-orange-400" href="https://bluedot.org/">AI Safety Collab Germany course</a> organized by Bluedot Impact & CéSIA.</p>
            <p>Then, I focused more on the technical aspects of AI, exploring various frameworks and tools to build AI models. I participated in several hackathons and workshops to deepen my understanding and skills.</p>

            <h3 className="font-semibold mt-8">ETHGlobal Online</h3>
            <p>We did a RAG (Retrieval-Augmented Generation) project to generate memes.</p>
            <div dangerouslySetInnerHTML={{ __html: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8659d10c626b442f86d9d4cc89d0d349?sid=14ba83da-6cd0-4011-ba46-65acea6cedf9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>' }} />

            <h3 className="font-bold mt-8">Amsterdam Law Hackathon</h3>
            <p>We (also) built a RAG (Retrieval-Augmented Generation) project to analyze legal documents.</p>
            <div dangerouslySetInnerHTML={{ __html: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/35314452bb104fb1b50a603c45e4e34c?sid=1916177d-54ba-4fcd-be83-ee55d4a4bb62" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>' }} />

            <h3 className="font-bold mt-8">Hugging Face Hackathon</h3>
            <p>We built an agentic system to analyze tabular data and automatically make predictions.</p>
            <div dangerouslySetInnerHTML={{ __html: '<div style="position: relative; padding-bottom: 64.86161251504213%; height: 0;"><iframe src="https://www.loom.com/embed/953d824f72234de88ff0cf7e3e92ac09?sid=fa713648-241b-4647-a8d7-526c5ccaf89e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>' }} />
        
            <h3 className="font-bold mt-8">ETHGlobal Cannes</h3>
            <p>We built a consumer app delivering hedge-fund returns by optimizing yields with MCP-powered agentic workflows.</p>
            <Image src="/cannes.jpg" alt="ETHGlobal Cannes" width={800} height={450} className="rounded-lg w-full" />

            <h3 className="font-bold mt-8">Internship at LinkPact</h3>
            <p>Currently I&apos;m working on an agentic system to transpile legacy codes. For this project, I&apos;m also fine-tuning a LLM using <a className="text-orange-400" href="https://arxiv.org/abs/2106.09685">LoRA</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
} 
