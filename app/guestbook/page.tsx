"use client";

import { useState } from "react";

interface Message {
  name: string;
  content: string;
  time: string;
}

export default function GuestbookPage() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loaded, setLoaded] = useState(false);

  const loadMessages = async () => {
    try {
      const res = await fetch("/api/guestbook");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
        setLoaded(true);
      }
    } catch { /* ignore */ }
  };

  if (!loaded) {
    loadMessages();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), content: content.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setContent("");
        const data = await res.json();
        setMessages(data.messages || []);
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const err = await res.json();
        setStatus("error");
        alert(err.error || "提交失败");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">留言板</h1>
      <p className="text-text-secondary mb-12">欢迎留下你的想法和建议</p>

      <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-xl p-6 mb-10">
        <div className="mb-4">
          <label className="block text-sm text-text-secondary mb-1">昵称</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
            className="w-full bg-bg-primary border border-border rounded-lg px-4 py-2.5 text-text-primary focus:border-accent focus:outline-none transition-colors"
            placeholder="你的昵称"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-text-secondary mb-1">留言内容</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
            required
            rows={4}
            className="w-full bg-bg-primary border border-border rounded-lg px-4 py-2.5 text-text-primary focus:border-accent focus:outline-none transition-colors resize-none"
            placeholder="说点什么..."
          />
          <div className="text-right text-text-dim text-xs mt-1">{content.length}/500</div>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent text-bg-primary font-medium px-6 py-2.5 rounded-lg hover:bg-accent-dim transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "提交中..." : status === "success" ? "✓ 已提交" : "提交留言"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-6 text-text-primary">留言 ({messages.length})</h2>
      {messages.length === 0 ? (
        <p className="text-text-dim text-center py-12">还没有留言，来写第一条吧！</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{msg.name}</span>
                <span className="text-text-dim text-xs">{msg.time}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{msg.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
