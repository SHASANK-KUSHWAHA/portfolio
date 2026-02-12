"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Bachelor's Degree in Computer Science",
    date: "2020 - Present",
    description: "Currently pursuing my degree while building real-world projects and gaining industry experience.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Freelance Developer",
    date: "2022 - Present",
    description: "Working with clients worldwide to build custom web solutions and digital experiences.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Web Development Projects",
    date: "2021 - Present",
    description: "Successfully delivered multiple projects ranging from e-commerce sites to web applications.",
    color: "from-purple-500 to-pink-500",
  },
];

export function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden sm:block" />

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            {/* Icon */}
            <div className="flex-shrink-0 relative z-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-4 flex items-center justify-center shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="glass-card rounded-2xl p-6 flex-1 sm:ml-0 hover:border-primary/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-clip-text text-transparent bg-white/10`}>
                  {item.date}
                </span>
              </div>
              <p className="text-text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
