"use client";

import { motion } from "framer-motion";
import { Sparkles, Languages, Search, Image as ImageIcon } from "lucide-react";

const aiFeatures = [
  {
    title: "Circle to Search",
    description: "Lingkari objek apa saja di layar untuk mencari tahu informasinya secara instan melalui Google.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Live Translate",
    description: "Terjemahan dua arah secara real-time untuk panggilan telepon dan pesan teks tanpa aplikasi pihak ketiga.",
    icon: <Languages className="w-6 h-6 text-primary" />,
  },
  {
    title: "Generative Edit",
    description: "Pindahkan atau hapus objek pada foto, dan biarkan AI mengisi ruang kosongnya dengan sempurna.",
    icon: <ImageIcon className="w-6 h-6 text-primary" />,
  }
];

export function GalaxyAI() {
  return (
    <section id="ai" className="py-20 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 text-primary"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Selamat Datang di Era <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Galaxy AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Tingkatkan produktivitas dan kreativitas Anda ke level yang belum pernah ada sebelumnya dengan kekuatan kecerdasan buatan terintegrasi
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
