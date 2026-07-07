import { collections, gemCollections } from '../data/siteData';
import LinkButton from './LinkButton';

function Header({ navigate, currentPath }) {
  const isJewelleryCollectionActive = collections.some(
    (collection) => currentPath === `/collections/${collection.id}`,
  );
  const isGemCollectionActive = gemCollections.some(
    (collection) => currentPath === `/collections/${collection.id}`,
  );

  return (
    <header className="site-header">
      <nav className="topbar" aria-label="Main navigation">
        <LinkButton
          to="/"
          navigate={navigate}
          className="brand-mark"
          ariaLabel="Royal Golden Princess home"
        >
          <img src="/images/logo.jpg" alt="" />
          <span>Royal Golden Princess</span>
        </LinkButton>

        <div className="nav-menu">
          <LinkButton to="/" navigate={navigate} isActive={currentPath === '/'}>
            Home
          </LinkButton>
          <LinkButton to="/about" navigate={navigate} isActive={currentPath === '/about'}>
            About Us
          </LinkButton>
          <div className="nav-dropdown">
            <LinkButton
              to="/collections/jewellery"
              navigate={navigate}
              className="dropdown-trigger"
              ariaLabel="Jewellery collections"
              isActive={currentPath === '/collections/jewellery' || isJewelleryCollectionActive}
            >
              Jewellery Collections
            </LinkButton>
            <div className="dropdown-menu" aria-label="Jewellery collection links">
              {collections.map((collection) => (
                <LinkButton
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  navigate={navigate}
                  isActive={currentPath === `/collections/${collection.id}`}
                >
                  {collection.title}
                </LinkButton>
              ))}
            </div>
          </div>
          <div className="nav-dropdown">
            <LinkButton
              to="/collections/gems"
              navigate={navigate}
              className="dropdown-trigger"
              ariaLabel="Gems collections"
              isActive={currentPath === '/collections/gems' || isGemCollectionActive}
            >
              Gems Collections
            </LinkButton>
            <div className="dropdown-menu" aria-label="Gems collection links">
              {gemCollections.map((collection) => (
                <LinkButton
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  navigate={navigate}
                  isActive={currentPath === `/collections/${collection.id}`}
                >
                  {collection.title}
                </LinkButton>
              ))}
            </div>
          </div>
          <LinkButton to="/gallery" navigate={navigate} isActive={currentPath === '/gallery'}>
            Gallery
          </LinkButton>
          <LinkButton
            to="/contact"
            navigate={navigate}
            className="nav-contact"
            isActive={currentPath === '/contact'}
          >
            Contact Us
          </LinkButton>
        </div>
      </nav>
    </header>
  );
}

export default Header;
