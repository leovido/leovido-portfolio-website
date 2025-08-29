"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  teamSize?: number;
  featured?: boolean;
  slug: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  technologies,
  category,
  year,
  demoUrl,
  githubUrl,
  teamSize,
  featured = false,
  slug,
}: PortfolioCardProps) {
  return (
    <motion.div
      className="portfolio-card bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer hover:bg-slate-800 hover:scale-[1.02] hover:-translate-y-1 relative"
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Clickable overlay for navigation */}
      <Link
        href={`/projects/${slug}`}
        className="block absolute inset-0 z-10"
      />

      {/* Header with image and overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Featured Badge */}
        {featured && (
          <motion.div
            className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm border border-yellow-400 rounded-full px-3 py-1 flex items-center space-x-1 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star size={12} className="text-yellow-900 fill-current" />
            <span className="text-yellow-900 text-xs font-semibold">
              Featured
            </span>
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm border border-blue-500 rounded-full px-3 py-1 z-20">
          <span className="text-white text-xs font-semibold">{category}</span>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="text-white" />
            </motion.a>
          )}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="text-white" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="content-section p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-200 text-sm leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>{year}</span>
            </div>
            {teamSize && (
              <div className="flex items-center space-x-1">
                <Users size={12} />
                <span>
                  {teamSize} member{teamSize > 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              className="tech-tag px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md text-xs text-blue-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <span className="tech-tag px-2 py-1 bg-slate-700/50 border border-slate-600 rounded-md text-xs text-slate-300">
              +{technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
