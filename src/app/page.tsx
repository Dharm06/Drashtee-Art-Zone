'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero.png"
            alt="Drashtee Art Zone — Hero Sculpture"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className="heading-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We turn vision into <br/><span className="text-gold">timeless sculptures.</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Exquisite custom spiritual & architectural art. Masterfully crafted statues, temples, luxury gates, and fountains for discerning clients globally.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/inquiry">
              <Button size="lg">Request Custom Design</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className={styles.storySection}>
        <div className={`container ${styles.storyContainer}`}>
          <motion.div 
            className={styles.storyText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="heading-2">The <span className="text-gold">Art</span> of Devotion</h2>
            <p>
              At Drastee Art Zone, we believe that true luxury lies in the details. 
              For over two decades, our master artisans have been shaping raw elements 
              into divine masterpieces that transcend generations.
            </p>
            <p>
              Every curve, every texture, and every expression is meticulously sculpted 
              to perfection, ensuring that your spiritual or architectural vision is 
              brought to life with unparalleled grace and grandeur.
            </p>
            <Link href="/about" className={styles.linkWithIcon}>
              Discover Our Heritage <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.storyImageWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Image 
              src="/images/drastee-art-home-2.jpg"
              alt="Drashtee Art Zone — Studio Craftsmanship"
              width={600}
              height={700}
              className={styles.storyImage}
            />
            <div className={styles.goldAccent}></div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">Creation <span className="text-gold">Journey</span></h2>
            <p className={styles.sectionDesc}>From spark to installation, witness how we breathe life into stone and metal.</p>
          </motion.div>

          <motion.div 
            className={styles.processGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Idea & Consultation", desc: "We understand your vision, cultural preferences, and architectural constraints." },
              { title: "Design & Blueprint", desc: "Detailed 3D models and artistic sketches are approved before crafting begins." },
              { title: "Master Crafting", desc: "Our artisans meticulously sculpt your masterpiece using elite raw materials." },
              { title: "Global Installation", desc: "Safe transport and precise on-site installation anywhere in the world." }
            ].map((step, index) => (
              <motion.div key={index} className={styles.processCard} variants={fadeUp}>
                <div className={styles.processNumber}>0{index + 1}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className={styles.featuredSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">Featured <span className="text-gold">Masterpieces</span></h2>
          </motion.div>

          <div className={styles.featuredGrid}>
            <div className={styles.featuredLarge}>
              <Image src="/images/projects-temples.jpg" alt="Temple Architecture — Signature Projects" fill className={styles.featuredImage} />
              <div className={styles.featuredOverlay}>
                <h3 className="heading-3">Grand Temple Architecture</h3>
                <p>Marble &amp; Stone</p>
              </div>
            </div>
            <div className={styles.featuredSmall}>
              <Image src="/images/statue-02-atal-bihari-vajpayee.jpg" alt="Divine Deity Statue — Premium Craftsmanship" fill className={styles.featuredImage} />
              <div className={styles.featuredOverlay}>
                <h3 className="heading-3">Divine Deity Statue</h3>
                <p>Premium Sandstone</p>
              </div>
            </div>
            <div className={styles.featuredSmall}>
              <Image src="/images/bronze-sculptures.png" alt="Bronze Sculpture — Luxury Casting" fill className={styles.featuredImage} />
              <div className={styles.featuredOverlay}>
                <h3 className="heading-3">Bronze Masterpieces</h3>
                <p>Cast Bronze &amp; Brass</p>
              </div>
            </div>
          </div>

          <div className={styles.centerBtn}>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">Explore Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <motion.div 
            className={styles.testimonialWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
              "The level of detail and devotion captured in our foundation's main temple statue is truly breathtaking. Drastee Art Zone didn't just carve a stone; they breathed divinity into it."
            </p>
            <div className={styles.testimonialAuthor}>
              <h4>Ananya Singhania</h4>
              <p className="text-gold">Heritage Trust, London</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaBox}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">Ready to create a legacy?</h2>
            <p>Speak to our master designers today and get your custom quote within 24 hours.</p>
            <div className={styles.ctaButtons}>
              <Link href="/inquiry">
                <Button size="lg">Start Your Project</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">Explore Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
