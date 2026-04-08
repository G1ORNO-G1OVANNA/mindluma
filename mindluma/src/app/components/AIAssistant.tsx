import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';

interface AIAssistantProps {
  showAI: boolean;
  setShowAI: (show: boolean) => void;
}

export function AIAssistant({ showAI, setShowAI }: AIAssistantProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! I'm your wellness AI assistant. How can I help you today?", isUser: false }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  };

  const accentGradient = {
    background: "linear-gradient(135deg, #7B8CC1 0%, #A3B5E0 40%, #8ECCC5 100%)"
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!userMessage.trim() || isLoading) return;

    const currentMsg = userMessage;
    setMessages(prev => [...prev, { text: currentMsg, isUser: true }]);
    setUserMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: currentMsg }] }]
          }),
        }
      );

      const data = await response.json();
      const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that.";
      setMessages(prev => [...prev, { text: aiReply, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "I'm having trouble connecting. Try again later.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setShowAI(!showAI)}
        className="fixed bottom-28 right-6 w-16 h-16 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center border border-white/30"
        style={accentGradient}
      >
        {showAI ? <X className="w-7 h-7 text-black" /> : <Bot className="w-7 h-7 text-black" />}
      </button>

      {/* AI Chat Interface */}
      {showAI && (
        <div
          className="fixed bottom-48 right-6 w-80 sm:w-96 rounded-[2.5rem] shadow-2xl z-40 overflow-hidden flex flex-col border border-white/20"
          style={containerStyle}
        >
          {/* Header */}
          <div className="p-5 flex items-center gap-3 border-b border-white/10" style={accentGradient}>
            <div className="bg-black/10 p-2 rounded-[0.75rem]">
              <Bot className="w-5 h-5 text-black" />
            </div>
            <h3 className="text-black font-bold tracking-widest text-sm">LUMA AI</h3>
          </div>

          {/* Chat Area */}
          <div
            ref={scrollRef}
            className="h-96 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 shadow-sm border border-white/10 ${
                    msg.isUser
                      ? 'rounded-[1.5rem] rounded-tr-none text-black'
                      : 'rounded-[1.5rem] rounded-tl-none text-slate-800 bg-white/50 backdrop-blur-md'
                  }`}
                  style={msg.isUser ? accentGradient : {}}
                >
                  <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-[1.5rem] rounded-tl-none flex items-center gap-2 border border-white/10">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-700" />
                  <span className="text-[10px] text-slate-700 font-bold uppercase tracking-tighter">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/20 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Luma..."
                className="flex-1 px-5 py-3 rounded-full border-none focus:ring-2 focus:ring-[#7B8CC1] text-slate-800 placeholder-slate-500 shadow-inner bg-white/60 text-sm font-medium"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-90 disabled:opacity-50 shadow-md border border-white/20"
                style={accentGradient}
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
