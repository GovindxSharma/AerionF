import { useState, useEffect, useRef } from "react";
import { FaRobot, FaUser, FaPaperPlane, FaComments } from "react-icons/fa";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const [hasFetchedGreeting, setHasFetchedGreeting] = useState(false);
  const messageEndRef = useRef(null); // ref to last message
  const audioRef = useRef(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const sendMessage = async (text = userInput) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          text: "⚠️ Sorry, I couldn't reach Aerion Medtech's assistant right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchGreeting = async () => {
    if (hasFetchedGreeting) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message:
            "Send a friendly welcome message small message introducing Aerion Medtech and asking how we can assist.",
        }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      setMessages([{ sender: "bot", text: data.reply }]);
      setHasFetchedGreeting(true);
    } catch {
      setMessages([
        {
          sender: "bot",
          text: "👋 Welcome! How can Aerion Medtech help you today?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 👇 Scroll to the TOP of the latest message when messages update
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // ensures scroll lands at the top of new message
    });
  }, [messages]);

  // Notification sound + badge after modal closed (once)
  useEffect(() => {
    const audio = new Audio("/notify.mp3");
    audioRef.current = audio;
    audio.load();

    let unlocked = false;

    const unlockAudio = () => {
      if (!unlocked) {
        audio
          .play()
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
            unlocked = true;
          })
          .catch(() => {});
      }
    };

    const interactionEvents = [
      "click",
      "keydown",
      "scroll",
      "mousemove",
      "touchstart",
      "touchmove",
      "wheel",
      "mousedown",
    ];
    interactionEvents.forEach((event) =>
      window.addEventListener(event, unlockAudio, { once: true })
    );

    let timerId = null;
    const startBadgeTimer = () => {
      timerId = setTimeout(() => {
        if (!open) {
          setUnread(true);
          if (unlocked) {
            audio.play().catch(() => {});
          }
        }
      }, 5000);
    };

    window.addEventListener("aboutClosed", startBadgeTimer);

    return () => {
      interactionEvents.forEach((event) =>
        window.removeEventListener(event, unlockAudio)
      );
      window.removeEventListener("aboutClosed", startBadgeTimer);
      if (timerId) clearTimeout(timerId);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setUnread(false);
    }
  }, [open]);

  useEffect(() => {
    if (open && !hasFetchedGreeting) {
      fetchGreeting();
    }
  }, [open]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-[#1F2F5A] text-white w-14 h-14 rounded-full shadow-md hover:scale-105 transition-all flex items-center justify-center"
      >
        <FaComments className="text-white" size={20} />
        {unread && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            1
          </span>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white text-black shadow-2xl rounded-xl flex flex-col border border-gray-200 overflow-hidden z-50 animate-[fadeIn_0.3s_ease-in-out]">
          <div className="bg-[#1F2F5A] text-white p-3 text-center font-semibold">
            Aerion Medtech Assistant
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                ref={i === messages.length - 1 ? messageEndRef : null}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <FaRobot className="text-[#1F2F5A] mt-1" />
                )}
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-[#1F2F5A] text-white rounded-br-none"
                      : "bg-white text-black border border-gray-300 rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <FaUser className="text-[#1F2F5A] mt-1" />
                )}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs animate-pulse">
                Assistant is typing...
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="relative flex items-center rounded-full bg-gray-100 border border-gray-200 shadow-inner focus-within:ring-2 focus-within:ring-[#1F2F5A] transition-all">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-transparent border-none text-black placeholder-gray-500 focus:outline-none rounded-full"
              />
              <button
                onClick={() => sendMessage()}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#1F2F5A] text-white p-2 rounded-full hover:bg-[#172443] hover:scale-110 transition-all"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
