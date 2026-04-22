"use client";

import { motion } from "framer-motion";

export function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-[3/4] md:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Image generated for Samsung S26 Ultra */}
            <img
              src="/images/bg%20hitam%20s26.png"
              alt="Samsung S26 Ultra Design"
              className="object-cover w-full h-full"
            />
            {/* Deep Fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
            Desain Elegan<br />
            <span className="text-primary">Material Premium</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Dibuat dari titanium aerospace-grade, memberikan keseimbangan sempurna antara bobot ringan dan kekuatan ekstrem. Lengkap dengan kaca pelindung Nano-Ceramic terbaru.
          </p>

          <ul className="space-y-4">
            {['Titanium Frame', 'Nano-Ceramic Shield', 'IP68 Water Resistant', '4 Varian Warna Titanium'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
