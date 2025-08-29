"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

interface HeaderProps {
  themeMode: "farcaster" | "dark" | "light";
  setThemeMode: (mode: "farcaster" | "dark" | "light") => void;
}

export default function Header({ themeMode, setThemeMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/leovido", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/christian-leovido",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:christian.leovido@gmail.com", icon: Mail },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md border-b bg-slate-900/95 border-slate-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">CL</span>
            </div>
            <span className="ml-3 text-xl font-bold text-white">
              Christian Leovido
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-200 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              onClick={() => {
                const modes: ("farcaster" | "dark" | "light")[] = [
                  "farcaster",
                  "dark",
                  "light",
                ];
                const currentIndex = modes.indexOf(themeMode);
                const nextMode = modes[(currentIndex + 1) % modes.length];
                setThemeMode(nextMode);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {themeMode === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-slate-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-200 hover:text-white transition-colors duration-200 font-medium py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}

                <button
                  onClick={() => {
                    const modes: ("farcaster" | "dark" | "light")[] = [
                      "farcaster",
                      "dark",
                      "light",
                    ];
                    const currentIndex = modes.indexOf(themeMode);
                    const nextMode = modes[(currentIndex + 1) % modes.length];
                    setThemeMode(nextMode);
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {themeMode === "light" ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
