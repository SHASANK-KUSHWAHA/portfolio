import { Services } from "@/components/Services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Professional services tailored to meet your needs. Let's build something amazing together.
          </p>
        </ScrollReveal>
        <Services />
      </div>
    </div>
  );
}
