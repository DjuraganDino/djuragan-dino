"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "Apakah akun saya aman?",
    answer:
      "Ya. Akun Anda aman. Kami menjaga kerahasiaan data login dan tidak akan mengubah informasi akun tanpa izin.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Tergantung layanan yang dipilih. Daily Activity dikerjakan setiap hari, sedangkan event mengikuti jadwal Whiteout Survival.",
  },
  {
    question: "Apakah bisa request jam pengerjaan?",
    answer:
      "Bisa. Selama jadwal kami tersedia, kami akan menyesuaikan waktu pengerjaan.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan di awal melalui transfer atau metode pembayaran yang disepakati.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Kami menjamin pengerjaan sesuai layanan yang dipilih dengan proses yang aman dan transparan.",
  },
];

const terms = [
  {
    title: "Layanan",
    text: "DJURAGAN DINO menyediakan jasa management account Whiteout Survival sesuai paket yang dipilih. Layanan ini hanya berupa jasa pengerjaan, bukan layanan untuk mengejar atau menjamin peringkat (push rank).",
  },
  {
    title: "Harga",
    text: "Seluruh harga yang tertera merupakan biaya jasa pengerjaan dan berlaku flat untuk semua pelanggan. Harga tidak dipengaruhi oleh hasil akhir ranking maupun pencapaian akun.",
  },
  {
    title: "Pembayaran",
    text: "Pengerjaan akan dimulai setelah pembayaran diterima. Dengan melakukan pembayaran, pelanggan dianggap telah menyetujui seluruh Terms & Conditions yang berlaku.",
  },
  {
    title: "Pembatalan & Refund",
    text: "Setelah pembayaran diterima dan proses pengerjaan dimulai, transaksi tidak dapat dibatalkan dan tidak dapat dilakukan pengembalian dana (refund).",
  },
  {
    title: "Keamanan Akun",
    text: "Selama masa pengerjaan berlangsung, DJURAGAN DINO menjaga kerahasiaan informasi akun pelanggan dan hanya menggunakan akses akun untuk keperluan layanan yang telah disepakati.",
  },
  {
    title: "Ganti Password",
    text: "Setelah masa pengerjaan selesai, pelanggan wajib mengganti password akun demi menjaga keamanan akun.",
  },
  {
    title: "Tanggung Jawab",
    text: "DJURAGAN DINO hanya bertanggung jawab atas akun selama masa pengerjaan berlangsung. Setelah layanan selesai dan akses akun dikembalikan kepada pelanggan, segala bentuk kehilangan akses, peretasan, maupun penyalahgunaan akun bukan menjadi tanggung jawab kami.",
  },
  {
    title: "Jadwal Event",
    text: "Pengerjaan mengikuti jadwal resmi Whiteout Survival. Apabila terjadi maintenance server, perubahan jadwal event, bug, atau gangguan dari pihak developer, maka waktu pengerjaan akan menyesuaikan kondisi tersebut.",
  },
  {
    title: "Data Akun",
    text: "Pelanggan wajib memberikan informasi akun yang benar, lengkap, serta memastikan akun dapat diakses selama proses pengerjaan berlangsung.",
  },
  {
    title: "Hasil Pengerjaan",
    text: "Kami berkomitmen memberikan pelayanan terbaik sesuai paket yang dipilih. Namun hasil event dapat dipengaruhi oleh kondisi akun, aktivitas pemain lain, matchmaking, maupun perubahan mekanisme permainan yang berada di luar kendali kami.",
  },
  {
    title: "Akses Akun",
    text: "Pelanggan bertanggung jawab memastikan akun tidak sedang digunakan di perangkat lain selama proses pengerjaan. Gangguan akibat login bersamaan berada di luar tanggung jawab kami.",
  },
  {
    title: "Perubahan Ketentuan",
    text: "DJURAGAN DINO berhak memperbarui Terms & Conditions sewaktu-waktu apabila diperlukan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#08111E] py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-400">
            Pertanyaan yang paling sering diajukan oleh pelanggan.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0D1B2A] transition-all duration-200 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 hover:bg-[#13283E] transition-colors"
              >

                <span className="text-left text-lg font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-cyan-400">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (
                <div className="border-t border-cyan-500/20 bg-[#102235] px-6 py-5 text-gray-300 leading-7">
                  {faq.answer}
                </div>
              )}

            </motion.div>

          ))}

        </div>

        <div className="mt-24 text-center">

          <p className="uppercase tracking-[4px] font-semibold text-cyan-400">
            Terms
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Terms & Conditions
          </h2>

          <p className="mx-auto mt-5 mb-12 max-w-3xl text-gray-400">
            Dengan menggunakan layanan DJURAGAN DINO, pelanggan dianggap telah
            membaca, memahami, dan menyetujui seluruh ketentuan berikut.
          </p>

        </div>

        <div className="space-y-5">

          {terms.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              className="rounded-2xl border border-cyan-500/20 bg-[#0D1B2A] p-6 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            >

              <div className="flex items-start gap-4">

                <CheckCircle
                  className="mt-1 shrink-0 text-cyan-400"
                  size={22}
                />

                <div>

                  <h3 className="text-lg font-bold">
                    {index + 1}. {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-300">
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}