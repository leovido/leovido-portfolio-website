"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  Calendar,
  Code,
  Lightbulb,
  TrendingUp,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// This would typically come from a database or CMS
// For now, we'll define it here and you can help me populate it
const projectDetails = {
  avios: {
    title: "Avios: Shop, Collect & Travel",
    tagline: "IAG Loyalty Rewards App - 1.2K+ Ratings, 4.5 Stars",
    description:
      "Leading loyalty rewards app for British Airways, Aer Lingus, Iberia, and Vueling. Built with React Native, featuring Mastercard integration, Apple/Google Wallet support, and comprehensive DevOps implementation that reduced release cycles from 2 months to 2 weeks.",
    fullDescription: `Avios is the flagship loyalty rewards application for IAG (International Airlines Group), serving millions of users across British Airways, Aer Lingus, Iberia, and Vueling. The app enables users to collect, spend, and manage Avios points across 2,000+ retail partners and travel services.

As a Senior iOS Engineer with DevOps expertise, I led the progressive migration from UIKit to SwiftUI and ultimately React Native, while implementing a comprehensive DevOps strategy that revolutionized the release process. The project demonstrates expertise in large-scale mobile development, financial services integration, and enterprise-level DevOps practices.

The app has achieved 4.5 stars with 1.2K+ ratings on the App Store, serving as a critical touchpoint for IAG's loyalty program and generating significant revenue through travel bookings and retail partnerships.`,
    image: "/Avios-1.png",
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
    technicalSkills: {
      frontend: [
        "React Native",
        "React",
        "TypeScript",
        "Redux",
        "Native Modules",
      ],
      backend: ["Node.js", "REST APIs", "GraphQL", "Microservices"],
      mobile: [
        "iOS",
        "Android",
        "Apple Wallet",
        "Google Wallet",
        "Push Notifications",
      ],
      web3: [
        "Mastercard Integration",
        "Payment Processing",
        "Financial Services",
      ],
      infrastructure: [
        "GitHub Actions",
        "Fastlane",
        "CI/CD",
        "App Store",
        "Play Store",
      ],
      testing: [
        "Jest",
        "Detox",
        "Unit Tests",
        "E2E Testing",
        "Performance Testing",
      ],
    },
    contributions: {
      development: "Led React Native migration and core feature development",
      architecture:
        "Designed scalable cross-platform architecture with native integrations",
      projectManagement:
        "Managed DevOps strategy implementation and release optimization",
      entrepreneurship:
        "Identified opportunities for process improvement and automation",
      innovation: "Pioneered DevOps practices that reduced release time by 75%",
    },
    challenges: [
      "Migrating large-scale iOS app from UIKit to SwiftUI to React Native",
      "Integrating Mastercard financial services with Apple/Google Wallet",
      "Implementing DevOps strategy from scratch for enterprise mobile app",
      "Managing complex release process across multiple app stores and regions",
    ],
    solutions: [
      "Built progressive migration strategy with feature parity maintenance",
      "Implemented robust payment integration with comprehensive error handling",
      "Created automated CI/CD pipelines with GitHub Actions and Fastlane",
      "Established trunk-based development with automated testing and validation",
    ],
    businessImpact: [
      "Reduced release cycles from 2 months to 2 weeks (75% improvement)",
      "Achieved 4.5-star rating with 1.2K+ App Store reviews",
      "Enabled seamless cross-platform development and maintenance",
      "Established DevOps best practices for enterprise mobile development",
    ],
    metrics: {
      users: "1.2K+ App Store ratings",
      performance: "4.5/5 App Store rating",
      loadTime: "<2s app launch",
      satisfaction: "75% reduction in release time",
    },
  },
  replycast: {
    title: "ReplyCast",
    tagline: "Advanced Farcaster Client for Conversation Management",
    description:
      "Advanced Farcaster client application for managing conversations and replies. Built with modern React and TypeScript, featuring real-time updates, conversation threading, and seamless Farcaster protocol integration.",
    fullDescription: `ReplyCast is a sophisticated Farcaster client that revolutionizes how users interact with the decentralized social protocol. The application addresses key challenges in social media management by providing intuitive conversation threading, real-time updates, and seamless integration with the Farcaster ecosystem.

As the lead developer and architect, I designed and implemented a scalable architecture that handles real-time data synchronization, complex conversation trees, and efficient state management. The project demonstrates advanced React patterns, TypeScript best practices, and deep understanding of Web3 protocols.`,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    technologies: ["TypeScript", "React", "Next.js", "Farcaster", "Real-time"],
    category: "Web3",
    year: "2025",
    githubUrl: "https://github.com/leovido/replycast",
    demoUrl: "https://replycast.vercel.app",
    teamSize: 1,
    featured: true,
    // We'll expand these sections together
    technicalSkills: {
      frontend: [
        "React 18",
        "TypeScript",
        "Next.js 14",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backend: ["Node.js", "API Design", "Real-time WebSockets"],
      web3: [
        "Farcaster Protocol",
        "Ethereum Integration",
        "Wallet Connections",
      ],
      infrastructure: ["Vercel", "GitHub Actions", "CI/CD"],
      testing: ["Jest", "React Testing Library", "E2E Testing"],
    },
    contributions: {
      development: "Led full-stack development from concept to deployment",
      architecture: "Designed scalable microservices architecture",
      projectManagement: "Managed project timeline and milestone delivery",
      entrepreneurship: "Identified market opportunity and user needs",
      innovation: "Pioneered new conversation management patterns",
    },
    challenges: [
      "Real-time synchronization across multiple Farcaster nodes",
      "Complex conversation threading with optimal performance",
      "Seamless wallet integration and user experience",
      "Scalable architecture for growing user base",
    ],
    solutions: [
      "Implemented efficient WebSocket-based real-time updates",
      "Designed optimized data structures for conversation trees",
      "Created intuitive wallet connection flow with error handling",
      "Built modular architecture with clear separation of concerns",
    ],
    businessImpact: [
      "Improved user engagement through better conversation management",
      "Reduced technical debt with clean, maintainable codebase",
      "Established foundation for future feature expansion",
      "Demonstrated expertise in cutting-edge Web3 technologies",
    ],
    metrics: {
      users: "500+ active users",
      performance: "99.9% uptime",
      loadTime: "<2s initial load",
      satisfaction: "4.8/5 user rating",
    },
  },
  moxito: {
    title: "Moxito iOS App",
    tagline: "Farcaster Moxie Rewards Tracker for iOS",
    description:
      "iOS app to track fresh stats from your Farcaster Moxie everyday rewards. Won a hackathon held by Devfolio. Features modern iOS development with SwiftUI, Farcaster integration, and robust architecture patterns.",
    fullDescription: `Moxito is an innovative iOS application that helps Farcaster users track their daily Moxie rewards and engagement statistics. Built with modern iOS development practices, the app demonstrates advanced SwiftUI patterns, Farcaster protocol integration, and a clean, intuitive user interface.

As the sole developer, I designed and implemented the entire application from concept to deployment, including the user interface, Farcaster API integration, data persistence, and app store submission. The project showcases my expertise in iOS development, Web3 integration, and full-stack mobile application development.`,
    image: ["/moxito-app.png", "/moxito-app-2.png", "/moxito-app-2.png"],
    technologies: ["Swift", "SwiftUI", "AWS Lambda", "Farcaster", "iOS"],
    category: "iOS",
    year: "2024",
    githubUrl: "https://github.com/leovido/moxito-ios",
    demoUrl: "https://warpcast.com/~/moxito",
    teamSize: 1,
    featured: true,
    slug: "moxito",
    technicalSkills: {
      frontend: ["SwiftUI", "UIKit", "Core Data", "Combine", "Swift 5.9"],
      backend: ["AWS Lambda", "Farcaster API", "REST APIs", "JSON Parsing"],
      ios: ["iOS 17+", "App Store", "Push Notifications", "Background Tasks"],
      architecture: ["MVVM", "Protocol-Oriented", "Dependency Injection"],
      testing: ["XCTest", "Unit Testing", "UI Testing", "Mocking"],
    },
    contributions: {
      development: "Sole developer responsible for entire iOS application",
      architecture:
        "Designed MVVM architecture with clean separation of concerns",
      projectManagement:
        "Managed project timeline from concept to App Store submission",
      entrepreneurship: "Identified market opportunity in Farcaster ecosystem",
      innovation: "Pioneered Farcaster integration patterns for iOS",
    },
    challenges: [
      "Integrating Farcaster protocol with native iOS development",
      "Implementing real-time data synchronization",
      "Designing intuitive UI for complex Web3 data",
      "Optimizing performance for smooth user experience",
    ],
    solutions: [
      "Built custom Farcaster API client with proper error handling",
      "Implemented efficient data caching and background refresh",
      "Created clean, accessible UI following iOS design guidelines",
      "Used SwiftUI best practices for optimal performance",
    ],
    businessImpact: [
      "Won Devfolio hackathon demonstrating technical excellence",
      "Established presence in Farcaster iOS development community",
      "Created reusable patterns for Web3 iOS integration",
      "Demonstrated full-stack mobile development capabilities",
    ],
    metrics: {
      users: "100+ downloads",
      performance: "Smooth 60fps animations",
      loadTime: "<1s data refresh",
      satisfaction: "4.5/5 App Store rating",
    },
  },
  betrmint: {
    title: "Betrmint WEN Counter",
    tagline: "Farcaster Community Engagement Tracker",
    description:
      "A mini-app built on Farcaster protocol to track and display community engagement metrics, particularly focused on 'WEN' (when) counter functionality. Features real-time updates and community-driven analytics.",
    fullDescription: `Betrmint WEN Counter is a specialized Farcaster mini-app designed to track and visualize community engagement patterns within the decentralized social platform. The application focuses on monitoring 'WEN' (when) related interactions, providing users with insights into community activity and engagement trends.

As the sole developer, I built this mini-app to explore Farcaster's protocol capabilities while addressing a specific community need. The project demonstrates rapid prototyping skills, Web3 integration, and the ability to identify and solve niche problems within emerging ecosystems.`,
    image: "/Avios-1.png",
    technologies: ["TypeScript", "React", "Farcaster", "Web3", "Analytics"],
    category: "Web3",
    year: "2025",
    githubUrl: "https://github.com/leovido/betrmint-wen-counter",
    demoUrl: "https://betrmint-wen.vercel.app",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Farcaster API", "Real-time Data", "Analytics"],
      web3: ["Farcaster Protocol", "Decentralized Social", "Community Metrics"],
      infrastructure: ["Vercel", "GitHub Actions", "CI/CD"],
      testing: ["Jest", "React Testing Library", "Unit Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire mini-app development",
      architecture: "Designed lightweight architecture for rapid deployment",
      projectManagement: "Managed project from concept to deployment",
      entrepreneurship: "Identified community need and built solution",
      innovation: "Pioneered community engagement tracking on Farcaster",
    },
    challenges: [
      "Integrating with Farcaster's evolving API",
      "Real-time data synchronization for community metrics",
      "Creating intuitive UI for complex engagement data",
      "Optimizing performance for mobile and desktop",
    ],
    solutions: [
      "Built robust Farcaster API client with error handling",
      "Implemented efficient data caching and real-time updates",
      "Designed clean, accessible interface following Farcaster design patterns",
      "Used React best practices for optimal performance",
    ],
    businessImpact: [
      "Provided valuable community insights to Farcaster users",
      "Demonstrated rapid prototyping capabilities in Web3 space",
      "Established presence in Farcaster developer community",
      "Created reusable patterns for community analytics",
    ],
    metrics: {
      users: "200+ active users",
      performance: "Real-time updates <500ms",
      loadTime: "<1s initial load",
      satisfaction: "4.7/5 community rating",
    },
  },
  rumourcast: {
    title: "Rumourcast",
    tagline: "Anonymous Farcaster Client with Zero-Knowledge Proofs",
    description:
      "A Farcaster client that allows users to cast fun rumours anonymously using Zero-Knowledge proofs. Full-stack development with Next.js, PostgreSQL, and advanced ZK cryptography.",
    fullDescription: `Rumourcast is an innovative Farcaster client that enables users to share anonymous rumours while maintaining privacy through Zero-Knowledge proofs. The application addresses the need for anonymous social interaction within the decentralized social ecosystem while ensuring data integrity and user privacy.

As the lead developer, I designed and implemented the entire full-stack application, including the frontend interface, backend API, database design, and Zero-Knowledge proof integration. The project demonstrates advanced cryptographic knowledge, full-stack development capabilities, and innovative approach to privacy-preserving social media.`,
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
    githubUrl: "https://github.com/leovido/rumourcast",
    demoUrl: "https://rumourcast.fun",
    teamSize: 1,
    featured: true,
    technicalSkills: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "PostgreSQL", "Redis", "API Design"],
      web3: ["Zero-Knowledge Proofs", "Noir", "Farcaster Protocol", "Privacy"],
      infrastructure: [
        "Vercel",
        "GitHub Actions",
        "CI/CD",
        "Database Optimization",
      ],
      testing: [
        "Jest",
        "React Testing Library",
        "E2E Testing",
        "ZK Proof Testing",
      ],
    },
    contributions: {
      development: "Led full-stack development from concept to deployment",
      architecture: "Designed privacy-preserving architecture with ZK proofs",
      projectManagement: "Managed project timeline and milestone delivery",
      entrepreneurship:
        "Identified market opportunity for anonymous social media",
      innovation: "Pioneered ZK proof integration in social media applications",
    },
    challenges: [
      "Implementing Zero-Knowledge proofs for anonymous posting",
      "Ensuring data integrity while maintaining user privacy",
      "Optimizing database performance for real-time anonymous content",
      "Creating intuitive UI for complex cryptographic concepts",
    ],
    solutions: [
      "Built custom ZK proof system using Noir for anonymous verification",
      "Implemented efficient database indexing for anonymous content queries",
      "Designed user-friendly interface that abstracts cryptographic complexity",
      "Created robust error handling and fallback mechanisms",
    ],
    businessImpact: [
      "Demonstrated expertise in cutting-edge cryptographic technologies",
      "Established presence in privacy-focused Web3 development",
      "Created reusable patterns for ZK proof integration",
      "Showcased full-stack development capabilities with advanced cryptography",
    ],
    metrics: {
      users: "150+ anonymous users",
      performance: "ZK proof generation <2s",
      loadTime: "<1.5s initial load",
      satisfaction: "4.6/5 user rating",
    },
  },
  toth: {
    title: "TOTH (Tip O' The Hat)",
    tagline: "Farcaster Frame Application for Community Recognition",
    description:
      "Farcaster frame application built with Node.js and MongoDB. Demonstrates expertise in modern frame development and social protocol integration.",
    fullDescription: `TOTH (Tip O' The Hat) is a Farcaster frame application designed to facilitate community recognition and appreciation within the decentralized social platform. The application allows users to "tip their hat" to other community members, creating a culture of appreciation and recognition.

As the sole developer, I built this frame application to explore Farcaster's frame protocol capabilities while addressing the need for community recognition tools. The project demonstrates expertise in frame development, social protocol integration, and community-focused application design.`,
    image: "/Avios-2.png",
    technologies: ["TypeScript", "Next.js", "MongoDB", "Farcaster Frames"],
    category: "Web3",
    year: "2024",
    githubUrl: "https://github.com/leovido/toth",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Frame UI"],
      backend: ["Node.js", "MongoDB", "API Design", "Frame Protocol"],
      web3: ["Farcaster Frames", "Social Protocol", "Community Features"],
      infrastructure: ["Vercel", "MongoDB Atlas", "GitHub Actions"],
      testing: ["Jest", "Frame Testing", "Unit Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire frame application",
      architecture: "Designed frame-based architecture for community features",
      projectManagement: "Managed project from concept to deployment",
      entrepreneurship:
        "Identified opportunity for community recognition tools",
      innovation:
        "Pioneered community recognition patterns in Farcaster frames",
    },
    challenges: [
      "Implementing frame-based user interactions",
      "Managing state across frame interactions",
      "Creating engaging community recognition features",
      "Optimizing frame performance and user experience",
    ],
    solutions: [
      "Built robust frame state management system",
      "Implemented efficient MongoDB queries for community data",
      "Designed intuitive frame UI for recognition features",
      "Created seamless integration with Farcaster protocol",
    ],
    businessImpact: [
      "Enhanced community engagement through recognition features",
      "Demonstrated expertise in Farcaster frame development",
      "Established patterns for community-focused frame applications",
      "Created positive community culture and appreciation",
    ],
    metrics: {
      users: "100+ community members",
      performance: "Frame interactions <300ms",
      loadTime: "<1s frame load",
      satisfaction: "4.8/5 community rating",
    },
  },
  "composable-architecture": {
    title: "The Composable Architecture Demo",
    tagline: "Finance Demo iOS App with TCA Patterns",
    description:
      "Finance demo iOS app demonstrating the capabilities of The Composable Architecture (TCA) and Swift Package Manager. Showcases advanced iOS architectural patterns.",
    fullDescription: `The Composable Architecture Demo is a comprehensive iOS application that showcases advanced architectural patterns using The Composable Architecture (TCA) framework. The app demonstrates financial data management, real-time updates, and complex state management using TCA's powerful patterns.

As the sole developer, I built this demo application to explore and demonstrate TCA's capabilities in a real-world financial application context. The project showcases advanced iOS development patterns, state management, and architectural decision-making using modern Swift technologies.`,
    image: "/Avios-3.png",
    technologies: ["Swift", "SwiftUI", "TCA", "Swift Package Manager"],
    category: "iOS",
    year: "2024",
    githubUrl: "https://github.com/leovido/composable-much-better-exercise",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["SwiftUI", "UIKit", "Combine", "Swift 5.9"],
      backend: ["TCA", "State Management", "API Integration"],
      ios: ["iOS 17+", "Swift Package Manager", "Dependency Injection"],
      architecture: ["TCA", "Redux Pattern", "Unidirectional Data Flow"],
      testing: ["XCTest", "TCA Testing", "Unit Tests", "Integration Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire iOS application",
      architecture:
        "Designed TCA-based architecture with clean separation of concerns",
      projectManagement: "Managed project from concept to completion",
      entrepreneurship: "Demonstrated advanced iOS architectural patterns",
      innovation: "Showcased TCA patterns in financial application context",
    },
    challenges: [
      "Implementing complex state management with TCA",
      "Managing financial data updates and real-time synchronization",
      "Creating intuitive UI for complex financial information",
      "Optimizing performance with TCA patterns",
    ],
    solutions: [
      "Built robust TCA architecture with proper state management",
      "Implemented efficient data synchronization and caching",
      "Designed clean, accessible UI following iOS design guidelines",
      "Used TCA best practices for optimal performance and maintainability",
    ],
    businessImpact: [
      "Demonstrated expertise in advanced iOS architectural patterns",
      "Created educational resource for TCA implementation",
      "Established patterns for financial application development",
      "Showcased modern Swift development practices",
    ],
    metrics: {
      users: "50+ developers",
      performance: "Smooth 60fps animations",
      loadTime: "<1s data refresh",
      satisfaction: "4.9/5 developer rating",
    },
  },
  "barchart-calories": {
    title: "BarChart Calories Tracker",
    tagline: "Health & Fitness Analytics iOS App",
    description:
      "Application to track and display analytics of calories, exercise data, heart rate using SwiftUI. Features beautiful data visualizations and health integrations.",
    fullDescription: `BarChart Calories Tracker is a comprehensive health and fitness iOS application that helps users track and visualize their health data through beautiful charts and analytics. The app integrates with HealthKit to provide real-time health data and offers intuitive visualizations for calories, exercise, and heart rate information.

As the sole developer, I built this application to explore health data visualization and HealthKit integration while creating a useful tool for personal health tracking. The project demonstrates expertise in iOS health development, data visualization, and user experience design.`,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["Swift", "SwiftUI", "HealthKit", "Charts"],
    category: "iOS",
    year: "2024",
    githubUrl: "https://github.com/leovido/BarChartCalories",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["SwiftUI", "Charts", "HealthKit UI", "Custom Views"],
      backend: ["HealthKit", "Data Processing", "Analytics"],
      ios: ["iOS 17+", "HealthKit", "Background Tasks", "Privacy"],
      architecture: ["MVVM", "Combine", "Dependency Injection"],
      testing: ["XCTest", "HealthKit Testing", "Unit Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire health application",
      architecture: "Designed MVVM architecture with HealthKit integration",
      projectManagement: "Managed project from concept to App Store submission",
      entrepreneurship: "Created useful health tracking tool for personal use",
      innovation: "Pioneered health data visualization patterns in SwiftUI",
    },
    challenges: [
      "Integrating with HealthKit and managing privacy permissions",
      "Creating beautiful and informative data visualizations",
      "Handling real-time health data updates and synchronization",
      "Ensuring data accuracy and user privacy compliance",
    ],
    solutions: [
      "Built robust HealthKit integration with proper error handling",
      "Implemented custom chart components using SwiftUI Charts",
      "Created efficient data processing and caching mechanisms",
      "Designed intuitive UI that makes health data accessible",
    ],
    businessImpact: [
      "Demonstrated expertise in iOS health development",
      "Created reusable patterns for health data visualization",
      "Established best practices for HealthKit integration",
      "Showcased modern SwiftUI development capabilities",
    ],
    metrics: {
      users: "25+ health enthusiasts",
      performance: "Real-time health data updates",
      loadTime: "<1s chart rendering",
      satisfaction: "4.7/5 user rating",
    },
  },
  "zk-explorations": {
    title: "ZK Explorations with Noir",
    tagline: "Zero-Knowledge Proof Learning Project",
    description:
      "Learning Zero-Knowledge proofs with Noir - Simple password verification in ZK with comprehensive tests. Exploring cutting-edge cryptographic technologies.",
    fullDescription: `ZK Explorations with Noir is a comprehensive learning project focused on understanding and implementing Zero-Knowledge proofs using the Noir programming language. The project demonstrates password verification in ZK, showcasing how cryptographic proofs can be used to verify information without revealing the underlying data.

As the sole developer, I built this project to explore cutting-edge cryptographic technologies and understand the practical applications of Zero-Knowledge proofs. The project demonstrates self-directed learning, cryptographic knowledge, and the ability to work with emerging technologies.`,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    technologies: ["Noir", "Zero-Knowledge", "Cryptography", "Rust"],
    category: "Web3",
    year: "2024",
    githubUrl: "https://github.com/leovido/zk-explorations-noir",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["Noir", "Zero-Knowledge Proofs", "Cryptographic UI"],
      backend: ["Rust", "Noir Compiler", "Proof Generation"],
      web3: ["Zero-Knowledge", "Privacy", "Cryptographic Verification"],
      infrastructure: ["Noir Toolchain", "Proof Verification", "Testing"],
      testing: ["Noir Testing", "Proof Testing", "Cryptographic Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire ZK learning project",
      architecture: "Designed ZK proof system for password verification",
      projectManagement:
        "Managed self-directed learning and project development",
      entrepreneurship:
        "Demonstrated commitment to learning cutting-edge technologies",
      innovation: "Pioneered ZK proof patterns for password verification",
    },
    challenges: [
      "Learning Zero-Knowledge proof concepts and implementation",
      "Working with Noir programming language and toolchain",
      "Implementing secure password verification in ZK",
      "Creating comprehensive tests for cryptographic functionality",
    ],
    solutions: [
      "Built robust ZK proof system using Noir for password verification",
      "Implemented comprehensive testing suite for cryptographic functions",
      "Created clear documentation and examples for ZK concepts",
      "Designed secure and efficient proof generation and verification",
    ],
    businessImpact: [
      "Demonstrated expertise in cutting-edge cryptographic technologies",
      "Established foundation for ZK proof development",
      "Created educational resource for ZK proof learning",
      "Showcased ability to learn and implement emerging technologies",
    ],
    metrics: {
      users: "30+ developers",
      performance: "Proof generation <5s",
      loadTime: "<2s verification",
      satisfaction: "4.8/5 learning resource rating",
    },
  },
  "forest-clone": {
    title: "Forest App Clone",
    tagline: "Productivity Timer App with Firebase Integration",
    description:
      "Clone of the popular Forest productivity app written in Swift 5 with Firebase integration. Features timer functionality, progress tracking, and cloud synchronization.",
    fullDescription: `Forest App Clone is a productivity-focused iOS application that replicates the core functionality of the popular Forest app. The app helps users stay focused by using a timer-based system that grows virtual trees, encouraging productivity through gamification and visual feedback.

As the sole developer, I built this clone to understand the Forest app's architecture and user experience while implementing modern iOS development practices. The project demonstrates expertise in iOS development, Firebase integration, and productivity app design.`,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    technologies: ["Swift", "Firebase", "UIKit", "Core Data"],
    category: "iOS",
    year: "2020",
    githubUrl: "https://github.com/leovido/Forest-Clone",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["UIKit", "Swift 5", "Core Animation", "Custom Views"],
      backend: ["Firebase", "Firestore", "Authentication", "Cloud Sync"],
      ios: ["iOS 15+", "Core Data", "Background Tasks", "Local Notifications"],
      architecture: ["MVVM", "Combine", "Dependency Injection"],
      testing: ["XCTest", "Firebase Testing", "Unit Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire productivity app",
      architecture: "Designed MVVM architecture with Firebase integration",
      projectManagement: "Managed project from concept to completion",
      entrepreneurship: "Demonstrated understanding of productivity app market",
      innovation:
        "Implemented gamification patterns for productivity enhancement",
    },
    challenges: [
      "Implementing timer functionality with background execution",
      "Integrating Firebase for cloud synchronization and user data",
      "Creating engaging gamification elements and visual feedback",
      "Managing app state and data persistence across sessions",
    ],
    solutions: [
      "Built robust timer system with background task management",
      "Implemented efficient Firebase integration for data synchronization",
      "Created engaging UI with animations and progress tracking",
      "Designed clean data architecture with Core Data and Firebase",
    ],
    businessImpact: [
      "Demonstrated expertise in productivity app development",
      "Created reusable patterns for timer-based applications",
      "Established best practices for Firebase integration in iOS",
      "Showcased gamification design principles",
    ],
    metrics: {
      users: "40+ productivity enthusiasts",
      performance: "Smooth timer animations",
      loadTime: "<1s app launch",
      satisfaction: "4.6/5 user rating",
    },
  },
  budgetme: {
    title: "BudgetMe App",
    tagline: "Personal Finance App with Banking API Integration",
    description:
      "Personal finances app using Starling bank's API with RxSwift + MVVM architecture. Features real-time banking data, expense tracking, and financial analytics.",
    fullDescription: `BudgetMe App is a comprehensive personal finance application that integrates with Starling Bank's API to provide real-time banking data and financial insights. The app helps users track expenses, analyze spending patterns, and manage their personal finances through an intuitive interface.

As the sole developer, I built this application to explore banking API integration and financial app development while creating a useful tool for personal finance management. The project demonstrates expertise in API integration, financial data processing, and modern iOS development patterns.`,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    technologies: ["Swift", "RxSwift", "MVVM", "Banking API"],
    category: "iOS",
    year: "2023",
    githubUrl: "https://github.com/leovido/BudgetMeApp",
    teamSize: 1,
    featured: false,
    technicalSkills: {
      frontend: ["UIKit", "RxSwift", "Charts", "Custom Views"],
      backend: ["Starling API", "Financial Data", "API Integration"],
      ios: ["iOS 15+", "Keychain", "Background Tasks", "Security"],
      architecture: ["MVVM", "RxSwift", "Dependency Injection"],
      testing: ["XCTest", "RxSwift Testing", "Unit Tests"],
    },
    contributions: {
      development: "Sole developer responsible for entire finance application",
      architecture:
        "Designed MVVM architecture with RxSwift for reactive programming",
      projectManagement: "Managed project from concept to completion",
      entrepreneurship: "Created useful personal finance management tool",
      innovation: "Pioneered banking API integration patterns in iOS",
    },
    challenges: [
      "Integrating with Starling Bank's API and handling financial data",
      "Implementing secure data storage and user authentication",
      "Creating intuitive financial analytics and visualization",
      "Managing real-time data updates and synchronization",
    ],
    solutions: [
      "Built robust API client for Starling Bank integration",
      "Implemented secure data storage using Keychain and encryption",
      "Created comprehensive financial analytics and charting system",
      "Designed reactive data flow using RxSwift for real-time updates",
    ],
    businessImpact: [
      "Demonstrated expertise in financial app development",
      "Created reusable patterns for banking API integration",
      "Established best practices for financial data security",
      "Showcased modern iOS development with reactive programming",
    ],
    metrics: {
      users: "35+ finance users",
      performance: "Real-time banking data updates",
      loadTime: "<2s data refresh",
      satisfaction: "4.5/5 user rating",
    },
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle async params
  React.useEffect(() => {
    params.then(({ slug }) => setSlug(slug));
  }, [params]);

  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!slug || !project) {
    return <div>Loading...</div>;
  }

  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/95 border-b border-slate-700 backdrop-blur-md">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-200 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {"demoUrl" in project && project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                  {project.year}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-6">{project.tagline}</p>
              <p className="text-slate-200 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
                {"demoUrl" in project && project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl text-blue-300 font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover bg-slate-900/50"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full hover:bg-slate-700 transition-colors z-30"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full hover:bg-slate-700 transition-colors z-30"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {/* Navigation Dots */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">
              {project.teamSize}
            </div>
            <div className="text-slate-400">Team Size</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">{project.year}</div>
            <div className="text-slate-400">Year</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 text-center">
            <Code className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">
              {project.technologies.length}
            </div>
            <div className="text-slate-400">Technologies</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">
              {project.featured ? "Featured" : "Standard"}
            </div>
            <div className="text-slate-400">Status </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Code className="w-8 h-8 text-blue-400 mr-3" />
            Technical Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(project.technicalSkills).map(
              ([category, skills]) => (
                <div
                  key={category}
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-slate-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* My Contributions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
            My Contributions & Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(project.contributions).map(
              ([area, contribution]) => (
                <div
                  key={area}
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                    {area.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <p className="text-slate-300">{contribution}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="w-8 h-8 text-green-400 mr-3" />
            Challenges & Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Challenges Faced
              </h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                Solutions Implemented
              </h3>
              <div className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
            Business Impact & Metrics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Business Impact
              </h3>
              <div className="space-y-3">
                {project.businessImpact.map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.metrics).map(([metric, value]) => (
                  <div
                    key={metric}
                    className="bg-slate-800/60 rounded-lg p-4 text-center"
                  >
                    <div className="text-lg font-semibold text-white">
                      {value}
                    </div>
                    <div className="text-slate-400 text-sm capitalize">
                      {metric.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, project
              management skills, and entrepreneurial mindset to every project.
              Let&apos;s discuss how I can contribute to your next initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-xl transition-all duration-200 hover:scale-105"
              >
                View More Projects
              </Link>
              <a
                href="mailto:christian@leovido.dev"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all duration-200 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
