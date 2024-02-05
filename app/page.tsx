import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Welcome } from "@/components/welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <Projects />
      <About />
    </div>
  );
}
