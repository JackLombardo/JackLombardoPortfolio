import { useState } from "react";

export default function ChatBox({ apiBase }) {
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    const text = msg.trim();
    if (!text || loading) return;

    setLog((l) => [...l, { role: "user", text }]);
    setMsg("");
    setLoading(true);

    try {
      const r = await fetch(`${apiBase}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await r.json();
      setLog((l) => [...l, { role: "assistant", text: data.reply || "No reply." }]);
    } catch {
      setLog((l) => [...l, { role: "assistant", text: "Error calling API." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur">
      <h2 className="text-2xl font-semibold text-center">Ask me about Jack</h2>

      <div className="mt-4 h-72 overflow-auto rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 space-y-3">
        {log.length === 0 ? (
          <p className="text-neutral-400">
            Try: “What work did you do at 911inform?” or “What projects should I look at first?”
          </p>
        ) : (
          log.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <div className="inline-block max-w-[85%] rounded-xl px-3 py-2 border border-neutral-800 bg-neutral-900/40 text-neutral-100">
                {m.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-neutral-100 outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question..."
        />
        <button
          className="rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-2 hover:bg-neutral-900/80 transition"
          onClick={send}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}