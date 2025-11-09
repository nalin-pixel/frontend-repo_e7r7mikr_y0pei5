import { ShieldCheck, Zap, Palette, Download } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Optimized APK delivery with quick mirrors and lightweight package.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Verified",
    desc: "Every build is scanned and checksum-verified before publishing.",
  },
  {
    icon: Palette,
    title: "Clean 3D UI",
    desc: "Enjoy a playful, modern look with smooth animations and clarity.",
  },
  {
    icon: Download,
    title: "One‑Click Download",
    desc: "Direct download buttons with no maze of redirects.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why choose <span className="text-amber-600">Pikashow</span>
          </h2>
          <p className="mt-3 text-zinc-600">
            Built for speed, safety and style. Everything you need for a seamless mobile app download experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white/80 ring-1 ring-amber-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center shadow">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
