"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60 mix-blend-screen"
        >
          <source src="/videos/hero2.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
        >
          Masa Depan <br /> Ada di Genggaman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light"
        >
          Galaxy S26 Ultra. Didesain ulang dari nol dengan material titanium murni dan layar edge-to-edge tanpa batas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-0"
        >
          <Link href="/beli" className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center">
            Beli Sekarang
          </Link>
          <a href="#features">
            <button className="glass px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
              Pelajari Lebih Lanjut
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-white/50 mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-white/50" />
      </motion.div>
    </section>
  );
}
