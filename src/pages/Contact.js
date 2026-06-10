import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitFork, Link2, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
          to_email: personalInfo.email,
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-1) 0%, transparent 70%)',
        top: '10%', right: '-10%', pointerEvents: 'none',
        animation: 'nebula-drift 13s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-2) 0%, transparent 70%)',
        bottom: '0%', left: '-5%', pointerEvents: 'none',
        animation: 'nebula-drift 18s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeIn(0)} style={{ marginBottom: 60 }}>
          <div className="section-tag">
            <Mail size={12} /> Contact
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have a project idea, a job opportunity, or just want to say hi — I'm always up for a good conversation.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 48,
        }}
          className="contact-grid"
        >
          <div>
            <motion.div {...fadeIn(0.1)} style={{
              padding: '28px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              backdropFilter: 'blur(20px)',
              marginBottom: 20,
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.1rem', color: 'var(--text-primary)',
                marginBottom: 20,
              }}>
                Get In Touch
              </h3>

              {[
                { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <GitFork size={16} />, label: 'GitHub', value: 'github.com/piyali2608', href: personalInfo.github },
                { icon: <Link2 size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/piyali-barman', href: personalInfo.linkedin },
                { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.68rem', color: 'var(--text-muted)',
                      letterSpacing: '0.08em', marginBottom: 2,
                    }}>{label.toUpperCase()}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontSize: '0.88rem', color: 'var(--text-primary)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeIn(0.2)} style={{
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(6,182,212,0.08) 100%)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: 16,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                  animation: 'blink 1.5s ease infinite',
                }} />
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.9rem', fontWeight: 600,
                  color: '#22c55e',
                }}>Available Now</span>
              </div>
              <p style={{
                fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6,
              }}>
                Open to full-time roles, internships, and freelance collaborations.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeIn(0.2)} style={{
            padding: '36px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            backdropFilter: 'blur(20px)',
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1.2rem', color: 'var(--text-primary)',
              marginBottom: 6,
            }}>
              Send Me a Message
            </h3>
            <p style={{
              fontSize: '0.85rem', color: 'var(--text-muted)',
              marginBottom: 28,
            }}>
              Your message goes directly to my email inbox.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Piyali Barman"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's collaborate on..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '12px 16px',
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 10, marginBottom: 16,
                    color: '#22c55e', fontSize: '0.88rem',
                  }}
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon. 🚀
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '12px 16px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 10, marginBottom: 16,
                    color: '#ef4444', fontSize: '0.88rem',
                  }}
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try emailing directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;