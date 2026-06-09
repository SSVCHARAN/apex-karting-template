import { useState } from 'react';
import { Phone, MapPin, CheckCircle, Send, Clock } from 'lucide-react';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in container">
      
      {/* Title */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="badge badge-primary" style={{ marginBottom: '12px' }}>GET IN TOUCH</div>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
          Contact <span style={{ color: 'hsl(var(--primary))' }}>APEX Racing</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Have a question about group events, private track rental, or bookings? Send us a message or visit our Anandapuram venue.
        </p>
      </section>

      {/* Main Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Left Side: Contact Form */}
        <div className="card">
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <CheckCircle size={60} style={{ color: 'hsl(var(--primary))' }} />
              <h2 style={{ fontSize: '1.75rem', textTransform: 'uppercase' }}>Message Sent!</h2>
              <p style={{ color: 'hsl(var(--text-muted))' }}>Thank you for reaching out. A racing event coordinator will contact you shortly.</p>
              <button onClick={() => setFormSubmitted(false)} className="btn btn-primary" style={{ marginTop: '16px' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '10px' }}>Send Us a <span style={{ color: 'hsl(var(--primary))' }}>Message</span></h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="John Doe"
                    className="form-input" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}>{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="john@example.com"
                    className="form-input" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}>{errors.email}</p>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  placeholder="Corporate Booking / Private Party"
                  className="form-input" 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5"
                  placeholder="Tell us about your event details, driver count, or general queries..."
                  className="form-input" 
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{ resize: 'vertical' }}
                />
                {errors.message && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}>{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '14px 32px' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Map & Direct info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Stylized Vector Map representation */}
          <div className="card race-grid-bg" style={{ 
            padding: '24px', 
            minHeight: '260px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Custom Location SVG */}
            <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto' }}>
              {/* Grid Lines */}
              <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 100 0 L 100 200 M 200 0 L 200 200 M 300 0 L 300 200" stroke="hsl(var(--border) / 0.3)" strokeWidth="1" strokeDasharray="4" />
              {/* Anandapuram Highway Route */}
              <path d="M -10 120 C 100 120, 200 110, 410 130" fill="none" stroke="hsl(var(--border))" strokeWidth="16" />
              <path d="M -10 120 C 100 120, 200 110, 410 130" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 6" />
              <text x="260" y="160" fill="hsl(var(--text-muted))" fontSize="11" fontWeight="bold" transform="rotate(2, 260, 160)">ANANDAPURAM HIGHWAY</text>
              
              {/* Track site outline */}
              <rect x="120" y="20" width="160" height="70" rx="8" fill="hsl(var(--bg-main))" stroke="hsl(var(--border))" strokeWidth="2" />
              <circle cx="200" cy="55" r="30" fill="none" stroke="hsl(var(--primary) / 0.15)" strokeWidth="12" />
              <circle cx="200" cy="55" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" />
              
              {/* Pin */}
              <g transform="translate(200, 45)">
                <path d="M 0 0 C -10 -10, -10 -25, 0 -25 C 10 -25, 10 -10, 0 0 Z" fill="hsl(var(--secondary))" />
                <circle cx="0" cy="-15" r="4" fill="hsl(var(--text-main))" />
                <text x="0" y="-32" fill="hsl(var(--text-main))" fontSize="9" fontWeight="bold" textAnchor="middle">APEX TRACK</text>
              </g>
            </svg>
          </div>

          {/* Quick Stats list */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'hsl(var(--primary) / 0.08)', padding: '10px', borderRadius: '8px', color: 'hsl(var(--primary))' }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '4px', fontSize: '0.95rem' }}>Track Address</h4>
                <p style={{ fontSize: '0.85rem' }}>Survey No. 42, Anandapuram Highway, Visakhapatnam, Andhra Pradesh, 530052</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'hsl(var(--primary) / 0.08)', padding: '10px', borderRadius: '8px', color: 'hsl(var(--primary))' }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '4px', fontSize: '0.95rem' }}>Operating Hours</h4>
                <p style={{ fontSize: '0.85rem' }}>Mon - Fri: 2:00 PM - 10:00 PM</p>
                <p style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>Sat - Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'hsl(var(--primary) / 0.08)', padding: '10px', borderRadius: '8px', color: 'hsl(var(--primary))' }}>
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '4px', fontSize: '0.95rem' }}>Call / WhatsApp</h4>
                <p style={{ fontSize: '0.85rem' }}>Direct Line: +91 98765 43210</p>
                <p style={{ fontSize: '0.85rem' }}>Group Booking Desk: +91 98765 43211</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
