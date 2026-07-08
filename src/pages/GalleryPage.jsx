import { useMemo, useState } from 'react';

import { allCollections, galleryImages } from '../data/siteData';

const categoryOrder = ['All', 'Gold Sets', 'Earrings', 'Rings', 'Ruby', 'Sapphire', 'Emerald', 'Diamond'];

function getGalleryCategory(collectionTitle) {
  if (collectionTitle.includes('Gold')) return 'Gold Sets';
  if (collectionTitle.includes('Earrings')) return 'Earrings';
  if (collectionTitle.includes('Rings') || collectionTitle.includes('Bracelets')) return 'Rings';
  if (collectionTitle.includes('Ruby')) return 'Ruby';
  if (collectionTitle.includes('Sapphire')) return 'Sapphire';
  if (collectionTitle.includes('Emerald')) return 'Emerald';
  if (collectionTitle.includes('Diamond')) return 'Diamond';
  return 'Signature';
}

function buildGalleryItems() {
  const seen = new Set();
  const collectionItems = allCollections.flatMap((collection) =>
    collection.relatedImages.map((image) => ({
      ...image,
      category: getGalleryCategory(collection.title),
      collectionTitle: collection.title,
    })),
  );

  const fallbackItems = galleryImages.map((image) => ({
    src: image.src,
    title: image.alt,
    detail: 'Selected showroom piece from Royal Golden Princess.',
    category: 'Signature',
    collectionTitle: 'Selected Pieces',
  }));

  return [...collectionItems, ...fallbackItems].filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const galleryItems = useMemo(() => buildGalleryItems(), []);
  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  const heroItem = galleryItems.find((item) => item.category === 'Ruby') || galleryItems[0];

  return (
    <main className="fashion-gallery-page">
      <section className="gallery-editorial-hero" aria-label="Royal Golden Princess gallery">
        <div className="gallery-hero-copy">
          <p className="section-kicker">Gallery</p>
          <h1>Jewelry moments styled like a royal fashion edit.</h1>
          <p>
            Browse gold sets, gemstone highlights, earrings, rings, and showroom favorites from
            Royal Golden Princess.
          </p>

          <div className="gallery-metrics" aria-label="Gallery highlights">
            <span>
              <strong>300+</strong>
              Pieces
            </span>
            <span>
              <strong>20+</strong>
              Styles
            </span>
            <span>
              <strong>2</strong>
              Branches
            </span>
            <span>
              <strong>10</strong>
              Staffs
            </span>
          </div>
        </div>

        {heroItem && (
          <figure className="gallery-hero-feature">
            <img src={heroItem.src} alt={heroItem.title} />
            <figcaption>
              <span>{heroItem.category}</span>
              <strong>{heroItem.title}</strong>
              <p>{heroItem.detail}</p>
            </figcaption>
          </figure>
        )}
      </section>

      <section className="gallery-showcase" aria-label="Curated jewelry gallery">
        <div className="storefront-heading">
          <p className="section-kicker">Selected Pieces</p>
          <h2>Curated Gallery</h2>
        </div>

        <div className="gallery-filter-bar" aria-label="Filter gallery by collection">
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'active-filter' : undefined}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="fashion-gallery-grid">
          {filteredItems.map((item, index) => (
            <figure
              key={item.src}
              className={`fashion-gallery-card ${index % 7 === 0 ? 'tall-card' : ''}`}
            >
              <img src={item.src} alt={item.title} />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default GalleryPage;
