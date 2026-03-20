'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
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
            Our <span className="text-gold">Legacy</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Decades of devotion etched in eternal stone.
          </motion.p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={styles.visionSection}>
        <div className={`container ${styles.splitGrid}`}>
          <motion.div 
            className={styles.textContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">The <span className="text-gold">Vision</span></h2>
            <p>
              Drastee Art Zone was founded with a singular purpose: to preserve the ancient Indian art of 
              shilpa shastra (sculpture making) while elevating it with modern luxury and global accessibility.
            </p>
            <p>
              We don't just create objects; we manifest spiritual energy into physical form. Whether it's a 
              grand temple structure, a divine deity, or an opulent fountain, our vision is to craft masterworks 
              that serve as conduits for devotion and aesthetic perfection.
            </p>
          </motion.div>
          <motion.div 
            className={styles.imageBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=800&auto=format&fit=crop"
              alt="Sculpture detail"
              fill
              className={styles.image}
            />
          </motion.div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className={styles.craftSection}>
        <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <motion.h2 
            className="heading-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Unmatched <span className="text-gold">Craftsmanship</span>
          </motion.h2>
          <motion.p 
            style={{ color: 'var(--color-gray-300)', maxWidth: '700px', margin: '0 auto' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Every chisel strike is a prayer. Our process combines rare raw materials with ancestral techniques.
          </motion.p>
        </div>

        <div className="container">
          <div className={styles.materialsGrid}>
            {[
              { title: "Makarana Marble", desc: "Sourced from the finest quarries, known for its pure white glow and durability." },
              { title: "Rosewood & Teak", desc: "Aged premium wood carved for majestic doors and intricate indoor shrines." },
              { title: "Panchaloha (5 Metals)", desc: "Traditional lost-wax casting using sacred alloy for indestructible temple idols." }
            ].map((material, idx) => (
              <motion.div 
                key={idx} 
                className={styles.materialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className={styles.goldLine}></div>
                <h3>{material.title}</h3>
                <p>{material.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISANS */}
      <section className={styles.artisansSection}>
        <div className={`container ${styles.splitGrid} ${styles.reverse}`}>
          <motion.div 
            className={styles.textContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">Master <span className="text-gold">Artisans</span></h2>
            <p>
              Our team consists of 50+ generational artists whose lineages trace back to the royal courts of ancient India. 
              These master carvers, metalworkers, and architects possess knowledge that cannot be learned in any academy—it 
              is passed down through blood and devotion.
            </p>
            <p>
              When you commission a piece from Drastee Art Zone, you are investing in the culmination of centuries of refined skill.
            </p>
          </motion.div>
          <motion.div 
            className={styles.imageBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1577083553258-00511f56860d?q=80&w=800&auto=format&fit=crop"
              alt="Artisan working"
              fill
              className={styles.image}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
