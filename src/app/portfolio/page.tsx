"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

type PortfolioItem = {
  id: string | number;
  category: string;
  title: string;
  image: string;
  height: "h-tall" | "h-medium" | "h-large";
  width?: "w-wide";
};

type PortfolioGroup = {
  title: string;
  items: PortfolioItem[];
};

const whatsappNumber = "9978855255";
const getWhatsappLink = (title: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, I want an inquiry about ${title}.`,
  )}`;

const muktidhamFiles = [
  "muktidham-rajkot-01.jpg",
  "muktidham-rajkot-02.jpg",
  "muktidham-rajkot-03.jpg",
  "muktidham-rajkot-04.jpg",
  "muktidham-rajkot-05.jpg",
  "muktidham-rajkot-06.jpg",
  "muktidham-rajkot-07.jpg",
  "muktidham-rajkot-08.jpg",
  "muktidham-rajkot-09.jpg",
  "muktidham-rajkot-10.jpg",
  "muktidham-rajkot-11.jpg",
  "muktidham-rajkot-12.jpg",
  "muktidham-rajkot-13.jpg",
  "muktidham-rajkot-14.jpg",
  "muktidham-rajkot-15.jpg",
  "muktidham-rajkot-16.jpg",
  "muktidham-rajkot-17.jpg",
  "muktidham-rajkot-18.jpg",
  "muktidham-rajkot-19.jpg",
  "muktidham-rajkot-20.jpg",
  "muktidham-rajkot-21.jpg",
  "muktidham-rajkot-22.jpg",
  "muktidham-rajkot-23.jpg",
  "muktidham-rajkot-24.jpg",
  "muktidham-rajkot-25.jpg",
  "muktidham-rajkot-26.jpg",
  "muktidham-rajkot-27.jpg",
  "muktidham-rajkot-28.jpg",
  "muktidham-rajkot-29.jpg",
  "muktidham-rajkot-30.jpg",
  "muktidham-rajkot-31.jpg",
  "muktidham-rajkot-32.jpg",
  "muktidham-rajkot-33.jpg",
  "muktidham-rajkot-34.jpg",
  "muktidham-rajkot-35.jpg",
  "muktidham-rajkot-36.jpg",
  "muktidham-rajkot-37.jpg",
  "muktidham-rajkot-38.jpg",
  "muktidham-rajkot-39.jpg",
  "muktidham-rajkot-40.jpg",
  "muktidham-rajkot-41.jpg",
  "muktidham-rajkot-42.jpg",
  "muktidham-rajkot-43.jpg",
  "muktidham-rajkot-44.jpg",
  "muktidham-rajkot-45.jpg",
  "muktidham-rajkot-46.jpg",
  "muktidham-rajkot-47.jpg",
  "muktidham-rajkot-48.jpg",
  "muktidham-rajkot-49.jpg",
  "muktidham-rajkot-50.jpg",
  "muktidham-rajkot-51.jpg",
  "muktidham-rajkot-52.jpg",
  "muktidham-rajkot-53.jpg",
  "muktidham-rajkot-54.jpg",
  "muktidham-rajkot-55.jpg",
  "muktidham-rajkot-56.jpg",
  "muktidham-rajkot-57.jpg",
  "muktidham-rajkot-58.jpg",
  "muktidham-rajkot-59.jpg",
  "muktidham-rajkot-60.jpg",
  "muktidham-rajkot-61.jpg",
  "muktidham-rajkot-62.jpg",
  "muktidham-rajkot-63.jpg",
  "muktidham-rajkot-64.jpg",
  "muktidham-rajkot-65.jpg",
  "muktidham-rajkot-66.jpg",
  "muktidham-rajkot-67.jpg",
  "muktidham-rajkot-68-scaled.jpg",
  "muktidham-rajkot-69.jpg",
  "muktidham-rajkot-71.jpg",
  "muktidham-rajkot-72.jpg",
  "muktidham-rajkot-73.jpg",
  "muktidham-rajkot-74.jpg",
  "muktidham-rajkot-75.jpg",
];

const ramvanFiles = [
  "ramvan-rajkot-01.jpg",
  "ramvan-rajkot-02.jpg",
  "ramvan-rajkot-03.jpg",
  "ramvan-rajkot-04.jpg",
  "ramvan-rajkot-05.jpg",
  "ramvan-rajkot-06.jpg",
  "ramvan-rajkot-07.jpg",
  "ramvan-rajkot-08.jpg",
  "ramvan-rajkot-09.jpg",
  "ramvan-rajkot-10.jpg",
  "ramvan-rajkot-11.jpg",
  "ramvan-rajkot-12.jpg",
  "ramvan-rajkot-13.jpg",
  "ramvan-rajkot-14.jpg",
  "ramvan-rajkot-15.jpg",
  "ramvan-rajkot-16.jpg",
  "ramvan-rajkot-17.jpg",
  "ramvan-rajkot-18.jpg",
  "ramvan-rajkot-19.jpg",
  "ramvan-rajkot-20.jpg",
  "ramvan-rajkot-21.jpg",
];

const templeHoustonFiles = [
  "gayatri-temple-houston-01.jpg",
  "gayatri-temple-houston-02.jpg",
  "gayatri-temple-houston-03.jpg",
  "gayatri-temple-houston-04.jpg",
  "gayatri-temple-houston-05.jpg",
];

const templeLosAngelesFiles = [
  "gayatri-temple-los-agneles-01.jpg",
  "gayatri-temple-los-agneles-02.jpg",
  "gayatri-temple-los-agneles-03.jpg",
];

const templeLisbonFiles = [
  "shiv-temple-lisbon-01.jpg",
  "shiv-temple-lisbon-02.jpg",
  "shiv-temple-lisbon-03.jpg",
];

const templeSwaminaraynFiles = [
  "swaminarayan-temple-usa-byron-georgia-isso-01.jpg",
  "swaminarayan-temple-usa-byron-georgia-isso-02.jpg",
];

const buildCategoryItems = (
  category: string,
  files: string[],
  idPrefix: string,
  title: string,
  folder: string,
) : PortfolioItem[] =>
  files.map((file, index) => ({
    id: `${idPrefix}-${file}`,
    category,
    title,
    image: `${folder}/${file}`,
    height:
      index % 3 === 0 ? "h-tall" : index % 3 === 1 ? "h-medium" : "h-large",
  }));

const buildTempleItems = (
  files: string[],
  idPrefix: string,
  title: string,
  folder: string,
) => buildCategoryItems("temple-architecture", files, idPrefix, title, folder);

const templeLisbonItems = buildTempleItems(
  templeLisbonFiles,
  "temple-lisbon",
  "Shiv Temple — Lisbon",
  "/Temple Architecture/Shiv Temple Lisbon",
);

const templeHoustonItems = buildTempleItems(
  templeHoustonFiles,
  "temple-houston",
  "Gayatri Temple — Houston, USA",
  "/Temple Architecture/Gayatri Temple Houston",
);

const templeLosAngelesItems = buildTempleItems(
  templeLosAngelesFiles,
  "temple-la",
  "Gayatri Temple — Los-Angles",
  "/Temple Architecture/Gayatri Temple Los-Angles",
);

const templeSwaminaraynItems = buildTempleItems(
  templeSwaminaraynFiles,
  "temple-swaminarayn",
  "Swaminarayn Temple — USA",
  "/Temple Architecture/Swaminarayn Temple USA",
);

const muktidhamItems = buildCategoryItems(
  "government-projects",
  muktidhamFiles,
  "government",
  "Muktidham — Gandhinagar, Gujarat",
  "/Goverment Projects",
);

const ramvanItems = buildCategoryItems(
  "fiberglass-sculptures",
  ramvanFiles,
  "fiberglass",
  "Ramvan — Rajkot",
  "/Fiberglass sculpture",
);

const bronzeAmarShahidFiles = [
  "13-amar-shahid-statue-01.jpg",
  "13-amar-shahid-statue-02.jpg",
  "13-amar-shahid-statue-03.jpg",
];

const bronzeApmcAmreliFiles = [
  "apmc-amreli-01.jpg",
  "apmc-amreli-02.jpg",
  "apmc-amreli-03.jpg",
];

const bronzeLokmanyaTilakFiles = [
  "lokmanya-tilak-01.jpg",
  "lokmanya-tilak-02.jpg",
  "lokmanya-tilak-03.jpg",
];

const bronzeMaharanaPratapFiles = [
  "maharana-pratap-01.jpg",
  "maharana-pratap-02.jpg",
  "maharana-pratap-03.jpg",
];

const bronzeMokhdajiFiles = [
  "mokhdaji-01.jpg",
  "mokhdaji-02.jpg",
  "mokhdaji-03.jpg",
];

const bronzeParshuramFiles = ["parshuram-01.jpg", "parshuram-02.jpg"];

const bronzeShyamaprasadFiles = [
  "shyamaprasad-mukerjee-01.jpg",
  "shyamaprasad-mukerjee-02.jpg",
  "shyamaprasad-mukerjee-03.jpg",
];

const bronzeAmarShahidItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeAmarShahidFiles,
  "bronze-amar-shahid",
  "Amar Shahid Statue",
  "/Bronze Sculpture",
);

const bronzeApmcAmreliItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeApmcAmreliFiles,
  "bronze-apmc-amreli",
  "APMC Amreli",
  "/Bronze Sculpture",
);

const bronzeLokmanyaTilakItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeLokmanyaTilakFiles,
  "bronze-lokmanya-tilak",
  "Lokmanya Tilak",
  "/Bronze Sculpture",
);

const bronzeMaharanaPratapItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeMaharanaPratapFiles,
  "bronze-maharana-pratap",
  "Maharana Pratap",
  "/Bronze Sculpture",
);

const bronzeMokhdajiItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeMokhdajiFiles,
  "bronze-mokhdaji",
  "Mokhdaji",
  "/Bronze Sculpture",
);

const bronzeParshuramItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeParshuramFiles,
  "bronze-parshuram",
  "Parshuram",
  "/Bronze Sculpture",
);

const bronzeShyamaprasadItems = buildCategoryItems(
  "bronze-sculptures",
  bronzeShyamaprasadFiles,
  "bronze-shyamaprasad",
  "Shyamaprasad Mukerjee",
  "/Bronze Sculpture",
);

const templeGroups: PortfolioGroup[] = [
  { title: "Shiv Temple — Lisbon", items: templeLisbonItems },
  { title: "Gayatri Temple — Houston, USA", items: templeHoustonItems },
  { title: "Gayatri Temple — Los-Angles", items: templeLosAngelesItems },
  { title: "Swaminarayn Temple — USA", items: templeSwaminaraynItems },
];

