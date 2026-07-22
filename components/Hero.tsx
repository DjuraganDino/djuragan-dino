"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#08111E] pt-32"
    >
      {/* Background */}
      <Image
        src="/images/background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-20 -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08111E] via-[#08111E]/80 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              WHITEOUT SURVIVAL SERVICE
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
              DJURAGAN <br />
              <span className="text-cyan-400">DINO</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              Jasa Joki Whiteout Survival yang cepat, aman, dan terpercaya.
              Fokus pada event, farming, dan aktivitas harian tanpa mengejar ranking.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-gray-200">
              <p>✅ Daily Activity</p>
              <p>✅ Frostfire Mine</p>
              <p>✅ Dreamscape Memory</p>
              <p>✅ Bear Trap</p>
              <p>✅ Foundry Battle</p>
              <p>✅ Sunfire Castle</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/6288294084382"
                target="_blank"
                className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
              >
                ORDER VIA WHATSAPP
              </a>

              <a
                href="#pricing"
                className="rounded-full border border-cyan-400 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
              >
                LIHAT HARGA
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">150+</h3>
                <p className="text-gray-400">Order</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400">Aman</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="/images/hero.png"
                alt="Hero"
                width={700}
                height={700}
                priority
                className="drop-shadow-[0_0_80px_rgba(34,211,238,0.5)]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}