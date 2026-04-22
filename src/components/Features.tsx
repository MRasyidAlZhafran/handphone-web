"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, BatteryCharging, Zap } from "lucide-react";

const features = [
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    title: "Kamera 200MP",
    description: "Sistem tiga lensa dengan sensor utama 200MP. Tangkap setiap detail bahkan dalam kondisi minim cahaya.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Chipset Gahar",
    description: "Performa 3x lebih cepat dengan efisiensi daya luar biasa menggunakan Snapdragon 8 Elite Gen 5. Mainkan game berat tanpa lag.",
  },
  {
    icon: <BatteryCharging className="w-8 h-8 text-primary" />,
    title: "Baterai 5000mAh",
    description: "Daya tahan hingga 2 hari. Pengisian cepat 60W mengisi penuh dalam 45 menit.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Layar 144Hz OLED",
    description: "Refresh rate ultra-halus dengan kecerahan puncak 3000 nits. Sempurna di bawah sinar matahari.",
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Performa Tanpa Kompromi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Inovasi di setiap komponen. Kami mendesain Galaxy S26 Ultra untuk mendorong batasan apa yang bisa dilakukan oleh sebuah smartphone
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
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
