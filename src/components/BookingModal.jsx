import { useState } from 'react';
import { X, Calendar, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [bookingRef, setBookingRef] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    packageType: 'arrive-drive',
    drivers: 1,
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const packages = [
    { id: 'arrive-drive', name: 'Arrive & Drive (1 Race)', price: 799, duration: '10 mins' },
    { id: 'super-three', name: 'Triple Attack (3 Races)', price: 1999, duration: '30 mins' },
    { id: 'grand-prix', name: 'Anandapuram GP (Mini Tournament)', price: 2499, duration: '60 mins' },
    { id: 'birthday', name: 'Junior Racing Party (Min 6 drivers)', price: 1499, duration: '120 mins' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const getSelectedPackage = () => {
    return packages.find(p => p.id === formData.packageType) || packages[0];
  };

  const calculateTotal = () => {
    const pkg = getSelectedPackage();
    return pkg.price * formData.drivers;
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) newErrors.phone = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setStep(4); // Show success screen
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '16px'
    }} onClick={onClose}>
      
      <div className="card glass-panel" style={{
        width: '100%',
        maxWidth: '550px',
        padding: '32px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          borderBottom: '1px solid hsl(var(--border))',
          paddingBottom: '16px'
        }}>
          <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>
            Book <span style={{ color: 'hsl(var(--primary))' }}>Your Session</span>
          </h2>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer'
          }} className="close-btn-hover">
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{
                flex: 1,
                height: '4px',
                background: s <= step ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                borderRadius: '2px',
                transition: 'var(--transition-normal)'
              }} />
            ))}
          </div>
        )}

        {/* Form Body */}
        {step === 4 ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <CheckCircle2 size={64} style={{ color: 'hsl(var(--primary))' }} />
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', textTransform: 'uppercase' }}>Booking Confirmed!</h3>
              <p style={{ fontSize: '0.95rem' }}>We have reserved a slot for <strong>{formData.name}</strong> on {formData.date} at {formData.time} PM.</p>
            </div>
            <div className="glass-panel" style={{ padding: '16px 24px', borderRadius: '8px', fontSize: '0.85rem', width: '100%', textAlign: 'left' }}>
              <p style={{ marginBottom: '6px' }}><strong>Booking Reference:</strong> {bookingRef}</p>
              <p>A confirmation email with safety guidelines has been sent to <strong>{formData.email}</strong>.</p>
            </div>
            <button type="button" onClick={onClose} className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>
              Finish & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* STEP 1: Date, Time, Package */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Select Package</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {packages.map((pkg) => (
                      <label 
                        key={pkg.id} 
                        className={`package-option ${formData.packageType === pkg.id ? 'active' : ''}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '14px 20px',
                          borderRadius: '8px',
                          border: '1px solid',
                          borderColor: formData.packageType === pkg.id ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                          background: formData.packageType === pkg.id ? 'hsl(var(--primary) / 0.05)' : 'hsl(var(--bg-main))',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        <input 
                          type="radio" 
                          name="packageType" 
                          value={pkg.id} 
                          checked={formData.packageType === pkg.id}
                          onChange={handleInputChange}
                          style={{ display: 'none' }}
                        />
                        <div>
                          <p style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>{pkg.name}</p>
                          <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>Duration: {pkg.duration}</p>
                        </div>
                        <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>₹{pkg.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="date"><Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Date</label>
                    <input 
                      type="date" 
                      id="date"
                      name="date" 
                      className="form-input" 
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                    {errors.date && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}><AlertCircle size={12} /> {errors.date}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="time"><Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Time Slot</label>
                    <select 
                      id="time"
                      name="time" 
                      className="form-input"
                      value={formData.time}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Slot</option>
                      <option value="11:30">11:30 AM (Weekend Only)</option>
                      <option value="13:00">1:00 PM (Weekend Only)</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    {errors.time && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}><AlertCircle size={12} /> {errors.time}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="drivers">Number of Drivers</label>
                  <input 
                    type="number" 
                    id="drivers"
                    name="drivers" 
                    className="form-input" 
                    min="1" 
                    max="12" 
                    value={formData.drivers}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Driver Details */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
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

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="9876543210"
                    className="form-input" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <p style={{ color: 'hsl(var(--secondary))', fontSize: '0.8rem' }}>{errors.phone}</p>}
                </div>
              </div>
            )}

            {/* STEP 3: Booking Summary */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="glass-panel" style={{ padding: '24px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', textTransform: 'uppercase' }}>Summary</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'hsl(var(--text-muted))' }}>Package:</span>
                      <span style={{ fontWeight: 600 }}>{getSelectedPackage().name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'hsl(var(--text-muted))' }}>Date & Time:</span>
                      <span style={{ fontWeight: 600 }}>{formData.date} at {formData.time} PM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'hsl(var(--text-muted))' }}>Drivers:</span>
                      <span style={{ fontWeight: 600 }}>{formData.drivers}x</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'hsl(var(--text-muted))' }}>Per Driver:</span>
                      <span style={{ fontWeight: 600 }}>₹{getSelectedPackage().price}</span>
                    </div>
                    <div style={{ height: '1px', background: 'hsl(var(--border))', margin: '8px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700 }}>
                      <span>Total Cost:</span>
                      <span style={{ color: 'hsl(var(--primary))' }}>₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation/Submit */}
            <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
              {step > 1 && (
                <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flex: 1 }}>Back</button>
              )}
              {step < 3 ? (
                <button type="button" onClick={handleNext} className="btn btn-primary" style={{ flex: 1 }}>Next</button>
              ) : (
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
              )}
            </div>
          </form>
        )}
      </div>

      <style>{`
        .close-btn-hover:hover {
          color: hsl(var(--text-main)) !important;
        }
        .package-option:hover {
          border-color: hsl(var(--primary)) !important;
          background: hsl(var(--primary) / 0.02) !important;
        }
        .package-option.active {
          box-shadow: 0 0 12px hsl(var(--primary) / 0.1);
        }
      `}</style>
    </div>
  );
}

export default BookingModal;
