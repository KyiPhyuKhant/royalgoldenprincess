import LinkButton from './LinkButton';

function CollectionCard({ collection, navigate }) {
  return (
    <article className="collection-card">
      <img src={collection.image} alt="" />
      <div>
        <h2>{collection.title}</h2>
        <p>{collection.description}</p>
        <LinkButton to={`/collections/${collection.id}`} navigate={navigate}>
          View collection
        </LinkButton>
      </div>
    </article>
  );
}

export default CollectionCard;
