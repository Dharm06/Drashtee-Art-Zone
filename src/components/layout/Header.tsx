'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Header.module.css';
import { Button } from '../ui/Button';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
  { 
    text: 'Our Work', 
    href: '/portfolio',
    subLinks: [
      { text: 'Bronze Sculptures', href: '/portfolio?filter=bronze-sculptures' },
      { text: 'Temple Architecture', href: '/portfolio?filter=temple-architecture' },
      { text: 'Fiberglass Sculptures', href: '/portfolio?filter=fiberglass-sculptures' },
      { text: 'Government Projects', href: '/portfolio?filter=government-projects' },
      { text: 'Bust Statues of Great Leaders', href: '/portfolio?filter=bust-statues' },
    ]
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          Drastee <span className="text-gold">Art Zone</span>
        </Link>
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <div key={link.text} className={styles.navItemContainer}>
                <div className={styles.navLinkWrapper}>
                  <Link 
                    href={link.href}
                    className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                    onClick={() => {
                      if (!link.subLinks) setMobileMenuOpen(false);
                      // If it has sublinks, we only navigate and close menu
                      else setMobileMenuOpen(false);
                    }}
                  >
                    {link.text}
                  </Link>
                  {link.subLinks && (
                    <button
                      className={styles.mobileDropdownToggle}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === link.text ? null : link.text);
                      }}
                      aria-label="Toggle dropdown"
                    >
                      {activeDropdown === link.text ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  )}
                </div>
                {link.subLinks && (
                  <div className={`${styles.dropdown} ${activeDropdown === link.text ? styles.dropdownActive : ''}`}>
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.text} 
                        href={sub.href}
                        className={styles.dropdownLink}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.ctaWrapper}>
            <Link href="/inquiry" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary">Request Design</Button>
            </Link>
          </div>
        </nav>

        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} color="var(--color-gold)" /> : <Menu size={28} color="var(--color-white)" />}
        </button>
      </div>
    </header>
  );
};
