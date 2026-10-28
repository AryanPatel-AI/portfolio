"use client";

import { useState } from "react";
import Link from "next/link";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  delivery_status?: string;
  deliveryStatus?: string;
  created_at?: string;
  createdAt?: string;
}

export default function AdminClient() {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/messages", {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setMessages(data.data || []);
      } else {
        setError(data.error || "Invalid secret token.");
      }
    } catch {
      setError("Failed to reach admin API. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const refreshMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/messages", {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.data || []);
      }
    } catch {
      setError("Refresh failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken("");
    setMessages([]);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#f8eddb] text-[#211e19]">
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 border-b border-[rgba(91,68,43,0.15)] bg-[#f8eddb]/90 backdrop-blur-xs sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-4 h-4 flex items-center justify-center border-2 border-[#211e19] rotate-45">
            <span className="w-1.5 h-1.5 bg-[#211e19] rounded-full" />
          </span>
          <span className="font-['Playfair_Display'] text-sm tracking-[0.2em] font-semibold uppercase text-[#211e19]">
            Admin Console · Aryan Patel
          </span>
        </Link>
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="text-[11px] font-semibold tracking-wider uppercase text-[#a34141] hover:text-[#7d2c2c] transition-colors cursor-pointer"
            >
              Sign Out ⎋
            </button>
          )}
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-wider uppercase text-[#77573a] hover:text-[#211e19]"
          >
            Exit to Site →
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto p-8 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs mt-10">
            <span className="text-[10px] tracking-[0.25em] text-[#b49368] uppercase font-semibold block mb-2">
              RESTRICTED ACCESS
            </span>
            <h1 className="font-['Playfair_Display'] text-2xl text-[#211e19] mb-4">
              Administrator Login
            </h1>
            <p className="text-xs text-[#6d6559] leading-relaxed mb-6">
              Enter your administration secret token to review incoming contact messages, verify delivery statuses, and inspect system telemetry.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-[#fbeaea] border border-[#e8a5a5] text-[#6e1e1e] text-xs rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#634e38] mb-1.5">
                  Secret Admin Token
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter token..."
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8eddb] border border-[rgba(91,68,43,0.2)] text-xs text-[#211e19] focus:outline-none focus:border-[#b49368]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-full bg-[#211e19] text-[#f8eddb] text-[11px] font-semibold tracking-wider hover:bg-[#3d3227] transition-all cursor-pointer"
              >
                {loading ? "Authenticating..." : "Unlock Dashboard →"}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(91,68,43,0.18)]">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#b49368] uppercase font-semibold block mb-1">
                  CONTROL PANEL
                </span>
                <h1 className="font-['Playfair_Display'] text-3xl text-[#211e19]">
                  Inquiry Management
                </h1>
              </div>

              <button
                onClick={refreshMessages}
                disabled={loading}
                className="px-4 py-2 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] text-[#211e19] text-xs font-semibold tracking-wider hover:bg-[#211e19] hover:text-[#f8eddb] transition-all cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>{loading ? "Refreshing..." : "Refresh Inbox"}</span>
                <span>↻</span>
              </button>
            </div>

            {/* Status Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#fcf7ee] border border-[rgba(91,68,43,0.15)] rounded-lg">
                <span className="text-[10px] uppercase font-mono text-[#806648] block mb-1">
                  Total Inquiries
                </span>
                <span className="text-2xl font-['Playfair_Display'] text-[#211e19]">
                  {messages.length}
                </span>
              </div>
              <div className="p-4 bg-[#fcf7ee] border border-[rgba(91,68,43,0.15)] rounded-lg">
                <span className="text-[10px] uppercase font-mono text-[#806648] block mb-1">
                  Resend Service
                </span>
                <span className="text-xs font-semibold text-[#2f6333] flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#2f6333]" />
                  Active / Fallback Ready
                </span>
              </div>
              <div className="p-4 bg-[#fcf7ee] border border-[rgba(91,68,43,0.15)] rounded-lg">
                <span className="text-[10px] uppercase font-mono text-[#806648] block mb-1">
                  Database Link
                </span>
                <span className="text-xs font-semibold text-[#806648] flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#b49368]" />
                  PostgreSQL / Manifest Synced
                </span>
              </div>
            </div>

            {/* Message List */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-[0.2em] text-[#806648] uppercase">
                Received Messages ({messages.length})
              </h2>

              {messages.length === 0 ? (
                <div className="p-8 text-center bg-[#fcf7ee] border border-[rgba(91,68,43,0.15)] rounded-xl text-xs text-[#77573a]">
                  No messages recorded yet. Any inquiries submitted through the contact form will appear here.
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-5 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(91,68,43,0.12)]">
                      <div>
                        <span className="font-semibold text-sm text-[#211e19] block">
                          {msg.name}
                        </span>
                        <a
                          href={`mailto:${msg.email}`}
                          className="text-xs text-[#806648] hover:underline font-mono"
                        >
                          {msg.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#f0e4d2] text-[#6b553e]">
                          {msg.delivery_status || msg.deliveryStatus || "processed"}
                        </span>
                        <span className="text-[10px] font-mono text-[#9f8973]">
                          {msg.created_at || msg.createdAt ? new Date(msg.created_at || msg.createdAt || "").toLocaleString() : "Recently"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium text-[#806648] uppercase tracking-wider block mb-1">
                        Subject: {msg.subject}
                      </span>
                      <p className="text-xs text-[#44382c] leading-relaxed whitespace-pre-wrap font-sans bg-[#f8eddb] p-3 rounded-lg border border-[rgba(91,68,43,0.1)]">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
