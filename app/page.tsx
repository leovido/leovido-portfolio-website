"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Language = "en" | "es";

const translations = {
  en: {
    header: {
      title: "Senior Mobile Engineer • iOS & React Native Expert",
      location: "📍 Madrid, Spain • 🌍 Open to Remote (EU)",
    },
    about: {
      title: "About Me",
      p1: "Self-taught iOS engineer with",
      p1Bold: "9+ years",
      p1Cont:
        "building production apps at scale. Led development for airline loyalty apps serving",
      p1Bold2: "1M+ users",
      p1Cont2:
        "(British Airways, Aer Lingus, Vueling). Expert in Swift, SwiftUI, React Native, and building systems that scale.",
      p2: "My journey started unconventionally: I taught myself iOS development in 2016 without ever owning an iPhone or Mac. Two years later, I co-founded AccentPOS and won the",
      p2Bold: "2018 European Innovation Award",
      p2Cont: ". That system is still running in production 9 years later.",
      p3: "I thrive in distributed, async-first environments where I can multiply team impact through mentorship and process improvement. I've reduced build times by 80%, cut release cycles by 75%, and maintained 99.5% crash-free sessions at scale—all while achieving zero team attrition.",
      whatMakesMeDifferent: "What Makes Me Different",
      differentiator1: {
        title: "Self-Taught Success",
        desc: "Zero to European Award in 2 years",
      },
      differentiator2: {
        title: "Scale + Quality",
        desc: "1M users, 99.5% crash-free maintained",
      },
      differentiator3: {
        title: "Cross-Platform Expert",
        desc: "iOS (9 yrs) + RN (3 yrs) + Native Bridges",
      },
      differentiator4: {
        title: "Process Improvement",
        desc: "80% faster builds, 75% faster releases",
      },
    },
    stats: {
      usersServed: "Users Served",
      projectsShipped: "Projects Shipped",
      buildTime: "Build Time ↓",
      releaseCycle: "Release Cycle ↓",
      crashFree: "Crash-Free",
      teamAttrition: "Team Attrition",
    },
    awards: {
      title: "🏆 Awards & Recognition",
      award1: {
        title: "🏆 $10,500 in Hackathon Prizes",
        description: "Moxito: Devfolio ($2.5K) + Airstack Retro Grant ($8K)",
      },
      award2: {
        title: "🏅 2018 European Innovation Award",
        description: "Restaurant Technology • London Excel Centre • AccentPOS",
      },
      award3: {
        title: "⭐ 5/5 Mentoring Rating",
        description: "155+ sessions • $100/hour • Codementor Top 10%",
      },
    },
    projects: {
      title: "💼 Projects Portfolio",
      keyImpact: "Key Impact:",
      screenshots: "Screenshots:",
      techStack: "Tech Stack:",
      viewCode: "💻 View Code",
      caseStudy: "📄 Case Study",
      liveSite: "🌐 Live Site",
      appStore: "📱 App Store",
      community: "🎩 Community",
      moxito: {
        tagline: "iOS Health & Rewards App",
        description:
          "Farcaster rewards tracking app with privacy-first architecture. Won 2 hackathons on Devfolio with viral iOS widgets that users checked more than Instagram.",
        role: "Solo Developer & Designer (with @harios)",
        users: "100+ TestFlight Users",
        impact: [
          "🏆 Won $10,500 in prizes (Devfolio $2.5K + Airstack Retro Grant $8K)",
          "📱 Reached 100 TestFlight users in 3 months",
          "👥 Built 1,100+ organic followers on Farcaster",
          "🎨 Viral iOS widgets - users loved glancing at home screen",
          "💪 Integrated HealthKit for fitness rewards (steps, running, etc.)",
          "🏅 2nd place Moxiethon + Finalist in Moxie Retro Grant",
        ],
      },
      avios: {
        tagline: "Airline Loyalty App - 1M+ Users",
        description:
          "Led iOS and React Native development for British Airways loyalty app serving 1M+ members. Maintained 99.5% crash-free sessions while scaling.",
        role: "Senior Mobile Engineer (Solo iOS across 4 teams)",
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
      },
      aerLingus: {
        tagline: "Airline Loyalty App - 500K+ Users",
        description:
          "Part of Avios group. Led React Native development for Aer Lingus loyalty app with same tech stack and quality standards as British Airways.",
        role: "Senior Mobile Engineer",
        users: "500K+ Active Users",
        impact: [
          "📱 Full React Native app (migrated from iOS)",
          "🔗 Built Google Wallet integration (Kotlin/Android)",
          "💳 Payment integrations (Apple Pay, Google Pay)",
          "✅ Same 99.5% crash-free standard",
          "📦 Feature parity across iOS and Android",
        ],
      },
      vueling: {
        tagline: "Airline Loyalty App - 500K+ Users",
        description:
          "Third app in Avios group. React Native application with shared architecture and components across all three airline apps.",
        role: "Senior Mobile Engineer",
        users: "500K+ Active Users",
        impact: [
          "📱 React Native with shared component library",
          "🔄 Established trunk-based development across all teams",
          "🎯 Feature flags (DevCycle) for safe continuous deployment",
          "📚 Created release runbooks adopted company-wide",
          "✅ Same quality standards: 99.5% crash-free",
        ],
      },
      accentPOS: {
        tagline: "Full-Stack POS System - European Award Winner",
        description:
          "Co-founded restaurant tech startup. Built full-stack cloud POS system from scratch as self-taught developer. Won 2018 European Innovation Award. Still running 9 years later.",
        role: "Co-Founder & Lead Developer",
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
      },
      planetViewer: {
        tagline: "Portfolio Project - Got Me Hired at Luzia",
        description:
          "Star Wars planet browser built as take-home exercise. Clean MVVM architecture with SwiftUI demonstrating modern iOS patterns.\nThis project landed me the Luzia job.",
        role: "Solo Developer",
        users: "Portfolio Project",
        impact: [
          "✅ Got me hired at Luzia",
          "🎨 Clean MVVM + SwiftUI architecture",
          "🔄 Protocol-oriented design for testability",
          "⚡ async/await for networking",
          "📦 Swift Package Manager for modular design",
          "🧪 Comprehensive unit tests",
        ],
      },
      tcaFinance: {
        tagline: "Portfolio Project - Got Me an Offer",
        description:
          "Finance demo app showcasing The Composable Architecture. Built for Much Better take-home exercise. Clean modularization with SPM, full test coverage.",
        role: "Solo Developer",
        users: "Portfolio Project",
        impact: [
          "✅ Got me an offer from Much Better",
          "🎯 Showcased TCA mastery",
          "📦 Modularized features with SPM",
          "🧪 Unit & UI tests included",
          "🔄 Clean separation: State, Actions, Reducers, Environment",
          "⚡ Mock vs Live environments for testing",
        ],
      },
      rumourcast: {
        tagline: "Anonymous Farcaster Client - Zero-Knowledge Proofs",
        description:
          "Farcaster client allowing anonymous casting using Zero-Knowledge proofs (Noir). Forked from Anoncast, added custom features. Project has been sunset.",
        role: "Solo Developer",
        users: "Sunset",
        impact: [
          "🔐 Zero-Knowledge proof implementation (Noir)",
          "🎭 Anonymous casting on Farcaster",
          "🌐 Previously live at rumourcast.fun",
          "📢 Active Warpcast channel: /rumours",
          "🚀 Forked, extended, and deployed independently",
        ],
      },
    },
    cta: {
      title: "Let's Build Something Great Together",
      description:
        "Currently exploring Senior Mobile Engineer opportunities in Madrid or remote (EU timezone) where I can build products that scale, mentor teams, and drive technical excellence.",
      getInTouch: "📧 Get in Touch",
      viewLinkedIn: "💼 View LinkedIn",
    },
    footer: {
      copyright: "© 2025 Christian Ray Leovido • Madrid, Spain",
      tagline:
        "Senior Mobile Engineer • 9+ Years iOS & React Native • 1M+ Users Served • Available for Opportunities",
    },
  },
  es: {
    header: {
      title: "Ingeniero Móvil Senior • Experto en iOS y React Native",
      location: "📍 Madrid, España • 🌍 Disponible para Remoto (UE)",
    },
    about: {
      title: "Sobre Mí",
      p1: "Ingeniero iOS autodidacta con",
      p1Bold: "9+ años",
      p1Cont:
        "desarrollando aplicaciones de producción a escala. Lideré el desarrollo de aplicaciones de fidelización de aerolíneas que sirven a",
      p1Bold2: "1M+ usuarios",
      p1Cont2:
        "(British Airways, Aer Lingus, Vueling). Experto en Swift, SwiftUI, React Native y en construir sistemas que escalan.",
      p2: "Mi viaje comenzó de forma no convencional: me enseñé desarrollo iOS en 2016 sin haber tenido nunca un iPhone o Mac. Dos años después, cofundé AccentPOS y gané el",
      p2Bold: "Premio Europeo de Innovación 2018",
      p2Cont: ". Ese sistema sigue funcionando en producción 9 años después.",
      p3: "Prospero en entornos distribuidos y asíncronos donde puedo multiplicar el impacto del equipo mediante mentoría y mejora de procesos. He reducido los tiempos de compilación en un 80%, acortado los ciclos de lanzamiento en un 75% y mantenido 99.5% de sesiones sin fallos a escala, todo mientras logro cero desgaste del equipo.",
      whatMakesMeDifferent: "Lo Que Me Hace Diferente",
      differentiator1: {
        title: "Éxito Autodidacta",
        desc: "De cero a Premio Europeo en 2 años",
      },
      differentiator2: {
        title: "Escala + Calidad",
        desc: "1M usuarios, 99.5% sin fallos mantenido",
      },
      differentiator3: {
        title: "Experto Multiplataforma",
        desc: "iOS (9 años) + RN (3 años) + Puentes Nativos",
      },
      differentiator4: {
        title: "Mejora de Procesos",
        desc: "80% compilaciones más rápidas, 75% lanzamientos más rápidos",
      },
    },
    stats: {
      usersServed: "Usuarios Atendidos",
      projectsShipped: "Proyectos Lanzados",
      buildTime: "Tiempo Compilación ↓",
      releaseCycle: "Ciclo Lanzamiento ↓",
      crashFree: "Sin Fallos",
      teamAttrition: "Desgaste Equipo",
    },
    awards: {
      title: "🏆 Premios y Reconocimientos",
      award1: {
        title: "🏆 $10,500 en Premios de Hackathon",
        description: "Moxito: Devfolio ($2.5K) + Airstack Retro Grant ($8K)",
      },
      award2: {
        title: "🏅 Premio Europeo de Innovación 2018",
        description:
          "Tecnología Restaurantes • Centro Excel Londres • AccentPOS",
      },
      award3: {
        title: "⭐ Calificación de Mentoría 5/5",
        description: "155+ sesiones • $100/hora • Codementor Top 10%",
      },
    },
    projects: {
      title: "💼 Portafolio de Proyectos",
      keyImpact: "Impacto Clave:",
      screenshots: "Capturas:",
      techStack: "Stack Tecnológico:",
      viewCode: "💻 Ver Código",
      caseStudy: "📄 Estudio de Caso",
      liveSite: "🌐 Sitio en Vivo",
      appStore: "📱 App Store",
      community: "🎩 Comunidad",
      moxito: {
        tagline: "App iOS de Salud y Recompensas",
        description:
          "App de seguimiento de recompensas Farcaster con arquitectura centrada en privacidad. Ganó 2 hackathons en Devfolio con widgets virales de iOS que los usuarios consultaban más que Instagram.",
        role: "Desarrollador y Diseñador en Solitario (con @harios)",
        users: "100+ Usuarios TestFlight",
        impact: [
          "🏆 Ganó $10,500 en premios (Devfolio $2.5K + Airstack Retro Grant $8K)",
          "📱 Alcanzó 100 usuarios TestFlight en 3 meses",
          "👥 Construyó 1,100+ seguidores orgánicos en Farcaster",
          "🎨 Widgets virales de iOS - a los usuarios les encantaba ver la pantalla de inicio",
          "💪 Integró HealthKit para recompensas de fitness (pasos, carrera, etc.)",
          "🏅 2do lugar Moxiethon + Finalista en Moxie Retro Grant",
        ],
      },
      avios: {
        tagline: "App de Fidelización Aerolínea - 1M+ Usuarios",
        description:
          "Lideré el desarrollo iOS y React Native para la app de fidelización de British Airways que sirve a 1M+ miembros. Mantuve 99.5% de sesiones sin fallos mientras escalaba.",
        role: "Ingeniero Móvil Senior (iOS en solitario en 4 equipos)",
        users: "1M+ Usuarios Activos",
        impact: [
          "📱 Lideré migración UIKit → SwiftUI → React Native (100% funciones)",
          "⚡ Reduje tiempos de compilación 80% (40min → 8min)",
          "🚀 Acorté ciclos de lanzamiento de 8 semanas a 2 semanas",
          "✅ Mantuve 99.5% de sesiones sin fallos a escala",
          "💳 Integré pagos Mastercard (3DS2/PSD2 dos veces: Swift + RN)",
          "🔗 Construí Módulos Nativos para Apple Wallet desde cero",
          "📊 Lanzé 90+ versiones (3-4 por mes)",
          "🤝 Cero desgaste del equipo durante mi período",
        ],
      },
      aerLingus: {
        tagline: "App de Fidelización Aerolínea - 500K+ Usuarios",
        description:
          "Parte del grupo Avios. Lideré el desarrollo React Native para la app de fidelización de Aer Lingus con la misma pila tecnológica y estándares de calidad que British Airways.",
        role: "Ingeniero Móvil Senior",
        users: "500K+ Usuarios Activos",
        impact: [
          "📱 App completa React Native (migrada desde iOS)",
          "🔗 Construí integración Google Wallet (Kotlin/Android)",
          "💳 Integraciones de pago (Apple Pay, Google Pay)",
          "✅ Mismo estándar 99.5% sin fallos",
          "📦 Paridad de funciones en iOS y Android",
        ],
      },
      vueling: {
        tagline: "App de Fidelización Aerolínea - 500K+ Usuarios",
        description:
          "Tercera app del grupo Avios. Aplicación React Native con arquitectura y componentes compartidos en las tres apps de aerolíneas.",
        role: "Ingeniero Móvil Senior",
        users: "500K+ Usuarios Activos",
        impact: [
          "📱 React Native con biblioteca de componentes compartida",
          "🔄 Establecí desarrollo trunk-based en todos los equipos",
          "🎯 Feature flags (DevCycle) para despliegue continuo seguro",
          "📚 Creé manuales de lanzamiento adoptados en toda la empresa",
          "✅ Mismos estándares de calidad: 99.5% sin fallos",
        ],
      },
      accentPOS: {
        tagline: "Sistema POS Full-Stack - Ganador Premio Europeo",
        description:
          "Cofundé startup de tecnología para restaurantes. Construí sistema POS en la nube full-stack desde cero como desarrollador autodidacta. Gané Premio Europeo de Innovación 2018. Sigue funcionando 9 años después.",
        role: "Cofundador y Desarrollador Principal",
        users: "10+ Clientes Empresariales",
        impact: [
          "🏅 Ganó Premio Europeo de Innovación 2018 (Centro Excel Londres)",
          "🚀 Autodidacta iOS desde cero (sin Mac, sin iPhone inicialmente)",
          "🏢 Sirvió a clientes empresariales incluyendo concesionario BMW",
          "⏱️ Sigue funcionando en producción 9 años después",
          "📱 Construí app iOS + backend Node.js + sincronización en tiempo real",
          "💳 Integré impresoras Star Micronics, proveedores de pago, Xero",
          "✅ Establecí TDD/Agile, logré ~60% cobertura de código",
          "👨‍💻 Desarrollador móvil en solitario durante 5 años",
        ],
      },
      planetViewer: {
        tagline: "Proyecto Portafolio - Me Consiguió Trabajo en Luzia",
        description:
          "Navegador de planetas Star Wars construido como ejercicio take-home. Arquitectura MVVM limpia con SwiftUI demostrando patrones iOS modernos.\nEste proyecto me consiguió el trabajo en Luzia.",
        role: "Desarrollador en Solitario",
        users: "Proyecto Portafolio",
        impact: [
          "✅ Me consiguió trabajo en Luzia",
          "🎨 Arquitectura MVVM limpia + SwiftUI",
          "🔄 Diseño orientado a protocolos para testabilidad",
          "⚡ async/await para networking",
          "📦 Swift Package Manager para diseño modular",
          "🧪 Pruebas unitarias completas",
        ],
      },
      tcaFinance: {
        tagline: "Proyecto Portafolio - Me Consiguió una Oferta",
        description:
          "App demo financiera mostrando The Composable Architecture. Construida para ejercicio take-home de Much Better. Modularización limpia con SPM, cobertura de pruebas completa.",
        role: "Desarrollador en Solitario",
        users: "Proyecto Portafolio",
        impact: [
          "✅ Me consiguió una oferta de Much Better",
          "🎯 Demostró dominio de TCA",
          "📦 Funciones modularizadas con SPM",
          "🧪 Pruebas unitarias y UI incluidas",
          "🔄 Separación limpia: State, Actions, Reducers, Environment",
          "⚡ Entornos Mock vs Live para pruebas",
        ],
      },
      rumourcast: {
        tagline: "Cliente Farcaster Anónimo - Pruebas Zero-Knowledge",
        description:
          "Cliente Farcaster que permite casting anónimo usando pruebas Zero-Knowledge (Noir). Forkeado desde Anoncast, agregué características personalizadas. El proyecto ha sido descontinuado.",
        role: "Desarrollador en Solitario",
        users: "Descontinuado",
        impact: [
          "🔐 Implementación de prueba Zero-Knowledge (Noir)",
          "🎭 Casting anónimo en Farcaster",
          "🌐 Anteriormente en vivo en rumourcast.fun",
          "📢 Canal Warpcast activo: /rumours",
          "🚀 Forkeado, extendido y desplegado independientemente",
        ],
      },
    },
    cta: {
      title: "Construyamos Algo Grande Juntos",
      description:
        "Actualmente explorando oportunidades de Ingeniero Móvil Senior en Madrid o remoto (zona horaria UE) donde pueda construir productos que escalen, mentorizar equipos e impulsar la excelencia técnica.",
      getInTouch: "📧 Contactar",
      viewLinkedIn: "💼 Ver LinkedIn",
    },
    footer: {
      copyright: "© 2025 Christian Ray Leovido • Madrid, España",
      tagline:
        "Ingeniero Móvil Senior • 9+ Años iOS y React Native • 1M+ Usuarios Atendidos • Disponible para Oportunidades",
    },
  },
};

