"use client";

import { useState, useRef } from "react";

export function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[600px] w-full flex items-center justify-center overflow-visible group"
      style={{ perspective: "2000px" }}
    >
      {/* Background Aura */}
      <div 
        className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(140,197,65,0.2) 0%, transparent 70%)",
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px) scale(1.5)`,
        }}
      />

      {/* Main 3D Stage */}
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${10 - mousePos.y * 25}deg) rotateY(${mousePos.x * 25}deg)`,
        }}
      >
        
        {/* ── THE ENGINE (Center Core) ── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 [transform:translateZ(100px)]">
          <div className="relative w-48 h-48">
            {/* Pulsing Core Rings */}
            <div className="absolute inset-0 rounded-3xl border-2 border-brand-green/30 animate-[ping_3s_linear_infinite]" />
            <div className="absolute inset-4 rounded-3xl border border-brand-green/50 animate-[spin_8s_linear_infinite]" />
            
            {/* Main Core Block */}
            <div className="absolute inset-8 bg-brand-dark border-2 border-brand-green rounded-2xl shadow-[0_0_60px_rgba(140,197,65,0.5)] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent" />
              <svg className="w-16 h-16 text-brand-green animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="mt-2 text-[10px] font-black tracking-[0.5em] text-brand-green uppercase">Engine</div>
            </div>
          </div>
        </div>

        {/* ── MODULE PLATES (The Builder Blocks) ── */}

        {/* 1. DATA MODULE (Top Left) */}
        <div 
          className="absolute left-[15%] top-[15%] w-44 h-44 [transform:translateZ(50px)]"
        >
          <div className="h-full w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex flex-col items-center justify-center group/plate hover:border-brand-green/50 transition-colors duration-500">
            <svg className="w-12 h-12 mb-4 text-muted-foreground/80 group-hover/plate:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 group-hover/plate:text-white">Database</span>
            <div className="mt-4 flex gap-1 w-full justify-center">
              <div className="h-1 w-8 bg-brand-green/20 rounded-full" />
              <div className="h-1 w-4 bg-brand-green/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* 2. UI MODULE (Top Right) */}
        <div 
          className="absolute right-[15%] top-[15%] w-44 h-44 [transform:translateZ(80px)]"
        >
          <div className="h-full w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex flex-col items-center justify-center group/plate hover:border-brand-green/50 transition-colors duration-500">
            <svg className="w-12 h-12 mb-4 text-muted-foreground/80 group-hover/plate:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 group-hover/plate:text-white">Form UI</span>
            <div className="mt-4 w-full h-2 bg-white/5 rounded-md overflow-hidden">
              <div className="h-full w-2/3 bg-brand-green/30 animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

        {/* 3. API MODULE (Bottom Left) */}
        <div 
          className="absolute left-[15%] bottom-[15%] w-44 h-44 [transform:translateZ(60px)]"
        >
          <div className="h-full w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex flex-col items-center justify-center group/plate hover:border-brand-green/50 transition-colors duration-500">
            <svg className="w-12 h-12 mb-4 text-muted-foreground/80 group-hover/plate:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 group-hover/plate:text-white">REST / API</span>
            <div className="mt-4 text-[10px] font-mono text-brand-green/60">CONNECTED</div>
          </div>
        </div>

        {/* 4. CLOUD MODULE (Bottom Right) */}
        <div 
          className="absolute right-[15%] bottom-[15%] w-44 h-44 [transform:translateZ(40px)]"
        >
          <div className="h-full w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl flex flex-col items-center justify-center group/plate hover:border-brand-green/50 transition-colors duration-500">
            <svg className="w-12 h-12 mb-4 text-muted-foreground/80 group-hover/plate:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 group-hover/plate:text-white">Deploy</span>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <div className="h-1 w-12 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>

        {/* ── ENERGY CONNECTORS (The pipes) ── */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none opacity-20">
          <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
          <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
          <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
          <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
        </svg>

      </div>

      {/* Floating Badge - The Message */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 [transform:translateZ(150px)]">
        <div className="bg-brand-dark/80 backdrop-blur-2xl border border-brand-green/30 px-10 py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-brand-green tracking-tighter">5x</span>
            <div className="h-10 w-px bg-brand-border" />
            <div className="text-sm font-medium leading-tight text-gray-300">
              Low-code Development<br/><span className="text-muted-foreground/80 uppercase text-[10px] tracking-widest">Speed & Efficiency</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
