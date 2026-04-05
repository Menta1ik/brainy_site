"use client";

import { cn } from "@/lib/utils";

interface VibeBeamsProps {
  className?: string;
}

export function VibeBeams({ className }: VibeBeamsProps) {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30", className)}>
      <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Beam 1: Top Left to Center */}
        <path d="M50 200 Q 300 200 600 400" stroke="#8cc541" strokeWidth="0.5" strokeDasharray="4 8">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Beam 2: Bottom Right to Center */}
        <path d="M1150 600 Q 900 600 600 400" stroke="#8cc541" strokeWidth="0.5" strokeDasharray="4 8">
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="4s" repeatCount="indefinite" />
        </path>

        {/* Beam 3: Top Right to Center */}
        <path d="M1100 100 Q 800 200 600 400" stroke="#8cc541" strokeWidth="0.5" strokeDasharray="4 8">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
        </path>

        {/* Large Pulse Circles */}
        <circle cx="600" cy="400" r="100" stroke="#8cc541" strokeWidth="0.2" className="animate-pulse-slow">
           <animate attributeName="r" from="100" to="250" dur="10s" repeatCount="indefinite" />
           <animate attributeName="opacity" from="0.3" to="0" dur="10s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
