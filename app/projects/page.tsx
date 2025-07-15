"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

// Interface for project data structure
interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'photogrammetry' | 'uas' | 'land' | 'ai';
  githubLink?: string;
  liveLink?: string;
  image: string; // Path relative to public/projects folder
  specs?: string[]; // Technical specifications
}

export default function ProjectsPage() {
  // Professional project portfolio
  const projects: Project[] = [
    // Photogrammetry & Mapping
    {
      title: "Residential Property Documentation",
      description: "High-resolution aerial photogrammetry mapping for real estate documentation with centimeter-level accuracy using Quantum Systems Trinity Pro.",
      tags: ["Photogrammetry", "Real Estate", "Quantum Systems", "GeoTIFF"],
      category: "photogrammetry",
      specs: ["1cm GSD accuracy", "Quantum Systems Trinity Pro", "GeoTIFF mosaics", "Emlid Reach RS3 RTK"],
      image: "portfolio.png"
    },
    {
      title: "Agricultural Multispectral Analysis",
      description: "Comprehensive crop monitoring and yield analysis using multispectral imaging for precision agriculture applications.",
      tags: ["Multispectral", "Agriculture", "NDVI", "Precision Farming"],
      category: "photogrammetry",
      specs: ["NDVI analysis", "Multispectral sensors", "Crop health mapping", "Yield prediction models"],
      image: "project2.png"
    },
    
    // UAS/UAV Operations
    {
      title: "AirSpace Integration Test Range",
      description: "Professional UAS test operations demonstrating advanced flight capabilities and airspace integration protocols.",
      tags: ["UAS Operations", "AirSpace Integration", "FAA Part 107", "Flight Testing"],
      category: "uas",
      specs: ["FAA Part 107 certified", "AirSpace Integration certified", "Advanced flight operations", "Safety protocols"],
      image: "project3.png"
    },
    
    // Land Investing
    {
      title: "Land Insights Analytics Platform",
      description: "Custom market research and analytics tools for land investment opportunities with automated workflow integration.",
      tags: ["Land Analysis", "Market Research", "Investment Analytics", "Automation"],
      category: "land",
      specs: ["Market trend analysis", "Automated workflows (n8n)", "Pebble CRM integration", "Investment ROI tracking"],
      githubLink: "https://github.com/andykaufman/land-insights",
      image: "portfolio.png"
    },
    
    // AI Building Projects
    {
      title: "Morning Check-In GPT",
      description: "Custom GPT for daily productivity and goal tracking with personalized insights and recommendations.",
      tags: ["Custom GPT", "Productivity", "AI Assistant", "OpenAI"],
      category: "ai",
      specs: ["OpenAI GPT-4", "Custom training data", "Productivity optimization", "Daily insights"],
      liveLink: "https://chat.openai.com/g/g-morning-checkin",
      image: "project2.png"
    },
    {
      title: "Personal Brand GPT",
      description: "AI-powered personal branding assistant for content creation and professional positioning across platforms.",
      tags: ["Personal Branding", "Content Creation", "AI", "Marketing"],
      category: "ai",
      specs: ["Brand voice optimization", "Content strategy", "Multi-platform integration", "Analytics tracking"],
      liveLink: "https://chat.openai.com/g/g-personal-brand",
      image: "project3.png"
    },
    {
      title: "Automation Workflow Suite",
      description: "Business process automation using n8n for seamless integration between CRM, mapping tools, and client management.",
      tags: ["n8n", "Automation", "Business Workflows", "Integration"],
      category: "ai",
      specs: ["n8n workflow automation", "CRM integration", "API connections", "Process optimization"],
      githubLink: "https://github.com/andykaufman/automation-workflows",
      image: "portfolio.png"
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header with gradient text */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-transparent bg-clip-text mb-4">Professional Portfolio</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">Showcasing expertise in Photogrammetry, UAS Operations, Land Investing & AI Building</p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full bg-white dark:bg-zinc-800 border-sky-100/20 shadow-sm hover:shadow-xl transition-all duration-200">
              {/* Project image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={`/projects/${project.image}`}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              <CardHeader>
                {/* Project title */}
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{project.title}</h3>
              </CardHeader>

              <CardContent>
                {/* Project description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>

                {/* Technical specifications */}
                {project.specs && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Technical Specs:</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                      {project.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-50 dark:bg-zinc-700 text-sky-600 dark:text-sky-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                {/* Project links */}
                {project.githubLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-lg bg-sky-500 dark:bg-sky-600 text-white hover:bg-sky-600 dark:hover:bg-sky-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </motion.a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}