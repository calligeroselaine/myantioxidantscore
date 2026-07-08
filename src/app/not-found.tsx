import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1B3E] flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <div className="text-[#C8953C] text-8xl font-black mb-4" aria-hidden="true">
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
            className="px-8 py-3 bg-[#C8953C] hover:bg-[#e8b05a] text-white font-bold rounded-full transition-colors duration-200 text-sm"
          >
            Go Home
          </Link>
          <Link
            href="/book-a-scan"
            className="px-8 py-3 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors duration-200 text-sm"
          >
            Book a Scan
          </Link>
        </div>
      </div>
    </div>
  );
}
