"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock3 } from "lucide-react";

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

          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            SIAP ORDER?
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
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

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
              <ShieldCheck
                size={42}
                className="mx-auto mb-4 text-cyan-400"
              />

              <h3 className="font-bold text-xl">
                Aman
              </h3>

              <p className="mt-2 text-gray-400">
                Akun dikerjakan dengan aman dan menjaga privasi customer.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
              <Clock3
                size={42}
                className="mx-auto mb-4 text-cyan-400"
              />

              <h3 className="font-bold text-xl">
                Fast Response
              </h3>

              <p className="mt-2 text-gray-400">
                Admin siap membalas chat dan memberikan update progress.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
              <MessageCircle
                size={42}
                className="mx-auto mb-4 text-cyan-400"
              />

              <h3 className="font-bold text-xl">
                Transparan
              </h3>

              <p className="mt-2 text-gray-400">
                Seluruh proses pengerjaan dapat dipantau oleh customer.
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/6288294084382"
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
          >
            <MessageCircle size={24} />
            ORDER VIA WHATSAPP
          </a>

        </motion.div>

      </div>
    </section>
  );
}