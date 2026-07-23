"use client";

import { useState } from "react";
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
    <section id="faq" className="bg-[#08111E] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* FAQ */}
        <h2 className="mb-4 text-center text-5xl font-black text-cyan-400">
          Frequently Asked Questions
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Pertanyaan yang paling sering diajukan oleh pelanggan.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0D1B2A]"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 hover:bg-[#13283E] transition"
              >
                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-cyan-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-cyan-500/20 bg-[#102235] px-6 py-5 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="mt-24">

          <h2 className="text-center text-5xl font-black text-cyan-400">
            Terms & Conditions
          </h2>

          <p className="mx-auto mt-4 mb-12 max-w-3xl text-center text-gray-400">
            Dengan menggunakan layanan DJURAGAN DINO, pelanggan dianggap telah
            membaca, memahami, dan menyetujui seluruh ketentuan berikut.
          </p>

          <div className="space-y-5">
            {terms.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-cyan-500/20 bg-[#0D1B2A] p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="mt-1 shrink-0 text-cyan-400"
                    size={22}
                  />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {index + 1}. {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}