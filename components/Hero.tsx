import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center text-center overflow-hidden mb-16 bg-mesh shadow-2xl ring-1 ring-white/10">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/30 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 px-6 max-w-4xl glass py-10 md:py-12 rounded-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight">
          Welcome to <br className="hidden md:block" />
          <span className="text-gradient">everydayverdict</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Exploring the latest in web development, AI, and software engineering. Join me on this journey of continuous learning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transform hover:-translate-y-1">
            Read Articles
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
            About Me
          </button>
        </div>
      </div>
    </section>
  )
}
