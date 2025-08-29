import { notFound } from "next/navigation";
import Link from "next/link";
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
} from "lucide-react";

// This would typically come from a database or CMS
// For now, we'll define it here and you can help me populate it
const projectDetails = {
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
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
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
  // We'll add more projects as we work together
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

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
              {project.demoUrl && (
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
              <p className="text-slate-200 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl" />
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
