import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            A collection of my recent work. Each project represents a unique challenge and creative solution.
          </p>
        </ScrollReveal>
        <Projects />
      </div>
    </div>
  );
}
