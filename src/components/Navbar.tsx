"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/images/Samsung-Logo-2005.png" 
            alt="Samsung Logo" 
            className="h-5 md:h-6 brightness-0 invert"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#hero" className="hover:text-primary transition-colors">Overview</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#showcase" className="hover:text-primary transition-colors">Design</a>
          <a href="#ai" className="hover:text-primary transition-colors">Galaxy AI</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <Link href="/beli" className="bg-primary/90 hover:bg-primary text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            Beli Sekarang
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-panel border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#hero" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Overview</a>
          <a href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#showcase" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Design</a>
          <a href="#ai" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Galaxy AI</a>
          <a href="#gallery" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Gallery</a>
          <Link href="/beli" className="bg-primary text-white px-6 py-3 rounded-full font-medium mt-2 text-center">
            Beli Sekarang
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
