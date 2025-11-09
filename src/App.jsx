import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Features from "./components/Features";
import DownloadSection from "./components/DownloadSection";
import FAQ from "./components/FAQ";

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Pikashowapk.app — All rights reserved.
        </p>
        <p className="text-sm text-zinc-500">
          Designed with a vibrant yellow–orange palette and smooth 3D visuals.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Navbar />
      <Hero3D />
      <Features />
      <DownloadSection />
      <FAQ />
      <Footer />
    </div>
  );
}
