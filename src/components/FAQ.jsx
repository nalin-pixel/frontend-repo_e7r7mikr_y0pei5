import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  {
    q: "Is Pikashow APK safe to download?",
    a: "We verify files and publish checksums. Always download from trusted sources and enable installs from unknown sources only when needed.",
  },
  {
    q: "How do I install the APK?",
    a: "Download the file, open it from your downloads, allow installation from your browser or file manager, then follow the prompts.",
  },
  {
    q: "Do I need to update manually?",
    a: "Yes. When a new version is available, revisit this page to download the latest build.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl ring-1 ring-amber-100 bg-white/80">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-4 py-4"
      >
        <span className="text-left font-medium text-zinc-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-amber-700 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 text-zinc-600">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {items.map((i) => (
            <Item key={i.q} q={i.q} a={i.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
