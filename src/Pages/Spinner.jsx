import React, { useEffect, useState } from "react";
import "../Style/Spinner.css";

const greetings = [
  "السلام عليكم ",
  "ⴰⵣⵓⵍ",
  "Bojour",
  "안녕하세요 ",
  "Hola ",
  "こんにちは",
  "Ciao ",
  "Привет",
  "Hallo",
      "你好 ",
     " Xin chào",
];

export default function Spinner() {
  const [phase, setPhase] = useState("loading");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setIsAnimating(false);
      }, 150); // Apply blur before switching
    }, 280);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setPhase("home");
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (phase === "loading") {
    return (
      <div className="spinner-container">
        <p
          className="greeting-text text-5xl font-[1] mt-4"
          style={{
            animation: isAnimating ? "blurOutIn 0.4s ease-in-out" : "shadowPulse 2s infinite ease-in-out",
          }}
        >
          {greetings[greetingIndex]}
        </p>

        <div className="bottom-line"></div>
      </div>
    );
  }

  return null;
}
