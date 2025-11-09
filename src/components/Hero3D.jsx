import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients for brand tint (don’t block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-amber-50/30 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-amber-700 text-xs font-semibold ring-1 ring-yellow-300">
            Fast • Safe • Updated
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Download Pikashow APK
            <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-700 text-transparent bg-clip-text">
              A smooth, modern 3D experience
            </span>
          </h1>
          <p className="mt-4 text-zinc-700 text-lg">
            Get the latest version with one-click download, verified builds and a clean, ad-light experience. 
            Crafted with a vibrant yellow–orange aesthetic.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow hover:shadow-lg transition-shadow">
              Download Now
            </a>
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50 transition-colors font-semibold">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
