import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Coffee, Loader2 } from 'lucide-react';
import { getBaristaResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to CARTEL. I am your Head Barista. How can I assist you with our menu today?' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getBaristaResponse(input);
      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Connection interrupted. Please try again.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 h-16 w-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-neutral-300 ${isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'}`}
      >
        <div className="relative">
          <Sparkles size={24} />
        </div>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-black border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right backdrop-blur-xl ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-4 border-b border-white/20 bg-black flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Coffee size={18} className="text-black" />
             </div>
             <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Head Barista AI</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                   <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Online</span>
                </div>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
           {messages.map((msg, idx) => (
             <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed font-sans ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-tr-sm font-medium' 
                      : 'bg-neutral-900 text-neutral-200 border border-white/10 rounded-tl-sm'
                  } ${msg.isError ? 'border-red-500/50 text-red-200' : ''}`}
                >
                  {msg.text}
                </div>
             </div>
           ))}
           {isLoading && (
             <div className="flex justify-start">
                <div className="bg-neutral-900 p-3 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-2">
                   <Loader2 size={14} className="animate-spin text-white" />
                   <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Brewing answer...</span>
                </div>
             </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-white/20 bg-black">
           <div className="relative">
             <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Ask for a recommendation..."
               className="w-full bg-neutral-900 border border-white/10 text-white text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder-neutral-500 font-sans"
             />
             <button 
               type="submit"
               disabled={!input.trim() || isLoading}
               className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white hover:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
             >
               <Send size={16} />
             </button>
           </div>
           <div className="text-center mt-2">
              <span className="text-[9px] text-neutral-600 uppercase tracking-widest">Powered by Google Gemini</span>
           </div>
        </form>

      </div>
    </>
  );
};

export default AiBarista;