// Project translations would be too extensive, keeping them in English/Spanish mix
// as they contain specific technical terms and proper nouns

export default function PortfolioDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = translations[language];

  // Stats array using translations
  const stats = [
    { icon: "👥", value: "1M+", label: t.stats.usersServed },
    { icon: "📱", value: "9+", label: t.stats.projectsShipped },
    { icon: "⚡", value: "80%", label: t.stats.buildTime },
    { icon: "🚀", value: "75%", label: t.stats.releaseCycle },
    { icon: "✅", value: "99.5%", label: t.stats.crashFree },
    { icon: "🤝", value: "0%", label: t.stats.teamAttrition },
  ];

  // Awards array using translations
  const awards = [
    {
      title: t.awards.award1.title,
      description: t.awards.award1.description,
      year: "2024",
    },
    {
      title: t.awards.award2.title,
      description: t.awards.award2.description,
      year: "2018",
    },
    {
      title: t.awards.award3.title,
      description: t.awards.award3.description,
      year: "2020-2025",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Moxito",
      tagline: t.projects.moxito.tagline,
      description: t.projects.moxito.description,
      role: t.projects.moxito.role,
      duration: "Sep 2024 - Sep 2025",
      users: t.projects.moxito.users,
      impact: t.projects.moxito.impact,
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
      tagline: t.projects.avios.tagline,
      description: t.projects.avios.description,
      role: t.projects.avios.role,
      duration: "Nov 2021 - Mar 2025",
      users: t.projects.avios.users,
      impact: t.projects.avios.impact,
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
      tagline: t.projects.aerLingus.tagline,
      description: t.projects.aerLingus.description,
      role: t.projects.aerLingus.role,
      duration: "Nov 2021 - Mar 2025",
      users: t.projects.aerLingus.users,
      impact: t.projects.aerLingus.impact,
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
      tagline: t.projects.vueling.tagline,
      description: t.projects.vueling.description,
      role: t.projects.vueling.role,
      duration: "Nov 2021 - Mar 2025",
      users: t.projects.vueling.users,
      impact: t.projects.vueling.impact,
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
      tagline: t.projects.accentPOS.tagline,
      description: t.projects.accentPOS.description,
      role: t.projects.accentPOS.role,
      duration: "May 2016 - Nov 2021",
      users: t.projects.accentPOS.users,
      impact: t.projects.accentPOS.impact,
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
      icon: "/accent-logo.webp",
      screenshots: [
        "/accent-1.webp",
        "/accent-2.webp",
        "/accent-3.webp",
        "/accent-4.webp",
        "/accent-5.webp",
      ],
      image: "/accent-1.webp",
      color: "from-orange-900/30 to-red-900/30",
      borderColor: "border-orange-800",
    },
    {
      id: 6,
      name: "Planet Viewer",
      tagline: t.projects.planetViewer.tagline,
      description: t.projects.planetViewer.description,
      role: t.projects.planetViewer.role,
      duration: "1 week (Take-home exercise)",
      users: t.projects.planetViewer.users,
      impact: t.projects.planetViewer.impact,
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
      tagline: t.projects.tcaFinance.tagline,
      description: t.projects.tcaFinance.description,
      role: t.projects.tcaFinance.role,
      duration: "1 week (Take-home exercise)",
      users: t.projects.tcaFinance.users,
      impact: t.projects.tcaFinance.impact,
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
      tagline: t.projects.rumourcast.tagline,
      description: t.projects.rumourcast.description,
      role: t.projects.rumourcast.role,
      duration: "Q4 2024",
      users: t.projects.rumourcast.users,
      impact: t.projects.rumourcast.impact,
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
              <p className="text-gray-400 mt-2">{t.header.title}</p>
              <p className="text-sm text-gray-500 mt-1">{t.header.location}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm flex items-center gap-2"
                aria-label={
                  language === "en" ? "Cambiar a español" : "Switch to English"
                }
              >
                {language === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
              </button>
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
            <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                {t.about.p1}{" "}
                <strong className="text-blue-400">{t.about.p1Bold}</strong>{" "}
                {t.about.p1Cont}{" "}
                <strong className="text-purple-400">{t.about.p1Bold2}</strong>{" "}
                {t.about.p1Cont2}
              </p>
              <p>
                {t.about.p2}{" "}
                <strong className="text-orange-400">{t.about.p2Bold}</strong>
                {t.about.p2Cont}
              </p>
              <p>{t.about.p3}</p>
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
                {t.about.whatMakesMeDifferent}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      {t.about.differentiator1.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t.about.differentiator1.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      {t.about.differentiator2.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t.about.differentiator2.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      {t.about.differentiator3.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t.about.differentiator3.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-white">
                      {t.about.differentiator4.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t.about.differentiator4.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{t.awards.title}</h2>
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
          <h2 className="text-3xl font-bold mb-6">{t.projects.title}</h2>
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
                      {t.projects.keyImpact}
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
                        {t.projects.screenshots}
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
                      {t.projects.techStack}
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
                          {t.projects.viewCode}
                        </a>
                      )}
                      {project.links.case && (
                        <a
                          href={project.links.case}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          {t.projects.caseStudy}
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-800 hover:bg-green-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          {t.projects.liveSite}
                        </a>
                      )}
                      {project.links.appstore && (
                        <a
                          href={project.links.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          {t.projects.appStore}
                        </a>
                      )}
                      {project.links.channel && (
                        <a
                          href={project.links.channel}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-indigo-800 hover:bg-indigo-700 rounded-lg transition text-sm flex items-center gap-2"
                        >
                          {t.projects.community}
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
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:0xleovido@protonmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold"
              >
                {t.cta.getInTouch}
              </a>
              <a
                href="https://linkedin.com/in/christianleovido"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition font-semibold"
              >
                {t.cta.viewLinkedIn}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">{t.footer.copyright}</div>
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
            {t.footer.tagline}
          </div>
        </div>
      </footer>
    </div>
  );
}
