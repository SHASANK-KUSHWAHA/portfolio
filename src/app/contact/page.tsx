import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </ScrollReveal>
        <ContactForm />
      </div>
    </div>
  );
}
