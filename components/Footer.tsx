export default function Footer() {
  return (
    <footer className="bg-[#081423] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          DJURAGAN DINO
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Jasa Joki Whiteout Survival terpercaya.
          Aman, cepat, proses transparan, dan dikerjakan oleh player berpengalaman.
        </p>

        <div className="mt-8 flex justify-center gap-8 text-gray-400">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#services" className="hover:text-cyan-400">Layanan</a>
          <a href="#pricing" className="hover:text-cyan-400">Harga</a>
          <a href="#testimoni" className="hover:text-cyan-400">Testimoni</a>
          <a href="#faq" className="hover:text-cyan-400">FAQ</a>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-gray-500 text-sm">
          © 2026 DJURAGAN DINO. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}