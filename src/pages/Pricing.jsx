import { Check, Users, Award, GlassWater } from 'lucide-react';

function Pricing({ onOpenBooking }) {
  const individualPackages = [
    {
      name: 'Rookie Run',
      price: '799',
      duration: '10 Mins (1 Race)',
      desc: 'Perfect for beginners looking to learn the track layout and get a taste of electric speed.',
      features: [
        '10-Minute Track Session',
        'Standard Safety Briefing',
        'Basic Driver Gear Rental',
        'Live Telemetry Lap Report',
      ],
      popular: false,
      accent: 'hsl(var(--border))'
    },
    {
      name: 'APEX Triple Attack',
      price: '1,999',
      duration: '30 Mins (3 Races)',
      desc: 'Our most popular deal. Three full races to master the racing line and shave seconds off your lap.',
      features: [
        '3x 10-Minute Track Sessions',
        'Pro Racer Briefing & Tips',
        'Premium Helmet & Balaclava',
        'Digital Telemetry Comparison',
        '₹398 Saving on individual races',
      ],
      popular: true,
      accent: 'hsl(var(--primary))'
    },
    {
      name: 'Pro-Enduro Grid',
      price: '2,999',
      duration: '45 Mins (5 Races)',
      desc: 'The ultimate test of stamina. Full custom endurance session on track to secure your status.',
      features: [
        '5x 10-Minute Track Sessions',
        'Custom Seat & Balaclava Included',
        'Interactive Lap Performance Coach',
        'Apex Club Reward Points',
        'Priority Track Scheduling',
      ],
      popular: false,
      accent: 'hsl(var(--secondary))'
    }
  ];

  const eventPackages = [
    {
      icon: <Users size={28} style={{ color: 'hsl(var(--primary))' }} />,
      name: 'Corporate Outing',
      price: '₹2,499 / driver',
      details: 'Min. 10 Drivers',
      desc: 'Build team cohesion through competitive racing. Includes an exclusive mini-tournament structure.',
      features: ['Exclusive Track Rental', 'Practice, Qualifying & Final Grid', 'Podium Trophy Ceremony', 'Dedicated Event Marshall']
    },
    {
      icon: <Award size={28} style={{ color: 'hsl(var(--primary))' }} />,
      name: 'Championship Grand Prix',
      price: '₹3,499 / driver',
      details: 'Min. 8 Drivers',
      desc: 'The ultimate tournament structure for competitive groups. Full qualifying slots and final race grid.',
      features: ['20-minute Qualifying Session', '30-lap Feature Race', 'Custom Trophies for Top 3', 'Live Stream Telemetry Broadcast']
    },
    {
      icon: <GlassWater size={28} style={{ color: 'hsl(var(--primary))' }} />,
      name: 'Birthday Racing Bash',
      price: '₹14,999 total',
      details: 'Up to 10 Drivers',
      desc: 'Celebrate your birthday in the fast lane. Includes kart bookings and a dedicated party zone.',
      features: ['Junior/Adult Kart Mix', 'Dedicated Party Lounge (2 hours)', 'Custom Racing Cake', 'Driver Medals for All Guests']
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in container">
      
      {/* Title */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="badge badge-primary" style={{ marginBottom: '12px' }}>RACING DEALS</div>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
          Packages & <span style={{ color: 'hsl(var(--primary))' }}>Pricing</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Whether you are dropping in for a single race or organizing a corporate tournament, we have flexible racing packages for all group sizes.
        </p>
      </section>

      {/* Individual Packages */}
      <section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {individualPackages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`card ${pkg.popular ? 'popular-glow' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderColor: pkg.popular ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                transform: pkg.popular ? 'scale(1.02)' : 'none',
                position: 'relative'
              }}
            >
              {pkg.popular && (
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--text-dark))',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-title)'
                }}>
                  BEST VALUE
                </span>
              )}
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-title)', fontSize: '0.9rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>
                  {pkg.duration}
                </p>
                <h3 style={{ fontSize: '1.75rem', marginTop: '8px', marginBottom: '16px' }}>{pkg.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>₹{pkg.price}</span>
                  <span style={{ fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>/ driver</span>
                </div>
                <p style={{ fontSize: '0.85rem', marginTop: '16px', minHeight: '48px' }}>{pkg.desc}</p>
              </div>

              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem' }}>
                    <Check size={16} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onOpenBooking} 
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ marginTop: 'auto', width: '100%' }}
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Events / Groups section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
            Group & <span style={{ color: 'hsl(var(--primary))' }}>Event Packages</span>
          </h2>
          <p>
            Planning a team day, birthday party, or a custom racing tournament? We offer exclusive track rentals and custom tournament coordination.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {eventPackages.map((pkg, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                  {pkg.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>{pkg.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>{pkg.details}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', marginBottom: '20px', minHeight: '36px' }}>{pkg.desc}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '0.85rem' }}>
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={14} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid hsl(var(--border))'
              }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Est. Cost</p>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'hsl(var(--text-main))' }}>{pkg.price}</p>
                </div>
                <button onClick={onOpenBooking} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .popular-glow {
          box-shadow: 0 0 20px hsl(var(--primary) / 0.15) !important;
        }
      `}</style>
    </div>
  );
}

export default Pricing;
