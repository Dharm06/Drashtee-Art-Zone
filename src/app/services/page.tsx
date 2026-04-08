'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

const whatsappNumber = "15551234567";
const getWhatsappLink = (title: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, I want an inquiry about ${title}.`,
  )}`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const servicesList = [
  {
    id: "custom-bronze-sculptures",
    title: "Custom Bronze Sculptures",
    desc: [
      "We specialize in custom bronze sculpture production ranging from portrait busts to monumental public statues up to 32 feet.",
      "Our studio works with artists, architects, government bodies and private collectors to create high quality bronze sculptures for public spaces, temples, memorials and architectural projects."
    ],
    features: [
      "Custom bronze statues",
      "Monumental public sculptures",
      "Portrait bust sculptures",
      "Religious temple sculptures",
      "Architectural bronze elements"
    ],
    process: [
      "Concept design and 3D modelling",
      "Clay modelling or digital sculpting",
      "Mold making",
      "Bronze casting using the lost wax method",
      "Surface finishing and patina",
      "Installation support"
    ],
    processNote: "We support projects from concept to installation and provide reliable manufacturing for large bronze sculpture commissions worldwide.",
    image: "/images/bronze-sculptures.png",
    reverse: false,
    whatsappCta: true
  },
  {
    id: "statues",
    title: "Custom Statues & Deities",
    desc: "From miniature personal shrines to monumental 50-foot landmarks, our custom statues are carved with strict adherence to ancient geometric proportions (Shilpa Shastra). We specialize in Makrana marble, black stone, sandstone, and cast bronze.",
    features: ["Vastu Compliant", "Intricate Detailing", "Weather Resistant", "Custom Sizing"],
    image: "/images/statue-02-atal-bihari-vajpayee.jpg",
    reverse: true
  },
  {
    id: "temples",
    title: "Temple Architecture",
    desc: "Complete architectural solutions for residential, commercial, and community temples. We handle everything from the sanctum sanctorum (Garbhagriha) to the towering spires (Shikhar), ensuring structural integrity and authentic aesthetics.",
    features: ["Full Turnkey Solutions", "Hand-carved Pillars", "Sacred Geometry", "Global Installation"],
    image: "/images/gayatri-temple-houston-01.jpg",
    reverse: false
  },
  {
    id: "gates",
    title: "Luxury Gates & Doors",
    desc: "Make an unforgettable first impression. Our custom-designed estate gates and intricately carved solid wood doors blend security with unparalleled luxury. Features include brass inlay, gold leafing, and smart-security integration.",
    features: ["Solid Teak/Rosewood", "Brass & Gold Inlays", "Automated Systems", "Heritage Motifs"],
    image: "/images/ghummat.png",
    reverse: true
  },
  {
    id: "fountains",
    title: "Artistic Fountains",
    desc: "Transform your landscape with our bespoke stone fountains. Ranging from classical European tiers to traditional lotus cascades, each fountain is designed to create a soothing ambiance while serving as a stunning focal point.",
    features: ["Natural Stone", "Recirculating Systems", "Integrated Lighting", "Custom Water Flow"],
    image: "/images/projects-garden-ram-van.jpg",
    reverse: false
  }
];

export default function Services() {
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
            Our <span className="text-gold">Expertise</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Bespoke artistry tailored to your grandest visions.
          </motion.p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className={styles.servicesSection}>
        <div className="container">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`${styles.serviceRow} ${service.reverse ? styles.reverse : ''}`}
            >
              <motion.div 
                className={styles.textContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <div className={styles.serviceNumber}>0{index + 1}</div>
                <h2 className={`heading-2 ${styles.title}`}>{service.title}</h2>
                <div className={styles.desc}>
                  {Array.isArray(service.desc)
                    ? service.desc.map((text, idx) => <p key={idx}>{text}</p>)
                    : <p>{service.desc}</p>}
                </div>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.goldBullet}></span> {feature}
                    </li>
                  ))}
                </ul>
                {service.process && (
                  <div className={styles.processBlock}>
                    <h3 className={styles.processTitle}>Production process</h3>
                    <ul className={styles.processList}>
                      {service.process.map((step, idx) => (
                        <li key={idx}>
                          <span className={styles.goldBullet}></span> {step}
                        </li>
                      ))}
                    </ul>
                    {service.processNote && (
                      <p className={styles.processNote}>{service.processNote}</p>
                    )}
                  </div>
                )}
                <div className={styles.ctaGroup}>
                  <Link href={`/inquiry?service=${service.id}`} className={styles.ctaLink}>
                    <Button variant="outline">Request a Quote</Button>
                  </Link>
                  {service.whatsappCta && (
                    <a
                      href={getWhatsappLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaLink}
                    >
                      <Button variant="primary">Inquiry on WhatsApp</Button>
                    </a>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.imageBox}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="heading-2">Have a Unique Vision?</h2>
            <p>If you can imagine it, our master artisans can sculpt it. Let's discuss your custom requirements.</p>
            <Link href="/inquiry">
              <Button size="lg" variant="primary">Start Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
