
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Trash2 } from 'lucide-react';
import { agroAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const STORAGE_KEY = 'glean_agro_chat_history';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      try {
        setMessages(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse chat history", e);
        setMessages([{ role: 'model', text: 'Hello! I am your Glean Agro AI Assistant. How can I help you with your farming today?' }]);
      }
    } else {
      setMessages([{ role: 'model', text: 'Hello! I am your Glean Agro AI Assistant. How can I help you with your farming today?' }]);
    }
  }, []);

  // Save chat history whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const response = await agroAI.getAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear your conversation history?")) {
      const initialMsg: ChatMessage[] = [{ role: 'model', text: 'Hello! I am your Glean Agro AI Assistant. How can I help you with your farming today?' }];
      setMessages(initialMsg);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-sm leading-tight">Agro Assistant</h3>
                <p className="text-[10px] opacity-80">Glean Intelligence Active</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={clearChat} 
                className="hover:bg-emerald-500 p-1.5 rounded-lg transition-colors"
                title="Clear Chat"
              >
                <Trash2 size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-500 p-1.5 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none shadow-md shadow-emerald-900/10' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-bl-none'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    {msg.role === 'model' ? <Bot size={12} className="opacity-50" /> : <User size={12} className="opacity-50" />}
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-40">
                      {msg.role === 'model' ? 'Glean AI' : 'You'}
                    </span>
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-700 p-3 rounded-2xl shadow-sm border border-slate-200 rounded-bl-none flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-400">Consulting experts...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about soil, crops, or processing..."
                className="w-full pr-12 pl-4 py-3.5 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all border border-transparent focus:border-emerald-100"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-center mt-3 text-slate-400 font-medium tracking-wide">
              Persistent history enabled • Your conversations stay synced.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:bg-emerald-700 hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <div className="relative">
            <MessageSquare size={30} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-emerald-600 rounded-full animate-ping"></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
