"use client";

import React, { useState } from "react";
import { cvText } from "../cvData"; 

function Bot({ open, onClose }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 Ask me anything about Karima's CV.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function askBot(e) {
    if (e) e.preventDefault();
    if (!question.trim()) return;

    const currentQuestion = question.trim();
    const userMessage = { role: "user", content: currentQuestion };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuestion("");

    try {
      console.log("=== STARTING REQUEST ===");
      console.log("Question:", currentQuestion);
      console.log("CV Text length:", cvText.length);
      console.log("API Token exists:", !!import.meta.env.VITE_HF_TOKEN);

      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-ai/DeepSeek-V4-Pro:novita",
            messages: [
              {
                role: "system",
                content: `You are Rima. Answer ONLY using this CV information.\n\nCV:\n${cvText}\n\nIf information does not exist say: "I couldn't find that information in the CV."`,
              },
              {
                role: "user",
                content: currentQuestion,
              },
            ],
          }),
        }
      );

//       console.log("Response status:", response.status);
//       console.log("Response OK:", response.ok);
// console.log("Token:", import.meta.env.VITE_HF_TOKEN?.substring(0, 10) + "...");

      const data = await response.json();
    //   console.log("=== FULL API RESPONSE ===");
    //   console.log(JSON.stringify(data, null, 2));

      let botReply = "No response";
      
      // Check all possible response formats
      if (data?.choices?.[0]?.message?.content) {
        botReply = data.choices[0].message.content;
        console.log("✅ Found content in choices[0].message.content");
      } else if (data?.error) {
        botReply = `API Error: ${JSON.stringify(data.error)}`;
        console.log("❌ API returned error:", data.error);
      } else if (data?.message) {
        botReply = `Error: ${data.message}`;
        console.log("❌ Error message:", data.message);
      } else {
        console.log("❌ Unknown response format:", data);
        botReply = "Unexpected response format. Check console.";
      }

    //   console.log("Bot reply:", botReply);

      setMessages((prev) => [...prev, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("=== CATCH ERROR ===");
      console.error("Error type:", error.name);
      console.error("Error message:", error.message);
      console.error("Full error:", error);
      
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: `Error: ${error.message}. Check console for details.` 
        },
      ]);
    } finally {
      setLoading(false);
      console.log("=== REQUEST COMPLETE ===");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-30 right-6 w-[400px] bg-white rounded-xl shadow-xl z-50">
      <div className="p-4 flex justify-between border-b">
        <h3>Rima — Bot</h3>
        <button onClick={onClose} className="text-[#0f0f16]">✕</button>
      </div>

      <div className="h-[350px] overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : ""}`}>
            <div className={`inline-block !px-3 !mx-1 !my-1.5 !py-2 rounded-2xl ${
              m.role === "user"
                ? "bg-[#615fff] text-white text-sm rounded-br-none"
                : "bg-[#0f0f16] text-white rounded-bl-none"
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500">Thinking...</p>}
      </div>

      <div className="flex gap-2 !p-4">
        <form 
          onSubmit={askBot}
          className="flex items-center border border-gray-300 gap-2 h-12 max-w-md w-full rounded-full overflow-hidden"
        >
          <input
            placeholder="Ask about Karima..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type="text"
            className="w-full text-gray-500 h-full pl-6 outline-none  text-sm placeholder:pr-1 placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-[#615fff] active:scale-95 transition w-46 h-10 rounded-full text-sm text-white cursor-pointer !mr-1"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bot;