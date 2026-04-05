import React, { useState } from 'react';
import { Sofa, ShieldCheck, Briefcase, Frame, Phone, Mail, ChevronRight, Zap } from 'lucide-react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Frame size={28} color="var(--color-primary)" />
            <span>SteelCraft</span>
          </div>
          <div className="nav-links">
            <a href="#features">Build Quality</a>
            <a href="#products">Collections</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Request Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="badge">Heavy Duty. Modern Design.</div>
            <h1>Premium Steel Furniture Solutions</h1>
            <p>Engineered for strength. Designed for elegance. Elevate your workspace with industrial-grade steel furniture built for the modern era.</p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">View Collections <ChevronRight size={20} /></a>
              <a href="#contact" className="btn btn-secondary">Contact Sales</a>
            </div>
            <div className="trust-indicators">
              <span><ShieldCheck size={18} color="var(--color-secondary)" /> Lifetime Warranty</span>
              <span><Zap size={18} color="var(--color-secondary)" /> Precision Welded</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-circle"></div>
            <div className="box-mockup glass-panel">
              <Sofa size={140} color="var(--color-primary)" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title text-center">Uncompromising Quality</h2>
          <p className="section-subtitle text-center">We forge functional art that stands the test of time, utilizing high-gauge steel and precision manufacturing.</p>
          
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon"><ShieldCheck size={32} /></div>
              <h3>Industrial Resilience</h3>
              <p>Constructed from cold-rolled steel, ensuring maximum durability and resistance to wear in high-traffic environments.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Briefcase size={32} /></div>
              <h3>Corporate Aesthetics</h3>
              <p>A sleek, minimalist profile that brings a professional, high-end feel to modern offices and studios.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Frame size={32} /></div>
              <h3>Precision Engineering</h3>
              <p>Seamless welds and powder-coated finishes that provide flawless texture and prevent corrosion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section products-section">
         <div className="container">
            <h2 className="section-title text-center">Signature Collections</h2>
            <div className="products-grid">
               <div className="product-card">
                 <div className="product-image mock-img-1">
                    <Sofa size={70} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                 </div>
                 <div className="product-info">
                   <h3>Executive Desks</h3>
                   <p>Heavy-duty steel base with premium minimalist top surfaces. The cornerstone of the modern office.</p>
                 </div>
               </div>
               <div className="product-card">
                 <div className="product-image mock-img-2">
                    <Briefcase size={70} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                 </div>
                 <div className="product-info">
                   <h3>Filing Cabinets</h3>
                   <p>Smooth-glide ball-bearing tracks and impenetrable lock systems for ultimate security.</p>
                 </div>
               </div>
               <div className="product-card">
                 <div className="product-image mock-img-3">
                    <Frame size={70} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                 </div>
                 <div className="product-info">
                   <h3>Industrial Shelving</h3>
                   <p>High-capacity storage frameworks engineered to hold immense weight without flexing.</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Commission Your Next Piece</h2>
            <p>From single executive desks to complete office outfittings, our fabrication team is ready for your project.</p>
            <div className="contact-methods">
               <div className="method">
                 <Phone size={24} />
                 <span>+1 (800) METAL-99</span>
               </div>
               <div className="method">
                 <Mail size={24} />
                 <span>fabrication@steelcraft.com</span>
               </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
               <div className="form-group">
                 <label>Full Name</label>
                 <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
               </div>
               <div className="form-group">
                 <label>Email Address</label>
                 <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@enterprise.com" />
               </div>
               <div className="form-group">
                 <label>Company / Architecture Firm</label>
                 <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Design Associates Ltd." />
               </div>
               <div className="form-group">
                 <label>Project Details</label>
                 <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" placeholder="I need 15 custom steel desks..."></textarea>
               </div>
               <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitStatus === 'loading'}>
                 {submitStatus === 'loading' ? 'Transmitting...' : 'Submit Inquiry'}
               </button>
               
               {submitStatus === 'success' && <div className="status-message success">Inquiry received. Our engineers will contact you shortly.</div>}
               {submitStatus === 'error' && <div className="status-message error">System failure. Please ensure your database is online or try again.</div>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SteelCraft Furniture Manufacturing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
