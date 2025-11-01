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
      title: "Avios: Shop, Collect & Travel",
      description:
        "Leading loyalty rewards app for British Airways, Aer Lingus, Iberia, and Vueling. Built with React Native, featuring Mastercard integration, Apple/Google Wallet support, and comprehensive DevOps implementation that reduced release cycles from 2 months to 2 weeks.",
      image: "/avios-logo.png",
      technologies: [
        "React Native",
        "React",
        "Git",
        "iOS",
        "Android",
        "Apple Wallet",
        "Google Wallet",
        "Mastercard",
      ],
      category: "Mobile",
      year: "2021-2025",
      githubUrl: "https://github.com/leovido/avios-app",
      demoUrl:
        "https://apps.apple.com/us/app/avios-shop-collect-travel/id1388235740",
      teamSize: 8,
      featured: true,
      slug: "avios",
    },
    {
      title: "ReplyCast",
      description:
        "Advanced Farcaster client application for managing conversations and replies. Built with modern React and TypeScript, featuring real-time updates, conversation threading, and seamless Farcaster protocol integration.",
      image: "/replycast-logo.png",
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
      image: [
        "https://github.com/leovido/moxito-ios/blob/main/Moxito/Assets.xcassets/AppIcon.appiconset/logo%20(1).jpg?raw=true",
        "/moxito-app.png",
        "/moxito-app-2.png",
      ],
      technologies: ["Swift", "SwiftUI", "AWS Lambda", "Farcaster", "iOS"],
      category: "iOS",
      year: "Sep 2024",
      demoUrl: "https://warpcast.com/~/moxito",
      githubUrl: "https://github.com/leovido/moxito-ios",
      teamSize: 2,
      featured: true,
      slug: "moxito",
    },
    {
      title: "Rumourcast",
      description:
        "A Farcaster client that allows users to cast fun rumours anonymously using Zero-Knowledge proofs. Full-stack development with Next.js, PostgreSQL, and advanced ZK cryptography.",
      image: "/rumourcast-logo.png",
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
      teamSize: 2,
      featured: true,
      slug: "rumourcast",
    },
    {
      title: "TOTH (Tip O' The Hat)",
      description:
        "Farcaster frame application built with Node.js and MongoDB. Demonstrates expertise in modern frame development and social protocol integration.",
      image: "/toth-web.png",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Farcaster Frames"],
      category: "Web3",
      year: "2024",
      teamSize: 2,
      slug: "toth",
    },
    {
      title: "The Composable Architecture Demo",
      description:
        "Finance demo iOS app demonstrating the capabilities of The Composable Architecture (TCA) and Swift Package Manager. Showcases advanced iOS architectural patterns.",
      image:
        "https://user-images.githubusercontent.com/18484997/137935353-07ccb47c-6bd3-4906-9bbf-4bc362f2d4ba.png",
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
        "https://user-images.githubusercontent.com/18484997/77752576-b8814c80-701f-11ea-8e92-ce4756f02d85.png?w=800&h=600&fit=crop",
      technologies: ["Swift", "SwiftUI"],
      category: "iOS",
      year: "2020",
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
    // Farcaster Frames v1
    {
      title: "Eeeefier",
      description:
        "Simple translator from dolphin made up language to English. Built as a Farcaster frame using React and Next.js, demonstrating rapid prototyping in the Farcaster ecosystem.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "eeeefier",
    },
    {
      title: "Ham Points LP",
      description:
        "Liquidity points tracking based on staking. Farcaster frame application that helps users monitor their staking rewards and liquidity provider points in real-time.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Hono", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "ham-points-lp",
    },
    {
      title: "Who did I tip? $DEGEN",
      description:
        "Tracks the tips that you have given to other Farcaster users using $DEGEN token. Provides comprehensive analytics and history of your tipping activity.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "who-did-i-tip-degen",
    },
    {
      title: "TOTH (Tip O' The Hat)",
      description:
        "Long-term project. Frame that allowed users to nominate and vote for 'cast (post) of the day' and get $DEGEN rewards. Full-stack MERN application with custom backend.",
      image: "/Avios-2.png",
      technologies: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Farcaster Frames",
        "Sentry",
      ],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "toth",
    },
    {
      title: "Who did I tip? $TN100X",
      description:
        "Tracks the tips that you have given to other Farcaster users using $TN100X token. Provides comprehensive analytics and history of your tipping activity.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "who-did-i-tip-tn100x",
    },
    {
      title: "$NEGED Tipping Frame",
      description:
        "Tracks the tips that you have given to other Farcaster users using $NEGED token. Comprehensive tipping analytics and user interaction tracking.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "neged-tipping-frame",
    },
    {
      title: "Moxito Fitness Check-in Rewards",
      description:
        "Farcaster frame for fitness check-in rewards system. Users can track their fitness activities and earn rewards through the Moxito ecosystem.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Vercel", "Farcaster Frames"],
      category: "Farcaster",
      year: "2024",
      teamSize: 1,
      slug: "moxito-fitness-checkin",
    },
    // Farcaster Frames v2
    {
      title: "ReplyCast",
      description:
        "Farcaster client that tracks missed replies in your casts. Built with React, Next.js, and Farcaster mini-app SDK for seamless integration.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Farcaster mini-app SDK", "Vercel"],
      category: "Farcaster",
      year: "2025",
      teamSize: 1,
      featured: true,
      slug: "replycast",
    },
    {
      title: "Superstacks Tracker",
      description:
        "Track points contributed to Optimism's Superstacks. Farcaster mini-app that helps users monitor their contribution points and rewards.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Farcaster mini-app SDK", "Vercel"],
      category: "Farcaster",
      year: "2025",
      teamSize: 1,
      slug: "superstacks-tracker",
    },
    {
      title: "Betrmint WEN Counter + AI Chat",
      description:
        "Enhanced Betrmint WEN counter with AI chat summarizer. Tracks community engagement patterns and provides AI-powered insights and summaries.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Next.js",
        "Farcaster mini-app SDK",
        "AI Integration",
        "Vercel",
      ],
      category: "Farcaster",
      year: "2025",
      teamSize: 1,
      slug: "betrmint-wen-ai",
    },
    // iOS Widgets
    {
      title: "Ham ($TN100X) Widget",
      description:
        "iOS Scriptable widget showing balance of received tips, daily allowance, and stats for $TN100X token. Provides real-time tracking directly on home screen.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["iOS Scriptable", "JavaScript", "API Integration"],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "ham-widget",
    },
    {
      title: "Moxito Widget",
      description:
        "iOS Scriptable widget for tracking Moxito rewards and stats. Collaboration with Farcaster community users for enhanced functionality.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["iOS Scriptable", "JavaScript", "Farcaster API"],
      category: "iOS Widget",
      year: "2024",
      teamSize: 2,
      slug: "moxito-widget",
    },
    {
      title: "$FARTHER Tipping Widget",
      description:
        "iOS Scriptable widget showing balance of received tips, daily allowance, and stats for $FARTHER token. Real-time tracking directly on home screen.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["iOS Scriptable", "JavaScript", "API Integration"],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "farther-tipping-widget",
    },
    {
      title: "$MASKS Tipping Widget",
      description:
        "iOS Scriptable widget showing balance of received tips, daily allowance, and stats for $MASKS token. Provides real-time tracking directly on home screen.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["iOS Scriptable", "JavaScript", "API Integration"],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "masks-tipping-widget",
    },
    {
      title: "$BUILD Tipping Widget",
      description:
        "iOS Scriptable widget showing balance of received tips, daily allowance, and stats for $BUILD token. Real-time tracking directly on home screen.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["iOS Scriptable", "JavaScript", "API Integration"],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "build-tipping-widget",
    },
    {
      title: "Superstacks (Optimism) Widget",
      description:
        "iOS Scriptable widget to track points contributed to Optimism's Superstacks. Provides real-time monitoring of contribution points and rewards.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: [
        "iOS Scriptable",
        "JavaScript",
        "Dune Query",
        "API Integration",
      ],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "superstacks-widget",
    },
    {
      title: "Gnosis Pay Widget",
      description:
        "iOS Scriptable widget tracking remaining $GNO distribution via Dune query. Provides real-time monitoring of Gnosis Pay distribution status.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: [
        "iOS Scriptable",
        "JavaScript",
        "Dune Query",
        "API Integration",
      ],
      category: "iOS Widget",
      year: "2024",
      teamSize: 1,
      slug: "gnosis-pay-widget",
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
                Christian Ray Leovido
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-blue-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Senior Mobile Developer & Community Builder
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  🍎 iOS Expert (8+ years)
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                  ⚛️ React Native
                </span>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium">
                  🏗️ Community Builder
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                  💼 Entrepreneur
                </span>
              </motion.div>

              <motion.p
                className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Building exceptional mobile experiences with{" "}
                <strong className="text-blue-300">Swift & SwiftUI</strong>,
                scaling apps with{" "}
                <strong className="text-purple-300">React Native</strong>, and
                fostering innovation in the{" "}
                <strong className="text-orange-300">Farcaster community</strong>
                .
                <br className="hidden md:block" />
                <span className="text-slate-300">
                  From enterprise iOS apps to Web3 frames, I create products
                  that users love.
                </span>
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button
                onClick={() => {
                  document.getElementById("portfolio")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
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
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 focus-within:ring-2 focus-within:ring-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
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

      {/* Mobile Development Expertise Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🍎 Mobile Development Excellence
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Specializing in iOS and React Native development with 8+ years of
              experience building enterprise-grade mobile applications that
              scale to millions of users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iOS Expertise */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🍎</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  iOS Development
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Native iOS development with Swift & SwiftUI, creating smooth,
                performant apps that follow Apple&apos;s design guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Swift
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  SwiftUI
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  UIKit
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Core Data
                </span>
              </div>
            </motion.div>

            {/* React Native */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-xl font-bold text-white">React Native</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Cross-platform mobile development with React Native, delivering
                native performance across iOS and Android platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  React Native
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Redux
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Jest
                </span>
              </div>
            </motion.div>

            {/* Enterprise Experience */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Enterprise Scale
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Built apps serving millions of users, with focus on performance,
                security, and maintainable code architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  AWS
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  CI/CD
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  DevOps
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  Testing
                </span>
              </div>
            </motion.div>
          </div>

          {/* Key Achievements */}
          <motion.div
            className="mt-12 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🏆 Key Mobile Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Avios App - Enterprise iOS
                    </p>
                    <p className="text-slate-300 text-sm">
                      Led development of British Airways&apos; loyalty app
                      serving millions of users
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Moxito iOS - Hackathon Winner
                    </p>
                    <p className="text-slate-300 text-sm">
                      Won Devfolio hackathon with SwiftUI app for Farcaster
                      rewards tracking
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      DevOps Excellence
                    </p>
                    <p className="text-slate-300 text-sm">
                      Reduced release cycles from 2 months to 2 weeks through
                      automation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">7 iOS Widgets</p>
                    <p className="text-slate-300 text-sm">
                      Created innovative iOS Scriptable widgets for Web3
                      communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🛠️ Technical Skills & Tools
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Comprehensive technical expertise across mobile development, Web3
              technologies, and modern development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Development */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Mobile Development
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Swift & SwiftUI</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">React Native</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">iOS Widgets</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Apple Wallet</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web3 & Blockchain */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⛓️</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Web3 & Blockchain
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Farcaster Protocol</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">ZK Proofs (Noir)</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Smart Contracts</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Ethereum</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DevOps & Infrastructure */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  DevOps & Infrastructure
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">AWS</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">CI/CD</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Docker</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Vercel</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications & Achievements */}
          <motion.div
            className="mt-12 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              🏅 Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h4 className="text-white font-semibold mb-2">AWS Certified</h4>
                <p className="text-slate-300 text-sm">
                  Cloud Solutions Architect
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Hackathon Winner
                </h4>
                <p className="text-slate-300 text-sm">
                  Devfolio Moxito Challenge
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="text-white font-semibold mb-2">8+ Years iOS</h4>
                <p className="text-slate-300 text-sm">Mobile Development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-white font-semibold mb-2">27 Projects</h4>
                <p className="text-slate-300 text-sm">Portfolio Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats Section */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Portfolio Overview
            </h2>
            <p className="text-slate-300 text-lg">
              {portfolioItems.length} projects across{" "}
              {new Set(portfolioItems.map((item) => item.category)).size}{" "}
              categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                name: "Mobile Apps",
                count: portfolioItems.filter(
                  (item) =>
                    item.category === "Mobile" || item.category === "iOS"
                ).length,
                color: "blue",
              },
              {
                name: "Web3",
                count: portfolioItems.filter((item) => item.category === "Web3")
                  .length,
                color: "purple",
              },
              {
                name: "Farcaster",
                count: portfolioItems.filter(
                  (item) => item.category === "Farcaster"
                ).length,
                color: "orange",
              },
              {
                name: "iOS Widgets",
                count: portfolioItems.filter(
                  (item) => item.category === "iOS Widget"
                ).length,
                color: "cyan",
              },
              {
                name: "Other",
                count: portfolioItems.filter(
                  (item) =>
                    ![
                      "Mobile",
                      "iOS",
                      "Web3",
                      "Farcaster",
                      "iOS Widget",
                    ].includes(item.category)
                ).length,
                color: "green",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.name}
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`text-3xl font-bold text-${stat.color}-400 mb-2`}
                >
                  {stat.count}
                </div>
                <div className="text-slate-300 text-sm">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                name: "Mobile Apps",
                id: "mobile",
                color: "blue",
                count: portfolioItems.filter(
                  (item) =>
                    item.category === "Mobile" || item.category === "iOS"
                ).length,
              },
              {
                name: "Web3",
                id: "web3",
                color: "purple",
                count: portfolioItems.filter((item) => item.category === "Web3")
                  .length,
              },
              {
                name: "Farcaster",
                id: "farcaster",
                color: "orange",
                count: portfolioItems.filter(
                  (item) => item.category === "Farcaster"
                ).length,
              },
              {
                name: "iOS Widgets",
                id: "widgets",
                color: "cyan",
                count: portfolioItems.filter(
                  (item) => item.category === "iOS Widget"
                ).length,
              },
              {
                name: "Other",
                id: "other",
                color: "green",
                count: portfolioItems.filter(
                  (item) =>
                    ![
                      "Mobile",
                      "iOS",
                      "Web3",
                      "Farcaster",
                      "iOS Widget",
                    ].includes(item.category)
                ).length,
              },
            ].map((nav, index) => (
              <motion.button
                key={nav.id}
                onClick={() => {
                  const element = document.querySelector(
                    `[data-section="${nav.id}"]`
                  );
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  nav.color === "blue"
                    ? "bg-blue-500/20 border-blue-500/30 text-blue-300 hover:bg-blue-500/30"
                    : nav.color === "purple"
                    ? "bg-purple-500/20 border-purple-500/30 text-purple-300 hover:bg-purple-500/30"
                    : nav.color === "orange"
                    ? "bg-orange-500/20 border-orange-500/30 text-orange-300 hover:bg-orange-500/30"
                    : nav.color === "cyan"
                    ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30"
                    : "bg-green-500/20 border-green-500/30 text-green-300 hover:bg-green-500/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {nav.name} ({nav.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Building & Entrepreneurship Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-900/20 via-purple-900/20 to-green-900/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🏗️ Community Building & Entrepreneurship
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Fostering innovation in the Farcaster ecosystem through
              community-driven projects, infrastructure investments, and
              collaborative development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Community Building */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Community Building
                  </h3>
                  <p className="text-orange-300 text-sm">Farcaster Ecosystem</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      10 Farcaster Frames
                    </p>
                    <p className="text-slate-300 text-sm">
                      Built community-requested frames for tipping, rewards, and
                      engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">TOTH Platform</p>
                    <p className="text-slate-300 text-sm">
                      Created voting platform for &quot;cast of the day&quot;
                      with $DEGEN rewards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Community-Driven Development
                    </p>
                    <p className="text-slate-300 text-sm">
                      Most frames built from direct community requests and
                      feedback
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Entrepreneurship */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">💼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Entrepreneurship
                  </h3>
                  <p className="text-green-300 text-sm">
                    Infrastructure Investment
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Moxito Infrastructure
                    </p>
                    <p className="text-slate-300 text-sm">
                      Invested in full infrastructure for Moxito app hosting and
                      maintenance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Frame Hosting</p>
                    <p className="text-slate-300 text-sm">
                      Self-hosted most Farcaster frames on Vercel with custom
                      domains
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Long-term Vision</p>
                    <p className="text-slate-300 text-sm">
                      Building sustainable projects with ongoing maintenance and
                      updates
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Metrics */}
          <motion.div
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              📊 Community Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  10
                </div>
                <div className="text-slate-300 text-sm">Farcaster Frames</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className="text-slate-300 text-sm">iOS Widgets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-slate-300 text-sm">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  100%
                </div>
                <div className="text-slate-300 text-sm">Self-Hosted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              A showcase of my recent work spanning mobile development, Web3
              applications, and innovative solutions. Each project demonstrates
              technical excellence and creative problem-solving across different
              technology domains.
            </p>
          </motion.div>

          {/* Mobile Apps Section */}
          <motion.div
            className="mb-16"
            data-section="mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 mr-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                Mobile Applications
                <span className="ml-3 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {
                    portfolioItems.filter(
                      (item) =>
                        item.category === "Mobile" || item.category === "iOS"
                    ).length
                  }{" "}
                  projects
                </span>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 ml-6" />
            </div>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Native iOS and cross-platform mobile applications featuring modern
              development practices, enterprise-level architecture, and seamless
              user experiences.
            </p>
            <MasonryGrid>
              {portfolioItems
                .filter(
                  (item) =>
                    item.category === "Mobile" || item.category === "iOS"
                )
                .map((item, index) => (
                  <PortfolioCard key={index} {...item} />
                ))}
            </MasonryGrid>
          </motion.div>

          {/* Web3 Section */}
          <motion.div
            className="mb-16"
            data-section="web3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 mr-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3" />
                Web3 & Blockchain
                <span className="ml-3 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                  {
                    portfolioItems.filter((item) => item.category === "Web3")
                      .length
                  }{" "}
                  projects
                </span>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 ml-6" />
            </div>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Decentralized applications, Farcaster ecosystem projects, and
              cutting-edge Web3 technologies including Zero-Knowledge proofs and
              blockchain integration.
            </p>
            <MasonryGrid>
              {portfolioItems
                .filter((item) => item.category === "Web3")
                .map((item, index) => (
                  <PortfolioCard key={index} {...item} />
                ))}
            </MasonryGrid>
          </motion.div>

          {/* Farcaster Frames Section */}
          <motion.div
            className="mb-16"
            data-section="farcaster"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 mr-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3" />
                Farcaster Frames
                <span className="ml-3 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                  {
                    portfolioItems.filter(
                      (item) => item.category === "Farcaster"
                    ).length
                  }{" "}
                  projects
                </span>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 ml-6" />
            </div>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Interactive Farcaster frames and mini-apps built with React,
              Next.js, and the Farcaster ecosystem. From simple translators to
              complex reward tracking systems and community engagement tools.
            </p>
            <MasonryGrid>
              {portfolioItems
                .filter((item) => item.category === "Farcaster")
                .map((item, index) => (
                  <PortfolioCard key={index} {...item} />
                ))}
            </MasonryGrid>
          </motion.div>

          {/* iOS Widgets Section */}
          <motion.div
            className="mb-16"
            data-section="widgets"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 mr-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3" />
                iOS Widgets
                <span className="ml-3 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                  {
                    portfolioItems.filter(
                      (item) => item.category === "iOS Widget"
                    ).length
                  }{" "}
                  projects
                </span>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 ml-6" />
            </div>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Native iOS widgets built with Scriptable, providing real-time
              tracking of token balances, rewards, and DeFi metrics directly on
              the home screen.
            </p>
            <MasonryGrid>
              {portfolioItems
                .filter((item) => item.category === "iOS Widget")
                .map((item, index) => (
                  <PortfolioCard key={index} {...item} />
                ))}
            </MasonryGrid>
          </motion.div>

          {/* Other Projects Section */}
          <motion.div
            className="mb-16"
            data-section="other"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 mr-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                Other Projects
                <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                  {
                    portfolioItems.filter(
                      (item) =>
                        ![
                          "Mobile",
                          "iOS",
                          "Web3",
                          "Farcaster",
                          "iOS Widget",
                        ].includes(item.category)
                    ).length
                  }{" "}
                  projects
                </span>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 ml-6" />
            </div>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Additional projects showcasing diverse technical skills, learning
              initiatives, and innovative solutions across various domains and
              technologies.
            </p>
            <MasonryGrid>
              {portfolioItems
                .filter(
                  (item) =>
                    ![
                      "Mobile",
                      "iOS",
                      "Web3",
                      "Farcaster",
                      "iOS Widget",
                    ].includes(item.category)
                )
                .map((item, index) => (
                  <PortfolioCard key={index} {...item} />
                ))}
            </MasonryGrid>
          </motion.div>
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
