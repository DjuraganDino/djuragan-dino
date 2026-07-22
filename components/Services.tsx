"use client";

import { motion } from "framer-motion";
import {
  Sword,
  Flame,
  Castle,
  Shield,
  Mountain,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Daily Activity",
    icon: Sword,
    desc: "Menyelesaikan seluruh aktivitas harian akun secara rutin dan aman.",
  },
  {
    title: "Frostfire Mine",
    icon: Mountain,
    desc: "Membantu pengerjaan event Frostfire Mine agar hasil lebih maksimal.",
  },
  {
    title: "Dreamscape Memory",
    icon: Target,
    desc: "Jasa pengerjaan Dreamscape Memory dengan strategi yang efisien.",
  },
  {
    title: "Bear Trap",
    icon: Flame,
    desc: "Optimasi damage saat event Bear Trap berlangsung.",
  },
  {
    title: "Foundry Battle",
    icon: Shield,
    desc: "Pendampingan dan pengerjaan event Foundry Battle.",
  },
  {
    title: "Sunfire Castle",
    icon: Castle,
    desc: "Jasa bermain Sunfire Castle sesuai kebutuhan alliance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#08111E] py-24 text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-semibold tracking-[4px] uppercase">
            Layanan Kami
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Jasa Joki Whiteout Survival
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400">
            Semua layanan dikerjakan oleh player berpengalaman dengan proses
            aman, cepat, dan transparan.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-sm transition"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    size={34}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}