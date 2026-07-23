"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock3 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Aman",
    desc: "Akun dikerjakan dengan aman dan menjaga privasi customer.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    desc: "Admin siap membalas chat dan memberikan update progress.",
  },
  {
    icon: MessageCircle,
    title: "Transparan",
    desc: "Seluruh proses pengerjaan dapat dipantau oleh customer.",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08111E] py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 text-center"
        >

          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            SIAP ORDER?
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Serahkan Akunmu Kepada
            <br />
            <span className="text-cyan-400">
              DJURAGAN DINO
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Tidak sempat login setiap hari? Sibuk bekerja atau kuliah?
            Kami siap membantu mengerjakan Daily Activity, Bear Trap,
            Frostfire Mine, Foundry Battle, Dreamscape Memory,
            hingga Sunfire Castle dengan aman dan transparan.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: {
                      duration: 0.2,
                      ease: "easeOut",
                    },
                  }}
                  className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
                >
                  <Icon
                    size={42}
                    className="mx-auto mb-4 text-cyan-400"
                  />

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

          <a
            href="https://wa.me/6288294084382"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-black transition duration-200 hover:scale-105 hover:bg-cyan-300"
          >
            <MessageCircle size={24} />
            ORDER VIA WHATSAPP
          </a>

        </motion.div>

      </div>
    </section>
  );
}