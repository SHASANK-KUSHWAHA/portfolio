import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <ContactForm />
    </>
  );
}
