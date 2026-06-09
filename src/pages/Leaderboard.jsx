import { useState } from 'react';
import { Trophy, Clock, Medal, Flame } from 'lucide-react';

function Leaderboard() {
  const [activeTab, setActiveTab] = useState('weekly');

  const recordHolder = {
    name: 'Vikram R.',
    time: '48.242s',
    date: '24 May 2026',
    kart: 'APEX STORM E-1',
    avgSpeed: '89.6 km/h',
  };

  const lapTimes = {
    weekly: [
      { rank: 1, name: 'Sanjay Kumar', time: '49.124s', speed: '88.0 km/h', kart: 'APEX STORM E-1' },
      { rank: 2, name: 'Anjali Sharma', time: '49.882s', speed: '86.7 km/h', kart: 'APEX STORM E-1' },
      { rank: 3, name: 'Prashanth V.', time: '50.045s', speed: '86.4 km/h', kart: 'APEX STORM E-1' },
      { rank: 4, name: 'Rahul Dev', time: '50.312s', speed: '85.9 km/h', kart: 'APEX STORM E-1' },
      { rank: 5, name: 'Karthik S.', time: '51.109s', speed: '84.5 km/h', kart: 'APEX JUNIOR B-1' },
      { rank: 6, name: 'Megha Rao', time: '51.450s', speed: '84.0 km/h', kart: 'APEX STORM E-1' },
      { rank: 7, name: 'Naveen B.', time: '52.012s', speed: '83.1 km/h', kart: 'APEX DUO T-2' }
    ],
    monthly: [
      { rank: 1, name: 'Vikram R.', time: '48.310s', speed: '89.5 km/h', kart: 'APEX STORM E-1' },
      { rank: 2, name: 'Sanjay Kumar', time: '49.124s', speed: '88.0 km/h', kart: 'APEX STORM E-1' },
      { rank: 3, name: 'Neha Chawla', time: '49.402s', speed: '87.5 km/h', kart: 'APEX STORM E-1' },
      { rank: 4, name: 'Anjali Sharma', time: '49.882s', speed: '86.7 km/h', kart: 'APEX STORM E-1' },
      { rank: 5, name: 'Prashanth V.', time: '50.045s', speed: '86.4 km/h', kart: 'APEX STORM E-1' }
    ],
    alltime: [
      { rank: 1, name: 'Vikram R.', time: '48.242s', speed: '89.6 km/h', kart: 'APEX STORM E-1' },
      { rank: 2, name: 'Arjun Sen', time: '48.455s', speed: '89.2 km/h', kart: 'APEX STORM E-1' },
      { rank: 3, name: 'Sanjay Kumar', time: '49.124s', speed: '88.0 km/h', kart: 'APEX STORM E-1' },
      { rank: 4, name: 'Neha Chawla', time: '49.402s', speed: '87.5 km/h', kart: 'APEX STORM E-1' },
      { rank: 5, name: 'Varun Reddy', time: '49.712s', speed: '87.0 km/h', kart: 'APEX STORM E-1' }
    ]
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }} className="animate-fade-in container">
      
      {/* Title */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="badge badge-primary" style={{ marginBottom: '12px' }}>FASTEST LAPS</div>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>
          APEX <span style={{ color: 'hsl(var(--primary))' }}>Leaderboard</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Analyze telemetry reports, review the racing line, and see who holds the record at the Anandapuram circuit.
        </p>
      </section>

      {/* Record Holder Banner */}
      <section className="card" style={{
        background: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, rgba(204, 255, 0, 0.03) 100%)',
        borderColor: 'hsl(var(--primary) / 0.3)',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Flame size={20} style={{ color: 'hsl(var(--primary))' }} />
            <span style={{ fontFamily: 'var(--font-title)', fontWeight: 600, fontSize: '0.9rem', color: 'hsl(var(--primary))', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Current Track Record
            </span>
          </div>
          <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase' }}>{recordHolder.name}</h2>
          <p style={{ fontSize: '0.95rem' }}>
            Set a blistering lap of <strong style={{ color: 'hsl(var(--text-main))' }}>{recordHolder.time}</strong> using the {recordHolder.kart} with perfect racing line efficiency.
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>
            <div>
              <p>Average Speed</p>
              <p style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>{recordHolder.avgSpeed}</p>
            </div>
            <div>
              <p>Date Logged</p>
              <p style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>{recordHolder.date}</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            background: 'hsl(var(--primary) / 0.05)',
            border: '2px solid hsl(var(--primary))',
            borderRadius: '50%',
            width: '140px',
            height: '140px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px hsl(var(--primary) / 0.2)'
          }}>
            <Trophy size={40} style={{ color: 'hsl(var(--primary))', marginBottom: '8px' }} />
            <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.4rem' }}>{recordHolder.time}</span>
          </div>
        </div>
      </section>

      {/* Leaderboard Table Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Tab Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          borderBottom: '1px solid hsl(var(--border))',
          paddingBottom: '16px'
        }}>
          {['weekly', 'monthly', 'alltime'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="btn"
              style={{
                background: activeTab === tab ? 'hsl(var(--primary))' : 'transparent',
                color: activeTab === tab ? 'hsl(var(--text-dark))' : 'hsl(var(--text-muted))',
                border: activeTab === tab ? 'none' : '1px solid hsl(var(--border))',
                padding: '8px 24px',
                fontSize: '0.9rem',
                borderRadius: '6px'
              }}
            >
              {tab === 'weekly' ? 'Weekly' : tab === 'monthly' ? 'Monthly' : 'All-Time'}
            </button>
          ))}
        </div>

        {/* Table layout */}
        <div className="card" style={{ padding: '12px 24px', overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '0.95rem'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid hsl(var(--border))', color: 'hsl(var(--text-muted))' }}>
                <th style={{ padding: '16px 8px' }}>Rank</th>
                <th style={{ padding: '16px 8px' }}>Racer</th>
                <th style={{ padding: '16px 8px' }}>Lap Time</th>
                <th style={{ padding: '16px 8px' }}>Avg Speed</th>
                <th style={{ padding: '16px 8px' }}>Kart Type</th>
              </tr>
            </thead>
            <tbody>
              {lapTimes[activeTab].map((row, index) => (
                <tr key={index} style={{ 
                  borderBottom: index < lapTimes[activeTab].length - 1 ? '1px solid hsl(var(--border) / 0.5)' : 'none',
                  background: index === 0 ? 'hsl(var(--primary) / 0.02)' : 'none'
                }}>
                  <td style={{ padding: '16px 8px', fontWeight: 700 }}>
                    {row.rank <= 3 ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Medal size={16} style={{ 
                          color: row.rank === 1 ? 'gold' : row.rank === 2 ? 'silver' : '#cd7f32' 
                        }} />
                        {row.rank}
                      </span>
                    ) : (
                      row.rank
                    )}
                  </td>
                  <td style={{ padding: '16px 8px', fontWeight: 600, color: 'hsl(var(--text-main))' }}>{row.name}</td>
                  <td style={{ padding: '16px 8px', fontFamily: 'var(--font-title)', fontWeight: 700, color: 'hsl(var(--primary))' }}>
                    <Clock size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    {row.time}
                  </td>
                  <td style={{ padding: '16px 8px' }}>{row.speed}</td>
                  <td style={{ padding: '16px 8px', fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>{row.kart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          th, td {
            font-size: 0.85rem !important;
            padding: 12px 6px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Leaderboard;
