import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C2A2C] flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <div className="text-[#0F8A7D] text-8xl font-black mb-4" aria-hidden="true">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[#0F8A7D] hover:bg-[#34B3A3] text-white font-bold rounded-full transition-colors duration-200 text-sm"
          >
            Go Home
          </Link>
          <Link
            href="/#book"
            className="px-8 py-3 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors duration-200 text-sm"
          >
            Get Your Prysm Score
          </Link>
        </div>
      </div>
    </div>
  );
}
