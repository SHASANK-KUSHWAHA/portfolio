"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import { Globe, Atom, Database, Palette, Cloud, Code2 } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and modern websites using HTML, CSS, JavaScript, and modern frameworks.",
    level: 90,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Atom,
    title: "React",
    description: "Creating dynamic user interfaces with React, Redux, and modern state management.",
    level: 85,
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "Python",
    description: "Developing robust backend solutions and automation scripts with Python.",
    level: 80,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Database",
    description: "Designing and managing databases with SQL and NoSQL solutions.",
    level: 75,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with modern design principles.",
    level: 82,
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Deploying and managing applications on cloud platforms like AWS and Firebase.",
    level: 70,
    color: "from-purple-500 to-violet-500",
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
        <skill.icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
      <p className="text-text-muted text-sm mb-4">{skill.description}</p>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-muted">Proficiency</span>
          <span className="font-medium text-primary">{skill.level}%</span>
        </div>
        <div className="h-2 bg-background-dark rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-20 bg-background-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
