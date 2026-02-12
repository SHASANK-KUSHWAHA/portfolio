"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { TiltCard } from "./animations/TiltCard";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Zap, 
  Shield, 
  ShoppingCart,
  Clock,
  MessageCircle,
  Wrench
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating beautiful, modern, and user-friendly website designs that capture your brand's essence.",
    price: "From $299",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, fast, and secure websites using modern technologies and best practices.",
    price: "From $499",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Ensuring your website looks perfect on all devices, from desktop to mobile phones.",
    price: "From $199",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing website for better user experience and SEO rankings.",
    price: "From $149",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Keep your website secure and up-to-date with our maintenance services.",
    price: "From $99/mo",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Setting up online stores with secure payment gateways and inventory management.",
    price: "From $799",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseMe = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Regular updates and transparent process throughout.",
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description: "Post-launch support to ensure your success.",
  },
];

export function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Professional services tailored to meet your needs
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                  {/* Gradient line at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{service.description}</p>
                  
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <ScrollReveal className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose <span className="gradient-text">Me?</span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary p-3 mx-auto mb-4">
                <item.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-text-muted text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
