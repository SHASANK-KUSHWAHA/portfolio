import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Timeline } from "@/components/Timeline";
import { User, Mail, MapPin, Briefcase } from "lucide-react";

const aboutInfo = [
  { icon: User, label: "Name", value: "Shasank" },
  { icon: Mail, label: "Email", value: "shasank@example.com" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Briefcase, label: "Availability", value: "Open to work" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Get to know me better
          </p>
        </ScrollReveal>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <ScrollReveal>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-secondary animate-pulse blur-xl opacity-50" />
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-morph overflow-hidden border-2 border-primary/30">
                  <span className="text-9xl font-bold gradient-text">S</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Full Stack Developer & Designer</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Hello! I'm Shasank, a passionate Full Stack Developer with expertise in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>

              {/* Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {aboutInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl glass-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <ScrollReveal className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h2>
        </ScrollReveal>
        <Timeline />
      </div>
    </div>
  );
}
