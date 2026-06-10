import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Mail } from 'lucide-react';
import { chatbotFAQ, personalInfo } from '../../data/portfolioData';

const QUICK_PROMPTS = [
  'Who are you?',
  'What are your skills?',
  'Current projects?',
  'Contact info?',
];

const getBotResponse = (input) => {
  const lower = input.toLowerCase();
  for (const item of chatbotFAQ) {
    if (lower.includes(item.q)) return item.a;
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hey there! 👋 I'm Piyali's assistant. Ask me anything about her skills, projects, or how to get in touch!";
  }
  if (lower.includes('help')) {
    return "I can tell you about Piyali's skills, projects, experience, internship at Inamigos Foundation, or how to contact her. What would you like to know?";
  }
  if (lower.includes('pytorch') || lower.includes('ai') || lower.includes('ml') || lower.includes('machine learning')) {
    return "Piyali is passionate about AI/ML! She works with PyTorch, TensorFlow, HuggingFace Transformers, OpenCV, scikit-learn, LangChain, and more. Her projects include image classification pipelines and NLP tools.";
  }
  if (lower.includes('react') || lower.includes('frontend') || lower.includes('web')) {
    return "Piyali builds beautiful, performant web apps using React, Next.js, Tailwind CSS, and Framer Motion. She's worked on full-stack projects with Node.js, Django, and FastAPI backends.";
  }
  if (lower.includes('work') || lower.includes('job') || lower.includes('hire') || lower.includes('opportunity')) {
    return `Piyali is currently open to opportunities! You can reach her at ${personalInfo.email} or use the Contact page. She's looking for roles in full-stack development and AI/ML. ✨`;
  }
  return `I'm not sure about that specific question, but you can reach Piyali directly at ${personalInfo.email} for anything detailed! Or try asking about her skills, projects, or experience.`;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "Hi! 👋 I'm Piyali's AI assistant. Ask me anything about her work, skills, or projects — or use the form below to send her a message directly!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [emailMode, setEmailMode] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', msg: '' });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: response }]);
      setIsTyping(false);
    }, 700 + Math.random() * 500);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Message from Portfolio Chatbot')}&body=${encodeURIComponent(`From: ${emailForm.name} <${emailForm.email}>\n\n${emailForm.msg}`)}`;
    window.open(mailto, '_blank');
    setEmailMode(false);
    setMessages(prev => [...prev, {
      id: Date.now(),
      role: 'bot',
      text: `Your message has been queued to send to Piyali! She'll get back to you at ${emailForm.email} soon. 💌`,
    }]);
    setEmailForm({ name: '', email: '', msg: '' });
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-card"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ border: '1px solid var(--border-glow)' }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 18px',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Sparkles size={14} color="#fff" />
              </div>
              <div>
                <p style={{ color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                  Ask Me Anything
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.7rem' }}>
                  Piyali's AI Assistant
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none', borderRadius: '50%',
                  width: 28, height: 28,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', cursor: 'none',
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages" style={{ background: 'var(--bg-secondary)' }}>
              {messages.map(msg => (
                <div key={msg.id} className={`chat-msg ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-msg bot" style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '10px 14px' }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--accent)',
                      animation: `blink 1s ${i * 0.2}s ease infinite`,
                    }} />
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick prompts */}
            <div style={{
              padding: '8px 12px',
              background: 'var(--bg-secondary)',
              display: 'flex', gap: 6, flexWrap: 'wrap',
              borderTop: '1px solid var(--border)',
            }}>
              {QUICK_PROMPTS.map(p => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  style={{
                    padding: '4px 10px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    borderRadius: 50,
                    color: 'var(--text-secondary)',
                    fontSize: '0.72rem',
                    cursor: 'none',
                    fontFamily: 'DM Sans, sans-serif',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Email form mode */}
            <AnimatePresence>
              {emailMode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    padding: '12px 14px',
                    background: 'var(--bg-card)',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <form onSubmit={handleEmailSubmit}>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your name"
                      value={emailForm.name}
                      onChange={e => setEmailForm(p => ({ ...p, name: e.target.value }))}
                      style={{ marginBottom: 8, fontSize: '0.82rem', padding: '8px 12px' }}
                      required
                    />
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Your email"
                      value={emailForm.email}
                      onChange={e => setEmailForm(p => ({ ...p, email: e.target.value }))}
                      style={{ marginBottom: 8, fontSize: '0.82rem', padding: '8px 12px' }}
                      required
                    />
                    <textarea
                      className="form-textarea"
                      placeholder="Your message..."
                      value={emailForm.msg}
                      onChange={e => setEmailForm(p => ({ ...p, msg: e.target.value }))}
                      rows={3}
                      style={{ marginBottom: 8, fontSize: '0.82rem', padding: '8px 12px' }}
                      required
                    />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button type="submit" className="btn-primary" style={{ flex: 1, padding: '8px', fontSize: '0.82rem', justifyContent: 'center' }}>
                        <span>Send Email</span>
                      </button>
                      <button type="button" onClick={() => setEmailMode(false)} style={{
                        padding: '8px 12px', background: 'var(--bg-glass)',
                        border: '1px solid var(--border)', borderRadius: 50,
                        color: 'var(--text-secondary)', cursor: 'none', fontSize: '0.78rem',
                      }}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div style={{
              padding: '10px 12px',
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border)',
              display: 'flex', gap: 8, alignItems: 'center',
            }}>
              <button
                onClick={() => setEmailMode(!emailMode)}
                title="Send email to Piyali"
                style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: emailMode ? 'var(--accent)' : 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: emailMode ? '#fff' : 'var(--accent)',
                  cursor: 'none', flexShrink: 0,
                  transition: 'all 0.2s',
                }}
              >
                <Mail size={14} />
              </button>

              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1, background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  borderRadius: 20, padding: '8px 14px',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem', outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: input.trim() ? 'var(--accent)' : 'var(--bg-glass)',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', cursor: 'none',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 54, height: 54,
          borderRadius: '50%',
          background: isOpen
            ? 'var(--bg-secondary)'
            : 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          border: '1px solid var(--border-glow)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'none',
          boxShadow: '0 8px 30px var(--glow)',
          position: 'relative',
        }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ping badge */}
        {!isOpen && (
          <div style={{
            position: 'absolute', top: -2, right: -2,
            width: 14, height: 14, borderRadius: '50%',
            background: '#22c55e',
            border: '2px solid var(--bg-primary)',
            animation: 'blink 2s ease infinite',
          }} />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;