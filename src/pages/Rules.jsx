import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function Rules() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const requirements = [
    { label: 'Minimum Age', value: '9 Years Old', detail: 'Must be accompanied by a guardian if under 18.' },
    { label: 'Minimum Height', value: '4\'2" (127 cm)', detail: 'Necessary to safely reach throttle and brake pedals.' },
    { label: 'Required Attire', value: 'Closed-Toe Shoes', detail: 'No sandals, high heels, or loose clothing allowed.' },
    { label: 'Zero Tolerance', value: 'Sober Driving Only', detail: 'Strict breathalyzer testing at the gate.' }
  ];

  const flags = [
    { color: '#22c55e', name: 'Green Flag', desc: 'Track is clear. Start racing and accelerate to full speed.' },
    { color: '#eab308', name: 'Yellow Flag', desc: 'Hazard on track. Slow down, hold your position, and no overtaking.' },
    { color: '#ef4444', name: 'Red Flag', desc: 'Emergency. Stop your kart immediately where you are on the circuit.' },
    { color: '#000000', name: 'Black Flag', desc: 'Disqualification. Pull into the pit lane immediately due to unsafe driving.' },
    { color: '#ffffff', name: 'Checkered Flag', desc: 'Race finished. Complete your current lap and return to the pits.' }
  ];

  const faqs = [
    {
      q: 'Do I need a driver license to race?',
      a: 'No, you do not need a driver license! Our marshals will give you a comprehensive safety briefing and explain how the controls work before you get into the kart.'
    },
    {
      q: 'What happens if it rains?',
      a: 'We operate in light drizzle, but in the case of heavy rains or lightning, the track will be closed for safety. If your session is canceled due to weather, we will issue a full refund or reschedule your slot.'
    },
    {
      q: 'Can I bring my own helmet?',
      a: 'Yes, absolutely! You can bring your own helmet as long as it is full-face and certified (DOT/ECE). We also provide sanitized helmets and fresh balaclavas for rent at no extra cost.'
    },
    {
      q: 'What is the policy on bumping or crashing?',
      a: 'Go-karting is a non-contact sport. Intentional bumping, blocking, or reckless driving is strictly prohibited. Violations will result in a speed override penalty or disqualification (black flag) without refund.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in container">
      
      {/* Title */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="badge badge-primary" style={{ marginBottom: '12px' }}>SAFETY BRIEF</div>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
          Rules & <span style={{ color: 'hsl(var(--primary))' }}>Safety Guidelines</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Please review our safety guidelines and racing rules carefully to ensure a fun, safe, and competitive experience for everyone.
        </p>
      </section>

      {/* Driver Requirements Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {requirements.map((req, idx) => (
          <div key={idx} className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', marginBottom: '8px' }}>
              {req.label}
            </h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--primary))', marginBottom: '12px' }}>
              {req.value}
            </p>
            <p style={{ fontSize: '0.85rem' }}>{req.detail}</p>
          </div>
        ))}
      </section>

      {/* Flag Signals Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
            Racing <span style={{ color: 'hsl(var(--primary))' }}>Flag Signals</span>
          </h2>
          <p>
            Our track marshals use flags to communicate with you while you are racing. Familiarize yourself with their meanings before entering the track.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px'
        }}>
          {flags.map((flag, idx) => (
            <div key={idx} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '24px'
            }}>
              {/* Flag Icon Drawing */}
              <div style={{
                width: '60px',
                height: '40px',
                background: flag.color === '#ffffff' ? 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 10px 10px' : flag.color,
                border: flag.color === '#ffffff' ? '1px solid hsl(var(--border))' : 'none',
                borderRadius: '4px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                marginBottom: '16px'
              }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', textTransform: 'uppercase' }}>{flag.name}</h3>
              <p style={{ fontSize: '0.8rem' }}>{flag.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Accordion */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
            Frequently Asked <span style={{ color: 'hsl(var(--primary))' }}>Questions</span>
          </h2>
          <p>
            Have questions about booking, safety gear, or rules? Find quick answers below.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="card"
                onClick={() => toggleFaq(idx)}
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                  background: isOpen ? 'hsl(var(--primary) / 0.02)' : 'hsl(var(--bg-card))'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{faq.q}</h3>
                  {isOpen ? <Minus size={18} style={{ color: 'hsl(var(--primary))' }} /> : <Plus size={18} />}
                </div>
                {isOpen && (
                  <p style={{
                    marginTop: '16px',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    animation: 'fadeInUp 0.3s forwards',
                    color: 'hsl(var(--text-main))'
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default Rules;
