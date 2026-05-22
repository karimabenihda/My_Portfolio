"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdvancedCodeTerminal from "./AdvancedCodeTerminal";

const Spinner = ({ onComplete }) => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  const [fastapi, setFastapi] = useState(0);
  const [uvicorn, setUvicorn] = useState(0);
  const [mlops, setMlops] = useState(0);

  useEffect(() => {
    setShowTerminal(true);
    const runSequence = async () => {
      const animate = async (setter) => {
        for (let i = 0; i <= 100; i += 10) {
          setter(i);
          await new Promise(r => setTimeout(r, 60 + Math.random() * 40));
        }
        setter(100); 
      };
      await animate(setFastapi);
      await animate(setUvicorn);
      await animate(setMlops);
    };
    runSequence();
  }, []);

  // Configuration de l'effet Glitch intense
  const intenseGlitch = {
    exit: {
      x: [0, -20, 20, -10, 10, -30, 30, 0],
      y: [0, 5, -5, 10, -10, 0],
      skewX: [0, 10, -10, 20, -20, 0],
      filter: [
        "none",
        "hue-rotate(90deg) contrast(200%) brightness(150%)",
        "drop-shadow(-5px 0px 0px #ff00ff) drop-shadow(5px 0px 0px #00ffff)",
        "none"
      ],
      opacity: [1, 0.9, 0.4, 1, 0.2, 0],
      transition: { duration: 0.5, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 1] }
    }
  };

  const renderAttractiveBar = (p, label, color = "#FF2D55") => {
    const isFinished = p >= 100;
    const segments = 20;
    const filled = Math.floor((p / 100) * segments);
    const statusText = isFinished 
      ? `<span style="color: #50FA7B">✔ Done (100%)</span>` 
      : `<span style="color: #8BE9FD; font-size: 10px;">(Installing... ${p}%)</span>`;
    const bar = `<span style="color: ${color}">${"━".repeat(filled)}</span><span style="color: #444">${"━".repeat(segments - filled)}</span>`;
    
    return `
      <div style="font-family: 'Menlo', monospace; margin-bottom: 12px; width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
           <span style="color: #F1FA8C;">${label}</span>
           ${statusText}
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 14px; letter-spacing: -1px; white-space: nowrap;">${bar}</div>
          <div style="display: flex; gap: 8px; font-size: 11px; white-space: nowrap;">
            <span style="color: #50FA7B;">${isFinished ? '120.5' : (p * 1.2).toFixed(1)}/120.5 MB</span>
          </div>
        </div>
      </div>
    `;
  };

  const terminalLines = [
    { code: "sh init_system.sh", output: "<span style='color: #50FA7B'>✔ System core initialized</span>" },
  { 
    code: "pip install fastapi uvicorn", 
    output: `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        ${renderAttractiveBar(fastapi, "Fetching fastapi-v0.109.tar.gz", "#5227FF")}
        ${renderAttractiveBar(uvicorn, "Downloading uvicorn-runtime", "#8BE9FD")}
      </div>
    `
  }, // ...(uvicorn >= 100 ? [{ code: "pip install mlops-tools", output: renderAttractiveBar(mlops, "Processing mlops-platform-assets") }] : []),
    ...(mlops >= 100 ? [{ code: "python main.py", output: "<span style='color: #8BE9FD'>✨ Environment Ready. Launching Karima's Portfolio...</span>" }] : [])
  ];

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600); // Temps synchro avec l'animation glitch
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0B0A13] !p-4 overflow-hidden">
          {/* Overlay de bruit (noise) pour plus de réalisme glitch */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicLmr6/giphy.gif')]" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit="exit"
            variants={intenseGlitch}
            className="w-full max-w-2xl relative"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e2e]/90 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center !px-4 !py-3 bg-[#1e1e2e] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center !pr-10">
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">karima@terminal — zsh</span>
                </div>
              </div>

              <div className="!p-2">
                <AdvancedCodeTerminal
                  lines={terminalLines}
                  prompt="karima@portfolio ~ % "
                  typingSpeed={60}
                  onComplete={() => {
                    if (mlops >= 100) setTimeout(handleComplete, 1000);
                  }}
                />
              </div>
            </div>

            {/* Barre de scan "laser" typique des interfaces AI/Hacker */}
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-50 pointer-events-none"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;









// import React, { useEffect, useState } from "react";
// import "../Style/Spinner.css";

// const greetings = [
//   "السلام عليكم ",
//   "ⴰⵣⵓⵍ",
//   "Bojour",
//   "안녕하세요 ",
//   "Hola ",
//   "こんにちは",
//   "Ciao ",
//   "Привет",
//   "Hallo",
//       "你好 ",
//      " Xin chào",
// ];

// export default function Spinner() {
//   const [phase, setPhase] = useState("loading");
//   const [greetingIndex, setGreetingIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setGreetingIndex((prev) => (prev + 1) % greetings.length);
//         setIsAnimating(false);
//       }, 150); // Apply blur before switching
//     }, 280);

//     const timeout = setTimeout(() => {
//       clearInterval(interval);
//       setPhase("home");
//     }, 3200);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, []);

//   if (phase === "loading") {
//     return (
//       <div className="spinner-container">
//         <p
//           className="greeting-text text-5xl font-[1] mt-4"
//           style={{
//             animation: isAnimating ? "blurOutIn 0.4s ease-in-out" : "shadowPulse 2s infinite ease-in-out",
//           }}
//         >
//           {greetings[greetingIndex]}
//         </p>

//         <div className="bottom-line"></div>
//       </div>
//     );
//   }

//   return null;
// }
