import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="text-black dark:bg-slate-800">
      <Container>
        <div className="my-12 md:my-24 font-light rounded-md flex flex-col lg:flex-row items-center">
          <p>Always open for a coffee chat in Paris ☕.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
