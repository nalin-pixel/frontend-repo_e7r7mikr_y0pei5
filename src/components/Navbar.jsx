import { Download, Smartphone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-yellow-400 via-orange-400 to-amber-500 flex items-center justify-center shadow-md">
            <Smartphone className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-yellow-500">Pika</span>
            <span className="text-amber-600">show</span>
            <span className="text-zinc-900">apk.app</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#features" className="text-zinc-700 hover:text-amber-600 transition-colors">Features</a>
          <a href="#download" className="text-zinc-700 hover:text-amber-600 transition-colors">Download</a>
          <a href="#faq" className="text-zinc-700 hover:text-amber-600 transition-colors">FAQ</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow hover:shadow-md transition-shadow"
        >
          <Download className="h-4 w-4" />
          Get APK
        </a>
      </div>
    </header>
  );
}