const templeItems: PortfolioItem[] = [
  ...templeLisbonItems,
  ...templeHoustonItems,
  ...templeLosAngelesItems,
  ...templeSwaminaraynItems,
];

const bronzeGroups: PortfolioGroup[] = [
  { title: "Amar Shahid Statue", items: bronzeAmarShahidItems },
  { title: "APMC Amreli", items: bronzeApmcAmreliItems },
  { title: "Lokmanya Tilak", items: bronzeLokmanyaTilakItems },
  { title: "Maharana Pratap", items: bronzeMaharanaPratapItems },
  { title: "Mokhdaji", items: bronzeMokhdajiItems },
  { title: "Parshuram", items: bronzeParshuramItems },
  { title: "Shyamaprasad Mukerjee", items: bronzeShyamaprasadItems },
];

const bronzeItems: PortfolioItem[] = [
  ...bronzeAmarShahidItems,
  ...bronzeApmcAmreliItems,
  ...bronzeLokmanyaTilakItems,
  ...bronzeMaharanaPratapItems,
  ...bronzeMokhdajiItems,
  ...bronzeParshuramItems,
  ...bronzeShyamaprasadItems,
];

const portfolioItems: PortfolioItem[] = [
  // Temple Architecture
  ...templeItems,
  // Bronze Sculptures
  ...bronzeItems,
  // Government Projects (Muktidham — Gandhinagar, Gujarat)
  ...muktidhamItems,
  // Bust Statues
  {
    id: 19,
    category: "bust-statues",
    title: "Mahatma Gandhi — Tribute Bust",
    image: "/Bust Images/mahatmagandhi.jpeg",
    height: "h-large",
    width: "w-wide",
  },
  {
    id: 20,
    category: "bust-statues",
    title: "Bhagat Singh — Portrait",
    image: "/Bust Images/bhagatsinh.jpeg",
    height: "h-medium",
  },
  {
    id: 21,
    category: "bust-statues",
    title: "Baba Saheb Ambedkar — Memorial  ",
    image: "/Bust Images/babaambedkar.jpeg",
    height: "h-medium",
  },
  {
    id: 22,
    category: "bust-statues",
    title: "APJ Abdul Kalam — Tribute",
    image: "/Bust Images/apj-kalam.jpeg",
    height: "h-medium",
  },
  {
    id: 23,
    category: "bust-statues",
    title: "Jyotiba Phule — Tribute Bust",
    image: "/Bust Images/Jyotiba-phule.jpeg",
    height: "h-tall",
    width: "w-wide",
  },
  {
    id: 24,
    category: "bust-statues",
    title: "Sir M. Visvesvaraya — Heritage Bust",
    image: "/Bust Images/Sir Mr Visvaraya.jpeg",
    height: "h-medium",
  },
  {
    id: 25,
    category: "bust-statues",
    title: "Rambabu — Memorial Bust",
    image: "/Bust Images/Rambabu.jpeg",
    height: "h-medium",
  },
  {
    id: 26,
    category: "bust-statues",
    title: "Pandit Din Dayal Upadhyay — Tribute Bust",
    image: "/Bust Images/Pandit.jpeg",
    height: "h-medium",
  },
  // Fiberglass Sculptures (Ramvan — Rajkot)
  ...ramvanItems,
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "bronze-sculptures", label: "Bronze Sculptures" },
  { id: "temple-architecture", label: "Temple Architecture" },
  { id: "fiberglass-sculptures", label: "Fiberglass Sculptures" },
  { id: "government-projects", label: "Government Projects" },
  { id: "bust-statues", label: "Bust Statues of Great Leaders" },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") ?? "all";
  const [filter, setFilter] = useState(initialFilter);
  const [imageOrientations, setImageOrientations] = useState<
    Record<string, "landscape" | "portrait">
  >({});

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter,
  );

  const renderGridItems = (items: PortfolioItem[]) => (
    <motion.div layout className={styles.grid}>
      <AnimatePresence>
        {items.map((item) => {
          const itemKey = String(item.id);
          const orientation = imageOrientations[itemKey];

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`${styles.gridItem} ${styles[item.height]} ${item.width ? styles[item.width] : ""} ${orientation === "landscape" ? styles.landscape : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                onLoadingComplete={(img) => {
                  const isLandscape = img.naturalWidth > img.naturalHeight;
                  setImageOrientations((prev) =>
                    prev[itemKey]
                      ? prev
                      : {
                          ...prev,
                          [itemKey]: isLandscape ? "landscape" : "portrait",
                        },
                  );
                }}
              />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
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
                className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ""}`}
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
          {filter === "bust-statues" && (
            <div className={styles.bustInfo}>
              <div>
                <h2 className={styles.bustHeading}>Bust Sculptures Pricing</h2>
                <p className={styles.bustRange}>
                  ₹2,000 to ₹1,50,000 (custom as per your requirement)
                </p>
              </div>
              <a
                href={getWhatsappLink("Bust Sculptures")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bustCta}
              >
                Inquiry on WhatsApp
              </a>
            </div>
          )}
          {filter === "temple-architecture" ? (
            <div className={styles.groupGrid}>
              {templeGroups.map((group) => (
                <div key={group.title} className={styles.groupSection}>
                  <h2 className={styles.groupHeading}>{group.title}</h2>
                  {renderGridItems(group.items)}
                </div>
              ))}
            </div>
          ) : filter === "bronze-sculptures" ? (
            <div className={styles.groupGrid}>
              {bronzeGroups.map((group) => (
                <div key={group.title} className={styles.groupSection}>
                  <h2 className={styles.groupHeading}>{group.title}</h2>
                  {renderGridItems(group.items)}
                </div>
              ))}
            </div>
          ) : (
            renderGridItems(filteredItems)
          )}
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 mt-8">
              No matching projects found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Suspense
      fallback={
        <div
          style={{ minHeight: "100vh", padding: "120px", textAlign: "center" }}
        >
          Loading portfolio...
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
