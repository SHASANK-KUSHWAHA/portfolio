"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { TiltCard } from "./animations/TiltCard";
import { ExternalLink, Github, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MAASSSWEB",
    description: "A collaborative web application built with modern technologies. Features include real-time updates, user authentication, and interactive dashboards.",
    image: "🌐",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    demoUrl: "https://abhysmal.github.io/MAASSSWEB/",
    codeUrl: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio website showcasing skills, projects, and services with smooth animations.",
    image: "💻",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and secure checkout functionality.",
    image: "🛒",
    tags: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    demoUrl: "#",
    codeUrl: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Automation Bot",
    description: "An intelligent automation script that streamlines repetitive tasks and improves workflow efficiency.",
    image: "🤖",
    tags: ["Python", "Selenium", "API"],
    category: "automation",
    demoUrl: "#",
    codeUrl: "#",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "Data Dashboard",
    description: "An interactive data visualization dashboard with real-time analytics and custom reporting features.",
    image: "📊",
    tags: ["JavaScript", "D3.js", "Python"],
    category: "data",
    demoUrl: "#",
    codeUrl: "#",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Secure Auth System",
    description: "A robust authentication system with OAuth integration, two-factor authentication, and secure session management.",
    image: "🔐",
    tags: ["Node.js", "JWT", "Express"],
    category: "backend",
    demoUrl: "#",
    codeUrl: "#",
    color: "from-indigo-500 to-purple-500",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "automation", label: "Automation" },
  { id: "data", label: "Data & Analytics" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-background-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Showcasing my recent work and achievements
          </p>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-background-dark text-text-muted hover:text-white"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full group">
                    {/* Project Image */}
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.image}
                      </motion.div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-white text-sm font-medium hover:bg-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
