import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              Drastee <span className="text-gold">Art Zone</span>
            </Link>
            <p className={styles.description}>
              We turn vision into timeless sculptures. Exquisite custom spiritual & architectural art crafted with precision and passion.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Our Work</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/inquiry">Request Quote</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.title}>Expertise</h4>
            <ul className={styles.links}>
              <li><Link href="/services#statues">Custom Statues</Link></li>
              <li><Link href="/services#temples">Temple Architecture</Link></li>
              <li><Link href="/services#gates">Luxury Gates</Link></li>
              <li><Link href="/services#fountains">Artistic Fountains</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.col}>
            <h4 className={styles.title}>Get in Touch</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className="text-gold" />
                <span>123 Artisan Valley, Luxury District, NY 10001</span>
              </li>
              <li>
                <Phone size={18} className="text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className="text-gold" />
                <span>inquiry@drasteeartzone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Drastee Art Zone. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
