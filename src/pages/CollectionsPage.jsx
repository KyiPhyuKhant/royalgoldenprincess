import CollectionCard from '../components/CollectionCard';
import { allCollections, collections, gemCollections } from '../data/siteData';

function CollectionsPage({ navigate, type = 'all' }) {
  const pageCollections = {
    all: allCollections,
    jewellery: collections,
    gems: gemCollections,
  }[type];
  const pageTitle = {
    all: 'Browse by collection',
    jewellery: 'Jewellery Collections',
    gems: 'Gems Collections',
  }[type];
  const pageIntro = {
    all: 'Choose a collection page for details, images, and order support.',
    jewellery: 'Browse gold sets, earrings, rings, bracelets, and custom jewellery support.',
    gems: 'Browse ruby, sapphire, emerald, and diamond-inspired gemstone collections.',
  }[type];

  return (
    <section className="page-section collections">
      <div className="section-heading">
        <p className="section-kicker">Jewellery Collections</p>
        <h1>{pageTitle}</h1>
        <p>{pageIntro}</p>
      </div>

      <div className="collection-grid">
        {pageCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            navigate={navigate}
          />
        ))}
      </div>
    </section>
  );
}

export default CollectionsPage;
