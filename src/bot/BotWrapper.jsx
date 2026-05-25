"use client";

import React, { useState } from "react";
import Bot from "./Bot";
import { Sparkles } from "lucide-react";

function BotWrapper() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <Bot
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />

      <div className="fixed bottom-6 right-4 z-40">

        <img
          src="/rima.png"
          alt="bot"
          className="
          w-36
          cursor-pointer
          hover:scale-110
          transition
          "
          onClick={() =>
            setOpen(true)
          }
        />

        <div
          className="
          absolute
          -top-8
          left-[-20px]
          bg-[#615fff]
          text-white
          !px-3
          !py-1.5
          rounded-full
          text-sm
          "
        >
          Ask Rima ✨
        </div>

      </div>
    </>
  );
}

export default BotWrapper;