"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PortfolioDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Moxito",
      tagline: "iOS Health & Rewards App",
      description:
        "Farcaster rewards tracking app with privacy-first architecture. Won 2 hackathons on Devfolio with viral iOS widgets that users checked more than Instagram.",
      role: "Solo Developer & Designer (with @harios)",
      duration: "Sep 2024 - Sep 2025",
      users: "100+ TestFlight Users",
      impact: [
        "🏆 Won $10,500 in prizes (Devfolio $2.5K + Airstack Retro Grant $8K)",
        "📱 Reached 100 TestFlight users in 3 months",
        "👥 Built 1,100+ organic followers on Farcaster",
        "🎨 Viral iOS widgets - users loved glancing at home screen",
        "💪 Integrated HealthKit for fitness rewards (steps, running, etc.)",
        "🏅 2nd place Moxiethon + Finalist in Moxie Retro Grant",
      ],
      tech: [
        "SwiftUI",
        "MVVM",
        "HealthKit",
        "Actor Concurrency",
        "AWS Lambda",
        "TypeScript",
        "Widgets",
      ],
      links: {
        github: "https://github.com/leovido/moxito-ios",
        case: "https://devfolio.co/projects/moxito-app-ios-9810",
        live: "https://warpcast.com/~/channel/moxito",
      },
      icon: "/moxito-logo.jpg",
      screenshots: [
        "/cover-moxito.jpg",
        "/moxito-app.png",
        "/moxito-app-2.png",
        "/moxito-widget-1.jpeg",
      ],
      image: "/cover-moxito.jpg",
      color: "from-purple-900/30 to-pink-900/30",
      borderColor: "border-purple-800",
    },
    {
      id: 2,
      name: "Avios (aka British Airways Executive Club",
      tagline: "Airline Loyalty App - 3M+ Users",
      description:
        "Led iOS and React Native development for British Airways loyalty app serving 1M+ members. Maintained 99.5% crash-free sessions while scaling.",
      role: "Senior Mobile Engineer (Solo iOS across 4 teams)",
      duration: "Nov 2021 - Mar 2025",
      users: "1M+ Active Users",
      impact: [
        "📱 Led UIKit → SwiftUI → React Native migration (100% features)",
        "⚡ Reduced build times 80% (40min → 8min)",
        "🚀 Cut release cycles from 8 weeks to 2 weeks",
        "✅ Maintained 99.5% crash-free sessions at scale",
        "💳 Integrated Mastercard payments (3DS2/PSD2 twice: Swift + RN)",
        "🔗 Built Native Modules for Apple Wallet from scratch",
        "📊 Shipped 90+ releases (3-4 per month)",
        "🤝 Zero team attrition during tenure",
      ],
      tech: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "React Native",
        "TypeScript",
        "Native Modules",
        "Fastlane",
        "GitHub Actions",
        "TCA",
        "Combine",
      ],
      links: {},
      icon: "/avios-logo.png",
      screenshots: ["/Avios-1.png", "/Avios-2.png", "/Avios-3.png"],
      image: "/Avios-1.png",
      color: "from-blue-900/30 to-cyan-900/30",
      borderColor: "border-blue-800",
    },
    {
      id: 3,
      name: "Aer Lingus Club",
      tagline: "Airline Loyalty App - 500K+ Users",
      description:
        "Part of Avios group. Led React Native development for Aer Lingus loyalty app with same tech stack and quality standards as British Airways.",
      role: "Senior Mobile Engineer",
      duration: "Nov 2021 - Mar 2025",
      users: "500K+ Active Users",
      impact: [
        "📱 Full React Native app (migrated from iOS)",
        "🔗 Built Google Wallet integration (Kotlin/Android)",
        "💳 Payment integrations (Apple Pay, Google Pay)",
        "✅ Same 99.5% crash-free standard",
        "📦 Feature parity across iOS and Android",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Kotlin",
        "Swift",
        "Native Modules",
        "Redux Toolkit",
      ],
      links: {},
      icon: "/aer-logo.webp",
      screenshots: ["/aer-1.webp", "/aer-2.webp", "/aer-3.webp", "/aer-4.webp"],
      image: "/aer-1.webp",
      color: "from-green-900/30 to-emerald-900/30",
      borderColor: "border-green-800",
    },
    {
      id: 4,
      name: "Vueling Club",
      tagline: "Airline Loyalty App - 500K+ Users",
      description:
        "Third app in Avios group. React Native application with shared architecture and components across all three airline apps.",
      role: "Senior Mobile Engineer",
      duration: "Nov 2021 - Mar 2025",
      users: "500K+ Active Users",
      impact: [
        "📱 React Native with shared component library",
        "🔄 Established trunk-based development across all teams",
        "🎯 Feature flags (DevCycle) for safe continuous deployment",
        "📚 Created release runbooks adopted company-wide",
        "✅ Same quality standards: 99.5% crash-free",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "DevCycle",
        "Fastlane",
        "GitHub Actions",
      ],
      links: {},
      icon: "/vueling-logo.webp",
      screenshots: [
        "/vueling-1.webp",
        "/vueling-2.webp",
        "/vueling-3.webp",
        "/vueling-4.webp",
      ],
      image: "/vueling-1.webp",
      color: "from-yellow-900/30 to-orange-900/30",
      borderColor: "border-yellow-800",
    },
    {
      id: 5,
      name: "AccentPOS",
      tagline: "Full-Stack POS System - European Award Winner",
      description:
        "Co-founded restaurant tech startup. Built full-stack cloud POS system from scratch as self-taught developer. Won 2018 European Innovation Award. Still running 9 years later.",
      role: "Co-Founder & Lead Developer",
      duration: "May 2016 - Nov 2021",
      users: "10+ Enterprise Clients",
      impact: [
        "🏅 Won 2018 European Innovation Award (London Excel Centre)",
        "🚀 Self-taught iOS from zero (no Mac, no iPhone initially)",
        "🏢 Served enterprise clients including BMW dealership",
        "⏱️ Still running in production 9 years later",
        "📱 Built iOS app + Node.js backend + real-time sync",
        "💳 Integrated Star Micronics printers, payment providers, Xero",
        "✅ Established TDD/Agile, achieved ~60% code coverage",
        "👨‍💻 Solo mobile developer for 5 years",
      ],
      tech: [
        "Swift",
        "UIKit",
        "SwiftUI",
        "Node.js",
        "MongoDB",
        "Real-time Sync",
        "Payment SDKs",
        "Fastlane",
      ],
      links: {
        appstore: "https://apps.apple.com/gb/app/accentpos/id1612505826",
      },
      image: "🍽️",
      color: "from-orange-900/30 to-red-900/30",
      borderColor: "border-orange-800",
    },
    {
      id: 6,
      name: "Planet Viewer",
      tagline: "Portfolio Project - Got Me Hired at Luzia",
      description:
        "Star Wars planet browser built as take-home exercise. Clean MVVM architecture with SwiftUI demonstrating modern iOS patterns.\nThis project landed me the Luzia job.",
      role: "Solo Developer",
      duration: "1 week (Take-home exercise)",
      users: "Portfolio Project",
      impact: [
        "✅ Got me hired at Luzia",
        "🎨 Clean MVVM + SwiftUI architecture",
        "🔄 Protocol-oriented design for testability",
        "⚡ async/await for networking",
        "📦 Swift Package Manager for modular design",
        "🧪 Comprehensive unit tests",
      ],
      tech: [
        "SwiftUI",
        "MVVM",
        "Combine",
        "async/await",
        "SPM",
        "Protocol-Oriented",
      ],
      links: {
        github: "https://github.com/leovido/Planet-Viewer-Portfolio",
      },
      icon: undefined,
      screenshots: ["/planet-1.png", "/planet-2.png", "/planet-3.png"],
      image: "/planet-1.png",
      color: "from-indigo-900/30 to-purple-900/30",
      borderColor: "border-indigo-800",
    },
    {
      id: 7,
      name: "TCA Finance App",
      tagline: "Portfolio Project - Got Me an Offer",
      description:
        "Finance demo app showcasing The Composable Architecture. Built for Much Better take-home exercise. Clean modularization with SPM, full test coverage.",
      role: "Solo Developer",
      duration: "1 week (Take-home exercise)",
      users: "Portfolio Project",
      impact: [
        "✅ Got me an offer from Much Better",
        "🎯 Showcased TCA mastery",
        "📦 Modularized features with SPM",
        "🧪 Unit & UI tests included",
        "🔄 Clean separation: State, Actions, Reducers, Environment",
        "⚡ Mock vs Live environments for testing",
      ],
      tech: [
        "TCA",
        "SwiftUI",
        "SPM",
        "XCTest",
        "XCUITest",
        "Dependency Injection",
      ],
      links: {
        github: "https://github.com/leovido/composable-much-better-exercise",
      },
      icon: undefined,
      screenshots: ["/composable.png", "/composable-2.png"],
      image: "/composable.png",
      color: "from-green-900/30 to-teal-900/30",
      borderColor: "border-green-800",
    },
    {
      id: 8,
      name: "Rumourcast",
      tagline: "Anonymous Farcaster Client - Zero-Knowledge Proofs",
      description:
        "Farcaster client allowing anonymous casting using Zero-Knowledge proofs (Noir). Forked from Anoncast, added custom features. Project has been sunset.",
      role: "Solo Developer",
      duration: "Q4 2024",
      users: "Sunset",
      impact: [
        "🔐 Zero-Knowledge proof implementation (Noir)",
        "🎭 Anonymous casting on Farcaster",
        "🌐 Previously live at rumourcast.fun",
        "📢 Active Warpcast channel: /rumours",
        "🚀 Forked, extended, and deployed independently",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Noir (ZK)",
        "Farcaster Protocol",
        "Vercel",
      ],
      links: {
        github: "https://github.com/leovido/rumourcast",
        channel: "https://warpcast.com/~/channel/rumours",
      },
      icon: "/rumourcast-logo.png",
      screenshots: ["/rumourcast-logo.png"],
      image: "/rumourcast-logo.png",
      color: "from-gray-800/30 to-gray-900/30",
      borderColor: "border-gray-700",
    },
  ];

  const awards = [
    {
      title: "🏆 $10,500 in Hackathon Prizes",
      description: "Moxito: Devfolio ($2.5K) + Airstack Retro Grant ($8K)",
      year: "2024",
    },
    {
      title: "🏅 2018 European Innovation Award",
      description: "Restaurant Technology • London Excel Centre • AccentPOS",
      year: "2018",
    },
    {
      title: "⭐ 5/5 Mentoring Rating",
      description: "155+ sessions • $100/hour • Codementor Top 10%",
      year: "2020-2025",
    },
  ];

  const stats = [
    { icon: "👥", value: "3M+", label: "Users Served" },
    { icon: "📱", value: "9+", label: "Projects Shipped" },
    { icon: "⚡", value: "80%", label: "Build Time ↓" },
    { icon: "🚀", value: "75%", label: "Release Cycle ↓" },
    { icon: "✅", value: "99.5%", label: "Crash-Free" },
    { icon: "🤝", value: "0%", label: "Team Attrition" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-blue-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Christian Ray Leovido
              </h1>
              <p className="text-gray-400 mt-2">
                Senior Mobile Engineer • iOS & React Native Expert
              </p>
              <p className="text-sm text-gray-500 mt-1">
                📍 Madrid, Spain • 🌍 Open to Remote (EU)
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/leovido"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm"
              >
                💻 GitHub
              </a>
              <a
                href="https://linkedin.com/in/christianleovido"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition text-sm"
              >
                💼 LinkedIn
              </a>
              <a
                href="mailto:0xleovido@protonmail.com"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition text-sm"
              >
                📧 Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-800">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Self-taught iOS engineer with{" "}
                <strong className="text-blue-400">9+ years</strong> building
                production apps at scale. Led development for airline loyalty
                apps serving{" "}
                <strong className="text-purple-400">3M+ users</strong> (British
                Airways, Aer Lingus, Vueling). Expert in Swift, SwiftUI, React
                Native, and building systems that scale.
              </p>
              <p>
                My journey started unconventionally: I taught myself iOS
                development in 2016 without ever owning an iPhone or Mac. Two
                years later, I co-founded AccentPOS and won the{" "}
                <strong className="text-orange-400">
                  2018 European Innovation Award
                </strong>
                . That system is still running in production 9 years later.
              </p>
              <p>
                I thrive in distributed, async-first environments where I can
                multiply team impact through mentorship and process improvement.
                I've reduced build times by 80%, cut release cycles by 75%, and
                maintained 99.5% crash-free sessions at scale—all while
                achieving zero team attrition.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700 hover:border-blue-500 transition"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Differentiators */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                What Makes Me Different
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Self-Taught Success
                    </h4>
                    <p className="text-sm text-gray-400">
                      Zero to European Award in 2 years
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Scale + Quality
                    </h4>
                    <p className="text-sm text-gray-400">
                      3M users, 99.5% crash-free maintained
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Cross-Platform Expert
                    </h4>
                    <p className="text-sm text-gray-400">
                      iOS (9 yrs) + RN (3 yrs) + Native Bridges
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Process Improvement
                    </h4>
                    <p className="text-sm text-gray-400">
                      80% faster builds, 75% faster releases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏆 Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-800/50"
              >
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {award.description}
                </p>
                <span className="text-xs text-gray-500">{award.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💼 Projects Portfolio</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-gradient-to-r ${project.color} backdrop-blur-sm rounded-2xl border ${project.borderColor} overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {/* App Icon */}
                      {project.icon ? (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 border border-white/20">
                          <Image
                            src={project.icon}
                            alt={`${project.name} icon`}
                            fill
                            className="object-contain p-2"
                            sizes="64px"
                          />
                        </div>
                      ) : typeof project.image === "string" &&
                        project.image.startsWith("/") ? (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 border border-white/20">
                          <Image
                            src={project.image}
                            alt={`${project.name} icon`}
                            fill
                            className="object-contain p-2"
                            sizes="64px"
                          />
                        </div>
                      ) : (
                        <div className="text-6xl">{project.image}</div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {project.name}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {project.tagline}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {project.role} • {project.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-purple-400">
                        {project.users}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">
                      Key Impact:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.impact.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300 bg-gray-900/30 p-2 rounded-lg"
                        >
                          <span className="text-green-400 mt-0.5">→</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots Gallery - Horizontal between Impact and Tech Stack */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 text-sm">
                        Screenshots:
                      </h4>
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {project.screenshots.map((screenshot, idx) => (
                          <div
                            key={idx}
                            className="relative flex-shrink-0 w-48 h-96 rounded-xl overflow-hidden bg-gray-900/50 border border-white/20 hover:border-blue-400/50 transition-colors"
                          >
                            <Image
                              src={screenshot}
                              alt={`${project.name} screenshot ${idx + 1}`}
                              fill
                              className="object-contain p-2"
                              sizes="300px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-3 text-sm">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs rounded-full border border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {Object.keys(project.links).length > 0 && (
                    <div className="flex gap-3 pt-4 border-t border-gray-700">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          💻 View Code
                        </a>
                      )}
                      {project.links.case && (
                        <a
                          href={project.links.case}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          📄 Case Study
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-800 hover:bg-green-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          🌐 Live Site
                        </a>
                      )}
                      {project.links.appstore && (
                        <a
                          href={project.links.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          📱 App Store
                        </a>
                      )}
                      {project.links.channel && (
                        <a
                          href={project.links.channel}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-indigo-800 hover:bg-indigo-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          🎩 Community
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-800 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Currently exploring Senior Mobile Engineer opportunities in Madrid
              or remote (EU timezone) where I can build products that scale,
              mentor teams, and drive technical excellence.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:0xleovido@protonmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold"
              >
                📧 Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/christianleovido"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition font-semibold"
              >
                💼 View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Christian Ray Leovido • Madrid, Spain
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:0xleovido@protonmail.com"
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                📧 Email
              </a>
              <a
                href="https://github.com/leovido"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                💻 GitHub
              </a>
              <a
                href="https://linkedin.com/in/christianleovido"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://warpcast.com/leovido.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-sm"
              >
                🎩 Farcaster
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            Senior Mobile Engineer • 9+ Years iOS & React Native • 3M+ Users
            Served • Available for Opportunities
          </div>
        </div>
      </footer>
    </div>
  );
}
