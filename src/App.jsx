import { useEffect, useState } from 'react';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import SiteFooter from './components/SiteFooter';
import { allCollections } from './data/siteData';
import AboutPage from './pages/AboutPage';
import CollectionDetail from './pages/CollectionDetail';
import CollectionsPage from './pages/CollectionsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const staticRoutes = [
  '/',
  '/about',
  '/collections',
  '/collections/jewellery',
  '/collections/gems',
  '/gallery',
  '/contact',
];

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath) => {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCollection = allCollections.find(
    (collection) => path === `/collections/${collection.id}`,
  );

  return (
    <main className="site-shell">
      <Header navigate={navigate} currentPath={path} />

      {path === '/' && <HomePage navigate={navigate} />}
      {path === '/about' && <AboutPage navigate={navigate} />}
      {path === '/collections' && <CollectionsPage navigate={navigate} />}
      {path === '/collections/jewellery' && (
        <CollectionsPage navigate={navigate} type="jewellery" />
      )}
      {path === '/collections/gems' && (
        <CollectionsPage navigate={navigate} type="gems" />
      )}
      {selectedCollection && (
        <CollectionDetail collection={selectedCollection} navigate={navigate} />
      )}
      {path === '/gallery' && <GalleryPage />}
      {path === '/contact' && <ContactPage />}
      {!staticRoutes.includes(path) && !selectedCollection && (
        <NotFoundPage navigate={navigate} />
      )}

      <SiteFooter />

      <LinkButton
        to="/contact"
        navigate={navigate}
        className="floating-contact"
        ariaLabel="Go to contact page"
      >
        Contact
      </LinkButton>
    </main>
  );
}

export default App;
