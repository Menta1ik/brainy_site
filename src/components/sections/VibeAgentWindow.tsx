"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface VibeAgentWindowProps {
  title: string;
  role: string;
  lines: string[];
  className?: string;
  delay?: string;
  rotation?: string; // New: 3D rotation e.g. "rotateY(10deg)"
}

export function VibeAgentWindow({ 
  title, 
  role, 
  lines, 
  className, 
  delay = "0s",
  rotation = "rotateX(0deg) rotateY(0deg)"
}: VibeAgentWindowProps) {
  const [chunkId, setChunkId] = useState("");

  useEffect(() => {
    setChunkId(Math.random().toString(16).slice(2, 6));
  }, []);

  return (
    <div 
      className={cn(
        "relative flex flex-col border border-white/10 bg-brand-dark/20 backdrop-blur-2xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden animate-float transition-transform duration-700 hover:scale-[1.02]",
        className
      )}
      style={{ 
        animationDelay: delay,
        transform: `${rotation} translateZ(0px)`,
        transformStyle: "preserve-3d"
      }}
    >
      {/* 3D Depth Highlight Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green/50 shadow-[0_0_6px_#8cc541]" />
          <span className="ml-1.5 text-[8px] font-mono text-muted-foreground/80 uppercase tracking-widest">{title}</span>
        </div>
        <div className="text-[8px] font-mono text-brand-green/60 uppercase">{role}</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 md:p-6 font-mono text-[10px] md:text-sm text-muted-foreground/80 space-y-2">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-muted-foreground w-3">{i + 1}</span>
            <span className={cn(
              "text-white/90",
              i === lines.length - 1 && "animate-typing"
            )}>
              {line}
            </span>
          </div>
        ))}
        {/* Animated streaming items at bottom */}
        <div className="pt-4 mt-2 border-t border-white/5 overflow-hidden h-12 relative grayscale opacity-40">
           <div className="animate-stream absolute bottom-0 left-0 space-y-1">
              <div className="text-[8px]">SYNCING_CHUNKS_0x{chunkId || "...." }...</div>
              <div className="text-[8px]">ANALYZING_DEPENDENCIES...</div>
              <div className="text-[8px]">OPTIMIZING_RUNTIME...</div>
           </div>
        </div>
      </div>
    </div>
  );
}
