import { ArrowRight, Zap, Trophy, Shield, Calendar } from 'lucide-react';
import heroKart from '../assets/hero_kart.png';

function Home({ onOpenBooking }) {
  const telemetry = [
    { label: 'TRACK LENGTH', value: '1.2 KM', detail: 'Speed straights & technical turns' },
    { label: 'TOP SPEED', value: '90 KM/H', detail: 'Electric instant torque karts' },
    { label: 'TECHNICAL CORNERS', value: '15', detail: 'Hairpins, chicanes & apexes' },
    { label: 'PROPULSION', value: '100% ELEC', detail: 'Zero emissions, maximum power' },
  ];

  const features = [
    { 
      icon: <Zap size={32} style={{ color: 'hsl(var(--primary))' }} />, 
      title: 'Instant Torque', 
      desc: 'Our electric racing fleet delivers full torque immediately out of corners, outperforming traditional gas karts.' 
    },
    { 
      icon: <Trophy size={32} style={{ color: 'hsl(var(--primary))' }} />, 
      title: 'Championship Track', 
      desc: 'Professionally designed 1.2km track layout in Anandapuram with professional FIA-grade safety barriers.' 
    },
    { 
      icon: <Shield size={32} style={{ color: 'hsl(var(--primary))' }} />, 
      title: 'Pro-Safety Gear', 
      desc: 'Equipped with heavy-duty safety roll bars, 4-point harness systems, and real-time remote speed controllers.' 
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in">
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0',
        overflow: 'hidden'
      }} className="race-grid-bg">
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Hero Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="badge badge-primary" style={{ alignSelf: 'flex-start' }}>
              ⚡ Visakhapatnam's #1 Racing Zone
            </div>
            <h1 style={{ textTransform: 'uppercase' }}>
              Feel The <span style={{ color: 'hsl(var(--primary))' }}>Instant Rush</span> of Electric Speed
            </h1>
            <p style={{ fontSize: '1.15rem' }}>
              Unleash your inner racer on the most technical go-karting track in Anandapuram. No gearboxes, no lag—just pure electric performance and high-speed cornering.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-primary">
                Book My Session <ArrowRight size={18} />
              </button>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>
          </div>

          {/* Hero Right (Go-kart Image with glow backing) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: -1
            }} />
            <img 
              src={heroKart} 
              alt="High performance go-kart" 
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                border: '1px solid hsl(var(--border))'
              }}
            />
          </div>
        </div>
      </section>

      {/* Telemetry Dashboard */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {telemetry.map((t, idx) => (
            <div key={idx} className="card" style={{
              background: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, rgba(25, 28, 34, 0.4) 100%)',
              textAlign: 'center',
              padding: '24px'
            }}>
              <p style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', color: 'hsl(var(--text-muted))' }}>
                {t.label}
              </p>
              <h3 style={{ fontSize: '2.5rem', color: 'hsl(var(--primary))', margin: '8px 0' }}>
                {t.value}
              </h3>
              <p style={{ fontSize: '0.8rem' }}>
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="container" style={{ padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
            Built For <span style={{ color: 'hsl(var(--primary))' }}>Pure Performance</span>
          </h2>
          <p>
            At APEX Anandapuram, we use top-tier electric karts and professional track engineering to provide an unmatched adrenaline experience.
          </p>
        </div>

        <div className="grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="card">
              <div style={{ marginBottom: '20px' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', textTransform: 'uppercase' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.9rem' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Hero Callout */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200") center/cover no-repeat',
        padding: '100px 24px',
        textAlign: 'center'
      }} className="race-grid-bg">
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '24px' }}>
            Ready to Conquer the <span style={{ color: 'hsl(var(--primary))' }}>Leaderboard</span>?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: 'hsl(var(--text-main))' }}>
            Rent a session, master the racing line, and set the fastest lap of the week. Compare your times live at our Anandapuram telemetry deck.
          </p>
          <button onClick={onOpenBooking} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            <Calendar size={18} /> Book Your Session Now
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .badge {
            align-self: center !important;
          }
          div[style*="justifyContent: 'center'"] {
            margin-top: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
