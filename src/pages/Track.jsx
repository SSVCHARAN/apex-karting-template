import { useState } from 'react';
import { ShieldAlert, Compass } from 'lucide-react';

function Track() {
  const [selectedTurn, setSelectedTurn] = useState(null);

  const turns = [
    { id: 1, name: 'Anandapuram Launch', type: 'Straightaway', speed: '90 km/h', desc: 'The longest straight on the circuit. Floor the pedal to hit the maximum speed and set up your overtake.' },
    { id: 2, name: 'Zexa Chicane', type: 'S-Curve', speed: '45 km/h', desc: 'A quick left-right sequence requiring precise weight shifting. Clip the kerbs nicely to preserve exit speed.' },
    { id: 3, name: 'Hairpin 180', type: 'Hairpin Turn', speed: '20 km/h', desc: 'The tightest turn on the track. Brake early, hit the apex late, and accelerate hard out.' },
    { id: 4, name: 'Carousel Curve', type: 'Sweeper', speed: '60 km/h', desc: 'A long, sweeping double-apex curve. Hold the line and brace against the lateral G-forces.' },
    { id: 5, name: 'Final Drift', type: '90° Corner', speed: '35 km/h', desc: 'The final turn leading back onto the grid. A perfect exit here is critical for a fast lap.' },
  ];

  const fleet = [
    {
      name: 'ZEXA STORM E-1',
      type: 'Adult Pro Kart',
      speed: '90 km/h',
      motor: '20kW AC Brushless',
      weight: '115 kg',
      requirements: 'Height: 4\'10"+ | Age: 16+',
      desc: 'Our flagship racing machine. Features instant torque, an adjustable racing seat, and variable speed settings managed via track control.',
      color: 'hsl(var(--primary))'
    },
    {
      name: 'ZEXA JUNIOR B-1',
      type: 'Junior Racing Kart',
      speed: '45 km/h',
      motor: '8kW Brushless',
      weight: '90 kg',
      requirements: 'Height: 4\'2"+ | Age: 9-15',
      desc: 'Engineered specifically for young racers. Built with full safety bumpers, robust steering limiters, and restricted top speed modes for safety.',
      color: 'hsl(var(--secondary))'
    },
    {
      name: 'ZEXA DUO T-2',
      type: 'Double Passenger Kart',
      speed: '65 km/h',
      motor: '15kW Dual-Motor',
      weight: '135 kg',
      requirements: 'Driver: 18+ | Passenger: 4\'+',
      desc: 'Perfect for families or training. Features dual steering columns (one primary, one secondary) so a pro can guide a beginner around the circuit.',
      color: '#00f5ff'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in container">
      
      {/* Page Title */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="badge badge-primary" style={{ marginBottom: '12px' }}>THE CIRCUIT</div>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
          Explore The <span style={{ color: 'hsl(var(--primary))' }}>Anandapuram Track</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Designed by racing engineers, our 1.2km track features a perfect blend of high-speed straights, hairpins, and chicanes to challenge both novices and pros.
        </p>
      </section>

      {/* Interactive Track Map Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* SVG Track Map Drawing */}
        <div className="card race-grid-bg" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: '40px',
          minHeight: '380px'
        }}>
          <svg viewBox="0 0 600 400" style={{ width: '100%', maxWidth: '500px', height: 'auto' }}>
            {/* Background Track Path Glow */}
            <path 
              d="M 100 250 C 100 100, 250 80, 350 120 C 450 160, 520 80, 520 200 C 520 320, 380 340, 300 280 C 220 220, 180 350, 100 250 Z" 
              fill="none" 
              stroke="hsl(var(--primary) / 0.1)" 
              strokeWidth="32" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Main Track Path */}
            <path 
              d="M 100 250 C 100 100, 250 80, 350 120 C 450 160, 520 80, 520 200 C 520 320, 380 340, 300 280 C 220 220, 180 350, 100 250 Z" 
              fill="none" 
              stroke="hsl(var(--border))" 
              strokeWidth="24" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Race Grid Starting Lines */}
            <path d="M 90 230 L 110 230" stroke="hsl(var(--text-muted))" strokeWidth="2" />
            <path d="M 90 240 L 110 240" stroke="hsl(var(--text-muted))" strokeWidth="2" />
            <path d="M 90 250 L 110 250" stroke="hsl(var(--primary))" strokeWidth="3" />

            {/* Turn Interactive Points */}
            {turns.map((turn, index) => {
              // Approximate coordinates along the curve
              const coords = [
                { x: 100, y: 200 }, // Anandapuram Launch (Left straight)
                { x: 340, y: 120 }, // Zexa Chicane (Top center)
                { x: 520, y: 160 }, // Hairpin 180 (Right loop)
                { x: 300, y: 285 }, // Carousel Curve (Bottom right curve)
                { x: 140, y: 290 }, // Final Drift (Bottom left corner)
              ][index];

              const isSelected = selectedTurn?.id === turn.id;

              return (
                <g 
                  key={turn.id} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedTurn(turn)}
                  onMouseEnter={() => setSelectedTurn(turn)}
                >
                  <circle 
                    cx={coords.x} 
                    cy={coords.y} 
                    r={isSelected ? '14' : '10'} 
                    fill="hsl(var(--bg-main))" 
                    stroke={isSelected ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))'} 
                    strokeWidth="3"
                    style={{ transition: 'all var(--transition-fast)' }}
                  />
                  <text 
                    x={coords.x} 
                    y={coords.y + 4} 
                    fill="hsl(var(--text-main))" 
                    fontSize="10" 
                    fontWeight="bold" 
                    textAnchor="middle"
                  >
                    {turn.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Turn telemetry details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase' }}>
            Track <span style={{ color: 'hsl(var(--primary))' }}>Sector Guide</span>
          </h2>
          <p style={{ fontSize: '0.95rem' }}>
            Hover or click on the track numbers to analyze telemetry recommendations and corner speed targets.
          </p>

          {selectedTurn ? (
            <div className="card" style={{ 
              borderColor: 'hsl(var(--primary))', 
              background: 'hsl(var(--primary) / 0.03)',
              animation: 'fadeInUp 0.3s forwards'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge badge-primary">{selectedTurn.type}</span>
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, color: 'hsl(var(--primary))' }}>Target Speed: {selectedTurn.speed}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', textTransform: 'uppercase' }}>
                {selectedTurn.id}. {selectedTurn.name}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-main))' }}>
                {selectedTurn.desc}
              </p>
            </div>
          ) : (
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', borderStyle: 'dashed' }}>
              <Compass size={32} style={{ color: 'hsl(var(--text-muted))' }} />
              <div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '4px' }}>Select Sector</h4>
                <p style={{ fontSize: '0.85rem' }}>Select any segment on the map to show tactical driver notes.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Fleet Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
            Our <span style={{ color: 'hsl(var(--primary))' }}>Racing Fleet</span>
          </h2>
          <p>
            We supply race-configured electric karts equipped with instant throttle response, adjustable seats, and strict safety systems.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {fleet.map((kart, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span className="badge" style={{ borderColor: kart.color, color: kart.color }}>{kart.type}</span>
                  <h3 style={{ fontSize: '1.35rem', marginTop: '8px', textTransform: 'uppercase' }}>{kart.name}</h3>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', marginBottom: '20px' }}>{kart.desc}</p>
              
              <div style={{
                background: 'hsl(var(--bg-main))',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '0.8rem',
                border: '1px solid hsl(var(--border))',
                marginTop: 'auto'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'hsl(var(--text-muted))' }}>Max Speed:</span>
                  <span style={{ fontWeight: 600 }}>{kart.speed}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'hsl(var(--text-muted))' }}>Power Unit:</span>
                  <span style={{ fontWeight: 600 }}>{kart.motor}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'hsl(var(--text-muted))' }}>Requirements:</span>
                  <span style={{ fontWeight: 600, color: 'hsl(var(--primary))' }}>{kart.requirements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Notice Callout */}
      <section className="card" style={{
        borderColor: 'hsl(var(--secondary) / 0.3)',
        background: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, rgba(255, 62, 62, 0.02) 100%)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '24px',
        alignItems: 'center'
      }}>
        <div style={{
          background: 'hsl(var(--secondary) / 0.1)',
          padding: '16px',
          borderRadius: '12px',
          color: 'hsl(var(--secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ShieldAlert size={36} />
        </div>
        <div>
          <h3 style={{ textTransform: 'uppercase', marginBottom: '8px', color: 'hsl(var(--text-main))' }}>
            Strict Remote Speed Override
          </h3>
          <p style={{ fontSize: '0.9rem' }}>
            Safety is our core priority. Our track marshals are equipped with remote control shut-off units. Karts can be slowed down or stopped instantly in case of an on-track collision, flag infraction, or unsafe driving.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          section[style*="gridTemplateColumns: auto 1fr"] {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Track;
