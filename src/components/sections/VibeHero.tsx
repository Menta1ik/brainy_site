"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VibeAgentWindow } from "./VibeAgentWindow";
import { VibeRain } from "./VibeRain";
import { useScramble } from "@/hooks/useScramble";

export function VibeHero() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  
  // High-frequency phrases for title scrambling
  const phrases = [
    "Fullstack AI Velocity",
    "Zero Team. All Platform.",
    "PWA & Mini-App Alchemy",
    "Infinite Build. Minimal Cost."
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const titleRef = useScramble<HTMLHeadingElement>(phrases[phraseIndex]);

  // Rotate phrases periodically
  useEffect(() => {
    const timer = setInterval(() => {
        setPhraseIndex(prev => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const labelRef = useScramble<HTMLDivElement>("03 // AI_NATIVE_PRODUCTION");

  // Helper to determine focus state
  const isAnyAgentHovered = hoveredAgent !== null;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-32 [perspective:1200px]">
      
      {/* FULL MATRIX ENVIRONMENT */}
      <VibeRain className="opacity-100 z-0" />
      
      {/* Background Glow Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-brand-green/5 blur-[180px] pointer-events-none" />

      <Container className="relative z-10 w-full h-full min-h-[700px] flex items-center justify-center [transform-style:preserve-3d]">
        
        {/* === HUB CORE (Glitching Center) === */}
        <div className="relative z-30 flex flex-col items-center justify-center max-w-4xl [transform-style:preserve-3d]">
             
             {/* 1. Terminal Section (Dims on Hover) */}
             <div 
                className={cn(
                    "flex flex-col items-center transition-opacity transition-transform duration-700 [transform-style:preserve-3d]",
                    isAnyAgentHovered ? "opacity-10 blur-[6px] [transform:translateZ(10px)_scale(0.95)]" : "opacity-100 [transform:translateZ(60px)]"
                )}
             >
                {/* Subtitle / Label */}
                <div 
                   ref={labelRef}
                   className="text-[10px] font-mono tracking-[0.8em] uppercase text-brand-green/80 mb-6 drop-shadow-[0_0_12px_rgba(140,197,65,0.4)]"
                >
                   03 // AI_NATIVE_PRODUCTION
                </div>

                {/* Central Terminal (Floating Glass) */}
                <div className="w-full max-w-[540px] mb-12 relative group/core">
                   <div className="absolute -inset-1 bg-brand-green/20 blur-[60px] opacity-20" />
                   <VibeAgentWindow 
                       title="SYSTEM_ARCHITECTURE_V3"
                       role="FULLSTACK_SYNTH"
                       delay="0.5s"
                       rotation="rotateX(-10deg)"
                       lines={[
                         "db.migrate(schema_v2.sql);",
                         "api.v1.route('/auth', '/sync');",
                         "pwa.manifest.inject_sw();",
                         "ai.bridge(vector_store);",
                         "// MISSION SCALABLE TO INFINITY"
                       ]}
                       className="border-brand-green/40 bg-black/80 backdrop-blur-xl shadow-[0_0_100px_rgba(0,0,0,1)]"
                   />
                </div>
             </div>

             {/* 2. Hero Title & Buttons (Always on Foreground) */}
             <div className="text-center px-4 relative z-[100] [transform:translateZ(300px)]">
                <h1 
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 uppercase min-h-[1.5em] font-mono drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
                >
                    Fullstack AI Velocity
                </h1>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        href="/contacts"
                        className="min-w-[220px] h-14 shadow-[0_0_40px_rgba(140,197,65,0.4)]"
                    >
                        Start Your Project
                    </Button>
                    <Button 
                        variant="outline" 
                        size="lg" 
                        href="/contacts"
                        className="min-w-[220px] h-14 bg-black/40 backdrop-blur-md border-white/20 hover:border-white transition-colors"
                    >
                        Discuss Your Vision
                    </Button>
                </div>
             </div>
        </div>

        {/* === SATELLITE AGENTS (Submerged Satellites) === */}
        
        {/* Agent: TOP LEFT (Backend/DB Specialist) */}
        <div 
            className={cn(
                "absolute top-8 left-4 lg:left-0 w-full max-w-[260px] transition-transform duration-700 cursor-pointer [transform-style:preserve-3d]",
                hoveredAgent === 'analyst' ? "z-50 [transform:translateZ(200px)] opacity-100" : "z-20 [transform:translateZ(40px)] opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
            )}
            onMouseEnter={() => setHoveredAgent('analyst')}
            onMouseLeave={() => setHoveredAgent(null)}
        >
            <VibeAgentWindow 
              title="UNIT_ARCHITECT_X"
              role="DB_BACKEND_SYNC"
              delay="0s"
              rotation="rotateY(10deg) rotateX(10deg)"
              lines={[
                "Provisioning PostgreSQL...",
                "Drafting API_CONTRACTS...",
                "Optimizing Query_Planner..."
              ]}
              className={cn(
                "border-brand-green/30 bg-black/60",
                hoveredAgent === 'analyst' && "border-brand-green shadow-[0_0_50px_rgba(140,197,65,0.4)]"
              )}
            />
        </div>

        {/* Agent: BOTTOM RIGHT (Frontend/PWA Specialist) */}
        <div 
            className={cn(
                "absolute bottom-8 right-4 lg:right-0 w-full max-w-[260px] transition-transform duration-700 cursor-pointer [transform-style:preserve-3d]",
                hoveredAgent === 'deploy' ? "z-50 [transform:translateZ(200px)] opacity-100" : "z-20 [transform:translateZ(40px)] opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
            )}
            onMouseEnter={() => setHoveredAgent('deploy')}
            onMouseLeave={() => setHoveredAgent(null)}
        >
            <VibeAgentWindow 
              title="UNIT_ARTISAN_Y"
              role="UX_PWA_ENGINEER"
              delay="1s"
              rotation="rotateY(-10deg) rotateX(-5deg)"
              lines={[
                "Rendering Fluid_UI...",
                "Deploying Edge_Runtime...",
                "Syncing Offline_Cache..."
              ]}
              className={cn(
                "border-brand-green/30 bg-black/60",
                hoveredAgent === 'deploy' && "border-brand-green shadow-[0_0_50px_rgba(140,197,65,0.4)]"
              )}
            />
        </div>

        {/* Agent: BOTTOM LEFT (Orchestration Engine) */}
        <div 
            className={cn(
                "absolute bottom-24 left-4 lg:left-12 w-full max-w-[260px] transition-transform duration-700 cursor-pointer [transform-style:preserve-3d]",
                hoveredAgent === 'engine' ? "z-50 [transform:translateZ(200px)] opacity-100" : "z-20 [transform:translateZ(30px)] opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
            )}
            onMouseEnter={() => setHoveredAgent('engine')}
            onMouseLeave={() => setHoveredAgent(null)}
        >
            <VibeAgentWindow 
              title="UNIT_ORCHESTRA_Z"
              role="CORE_DEVELOPMENT"
              delay="1.5s"
              rotation="rotateY(15deg) rotateX(-5deg)"
              lines={[
                "Env: Antigravity / ClaudeCode",
                "LLMs: Gemini 3.1 / 4.6 Opus",
                "Kernel: Orchestrating Architecture..."
              ]}
              className={cn(
                "border-brand-green/30 bg-black/60",
                hoveredAgent === 'engine' && "border-brand-green shadow-[0_0_50px_rgba(140,197,65,0.4)]"
              )}
            />
        </div>

      </Container>
    </section>
  );
}
