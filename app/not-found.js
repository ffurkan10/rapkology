import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center text-center px-6">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-8xl font-extrabold text-[var(--yellow)]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Aradığın sayfa kayıplara karıştı 🎤
        </h2>
        <p className="text-gray-400 max-w-lg">
          Belki yanlış bir rhyme yazdın ya da bu beat hiç çıkmadı. 
          Ama sakin ol, sahne seni ana sayfada bekliyor.
        </p>

        <Link href="/" className="bg-[var(--yellow)] text-black font-semibold py-2 px-4 rounded">
            Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
