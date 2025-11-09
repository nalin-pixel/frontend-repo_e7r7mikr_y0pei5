import { Download, CheckCircle2 } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get the latest <span className="text-amber-600">Pikashow APK</span>
            </h2>
            <p className="mt-3 text-zinc-600">
              Verified file with integrity checks. Tap download to start instantly.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-600" /> Version: 2025.1</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-600" /> Size: 24.3 MB</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-600" /> Android: 6.0 and up</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow hover:shadow-lg transition-shadow"
              >
                <Download className="h-5 w-5" />
                Download APK
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50 transition-colors font-semibold"
              >
                How to Install?
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 ring-1 ring-amber-100 shadow-sm">
            <div className="aspect-[9/19] w-full max-w-sm mx-auto rounded-3xl bg-zinc-900 overflow-hidden shadow-xl">
              <div className="h-10 bg-zinc-800 flex items-center justify-center text-zinc-300 text-xs tracking-wider">Preview</div>
              <div className="p-5 text-zinc-100 space-y-3">
                <div className="h-2 w-24 bg-yellow-400/80 rounded" />
                <div className="h-8 w-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 rounded-xl bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
