"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import MasonryGrid from "@/components/ui/MasonryGrid";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { Code2, Rocket, Zap, Database, Brain, Globe } from "lucide-react";

export default function Home() {
  const [themeMode, setThemeMode] = useState<"farcaster" | "dark" | "light">(
    "farcaster"
  );

  const portfolioItems = [
    {
      title: "ReplyCast",
      description:
        "Advanced Farcaster client application for managing conversations and replies. Built with modern React and TypeScript, featuring real-time updates, conversation threading, and seamless Farcaster protocol integration.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Farcaster",
        "Real-time",
      ],
      category: "Web3",
      year: "2025",
      githubUrl: "https://github.com/leovido/replycast",
      teamSize: 1,
      featured: true,
      slug: "replycast",
    },
    {
      title: "Moxito iOS App",
      description:
        "iOS app to track fresh stats from your Farcaster Moxie everyday rewards. Won a hackathon held by Devfolio. Features modern iOS development with SwiftUI, Farcaster integration, and robust architecture patterns.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      technologies: ["Swift", "SwiftUI", "AWS Lambda", "Farcaster", "iOS"],
      category: "iOS",
      year: "2024",
      demoUrl: "https://warpcast.com/~/moxito",
      githubUrl: "https://github.com/leovido/moxito-ios",
      teamSize: 1,
      featured: true,
      slug: "moxito",
    },
    {
      title: "Rumourcast",
      description:
        "A Farcaster client that allows users to cast fun rumours anonymously using Zero-Knowledge proofs. Full-stack development with Next.js, PostgreSQL, and advanced ZK cryptography.",
      image:
        "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800&h=600&fit=crop",
      technologies: [
        "TypeScript",
        "Next.js",
        "Noir",
        "PostgreSQL",
        "Redis",
        "ZK Proofs",
      ],
      category: "Web3",
      year: "2024",
      demoUrl: "https://rumourcast.fun",
      githubUrl: "https://github.com/leovido/rumourcast",
      teamSize: 1,
      featured: true,
      slug: "rumourcast",
    },
    {
      title: "TOTH (Tip O' The Hat)",
      description:
        "Farcaster frame application built with Node.js and MongoDB. Demonstrates expertise in modern frame development and social protocol integration.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Farcaster Frames"],
      category: "Web3",
      year: "2024",
      teamSize: 1,
      slug: "toth",
    },
    {
      title: "The Composable Architecture Demo",
      description:
        "Finance demo iOS app demonstrating the capabilities of The Composable Architecture (TCA) and Swift Package Manager. Showcases advanced iOS architectural patterns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Swift", "SwiftUI", "TCA", "Swift Package Manager"],
      category: "iOS",
      year: "2024",
      githubUrl: "https://github.com/leovido/composable-much-better-exercise",
      teamSize: 1,
      slug: "composable-architecture",
    },
    {
      title: "BarChart Calories Tracker",
      description:
        "Application to track and display analytics of calories, exercise data, heart rate using SwiftUI. Features beautiful data visualizations and health integrations.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["Swift", "SwiftUI", "HealthKit", "Charts"],
      category: "iOS",
      year: "2024",
      githubUrl: "https://github.com/leovido/BarChartCalories",
      teamSize: 1,
      slug: "barchart-calories",
    },
    {
      title: "ZK Explorations with Noir",
      description:
        "Learning Zero-Knowledge proofs with Noir - Simple password verification in ZK with comprehensive tests. Exploring cutting-edge cryptographic technologies.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      technologies: ["Noir", "Zero-Knowledge", "Cryptography", "Rust"],
      category: "Web3",
      year: "2024",
      githubUrl: "https://github.com/leovido/zk-explorations-noir",
      teamSize: 1,
      slug: "zk-explorations",
    },
    {
      title: "Forest App Clone",
      description:
        "Clone of the popular Forest productivity app written in Swift 5 with Firebase integration. Features timer functionality, progress tracking, and cloud synchronization.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      technologies: ["Swift", "Firebase", "UIKit", "Core Data"],
      category: "iOS",
      year: "2023",
      githubUrl: "https://github.com/leovido/Forest-Clone",
      teamSize: 1,
      slug: "forest-clone",
    },
    {
      title: "BudgetMe App",
      description:
        "Personal finances app using Starling bank's API with RxSwift + MVVM architecture. Features real-time banking data, expense tracking, and financial analytics.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      technologies: ["Swift", "RxSwift", "MVVM", "Banking API"],
      category: "iOS",
      year: "2023",
      githubUrl: "https://github.com/leovido/BudgetMeApp",
      teamSize: 1,
      slug: "budgetme",
    },
  ];

  const skills = [
    {
      icon: Code2,
      name: "iOS Development",
      description: "8+ years iOS (iOS 10-18), Swift, SwiftUI",
    },
    {
      icon: Rocket,
      name: "Farcaster & Web3",
      description: "Frames, ZK Proofs, dApps, Wallets",
    },
    {
      icon: Brain,
      name: "React Native",
      description: "3+ years cross-platform development",
    },
    {
      icon: Database,
      name: "AWS Certified",
      description: "Cloud Practitioner, AI ML Practitioner",
    },
    {
      icon: Zap,
      name: "DevOps & CI/CD",
      description: "GitHub Actions, Fastlane, Automation",
    },
    {
      icon: Globe,
      name: "Full-Stack",
      description: "TypeScript, React, Node.js",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 p-1 animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CL</span>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Christian Leovido
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-blue-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Senior Software Engineer
              </motion.p>

              <motion.p
                className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Senior Software Engineer with 8+ years of iOS development
                experience, specializing in Swift, SwiftUI, React Native, and
                Farcaster ecosystem. Currently building ReplyCast and other
                cutting-edge applications. AWS Certified with passion for Web3,
                ZK proofs, and innovative mobile applications that push
                technological boundaries.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                View Portfolio
              </button>
              <a
                href="/CHRISTIAN-RAY-LEOVIDO-CV.pdf"
                download
                className="px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 inline-block"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Core Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-slate-300 text-sm">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              A showcase of my recent work including ReplyCast, spanning iOS
              development, Farcaster ecosystem, Web3 applications, and
              Zero-Knowledge proofs. Each project demonstrates technical
              excellence and innovative problem-solving in mobile and blockchain
              technology.
            </p>
          </motion.div>

          <MasonryGrid>
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </MasonryGrid>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © 2024 Christian Ray Leovido. Senior iOS Engineer • AWS Certified •
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
