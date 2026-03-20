'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';

const portfolioItems = [
  { id: 1, category: 'temple-architecture', title: 'Jain Temple Complex', image: 'https://images.unsplash.com/photo-1544413165-4f466b0811b7?q=80&w=600&auto=format&fit=crop', height: 'h-medium' },
  { id: 2, category: 'bronze-sculptures', title: 'Bronze Buddha', image: 'https://images.unsplash.com/photo-1563242044-64478832a893?q=80&w=600&auto=format&fit=crop', height: 'h-medium' },
  { id: 3, category: 'custom-bronze-sculptures', title: 'Custom Deity Cast', image: 'https://images.unsplash.com/photo-1598124209939-59cb4a59d997?q=80&w=600&auto=format&fit=crop', height: 'h-large' },
  { id: 4, category: 'temple-architecture', title: 'South Indian Spire', image: 'https://images.unsplash.com/photo-1545063914-a1a6ddb50b5e?q=80&w=600&auto=format&fit=crop', height: 'h-medium' },
  { id: 5, category: 'government-projects', title: 'National Monument', image: 'https://images.unsplash.com/photo-1581452140660-f3b140cc5bd5?q=80&w=600&auto=format&fit=crop', height: 'h-tall' },
  { id: 6, category: 'bust-statues', title: 'Historical Figure Bust', image: 'https://images.unsplash.com/photo-1600170081014-411a2f6460aa?q=80&w=600&auto=format&fit=crop', height: 'h-large' },
  { id: 7, category: 'fiberglass-sculptures', title: 'Modern Estate Sculpture', image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format&fit=crop', height: 'h-medium' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'bronze-sculptures', label: 'Bronze Sculptures' },
  { id: 'custom-bronze-sculptures', label: 'Custom Bronze Sculptures' },
  { id: 'temple-architecture', label: 'Temple Architecture' },
  { id: 'fiberglass-sculptures', label: 'Fiberglass Sculptures' },
  { id: 'government-projects', label: 'Government Projects' },
  { id: 'bust-statues', label: 'Bust Statues of Great Leaders' },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      setFilter(filterParam);
    }
  }, [searchParams]);

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

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
            Our <span className="text-gold">Gallery</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover our spectrum of completed masterpieces.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterMenu}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className={styles.gallerySection}>
        <div className="container">
          <motion.div layout className={styles.grid}>
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`${styles.gridItem} ${styles[item.height]}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <h3>{item.title}</h3>
                    <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 mt-8">No matching projects found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', padding: '120px', textAlign: 'center' }}>Loading portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
