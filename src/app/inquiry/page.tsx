'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function InquiryContent() {
  const searchParams = useSearchParams();
  const initialProjectType = searchParams.get('service') ?? '';
  const [projectType, setProjectType] = useState(initialProjectType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className={styles.wrapper}>
      {/* PAGE HEADER */}
      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            className="heading-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Start Your <span className="text-gold">Legacy</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get a Custom Quote within 24 Hours
          </motion.p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.grid}`}>
          {/* CONTACT INFO */}
          <motion.div 
            className={styles.infoCol}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h2 className="heading-3">Consult with Master Artisans</h2>
            <p className={styles.infoDesc}>
              Whether you need a monumental temple or a bespoke personal shrine, our team is ready to bring your spiritual vision to life.
            </p>

            <ul className={styles.contactList}>
              <li>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div>
                  <h4>Direct Line</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </li>
              <li>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>inquiry@drasteeartzone.com</p>
                </div>
              </li>
              <li>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <h4>Global Headquarters</h4>
                  <p>123 Artisan Valley, Luxury District, NY 10001</p>
                </div>
              </li>
              <li>
                <div className={styles.iconBox}><Clock size={24} /></div>
                <div>
                  <h4>Operating Hours</h4>
                  <p>Monday - Friday, 9:00 AM - 6:00 PM (EST)</p>
                </div>
              </li>
            </ul>

            <div className={styles.whatsappCard}>
              <h4 className={styles.waTitle}>Prefer Instant Chat?</h4>
              <p>Connect with our design team instantly on WhatsApp.</p>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <Button className={styles.waBtn}>
                  <MessageCircle size={20} /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* INQUIRY FORM */}
          <motion.div 
            className={styles.formCol}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className="heading-3">Inquiry Sent Successfully</h3>
                  <p>Thank you for reaching out. One of our master designers will review your requirements and contact you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" style={{ marginTop: '20px' }}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formTitle}>Project Details</h3>
                  <p className={styles.formSubtitle}>All fields are kept strictly confidential.</p>

                  <div className={styles.inputGroup}>
                    <Input label="Full Name *" required placeholder="John Doe" />
                    <Input label="Phone Number *" type="tel" required placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <Input label="Email Address *" type="email" required placeholder="john@example.com" />
                  
                  <div className={styles.inputGroup}>
                    <Select 
                      label="Project Type *" 
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      options={[
                        { value: "", label: "Select a project type..." },
                        { value: "statues", label: "Custom Statue / Deity" },
                        { value: "temples", label: "Temple Architecture" },
                        { value: "gates", label: "Luxury Gate / Door" },
                        { value: "fountains", label: "Artistic Fountain" },
                        { value: "other", label: "Other Masterpiece" }
                      ]}
                    />
                    <Select 
                      label="Estimated Budget (USD) *" 
                      required
                      options={[
                        { value: "", label: "Select budget range..." },
                        { value: "10k-50k", label: "$10,000 - $50,000" },
                        { value: "50k-100k", label: "$50,000 - $100,000" },
                        { value: "100k-500k", label: "$100,000 - $500,000" },
                        { value: "500k+", label: "$500,000+" }
                      ]}
                    />
                  </div>

                  <Textarea 
                    label="Project Description *" 
                    required 
                    placeholder="Please describe your vision, preferred materials, dimensions, and timeline..." 
                    rows={5}
                  />

                  <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request Formal Quote'}
                  </Button>
                  
                  <p className={styles.trustBadge}>
                    <span className={styles.lockIcon}>🔒</span> Your information is secure. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function Inquiry() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', padding: '120px', textAlign: 'center' }}>Loading project inquiry...</div>}>
      <InquiryContent />
    </Suspense>
  );
}
