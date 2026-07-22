"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08111E] shadow-xl border-b border-cyan-500/20"
          : "bg-[#08111E]/40"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="DJURAGAN DINO"
            width={48}
            height={48}
            priority
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              DJURAGAN DINO
            </h1>

            <p className="text-xs text-cyan-400">
              Whiteout Survival
            </p>
          </div>

        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#services"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Layanan
          </a>

          <a
            href="#pricing"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Harga
          </a>

          <a
            href="#faq"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            FAQ
          </a>

          <a
            href="https://wa.me/6288294084382"
            target="_blank"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Order Sekarang
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-cyan-500/20 bg-[#08111E] md:hidden">

          <nav className="flex flex-col gap-5 px-6 py-6">

            <a
              href="#services"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Layanan
            </a>

            <a
              href="#pricing"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Harga
            </a>

            <a
              href="#faq"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>

            <a
              href="https://wa.me/6288294084382"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-cyan-400 py-3 text-center font-bold text-black"
            >
              Order Sekarang
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}