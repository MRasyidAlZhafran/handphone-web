"use client";

import { motion } from "framer-motion";
import { EyeOff, ShieldCheck, Zap } from "lucide-react";

export function ScreenFeature() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden py-24">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/PrivacyDisplay.png" 
          alt="Samsung Privacy Display Technology" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">World's First Hardware Privacy</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Privasi Mutlak,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hanya Untuk Anda</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed">
              Teknologi <span className="text-white font-semibold">Privacy Display</span> revolusioner memastikan data sensitif Anda tidak akan pernah terlihat oleh mata asing. Terintegrasi langsung pada struktur piksel layar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <ShieldCheck className="w-5 h-5 text-primary" />, 
                  title: "Narrow Pixel Tech", 
                  desc: "Membatasi sudut pandang secara fisik langsung dari panel." 
                },
                { 
                  icon: <Zap className="w-5 h-5 text-primary" />, 
                  title: "Smart Shield", 
                  desc: "Proteksi otomatis untuk perbankan dan pesan pribadi." 
                },
                { 
                  icon: <EyeOff className="w-5 h-5 text-primary" />, 
                  title: "200% More Private", 
                  desc: "Layar tampak gelap total dari sudut pandang samping." 
                },
                { 
                  icon: <ShieldCheck className="w-5 h-5 text-primary" />, 
                  title: "Crystal Clear", 
                  desc: "Tetap tajam dan cerah bagi Anda sebagai pengguna utama." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge (Only Desktop) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hidden lg:flex absolute right-24 bottom-24 glass-panel px-8 py-6 rounded-[2rem] items-center gap-5 border-primary/20 shadow-2xl backdrop-blur-2xl"
      >
        <div className="w-16 h-16 rounded-[1.25rem] bg-primary/20 flex items-center justify-center">
          <EyeOff className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] mb-1">Status</p>
          <p className="text-2xl font-bold text-white">Privacy Secured</p>
        </div>
      </motion.div>
    </section>
  );
}
