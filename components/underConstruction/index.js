import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center text-center px-6">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[var(--yellow)] drop-shadow-[5px_5px_0px_#000000]">
          🎧 Yakında!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Bu sayfa hazırlanıyor…
        </h2>
        <p className="text-gray-400 max-w-lg">
          Burada sağlam bir içerik olacak ama henüz sahneye çıkmadı.  
          Takipte kal, beat düştüğünde ilk sen duyacaksın!
        </p>

        <Link
          href="/"
          className="bg-[var(--yellow)] text-black font-semibold py-2 px-4 rounded"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
