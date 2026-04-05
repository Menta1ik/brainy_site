"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  color: string;
  isTerm: boolean;
}

export const VibeRain: React.FC<{ className?: string }> = ({ className }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\";
    const coreTerms = ["INTENT", "AGENT", "SYNTHESIS", "PRODUCTION", "VIBE", "DATA", "LLM", "VECTOR", "EDGE", "GROQ", "ORCH"];
    const charCount = 350; // High intensity
    const newCharacters: Character[] = [];

    for (let i = 0; i < charCount; i++) {
        const isTerm = Math.random() < 0.12;
        const char = isTerm 
            ? coreTerms[Math.floor(Math.random() * coreTerms.length)]
            : allChars[Math.floor(Math.random() * allChars.length)];

      newCharacters.push({
        char: char,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.15 + Math.random() * 0.45, // Faster vertical drops
        opacity: 0.05 + Math.random() * 0.4,
        color: Math.random() > 0.85 ? "text-brand-blue" : "text-brand-green",
        isTerm,
      });
    }

    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  // Flicker Logic (High frequency)
  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>();
      const numActive = Math.floor(Math.random() * 8) + 8;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };

    const flickerInterval = setInterval(updateActiveIndices, 40);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  // Animation Loop (Standard requestAnimationFrame)
  useEffect(() => {
    let animationFrameId: number;

    const updatePositions = () => {
      setCharacters(prevChars => 
        prevChars.map(char => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 105 && {
            y: -5,
            x: Math.random() * 100,
          }),
        }))
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute inset-0 bg-black opacity-100" />
      {characters.map((char, index) => (
        <span
          key={index}
          className={cn(
            "absolute font-mono transition-colors duration-100 uppercase select-none",
            char.color,
            activeIndices.has(index)
              ? "text-[12px] z-10 font-bold opacity-100 scale-125 brightness-150"
              : char.isTerm ? "text-[10px] opacity-20 font-medium" : "text-[8px] opacity-10 font-light"
          )}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%)`,
            textShadow: activeIndices.has(index) 
              ? `0 0 12px ${char.color === 'text-brand-blue' ? 'rgba(0,180,237,0.8)' : 'rgba(140,197,65,0.8)'}` 
              : 'none',
            transition: 'color 0.1s, transform 0.1s, text-shadow 0.1s',
            willChange: 'top, transform',
          }}
        >
          {char.char}
        </span>
      ))}
    </div>
  );
};
